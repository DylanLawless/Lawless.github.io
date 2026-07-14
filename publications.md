---
title: Publications
layout: page_wide
description: Publications
permalink: "/publications/"
---

<p>
<strong>ORCID record</strong>:
<img src="{{ '/images/ORCID-iD_icon_vector.svg' | relative_url }}" alt="ORCID iD" style="height:1.5em; vertical-align:middle; margin-right:0.25em;">
<a href="https://orcid.org/0000-0001-8496-3725" aria-label="View ORCID record 0000-0001-8496-3725">
  0000-0001-8496-3725
</a>
</p>

{% if site.data.publications %}

{% assign pubs = site.data.publications %}

{% comment %}
  Sort note: sort: "year" requires year to be an integer on every entry.
  Entries without a year (e.g. unpublished manuscripts) are filtered out of
  the published pool and handled in in_progress instead.
{% endcomment %}

{% assign in_progress = pubs | where_exp: "p", "p.status == 'under_review' or p.status == 'revision' or p.status == 'preprint' or p.status == 'in_progress'" %}
{% assign accepted    = pubs | where: "status", "accepted" %}
{% assign published   = pubs | where: "status", "published" | sort: "year" | reverse %}

## Published

{% for pub in published %}
{% include publication_line.html pub=pub %}
{% endfor %}

{% endif %}

{% if in_progress.size > 0 %}

## Preprints and in progress

{% for pub in in_progress %}
{% include publication_line.html pub=pub %}
{% endfor %}
{% endif %}

{% if accepted.size > 0 %}
## Accepted

{% for pub in accepted %}
{% include publication_line.html pub=pub %}
{% endfor %}
{% endif %}

<script async src="https://badge.dimensions.ai/badge.js" charset="utf-8"></script>
