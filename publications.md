---
title: Publications
layout: page_wide
description: Publications
permalink: "/publications/"
---


**ORCID record**:
  <img src="{{ '/images/ORCID-iD_icon_vector.svg' | relative_url }}" alt="ORCID iD" style="height:1.5em; vertical-align:middle; margin-right:0.25em;">
<a href="https://orcid.org/0000-0001-8496-3725" aria-label="View ORCID record 0000-0001-8496-3725">
  0000-0001-8496-3725
</a>


{% assign pubs = site.data.publications | reverse %}

{% for pub in pubs %}
<p class="publication-line">
  {% if pub.url %}<a href="{{ pub.url }}">{{ pub.title }}</a>{% else %}{{ pub.title }}{% endif %}.
{{ pub.authors }}.
<strong><em>{{ pub.journal }}</em></strong>,{% if pub.volume %} {{ pub.volume }}{% endif %}{% if pub.number %}({{ pub.number }}){% endif %}{% if pub.pages %}, {{ pub.pages }}{% endif %}, {{ pub.month }} {{ pub.year }}.
{% if pub.doi %}DOI: <a href="https://doi.org/{{ pub.doi }}">{{ pub.doi }}</a>.{% endif %}{% if pub.doi %}<span class="publication-dimensions"><span class="__dimensions_badge_embed__" data-doi="{{ pub.doi }}" data-style="small_rectangle"></span></span>{% elsif pub.pmid %}<span class="publication-dimensions"><span class="__dimensions_badge_embed__" data-pmid="{{ pub.pmid }}" data-style="small_rectangle"></span></span>{% endif %}
</p>
{% endfor %}

<script async src="https://badge.dimensions.ai/badge.js" charset="utf-8"></script>
