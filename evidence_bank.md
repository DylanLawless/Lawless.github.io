---
title: Curriculum vitae and record
layout: page_wide
description: Complete career evidence record
permalink: "/cv/"
robots: noindex
---

{% comment %}
  Private career evidence dump. Not in main nav.
  robots: noindex keeps this out of search engines.

  RENDERING PATTERN (consistent across all sections):
    Line 1: **Name / title** (linked) — description
    Line 2: metadata in muted style — every field labelled: "label: value"
    Line 3: note in small italic text, only when it adds something not in line 2

  SORT LOGIC:
    Published papers: year desc. Accepted: as-is. In progress: as-is.
    Software, datasets, standards, websites: name asc.
    funding: start date desc. Conferences: date desc.
    Awards: year desc. Service: start desc.

  GUARD PATTERN: every site.data.* checked for nil before sort/loop.
{% endcomment %}

{% comment %} Pre-compute publication pools and all other sizes {% endcomment %}
{% if site.data.publications %}
  {% assign _pubs_all    = site.data.publications %}
  {% assign _in_progress = _pubs_all | where_exp: "p", "p.status == 'under_review' or p.status == 'revision' or p.status == 'preprint' or p.status == 'in_progress'" %}
  {% assign _accepted    = _pubs_all | where: "status", "accepted" %}
  {% assign _published   = _pubs_all | where: "status", "published" | sort: "year" | reverse %}
{% else %}
  {% assign _pubs_all    = "" | split: "" %}
  {% assign _in_progress = "" | split: "" %}
  {% assign _accepted    = "" | split: "" %}
  {% assign _published   = "" | split: "" %}
{% endif %}

{% if site.data.software    %}{% assign _sw  = site.data.software    %}{% else %}{% assign _sw  = "" | split: "" %}{% endif %}
{% if site.data.datasets    %}{% assign _ds  = site.data.datasets    %}{% else %}{% assign _ds  = "" | split: "" %}{% endif %}
{% if site.data.standards   %}{% assign _std = site.data.standards   %}{% else %}{% assign _std = "" | split: "" %}{% endif %}
{% if site.data.funding      %}{% assign _gr  = site.data.funding      %}{% else %}{% assign _gr  = "" | split: "" %}{% endif %}
{% if site.data.conferences %}{% assign _co  = site.data.conferences %}{% else %}{% assign _co  = "" | split: "" %}{% endif %}
{% if site.data.awards      %}{% assign _aw  = site.data.awards      %}{% else %}{% assign _aw  = "" | split: "" %}{% endif %}
{% if site.data.service     %}{% assign _sv  = site.data.service     %}{% else %}{% assign _sv  = "" | split: "" %}{% endif %}
{% if site.data.websites    %}{% assign _wb  = site.data.websites    %}{% else %}{% assign _wb  = "" | split: "" %}{% endif %}
{% if site.data.media       %}{% assign _med = site.data.media       %}{% else %}{% assign _med = "" | split: "" %}{% endif %}

This pages lists the public achievement record for Dylan Lawless.

· Articles published: {{ _published.size }} · in press: {{ _accepted.size }} · pre-prints: {{ _in_progress.size }}  
· software: {{ _sw.size }} · datasets: {{ _ds.size }} · standards: {{ _std.size }}  
· funding: {{ _gr.size }} · conferences: {{ _co.size }} · awards: {{ _aw.size }}  
· service: {{ _sv.size }} · websites: {{ _wb.size }} · social media: {{ _med.size }}


{% comment %} Add this line to the pre-compute block in evidence_bank.md {% endcomment %}
{% if site.data.employment %}{% assign _em = site.data.employment %}{% else %}{% assign _em = "" | split: "" %}{% endif %}

{% comment %} Add "employment: {{ _em.size }} ·" at the start of the summary <p class="evidence-meta"> line {% endcomment %}

{% comment %}
==============================================================================
SECTION TO INSERT AT THE TOP OF evidence_bank.md, BEFORE ## Published
==============================================================================
{% endcomment %}

