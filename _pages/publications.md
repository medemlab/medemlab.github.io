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

<div class="publications">
  {% include bib_search.liquid %}

  <div class="publication-stats mb-5 p-4 border-0 shadow-sm rounded bg-white text-center">
    <h6 class="text-uppercase text-muted mb-2" style="letter-spacing: 2px; font-size: 0.9rem;">Total Publications</h6>
    <span class="display-3 font-weight-bold" style="color: #2c3e50;">{{ total_count }}</span>
  </div>

  {{ total_pubs }}
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    var total = {{ total_count }};
    var bibNumbers = document.querySelectorAll('.bib-number');
    bibNumbers.forEach(function(span, index) {
      // 번호 뒤 개행 처리를 위해 번호만 주입 (개행은 bib.liquid에서 처리)
      span.textContent = "[" + (total - index) + "]";
    });
  });
</script>