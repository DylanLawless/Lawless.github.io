---
title: AI and agentic scientific systems
layout: page_wide
description: Neural network development, foundation-model fine-tuning, agentic workflows, retrieval, verification, clinical genetics interpretation, and biomedical AI systems profile for Dylan Lawless
permalink: "/profiles/ai-agentic-scientific-systems/"
---

<div class="profile-page" markdown="1">

<section class="profile-hero" markdown="1">

<p class="profile-subtitle">
AI systems become useful when they produce evidence people can inspect, test, and trust.
</p>

My work spans AI model development and scientific applications, from implementing neural networks and language models from first principles to fine-tuning foundation models and developing biologically informed representations. I apply these methods to genomic interpretation, scientific evidence extraction, and secure clinical systems, with an emphasis on statistical foundations, reproducibility, and validation.

<div class="profile-actions">
  <a href="{{ '/contact' | relative_url }}" class="button-link">
    Contact
  </a>

  <a href="{{ '/profile/' | relative_url }}" class="button-link secondary">
    Back to profiles
  </a>
</div>

</section>

<section class="profile-section" markdown="1">

## What this work resolves

<div class="profile-grid">

  <div class="profile-card">
    <h3>Evidence-aware agents</h3>
    <p>
    Scientific agents need structured sources, defined tasks, reviewable outputs, and clear links between input, reasoning step, evidence, and result.
    </p>
  </div>

  <div class="profile-card">
    <h3>Clinical interpretation support</h3>
    <p>
    AI-assisted clinical genetics requires secure deployment, controlled data flow, reproducible report generation, and human review by expert boards.
    </p>
  </div>

  <div class="profile-card">
    <h3>Literature to structured data</h3>
    <p>
    Systematic review, freedom-to-operate, and patent workflows need traceable extraction from article, claim, field, code, test, and human validation.
    </p>
  </div>

  <div class="profile-card">
    <h3>Customer-facing AI products</h3>
    <p>
    Agentic systems need credentialed access, clear user tasks, structured outputs, auditability, and product design that makes AI usable in real workflows.
    </p>
  </div>

</div>

</section>

<section class="profile-section" markdown="1">

## Evidence at a glance

<div class="profile-metrics">
  <div class="profile-metric">
    <strong>6.6M to 135K</strong>
    <span>features compressed from gene-level mechanistic knowledge into structured disease-aware summaries for PanelAppRex AI</span>
  </div>

  <div class="profile-metric">
    <strong>5,000+</strong>
    <span>full-text research articles processed through AI-assisted systematic review and evidence extraction workflows</span>
  </div>

  <div class="profile-metric">
    <strong>Secure HPC</strong>
    <span>open-weight LLM deployment for clinical genetics support on secure HPC infrastructure</span>
  </div>

  <div class="profile-metric">
    <strong>Customer-facing</strong>
    <span>credentialed agent platform for clinical information collation and ICD-10 to candidate diagnosis workflows</span>
  </div>
</div>

</section>

<section class="profile-section" markdown="1">

## Portfolio samples

<div class="video-demo-grid" style="--video-demo-columns: 2; --video-demo-gap: 1.25rem;">

  {% include lazy_video.html
    src="/videos/20260227_panelapprex_promo_2_crop.mov"
    poster="/videos/panelapprex_thumbnail.png"
    alt="Second demo video preview"
    badge="Video demo"
    duration="0:23"
    caption="PanelAppRex AI. Harmonised disease-gene panels from structured clinical and genetic queries. For humans and for machines."
  %}
</div>

</section>

<section class="profile-section" markdown="1">

## Methods, standards, and systems