---

## Employment and training ({{ _em.size }})

{% if site.data.employment %}
  {% assign employment = site.data.employment | sort: "start" | reverse %}
  {% for e in employment %}
  <p class="evidence-line">
    {% if e.url and e.url != "" %}<a href="{{ e.url }}">{{ e.institution }}</a>{% else %}{{ e.institution }}{% endif %} — {{ e.title }}<br>
    <span class="evidence-meta">
      type: {{ e.type | replace: "_", " " }}
      {% if e.supervisor and e.supervisor != "" %} · supervisor: {{ e.supervisor }}{% endif %}
      {% if e.location and e.location != "" %} · {{ e.location }}{% endif %}
      · period: {{ e.start }}–{% if e.end and e.end != "" %}{{ e.end }}{% else %}present{% endif %}
      · status: <em>{{ e.status }}</em>
    </span>
    {% if e.note and e.note != "" %}<span class="evidence-note">{{ e.note }}</span>{% endif %}
  </p>
  {% endfor %}
{% else %}
  <p><em>No employment data found.</em></p>
{% endif %}


## Published ({{ _published.size }})

{% if _published.size > 0 %}
  {% for pub in _published %}{% include publication_line.html pub=pub %}{% endfor %}
{% else %}
  <p><em>No published entries.</em></p>
{% endif %}

---

## Accepted ({{ _accepted.size }})

{% if _accepted.size > 0 %}
  {% for pub in _accepted %}{% include publication_line.html pub=pub %}{% endfor %}
{% else %}
  <p><em>No accepted entries.</em></p>
{% endif %}

---

## Preprints and in progress ({{ _in_progress.size }})

{% if _in_progress.size > 0 %}
  {% for pub in _in_progress %}{% include publication_line.html pub=pub %}{% endfor %}
{% else %}
  <p><em>No in-progress entries.</em></p>
{% endif %}

---

## Software and tools ({{ _sw.size }})

{% if site.data.software %}
  {% assign software = site.data.software | sort: "name" %}
  {% for s in software %}
  <p class="evidence-line">
    {% if s.distributions.url and s.distributions.url != "" %}<a href="{{ s.distributions.url }}">{{ s.name }}</a>{% elsif s.distributions.github and s.distributions.github != "" %}<a href="https://github.com/{{ s.distributions.github }}">{{ s.name }}</a>{% else %}{{ s.name }}{% endif %} — {{ s.description }}<br>
    <span class="evidence-meta">
      type: {{ s.type | replace: "_", " " }}
      {% if s.platforms and s.platforms.size > 0 %} · platforms: {{ s.platforms | join: ", " }}{% endif %}
      {% if s.distributions.cran and s.distributions.cran != "" %} · CRAN: <a href="https://cran.r-project.org/package={{ s.distributions.cran }}">{{ s.distributions.cran }}</a>{% endif %}
      {% if s.distributions.zenodo and s.distributions.zenodo != "" %} · Zenodo: <a href="https://doi.org/{{ s.distributions.zenodo }}">{{ s.distributions.zenodo }}</a>{% endif %}
      {% if s.citation_doi and s.citation_doi != "" %} · cite: <a href="https://doi.org/{{ s.citation_doi }}">{{ s.citation_doi }}</a>{% endif %}
      {% if s.grant and s.grant != "" %} · funding: {{ s.grant }}{% endif %}
      · status: <em>{{ s.status }}</em>
    </span>
    {% if s.note and s.note != "" %}<span class="evidence-note">{{ s.note }}</span>{% endif %}
  </p>
  {% endfor %}
{% else %}
  <p><em>No software data found.</em></p>
{% endif %}

---

## Datasets and data depositions ({{ _ds.size }})

