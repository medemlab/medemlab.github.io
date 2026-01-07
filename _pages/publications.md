---
layout: page
title: PUBLICATIONS
permalink: /publications/
nav: true
nav_order: 3
---

{% capture total_pubs %}{% bibliography %}{% endcapture %}
{% assign pubs_array = total_pubs | split: '<div class="row"' %}
{% assign total_count = pubs_array.size | minus: 1 %}

<div class="publication-stats mb-5 p-3 border rounded shadow-sm bg-white">
  <div class="row align-items-center text-center">
    <div class="col-md-6 border-right">
      <h5 class="text-muted mb-1">Total Publications</h5>
      <span class="h3 font-weight-bold text-primary">{{ total_count }}</span>
    </div>
    <div class="col-md-6">
      <h5 class="text-muted mb-1">Total Citations</h5>
      <span class="h3 font-weight-bold text-success">
        {{ site.data.citations.total_citations | default: "275" }}
      </span>
    </div>
  </div>
</div>

<div class="publications">
  {% bibliography %}
</div>