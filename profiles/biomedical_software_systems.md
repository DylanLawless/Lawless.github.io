---
title: Biomedical software and scientific systems
layout: page_wide
description: Biomedical software, scientific systems, reproducible workflows, structured reports, platforms, and data products profile for Dylan Lawless
permalink: "/profiles/biomedical-software-systems/"
---

<div class="profile-page" markdown="1">

<section class="profile-hero" markdown="1">

<p class="profile-subtitle">
A method has limited value if it cannot be run, inspected, maintained, and reused.
</p>

Scientific software needs to preserve the evidence while making the work operational. My work turns statistical methods, omics workflows, clinical data, and reporting requirements into reproducible tools, structured outputs, and user-facing systems.

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
    <h3>Research code to system</h3>
    <p>
    Scientific code needs structure, documentation, testing discipline, versioning, and outputs that other people can understand and reuse.
    </p>
  </div>

  <div class="profile-card">
    <h3>Data to report</h3>
    <p>
    Complex omics and clinical workflows need structured reports, machine-readable outputs, and clear links between input, processing, and interpretation.
    </p>
  </div>

  <div class="profile-card">
    <h3>Method to product</h3>
    <p>
    Statistical methods become more useful when they are wrapped in usable interfaces, reproducible workflows, and practical decision support.
    </p>
  </div>

  <div class="profile-card">
    <h3>Prototype to infrastructure</h3>
    <p>
    Biomedical software has to operate across data quality, security, governance, user needs, and long-term maintainability.
    </p>
  </div>

</div>

</section>


<section class="profile-section" markdown="1">

## Evidence at a glance

<div class="profile-metrics">
  <div class="profile-metric">
    <strong>20+</strong>
    <span>public scientific software and data products across genomics, evidence, and reporting</span>
  </div>

  <div class="profile-metric">
    <strong>National scale</strong>
    <span>biomedical data supported through reproducible and secure analytical workflows</span>
  </div>

  <div class="profile-metric">
    <strong>>10</strong>
    <span>partners from biotech industry, hospital, and academia</span>
  </div>

  <div class="profile-metric">
    <strong>Software</strong>
    <span>production-oriented scientific software packages and workflows across Linux, MacOS, HPC, cloud, and web systems</span>
  </div>
</div>

</section>

<section class="profile-section" markdown="1">

## Portfolio samples