{% if site.data.datasets %}
  {% assign datasets = site.data.datasets | sort: "name" %}
  {% for d in datasets %}
  <p class="evidence-line">
    {% if d.url and d.url != "" %}<a href="{{ d.url }}">{{ d.name }}</a>{% else %}{{ d.name }}{% endif %} — {{ d.description }}<br>
    <span class="evidence-meta">
      type: {{ d.type | replace: "_", " " }} · repository: {{ d.repository }}
      {% if d.accession and d.accession != "" %} · accession: <strong>{{ d.accession }}</strong>{% endif %}
      {% if d.doi and d.doi != "" %} · DOI: <a href="https://doi.org/{{ d.doi }}">{{ d.doi }}</a>{% endif %}
      {% if d.linked_publication and d.linked_publication != "" %} · linked publication: {{ d.linked_publication }}{% endif %}
      {% if d.grant and d.grant != "" %} · funding: {{ d.grant }}{% endif %}
      · status: <em>{{ d.status }}</em>
    </span>
    {% if d.note and d.note != "" %}<span class="evidence-note">{{ d.note }}</span>{% endif %}
  </p>
  {% endfor %}
{% else %}
  <p><em>No datasets data found.</em></p>
{% endif %}

---

## Standards ({{ _std.size }})

{% if site.data.standards %}
  {% assign standards = site.data.standards | sort: "name" %}
  {% for s in standards %}
  <p class="evidence-line">
    {% if s.url and s.url != "" %}<a href="{{ s.url }}">{{ s.name }}</a>{% else %}{{ s.name }}{% endif %} — {{ s.description }}<br>
    <span class="evidence-meta">
      type: {{ s.type | replace: "_", " " }} · issuing body: {{ s.issuing_body }}
      {% if s.version and s.version != "" %} · version: {{ s.version }}{% endif %}
      {% if s.date and s.date != "" %} · date: {{ s.date }}{% endif %}
      {% if s.doi and s.doi != "" %} · DOI: <a href="https://doi.org/{{ s.doi }}">{{ s.doi }}</a>{% endif %}
      · status: <em>{{ s.status }}</em>
    </span>
    {% if s.note and s.note != "" %}<span class="evidence-note">{{ s.note }}</span>{% endif %}
  </p>
  {% endfor %}
{% else %}
  <p><em>No standards data found.</em></p>
{% endif %}

---

## Funding and grants ({{ _gr.size }})

{% if site.data.funding %}
  {% assign funding = site.data.funding | sort: "start" | reverse %}
  {% for g in funding %}
  <p class="evidence-line">
    {{ g.title }}<br>
    <span class="evidence-meta">
      funder: {{ g.funder }}{% if g.grant_number and g.grant_number != "" %} ({{ g.grant_number }}){% endif %}
      {% if g.amount and g.amount != "" %} · amount: {{ g.amount }}{% endif %}
      {% if g.start and g.start != "" %} · period: {{ g.start }}{% endif %}{% if g.end and g.end != "" %}–{{ g.end }}{% endif %}
      · PI: {{ g.pi }}
      · my role: <em>{{ g.my_role | replace: "_", " " }}</em>
      · status: <em>{{ g.status }}</em>
    </span>
    {% if g.note and g.note != "" %}<span class="evidence-note">{{ g.note }}</span>{% endif %}
  </p>
  {% endfor %}
{% else %}
  <p><em>No funding data found.</em></p>
{% endif %}

---

## Conferences and presentations ({{ _co.size }})

{% if site.data.conferences %}
  {% assign conferences = site.data.conferences | sort: "date" | reverse %}
  {% for c in conferences %}
  <p class="evidence-line">
    {{ c.title }}<br>
    <span class="evidence-meta">
      event: {% if c.url and c.url != "" %}<a href="{{ c.url }}">{{ c.event }}</a>{% else %}{{ c.event }}{% endif %}
      {% if c.location and c.location != "" %} · location: {{ c.location }}{% endif %}
      {% if c.date and c.date != "" %} · date: {{ c.date }}{% endif %}
      · type: <em>{{ c.type | replace: "_", " " }}</em>
      {% if c.authors and c.authors != "" %} · authors: {{ c.authors }}{% endif %}
    </span>
    {% if c.note and c.note != "" %}<span class="evidence-note">{{ c.note }}</span>{% endif %}
  </p>
  {% endfor %}
{% else %}
  <p><em>No conferences data found.</em></p>
{% endif %}