<div class="profile-grid">

  <div class="profile-card">
    <h3>Neural network development</h3>
    <p>
    RNNs, causal Transformers, GPT-2-style decoders, self-attention, forward and backward passes, manual gradients, and optimisation in base R.
    </p>
  </div>

  <div class="profile-card">
    <h3>Foundation-model adaptation</h3>
    <p>
    Hugging Face Transformers, PyTorch, DistilBERT, fine-tuning, task-specific classification, training evaluation, and model validation.
    </p>
  </div>

  <div class="profile-card">
    <h3>Agentic workflows</h3>
    <p>
    Retrieval, task planning, evidence review, structured extraction, code generation, output comparison, failure inspection, and iterative refinement. Experienced with OpenAI ChatGPT, Google Gemini, and Anthropic Claude.
    </p>
  </div>

  <div class="profile-card">
    <h3>Retrieval and embeddings</h3>
    <p>
    Retrieval-augmented workflows, embeddings, literature search, mechanistic text summarisation, document chunking, metadata mapping, and source-linked outputs.
    </p>
  </div>

  <div class="profile-card">
    <h3>Clinical AI systems</h3>
    <p>
    Variant interpretation support, report drafting, ICD-10 conversion, candidate diagnosis generation, Molecular Board review, and clinical information structuring.
    </p>
  </div>

  <div class="profile-card">
    <h3>Secure deployment</h3>
    <p>
    Open-weight models, Llama, DeepSeek R1, cloud infrastructure, secure high-performance computing, controlled access, and review-ready outputs.
    </p>
  </div>

  <div class="profile-card">
    <h3>Evidence verification</h3>
    <p>
    Claim extraction, source tracking, structured reports, manual sampling, validation, audit trails, reproducible code, and reviewable uncertainty.
    </p>
  </div>

  <div class="profile-card">
    <h3>Product delivery</h3>
    <p>
    Customer-facing applications, credentialed users, OpenAI APIs, interface design, workflow design, documentation, stakeholder feedback, and operational rollout.
    </p>
  </div>

</div>

</section>

<section class="profile-section" markdown="1">

## Relevant AI systems

<div class="profile-experience-list">

  <article class="profile-experience-card">
    <div class="profile-experience-meta">Language models from first principles · R · open source</div>
    <h3>Reproducing neural language models from scratch</h3>
    <p>
    Rebuilt a recurrent neural network, a causal Transformer, and a GPT-2-style decoder in base R. Implemented attention, forward and backward passes, loss functions, and optimisation directly, without pretrained weights, deep-learning frameworks, or automatic differentiation.
    </p>
    <p class="profile-experience-proof">
    Three reproducible CPU-trained implementations with source code and validation; the GPT-2-style model has 369,504 trainable parameters. <a href="https://switzerlandomics.ch/blog/2026-09-19-building-a-rnn-language-model-from-scratch-in-r/">RNN</a> · <a href="https://switzerlandomics.ch/blog/2026-09-21-transformer-in-r/">Transformer</a> · <a href="https://switzerlandomics.ch/blog/2026-09-25-building-gpt2-in-r/">GPT-2</a> · <a href="https://github.com/switzerlandomics/src-min_gpt2_r">Source code</a>
    </p>
  </article>

  <article class="profile-experience-card">
    <div class="profile-experience-meta">Foundation-model fine-tuning · Hugging Face · PyTorch</div>
    <h3>Fine-tuning pretrained language models</h3>
    <p>
    Fine-tuned DistilBERT using Hugging Face Transformers and PyTorch for four-class news classification. Implemented task-specific training, validation, held-out evaluation, and probabilistic inference.
    </p>
    <p class="profile-experience-proof">
    Held-out accuracy of 88.8% and macro F1 of 0.886 after one CPU training epoch using 1,000 labelled training articles. <a href="https://switzerlandomics.ch/blog/2026-08-15-fine-tuning/">Methods and results</a>
    </p>
  </article>

<article class="profile-experience-card">
  <div class="profile-experience-meta">PanelAppRex AI · disease-gene evidence</div>
  <h3>AI-assisted disease panel-level interpretation</h3>
  <p>
    Built an AI-assisted information layer over structured disease-gene panel evidence, combining UniProtKB mechanistic text with panel metadata, inheritance, disease group, and reported phenotypes.
  </p>
  <p class="profile-experience-proof">
    6.6 million features compressed 5x into disease-aware summaries, integrated into a user-facing application for interpretation and review.
    <a href="https://doi.org/10.1093/bioadv/vbag115">Quant Group et al., 2026</a>.
  </p>
