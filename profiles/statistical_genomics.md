---
title: Statistical genomics and epidemiology
layout: page_wide
description: Statistical genomics, epidemiology, cohort analysis, GWAS, rare variant testing, and multi-omics profile for Dylan Lawless
permalink: "/profiles/statistical-genomics/"
---

<div class="profile-page" markdown="1">

<section class="profile-hero" markdown="1">

<p class="profile-subtitle">
Large biological datasets do not become evidence by scale alone.
</p>

Statistical genomics depends on the chain between study design, cohort structure, population genetics, molecular data, disease biology, uncertainty, and reproducible analysis. My work builds that chain across WGS statistics, rare variant analysis, multi-omics, clinical cohorts, and population-scale genomic data.

<div class="profile-actions">
  <a href="{{ '/contact' | relative_url }}" class="button-link">
    Contact
  </a>

  <!-- <a href="{{ '/assets/Dylan_Lawless_CV.pdf' | relative_url }}" class="button-link secondary"> -->
  <!--   CV PDF -->
  <!-- </a> -->

  <a href="{{ '/profile/' | relative_url }}" class="button-link secondary">
    Back to profiles
  </a>
</div>

</section>

<section class="profile-section" markdown="1">

## What this work resolves

<div class="profile-grid">

  <div class="profile-card">
    <h3>Cohort evidence</h3>
    <p>
    Genetic association studies need more than variant filtering. Cohort structure, ancestry, phenotype definition, missingness, and test design determine whether the result can be trusted.
    </p>
  </div>

  <div class="profile-card">
    <h3>Rare variant signal</h3>
    <p>
    Rare variant analyses need pathway, gene, variant, and burden logic that remains interpretable when events are sparse and uncertainty is large.
    </p>
  </div>

  <div class="profile-card">
    <h3>Multi-omic interpretation</h3>
    <p>
    DNA, RNA-seq, proteomics, metabolomics, and clinical data need a statistical layer that connects molecular signal to disease biology and patient stratification.
    </p>
  </div>

  <div class="profile-card">
    <h3>Reusable inference</h3>
    <p>
    Population evidence becomes more valuable when analyses are reproducible, versioned, visualised clearly, and reusable beyond the first manuscript or internal report.
    </p>
  </div>

</div>

</section>


<section class="profile-section" markdown="1">

## Evidence at a glance

<div class="profile-metrics">
  <div class="profile-metric">
    <strong>>100,000</strong>
    <span>whole genomes analysed in population-scale and biobank-scale settings</span>
  </div>

  <div class="profile-metric">
    <strong>5,000</strong>
    <span>participants in translational infectious, inflammatory, and multi-omic cohort studies</span>
  </div>

  <div class="profile-metric">
    <strong>>1,000</strong>
    <span>children in clinical genomic, multi-omic, and EHR-linked analytical workflows</span>
  </div>

  <div class="profile-metric">
    <strong>>100 TB</strong>
    <span>biomedical data handled through secure, reproducible analytical infrastructure</span>
  </div>

</div>

</section>

<section class="profile-section" markdown="1">

## Portfolio samples

<div class="video-demo-grid" style="--video-demo-columns: 2; --video-demo-gap: 1.25rem;">
  {% include lazy_video.html
    src="/videos/20260207_Archipelago_promo.mp4"
    poster="/videos/Archipelago_thumbnail.png"
    alt="Archipelago video preview"
    badge="Video demo"
    duration="0:22"
    caption="Archipelago, variant set association visualisation for complex genomic studies."
  %}

  {% include lazy_video.html
    src="/videos/20250627_quant_scan_v1.MOV"
    poster="/videos/quant_icons_thumbnail.jpg"
    alt="Second demo video preview"
    badge="Video demo"
    duration="1:23"
    caption="Quant, The missing element in genomic interpretation. Database, scan, and state-of-the-art algorithm.."
  %}
</div>

</section>

<section class="profile-section" markdown="1">

## Methods, standards, and systems

<div class="profile-grid">

  <div class="profile-card">
    <h3>Statistical genetics</h3>
    <p>
    GWAS, rare variant association testing, gene-level analysis, pathway analysis, burden tests, population stratification, ancestry inference, and cohort QC.
    </p>
  </div>

  <div class="profile-card">
    <h3>Biostatistics and inference</h3>
    <p>
    Regression, multivariate analysis, Bayesian inference, uncertainty quantification, Monte Carlo methods, resampling, high-dimensional modelling, and interpretable visualisation.
    </p>
  </div>

  <div class="profile-card">
    <h3>Omics integration</h3>
    <p>
    Whole-genome sequencing, RNA-seq, proteomics, metabolomics, phenotype-linked molecular data, EHR-linked workflows, and patient-level molecular interpretation.
    </p>
  </div>

  <div class="profile-card">
    <h3>Computational delivery</h3>
    <p>
    R, Python, Bash, Git, Linux, Unix, high-performance computing, AWS, Azure, Docker, Singularity or Apptainer, Nextflow, Snakemake, and reproducible analytical frameworks.
    </p>
  </div>

  <div class="profile-card">
    <h3>Evidence outputs</h3>
    <p>
    Manhattan plots, regional association plots, variant set visualisation, structured reports, machine-readable outputs, cohort summaries, and decision-ready statistical figures.
    </p>
  </div>

  <div class="profile-card">
    <h3>Scientific communication</h3>
    <p>
    Lead-author manuscripts, analytical reports, cross-functional presentations, methods documentation, multidisciplinary collaboration, and supervision in genomics and bioinformatics.
    </p>
  </div>

