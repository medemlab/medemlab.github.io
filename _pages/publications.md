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

  <div class="publication-stats mb-5 p-4 border-0 shadow rounded bg-white">
    <div class="row text-center">
      <div class="col-md-6 border-right">
        <h6 class="text-uppercase text-muted ls-1 mb-2" style="letter-spacing: 1px;">Total Publications</h6>
        <span class="display-4 font-weight-bold" style="color: #2c3e50;">{{ total_count }}</span>
      </div>
      <div class="col-md-6">
        <h6 class="text-uppercase text-muted ls-1 mb-2" style="letter-spacing: 1px;">Total Citations</h6>
        <span class="display-4 font-weight-bold" style="color: #e64a19;">
          {{ site.data.citations.total_citations | default: "275" }}
        </span>
      </div>
    </div>
  </div>

  {{ total_pubs }}
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    var total = {{ total_count }};
    var bibNumbers = document.querySelectorAll('.bib-number');
    bibNumbers.forEach(function(span, index) {
      span.textContent = "[" + (total - index) + "]"; // [#] 형태로 가독성 향상
    });
  });
</script>