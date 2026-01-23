---
layout: page
title: PUBLICATIONS
permalink: /publications/
nav: true
nav_order: 3
---

<style>
  h2.bibliography {
    color: var(--global-theme-color) !important;
    border-bottom: 1px solid var(--global-divider-color) !important;
    padding-bottom: 10px !important;
    margin-top: 50px !important;
    font-weight: 800 !important;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
</style>

{% capture total_pubs %}{% bibliography %}{% endcapture %}

<div class="publications">
  {% include bib_search.liquid %}

  {{ total_pubs }}
</div>