</div>

</section>

<section class="profile-section" markdown="1">

## Selected technologies

- [Archipelago](https://switzerlandomics.ch/technologies/archipelago/): variant set association visualisation for complex genomic studies, published in [Lawless et al (2026)](https://doi.org/10.1002/gepi.70025). [![CRAN version](https://www.r-pkg.org/badges/version/archipelago)](https://cran.r-project.org/package=archipelago) [![CRAN downloads](https://cranlogs.r-pkg.org/badges/grand-total/archipelago)](https://cran.r-project.org/package=archipelago)

- [QuantBayes](/technologies/quantbayes/): standardises how evidence strength is expressed - quantifying genomic variant evidence sufficiency with Bayesian posterior intervals, preprinted in [Quant Group et al (2025)](https://doi.org/10.64898/2025.12.02.25341503) [![CRAN version](https://www.r-pkg.org/badges/version/quantbayes)](https://cran.r-project.org/package=quantbayes). [![CRAN downloads](https://cranlogs.r-pkg.org/badges/grand-total/quantbayes)](https://cran.r-project.org/package=quantbayes)

- [Qualifying variant database](https://switzerlandomics.ch/technologies/qv_database/):
reusable YAML criteria for reproducible genomic variant interpretation, published in [Lawless et al (2026)](https://doi.org/10.1093/bioinformatics/btaf676).


<div class="profile-link-row">
  <a href="{{ '/technologies/' | relative_url }}" class="button-link secondary">
    View all technologies
  </a>
</div>

</section>

<section class="profile-section" markdown="1">

## Selected publications

<p>
<strong>ORCID record</strong>:
<img src="{{ '/images/ORCID-iD_icon_vector.svg' | relative_url }}" alt="ORCID iD" style="height:1.5em; vertical-align:middle; margin-right:0.25em;">
<a href="https://orcid.org/0000-0001-8496-3725" aria-label="View ORCID record 0000-0001-8496-3725">
0000-0001-8496-3725
</a>
</p>

{% assign pubs = site.data.publications | reverse %}

{% assign selected_dois = "10.1101/2025.06.12.25329504,10.1002/gepi.70025,10.1007/s10875-019-00670-z,10.1093/infdis/jiac442,10.1016/j.jaci.2018.02.007" | split: "," %}

{% for doi in selected_dois %}
  {% assign selected_pub = pubs | where: "doi", doi | first %}
  {% if selected_pub %}
<p class="publication-line">
  {% if selected_pub.url %}<a href="{{ selected_pub.url }}">{{ selected_pub.title }}</a>{% else %}{{ selected_pub.title }}{% endif %}.
  <strong><em>{{ selected_pub.journal }}</em></strong>{% if selected_pub.volume %}, {{ selected_pub.volume }}{% endif %}{% if selected_pub.number %}({{ selected_pub.number }}){% endif %}{% if selected_pub.pages %}, {{ selected_pub.pages }}{% endif %}{% if selected_pub.year %}, {{ selected_pub.year }}{% endif %}.
</p>
  {% endif %}
{% endfor %}

<div class="profile-publications-action">
  <a href="{{ '/publications/' | relative_url }}" class="button-link secondary">
    View all publications
  </a>
</div>

</section>

<section class="profile-section" markdown="1">

## Relevant experience

<div class="profile-experience-list">

  <article class="profile-experience-card">
    <div class="profile-experience-meta">3 years (2023 to present) · Universitäts-Kinderspital Zürich</div>
    <h3>Genome-wide and multi-omic analysis in paediatric disease</h3>
    <p>
    Lead computational and translational analyses within the Swiss Pediatric Sepsis Study and SwissPedHealth National Data Stream, funded at approximately CHF 1M and CHF 5M across three hospitals.
    </p>
    <p class="profile-experience-proof">
    WGS, RNA-seq, proteomics, metabolomics, clinical phenotypes, EHR-linked data, approximately 1,000 children, more than 100 TB of biomedical data, rare variant and gene-level analysis.
    </p>
  </article>

  <article class="profile-experience-card">
    <div class="profile-experience-meta">5 years (2018 to 2023) · EPFL Global Health Institute</div>
    <h3>Statistical genetics across translational cohorts</h3>
    <p>
    Developed statistical genetics, computational biology, and multi-omic workflows across sepsis, tuberculosis, asthma, infectious disease, and chronic inflammatory disease studies.
    </p>
    <p class="profile-experience-proof">
    Cohorts up to 5,000 participants, more than CHF 3M in competitive research support, population statistical genetics, rare variant testing, Bayesian reasoning, reproducible computational workflows.
    </p>
  </article>

  <article class="profile-experience-card">
    <div class="profile-experience-meta">3 years (2015 to 2018) · University of Leeds, School of Medicine</div>
    <h3>Human genetics in severe immune disease</h3>
    <p>
    Led genomic discovery and clinical interpretation in rare immune disease within a translational hospital setting.
    </p>
    <p class="profile-experience-proof">
    Approximately 500 severe clinical cases, genome sequencing, molecular biology, immune-mediated disease, treatment-related findings, and disease mechanism interpretation.
    </p>
  </article>

</div>

</section>

<section class="profile-section" markdown="1">

## Working fit

Statistical genomics teams need analyses that survive replication, review, and reuse. The useful output is not only a significant result. It is a defensible chain from cohort definition to interpretable evidence. If you want to solve this problem, get in touch.

</section>

</div>