<div class="video-demo-grid" style="--video-demo-columns: 2; --video-demo-gap: 1.25rem;">
  {% include lazy_video.html
    src="/videos/20250512_qualifying_variants_v1.MP4"
    poster="/videos/qv_thumbnail.jpg"
    alt="Archipelago video preview"
    badge="Video demo"
    duration="0:44"
    caption="Qualifying variant database. The open standard for variant interpretation, with trusted QV sets to enhance clarity and reproducibility in genetics."
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
    <h3>Scientific programming</h3>
    <p>
    R, Python, Bash, C, Rust, package development, command-line tools, Git, reproducible reports, machine-readable outputs, and software releases.
    </p>
  </div>

  <div class="profile-card">
    <h3>Workflow automation</h3>
    <p>
    Linux, Unix, high-performance computing, Docker, Singularity or Apptainer, Nextflow, Snakemake, versioned pipelines, and reproducible analytical frameworks.
    </p>
  </div>

  <div class="profile-card">
    <h3>Biomedical data systems</h3>
    <p>
    SQL, PostgreSQL, EHR-linked workflows, structured metadata, controlled file transfer, encrypted storage, traceability, and data governance.
    </p>
  </div>

  <div class="profile-card">
    <h3>Web and platform delivery</h3>
    <p>
    HTML, CSS, JavaScript, Next.js, React, TypeScript, Supabase, Vercel, APIs, authenticated systems, and user-facing biomedical platforms.
    </p>
  </div>

  <div class="profile-card">
    <h3>Reporting and interpretation</h3>
    <p>
    Structured standalone HTML reports, variant interpretation outputs, visual analytics, QC summaries, clinical research dashboards, and evidence-linked documentation.
    </p>
  </div>

  <div class="profile-card">
    <h3>AI and data workflows</h3>
    <p>
    Machine learning in omics, PyTorch, AI-assisted scientific software, local model deployment, API-based model deployment, and retrieval-augmented scientific workflows.
    </p>
  </div>

</div>

</section>

<section class="profile-section" markdown="1">

## Selected technologies

- [VCFheader](https://switzerlandomics.ch/technologies/vcfheader/): parsing VCF headers and generating structured standalone HTML reports, described in [Lawless (2026)](https://cran.r-project.org/package=vcfheader). [![CRAN version](https://www.r-pkg.org/badges/version/vcfheader)](https://cran.r-project.org/package=vcfheader) [![CRAN downloads](https://cranlogs.r-pkg.org/badges/grand-total/vcfheader)](https://cran.r-project.org/package=vcfheader)

- [Archipelago](https://switzerlandomics.ch/technologies/archipelago/): variant set association visualisation for complex genomic studies, published in [Lawless et al (2026)](https://doi.org/10.1002/gepi.70025). [![CRAN version](https://www.r-pkg.org/badges/version/archipelago)](https://cran.r-project.org/package=archipelago) [![CRAN downloads](https://cranlogs.r-pkg.org/badges/grand-total/archipelago)](https://cran.r-project.org/package=archipelago)

- [QuantBayes](/technologies/quantbayes/): Bayesian posterior intervals for genomic variant evidence sufficiency, preprinted in [Quant Group et al (2025)](https://doi.org/10.64898/2025.12.02.25341503). [![CRAN version](https://www.r-pkg.org/badges/version/quantbayes)](https://cran.r-project.org/package=quantbayes)

- [PanelAppRex AI](https://switzerlandomics.ch/technologies/panelAppRexAi/): harmonised disease-gene panels from structured clinical and genetic queries, preprinted in [Quant Group et al (2025)](https://doi.org/10.1101/2025.03.20.25324319).

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

{% assign selected_dois = "10.1093/bioinformatics/btaf676,10.1002/gepi.70025,10.1101/2025.03.20.25324319,10.1101/2025.03.25.25324607,10.64898/2025.12.02.25341503" | split: "," %}

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
    <h3>Reproducible clinical genomics and multi-omics workflows</h3>
    <p>
    Built R and Python workflows for genome-wide, rare variant, gene-level, and multi-omic analyses in secure Linux and high-performance computing environments.
    </p>
    <p class="profile-experience-proof">
    WGS, RNA-seq, proteomics, metabolomics, EHR-linked data, approximately 1,000 children, more than 100 TB of biomedical data, structured outputs for clinical research review.
    </p>
  </article>

  <article class="profile-experience-card">
    <div class="profile-experience-meta">Selected product development · Switzerland Omics</div>
    <h3>Scientific software, reporting, and data products</h3>
    <p>
    Developed product-facing biomedical data workflows that translate statistical genomics methods into reproducible reporting, probabilistic interpretation, and secure data systems.
    </p>
    <p class="profile-experience-proof">
    R packages, CRAN releases, structured HTML reports, YAML criteria, PostgreSQL, Supabase, Next.js, React, TypeScript, APIs, authenticated scientific software.
    </p>
  </article>

  <article class="profile-experience-card">
    <div class="profile-experience-meta">5 years (2018 to 2023) · EPFL Global Health Institute</div>
    <h3>Analytical workflow development for translational cohorts</h3>
    <p>
    Built reproducible statistical and computational workflows across infectious, inflammatory, genomic, and multi-omic cohort studies.
    </p>
    <p class="profile-experience-proof">
    Cohorts up to 5,000 participants, R, Python, Linux, high-dimensional modelling, rare variant analysis, data visualisation, reports, figures, and collaborative scientific outputs.
    </p>
  </article>

</div>

</section>


<section class="profile-section" markdown="1">

## Working fit

Biomedical software teams need systems that keep the science intact. The useful output is not only an interface or a script. It is a maintained workflow where data, method, report, and user action stay connected. If you want to solve this problem, get in touch.

</section>
