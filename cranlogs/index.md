---
title: CRAN downloads
layout: page_wide
description: CRAN download statistics for public scientific software
permalink: /cranlogs/
---

<link rel="stylesheet" href="{{ '/cranlogs/cranlogs.css' | relative_url }}">

<section class="cranlogs-page">
  <header class="cranlogs-hero">
    <p class="cranlogs-kicker">Software adoption</p>
    <p class="cranlogs-lead">
      Combined download activity for public R packages used reporting, statistical evidence, genetic analysis, and clinical trials methods.
    </p>
  </header>

  <section class="cranlogs-metrics">
    <article class="cranlogs-metric-card">
      <span class="cranlogs-metric-label">Total downloads</span>
      <strong id="cranlogs-total">Loading...</strong>
      <span id="cranlogs-date-range">Since 2026 Q1</span>
    </article>

    <article class="cranlogs-metric-card">
      <span class="cranlogs-metric-label">Packages tracked</span>
      <strong id="cranlogs-packages">4</strong>
      <span>CRAN packages</span>
    </article>

    <article class="cranlogs-metric-card">
      <span class="cranlogs-metric-label">Last updated</span>
      <strong id="cranlogs-updated">Loading...</strong>
      <span>From local JSON snapshot</span>
    </article>
  </section>

  <section class="cranlog-card">
    <div class="cranlog-header">
      <div>
        <h2>CRAN downloads by package</h2>
        <p>Daily downloads</p>
      </div>
      <div class="cranlog-total" id="daily-total">Loading...</div>
    </div>
    <canvas id="daily-chart"></canvas>
  </section>

  <section class="cranlog-card">
    <div class="cranlog-header">
      <div>
        <h2>CRAN downloads by package</h2>
        <p>Monthly downloads</p>
      </div>
      <div class="cranlog-total" id="monthly-total">Loading...</div>
    </div>
    <canvas id="monthly-chart"></canvas>
  </section>

  <section class="cranlog-card">
    <div class="cranlog-header">
      <div>
        <h2>Combined CRAN downloads</h2>
        <p>Monthly totals across all packages</p>
      </div>
      <div class="cranlog-total" id="combined-total">Loading...</div>
    </div>
    <canvas id="combined-chart"></canvas>
  </section>
</section>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="{{ '/cranlogs/cranlogs.js' | relative_url }}"></script>
