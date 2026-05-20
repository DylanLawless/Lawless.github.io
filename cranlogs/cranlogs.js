const packages = ["vcfheader", "quantbayes", "archipelago", "evidenceratio"];

const colours = {
  vcfheader: "#e5261f",
  quantbayes: "#a01b16",
  archipelago: "#2f2f41",
  evidenceratio: "#f88379"
};

const brand = {
  primary: "#e5261f",
  black: "#2f2f41",
  steel: "#5c5a5a",
  whiteOffset: "#f3f2f2"
};

const fmt = new Intl.NumberFormat("en-GB");

Chart.defaults.font.family =
  'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

Chart.defaults.font.size = 14;
Chart.defaults.font.weight = "400";
Chart.defaults.color = "#5c5a5a";

function uniqueSorted(values) {
  return [...new Set(values)].sort();
}

function shortDateLabel(dateString) {
  const date = new Date(`${dateString}T00:00:00`);

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short"
  });
}

function monthKey(dateString) {
  return dateString.slice(0, 7);
}

function monthLabel(monthString) {
  const date = new Date(`${monthString}-01T00:00:00`);

  return date.toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric"
  });
}

function baseOptions(yTitle) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false
    },
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          boxHeight: 8
        }
      },
      tooltip: {
        callbacks: {
          label: context => `${context.dataset.label}: ${fmt.format(context.parsed.y)}`
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
          color: brand.steel
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: yTitle,
          color: brand.black
        },
        ticks: {
          callback: value => fmt.format(value),
          color: brand.steel
        },
        grid: {
          color: brand.whiteOffset
        }
      }
    }
  };
}

function makeLineDatasets(data, labels, keyField, pointRadius = 2) {
  return packages.map(pkg => {
    const lookup = new Map(
      data
        .filter(d => d.package === pkg)
        .map(d => [d[keyField], d.count])
    );

    return {
      label: pkg,
      data: labels.map(label => lookup.get(label) || 0),
      borderColor: colours[pkg],
      backgroundColor: colours[pkg],
      borderWidth: keyField === "date" ? 1.5 : 2,
      pointRadius,
      pointHoverRadius: pointRadius + 2,
      tension: 0.25
    };
  });
}

function buildDailyChart(data) {
  const labels = uniqueSorted(data.map(d => d.date));

  return new Chart(document.getElementById("daily-chart"), {
    type: "line",
    data: {
      labels: labels.map(shortDateLabel),
      datasets: makeLineDatasets(data, labels, "date", 2)
    },
    options: baseOptions("Downloads")
  });
}

function buildMonthlyByPackageChart(data) {
  const monthly = [];

  packages.forEach(pkg => {
    const byMonth = new Map();

    data
      .filter(d => d.package === pkg)
      .forEach(d => {
        const month = monthKey(d.date);
        byMonth.set(month, (byMonth.get(month) || 0) + d.count);
      });

    byMonth.forEach((count, month) => {
      monthly.push({
        month,
        count,
        package: pkg
      });
    });
  });

  const labels = uniqueSorted(monthly.map(d => d.month));

  new Chart(document.getElementById("monthly-chart"), {
    type: "line",
    data: {
      labels: labels.map(monthLabel),
      datasets: makeLineDatasets(monthly, labels, "month", 3)
    },
    options: baseOptions("Downloads")
  });

  return monthly;
}

function buildCombinedMonthlyChart(monthly) {
  const labels = uniqueSorted(monthly.map(d => d.month));

  const totals = labels.map(month => {
    return monthly
      .filter(d => d.month === month)
      .reduce((sum, d) => sum + d.count, 0);
  });

  const options = baseOptions("Downloads");
  options.plugins.legend.display = false;
  options.plugins.tooltip.callbacks.label = context => {
    return `Downloads: ${fmt.format(context.parsed.y)}`;
  };

  return new Chart(document.getElementById("combined-chart"), {
    type: "bar",
    data: {
      labels: labels.map(monthLabel),
      datasets: [
        {
          label: "Combined downloads",
          data: totals,
          backgroundColor: brand.primary,
          borderRadius: 4
        }
      ]
    },
    options
  });
}

function setText(id, text) {
  const el = document.getElementById(id);

  if (el) {
    el.textContent = text;
  }
}

function normaliseRows(rows) {
  return rows
    .map(row => ({
      date: String(row.date),
      count: Number(row.count || 0),
      package: String(row.package)
    }))
    .filter(row => packages.includes(row.package))
    .filter(row => /^\d{4}-\d{2}-\d{2}$/.test(row.date))
    .filter(row => Number.isFinite(row.count));
}

async function loadData() {
  const script = document.currentScript || document.querySelector('script[src$="cranlogs.js"]');
  const scriptUrl = new URL(script.src);
  const jsonUrl = new URL("downloads.json", scriptUrl);

  const response = await fetch(jsonUrl, {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Could not load downloads.json: ${response.status}`);
  }

  return normaliseRows(await response.json());
}

async function init() {
  const data = await loadData();

  const total = data.reduce((sum, d) => sum + d.count, 0);
  const dates = uniqueSorted(data.map(d => d.date));
  const minDate = dates[0];
  const maxDate = dates[dates.length - 1];

  const totalText = `${fmt.format(total)} downloads`;
  const rangeText = `${shortDateLabel(minDate)} to ${shortDateLabel(maxDate)}`;

  setText("cranlogs-total", fmt.format(total));
  setText("cranlogs-date-range", rangeText);
  setText("cranlogs-packages", String(uniqueSorted(data.map(d => d.package)).length));
  setText("cranlogs-updated", shortDateLabel(maxDate));

  setText("daily-total", totalText);
  setText("monthly-total", totalText);
  setText("combined-total", totalText);

  buildDailyChart(data);
  const monthly = buildMonthlyByPackageChart(data);
  buildCombinedMonthlyChart(monthly);
}

init().catch(error => {
  console.error(error);

  [
    "cranlogs-total",
    "cranlogs-updated",
    "daily-total",
    "monthly-total",
    "combined-total"
  ].forEach(id => setText(id, "Could not load CRAN data"));
});