</article>

  <article class="profile-experience-card">
    <div class="profile-experience-meta">Universitäts-Kinderspital Zürich · secure clinical genetics</div>
    <h3>Secure AI-assisted variant interpretation</h3>
    <p>
    Built a secure AI-assisted clinical genetics system on cloud high-performance computing infrastructure using open-weight models including Llama and DeepSeek R1.
    </p>
    <p class="profile-experience-proof">
    High-throughput variant interpretation and report generation for human review by the Molecular Board, including geneticists, doctors, and researchers.
    </p>
  </article>

  <article class="profile-experience-card">
    <div class="profile-experience-meta">Customer-facing platform · credentialed agent workflows</div>
    <h3>Clinical information collation and diagnostic candidate generation</h3>
    <p>
    Developed a credentialed platform using OpenAI APIs and agent workflows to collate clinical information and convert ICD-10 codes into candidate diagnostic hypotheses.
    </p>
    <p class="profile-experience-proof">
    Customer-facing interface, controlled access, structured clinical inputs, candidate diagnosis generation, and reviewable outputs.
    </p>
  </article>

  <article class="profile-experience-card">
    <div class="profile-experience-meta">Systematic review and freedom-to-operate · verifiable evidence</div>
    <h3>AI-assisted evidence extraction and review</h3>
    <p>
    Built AI-assisted workflows for systematic review, structured extraction, algorithm development, freedom-to-operate, patent review, and trademark analysis.
    </p>
    <p class="profile-experience-proof">
    More than 5,000 full-text research articles processed into structured datasets; evidence preparation for Switzerland Omics trademark registration with the Swiss Federal Institute of Intellectual Property.
    </p>
  </article>

</div>

</section>

<section class="profile-section" markdown="1">

## Selected publications and references

[PanelAppRex aggregates disease gene panels and facilitates sophisticated search](https://doi.org/10.1093/bioadv/vbag115). Quant Group, Simon Boutry, Ali Saadat, Sinisa Savic, Luregn J. Schlapbach, Jacques Fellay, Dylan Lawless. *Bioinformatics Advances* (2026). DOI: [10.1093/bioadv/vbag115](https://doi.org/10.1093/bioadv/vbag115).  
[Repository](https://github.com/DylanLawless/PanelAppRex) | [medRxiv](https://doi.org/10.1101/2025.03.20.25324319) | [PDF](https://www.medrxiv.org/content/10.1101/2025.03.20.25324319v3.full.pdf) | [Video](https://vimeo.com/1193244150) | [Application](https://switzerlandomics.ch/technologies/panelAppRexAi/) | [About](https://switzerlandomics.ch/pages/panelAppRexAi_about/) | [Dataset](https://doi.org/10.5281/zenodo.15736688)

[Reply to Dages et al: You AIn’t using it right: artificial intelligence progress in allergy](https://doi.org/10.1016/j.jaci.2023.09.023). Dylan Lawless. *Journal of Allergy and Clinical Immunology* 153(1), 355 to 356, 2024. DOI: [10.1016/j.jaci.2023.09.023](https://doi.org/10.1016/j.jaci.2023.09.023).

[Building a GPT-2-style language model from scratch in R](https://switzerlandomics.ch/blog/2026-09-25-building-gpt2-in-r/). Dylan Lawless. *Switzerland Omics* (2026).


</section>

<!-- <section class="profile-section" markdown="1"> -->

<!-- ## Working fit -->

<!-- AI systems for science and medicine need traceable inputs, reviewable outputs, secure deployment, and evidence that can be tested. My work focuses on agentic systems that help teams move from documents, data, code, and clinical information into structured outputs that people can inspect, validate, and use. -->

<!-- </section> -->

</div>

