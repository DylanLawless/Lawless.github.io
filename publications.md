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
  Keep filtering operations simple for Jekyll/Liquid compatibility.
  Technical records currently use type: technical and status: published.
{% endcomment %}

{% assign in_progress = pubs | where_exp: "p", "p.status == 'under_review' or p.status == 'revision' or p.status == 'preprint' or p.status == 'in_progress'" %}
{% assign accepted = pubs | where: "status", "accepted" %}
{% assign published_all = pubs | where: "status", "published" | sort: "year" | reverse %}
{% assign technical = pubs | where: "type", "technical" | sort: "year" | reverse %}

## Published

{% for pub in published_all %}
{% unless pub.type == "technical" %}
{% include publication_line.html pub=pub %}
{% endunless %}
{% endfor %}

{% if in_progress.size > 0 %}

## Preprints and in progress

{% for pub in in_progress %}
{% include publication_line.html pub=pub %}
{% endfor %}

{% endif %}

{% if technical.size > 0 %}

## Technical documents

{% for pub in technical %}
{% include publication_line.html pub=pub %}
{% endfor %}

{% endif %}

{% if accepted.size > 0 %}

## Accepted

{% for pub in accepted %}
{% include publication_line.html pub=pub %}
{% endfor %}

{% endif %}

{% endif %}

<script async src="https://badge.dimensions.ai/badge.js" charset="utf-8"></script>
