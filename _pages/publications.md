---
layout: page
title: PUBLICATIONS
permalink: /publications/
nav: true
nav_order: 3
---

<style>
  h2.year {
    color: var(--global-theme-color) !important; /* 라이트-블루, 다크-골드 자동 반영 */
    border-bottom: 1px solid var(--global-divider-color);
    padding-bottom: 10px;
    margin-top: 50px !important;
    font-weight: 800 !important;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
</style>

{% capture total_pubs %}{% bibliography %}{% endcapture %}
{% assign pubs_array = total_pubs | split: '<div class="row"' %}
{% assign total_count = pubs_array.size | minus: 1 %}

<div class="publications">
  {% include bib_search.liquid %}

  <div class="publication-stats mb-5 p-4 border-0 shadow-sm rounded bg-white text-center" 
       style="border-top: 5px solid var(--global-theme-color) !important;">
    <h6 class="text-uppercase text-muted mb-2" style="letter-spacing: 2px;">Total Publications</h6>
    <span class="display-3 font-weight-bold" style="color: var(--global-theme-color);">{{ total_count }}</span>
  </div>

  {{ total_pubs }}
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    var total = {{ total_count }};
    var bibNumbers = document.querySelectorAll('.bib-number');
    bibNumbers.forEach(function(span, index) {
      span.textContent = "[" + (total - index) + "]";
    });
  });
</script>
