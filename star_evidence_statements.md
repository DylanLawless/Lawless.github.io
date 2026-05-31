---
title: Career achievements
layout: page_wide
description: Selected career achievements by competency area
permalink: "/star/"
robots: noindex
---

This pages lists some achievements for Dylan Lawless across projects and collaborations under the STAR framework.
For a curated collection of topics see the [profile pages](/profile/).

{% comment %}
  Career achievement summary. Reads from _data/evidence_statements.yml only.
  robots: noindex. Private strategy in _private/star_strategy.md.
{% endcomment %}

{% assign statements = site.data.evidence_statements %}
{% assign sci   = statements | where_exp: "s", "s.competency contains 'scientific_excellence'" | sort: "weight" | reverse %}
{% assign dig   = statements | where_exp: "s", "s.competency contains 'digital_innovation'"   | sort: "weight" | reverse %}
{% assign stake = statements | where_exp: "s", "s.competency contains 'stakeholder_influence'" | sort: "weight" | reverse %}
{% assign del   = statements | where_exp: "s", "s.competency contains 'delivery'"             | sort: "weight" | reverse %}
{% assign lead  = statements | where_exp: "s", "s.competency contains 'leadership'"           | sort: "weight" | reverse %}

<nav class="page-toc">
  {% if sci.size > 0 %}<a href="#scientific-excellence">Scientific excellence ({{ sci.size }})</a>{% endif %}
  {% if dig.size > 0 %}<a href="#digital-innovation">Digital innovation ({{ dig.size }})</a>{% endif %}
  {% if stake.size > 0 %}<a href="#stakeholder-influence">Stakeholder influence ({{ stake.size }})</a>{% endif %}
  {% if del.size > 0 %}<a href="#delivery">Delivery ({{ del.size }})</a>{% endif %}
  {% if lead.size > 0 %}<a href="#leadership">Leadership ({{ lead.size }})</a>{% endif %}
</nav>

---


<h2 id="scientific-excellence">Scientific excellence ({{ sci.size }})</h2>

{% for s in sci %}
<div class="evidence-line">
  <p><strong>{{ s.label }}</strong><br>
  <span class="evidence-meta">{{ s.metric }}</span></p>
  <p class="evidence-note">{{ s.star }}</p>
</div>
{% endfor %}

---

<h2 id="digital-innovation">Digital innovation ({{ dig.size }})</h2>

{% for s in dig %}
<div class="evidence-line">
  <p><strong>{{ s.label }}</strong><br>
  <span class="evidence-meta">{{ s.metric }}</span></p>
  <p class="evidence-note">{{ s.star }}</p>
</div>
{% endfor %}

---

<h2 id="stakeholder-influence">Stakeholder influence ({{ stake.size }})</h2>

{% for s in stake %}
<div class="evidence-line">
  <p><strong>{{ s.label }}</strong><br>
  <span class="evidence-meta">{{ s.metric }}</span></p>
  <p class="evidence-note">{{ s.star }}</p>
</div>
{% endfor %}

---

<h2 id="delivery">Delivery ({{ del.size }})</h2>

{% for s in del %}
<div class="evidence-line">
  <p><strong>{{ s.label }}</strong><br>
  <span class="evidence-meta">{{ s.metric }}</span></p>
  <p class="evidence-note">{{ s.star }}</p>
</div>
{% endfor %}

---

<h2 id="leadership">Leadership ({{ lead.size }})</h2>

{% for s in lead %}
<div class="evidence-line">
  <p><strong>{{ s.label }}</strong><br>
  <span class="evidence-meta">{{ s.metric }}</span></p>
  <p class="evidence-note">{{ s.star }}</p>
</div>
{% endfor %}
