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
  
  <div class="total-stats mb-3">
    Total Publications: <strong>{{ total_count }}</strong>
  </div>

  {{ total_pubs }}
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    // Liquid에서 계산한 총 개수를 가져옵니다.
    var total = {{ total_count }};
    // _layouts/bib.liquid에 추가한 span 태그들을 모두 가져옵니다.
    var bibNumbers = document.querySelectorAll('.bib-number');
    
    bibNumbers.forEach(function(span, index) {
      // 최신순 정렬이므로: 전체 개수 - 현재 순서(index) = 역순 번호
      // 예: 전체 50개일 때 첫 번째(index 0) 논문은 50번, 마지막(index 49) 논문은 1번
      span.textContent = (total - index) + ".";
    });
  });
</script>