---

## Awards ({{ _aw.size }})

{% if site.data.awards %}
  {% assign awards = site.data.awards | sort: "year" | reverse %}
  {% for a in awards %}
  <p class="evidence-line">
    {{ a.title }}{% if a.url and a.url != "" %} — <a href="{{ a.url }}">{{ a.body }}</a>{% else %} — {{ a.body }}{% endif %}<br>
    <span class="evidence-meta">
      year: {{ a.year }}
      {% if a.linked_entry and a.linked_entry != "" %} · linked entry: {{ a.linked_entry }}{% endif %}
      · status: <em>{{ a.status }}</em>
    </span>
    {% if a.note and a.note != "" %}<span class="evidence-note">{{ a.note }}</span>{% endif %}
  </p>
  {% endfor %}
{% else %}
  <p><em>No awards data found.</em></p>
{% endif %}

---

## Scientific service and leadership ({{ _sv.size }})

{% if site.data.service %}
  {% assign service = site.data.service | sort: "start" | reverse %}
  {% for s in service %}
  <p class="evidence-line">
    {% if s.url and s.url != "" %}<a href="{{ s.url }}">{{ s.organisation }}</a>{% else %}{{ s.organisation }}{% endif %} — {{ s.description }}<br>
    <span class="evidence-meta">
      role: <em>{{ s.my_role | replace: "_", " " }}</em>
      {% if s.start and s.start != "" %} · period: {{ s.start }}{% endif %}{% if s.end and s.end != "" %}–{{ s.end }}{% else %}{% if s.start and s.start != "" %} – present{% endif %}{% endif %}
      · status: <em>{{ s.status }}</em>
    </span>
    {% if s.note and s.note != "" %}<span class="evidence-note">{{ s.note }}</span>{% endif %}
  </p>
  {% endfor %}
{% else %}
  <p><em>No service data found.</em></p>
{% endif %}

---

## Websites and platforms ({{ _wb.size }})

{% if site.data.websites %}
  {% assign websites = site.data.websites | sort: "name" %}
  {% for w in websites %}
  <p class="evidence-line">
    {% if w.url and w.url != "" %}<a href="{{ w.url }}">{{ w.name }}</a>{% else %}{{ w.name }}{% endif %} — {{ w.description }}<br>
    <span class="evidence-meta">
      role: <em>{{ w.my_role | replace: "_", " " }}</em>
      {% if w.launch_year and w.launch_year != "" %} · launched: {{ w.launch_year }}{% endif %}
      · status: <em>{{ w.status }}</em>
    </span>
    {% if w.note and w.note != "" %}<span class="evidence-note">{{ w.note }}</span>{% endif %}
  </p>
  {% endfor %}
{% else %}
  <p><em>No websites data found.</em></p>
{% endif %}

---

## Media and videos ({{ _med.size }})

{% if site.data.media %}
  {% assign media = site.data.media | sort: "date" | reverse %}
  {% for m in media %}
  <p class="evidence-line">
    {% if m.url and m.url != "" %}<a href="{{ m.url }}">{{ m.title }}</a>{% else %}{{ m.title }}{% endif %} — {{ m.description }}<br>
    <span class="evidence-meta">
      type: {{ m.type | replace: "_", " " }} · host: {{ m.host }} · year: {{ m.year }}
      {% if m.linked_entry and m.linked_entry != "" %} · linked: {{ m.linked_entry }}{% endif %}
      · status: <em>{{ m.status }}</em>
    </span>
    {% if m.note and m.note != "" %}<span class="evidence-note">{{ m.note }}</span>{% endif %}
  </p>
  {% endfor %}
{% else %}
  <p><em>No media data found.</em></p>
{% endif %}

<script async src="https://badge.dimensions.ai/badge.js" charset="utf-8"></script>
