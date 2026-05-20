---
title: Technologies
layout: page_wide
description: technologies
---

- [PanelAppRex AI](https://switzerlandomics.ch/technologies/panelAppRexAi/): harmonised disease-gene panels from structured clinical and genetic queries, preprinted in [Quant Group et al (2025)](https://doi.org/10.1101/2025.03.20.25324319). [![GitHub stars](https://img.shields.io/github/stars/DylanLawless/PanelAppRex?style=social)](https://github.com/DylanLawless/PanelAppRex) [![Dataset DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.15736689.svg)](https://doi.org/10.5281/zenodo.15736689)

- [VCFheader](https://switzerlandomics.ch/technologies/vcfheader/): parsing VCF headers and generating structured standalone HTML reports, described in [Lawless (2026)](https://cran.r-project.org/package=vcfheader). [![CRAN version](https://www.r-pkg.org/badges/version/vcfheader)](https://cran.r-project.org/package=vcfheader) [![CRAN downloads](https://cranlogs.r-pkg.org/badges/grand-total/vcfheader)](https://cran.r-project.org/package=vcfheader)
<!-- [![Zenodo DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.18889119.svg)](https://doi.org/10.5281/zenodo.18889119) -->

- [QuantBayes](/technologies/quantbayes/): standardises how evidence strength is expressed - quantifying genomic variant evidence sufficiency with Bayesian posterior intervals, preprinted in [Quant Group et al (2025)](https://doi.org/10.64898/2025.12.02.25341503). [![CRAN version](https://www.r-pkg.org/badges/version/quantbayes)](https://cran.r-project.org/package=quantbayes) [![CRAN downloads](https://cranlogs.r-pkg.org/badges/grand-total/quantbayes)](https://cran.r-project.org/package=quantbayes) [![Zenodo DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.17919369.svg)](https://doi.org/10.5281/zenodo.17919369)

- [Qualifying variant database](https://switzerlandomics.ch/technologies/qv_database/):
the open standard for variant interpretation. Defining reusable YAML criteria for reproducible genomic variant interpretation, published in [Lawless et al (2026)](https://doi.org/10.1093/bioinformatics/btaf676).

- [Archipelago](https://switzerlandomics.ch/technologies/archipelago/): Manhattan plots are for GWAS. Archipelago plots are for complex variant association studies, published in [Lawless et al (2026)](https://doi.org/10.1002/gepi.70025). [![CRAN version](https://www.r-pkg.org/badges/version/archipelago)](https://cran.r-project.org/package=archipelago) [![CRAN downloads](https://cranlogs.r-pkg.org/badges/grand-total/archipelago)](https://cran.r-project.org/package=archipelago)

- [Evidence ratio](https://switzerlandomics.ch/technologies/evidence_ratio/):
a universal metric for clinical trials and studies by standardising results on a likelihood-based evidence scale, described in [Lawless (2026)](https://cran.r-project.org/package=evidenceratio). [![CRAN version](https://www.r-pkg.org/badges/version/evidenceratio)](https://cran.r-project.org/package=evidenceratio) [![CRAN downloads](https://cranlogs.r-pkg.org/badges/grand-total/evidenceratio)](https://cran.r-project.org/package=evidenceratio)

- [IEI genetics database](https://switzerlandomics.ch/technologies/iei_genetics/): genetic panels and prior probabilities for disease-causing variants in inborn errors of immunity, preprinted in [Lawless et al (2025)](https://doi.org/10.1101/2025.03.25.25324607).

- [Genomic Vault](https://genomicvault.switzerlandomics.ch): providing long-term custody and controlled access for genomics and precision medicine.

<!-- [Quant](/technologies/quant/): probabilistic genomic interpretation using priors, observed evidence and Bayesian inference, preprinted in Quant Group et al (2025) -->


## CRAN downloads (R packges)
<link rel="stylesheet" href="{{ '/cranlogs/cranlogs.css' | relative_url }}">

<section class="cranlogs-page">
  <header class="cranlogs-hero">
    <!-- <p class="cranlogs-kicker">Software adoption</p> -->
    <p class="cranlogs-lead">
      Combined download activity for public R packages only. These packages focus on data reporting, statistical evidence, genetic analysis, and clinical trials methods.  
These metrics <b><em>do not</em></b> include software relseases on other platforms (i.e. macOS, Linux binaries, etc.).
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
