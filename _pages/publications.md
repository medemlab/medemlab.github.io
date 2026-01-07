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

  <div class="total-stats mb-3" style="font-size: 1.1rem; font-weight: 500;">
    Total Publications: <span class="text-primary" style="font-weight: bold;">{{ total_count }}</span>
  </div>

  {{ total_pubs }}
  
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    var total = {{ total_count }};
    // bib.liquid에 추가한 .bib-number 클래스를 찾습니다.
    var bibNumbers = document.querySelectorAll('.bib-number');
    
    bibNumbers.forEach(function(span, index) {
      // (전체 개수 - 현재 인덱스)를 통해 역순 번호 부여
      // 예: 100개 중 첫 번째(최신)는 100., 마지막(가장 오래된)은 1.
      span.textContent = (total - index) + ".";
    });
  });
</script>
