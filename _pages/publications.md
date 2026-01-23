---
layout: page
title: PUBLICATIONS
permalink: /publications/
nav: true
nav_order: 3
---

<style>
  /* 연도 헤더 스타일 */
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
{% assign pubs_array = total_pubs | split: '<div class="row"' %}
{% assign total_count = pubs_array.size | minus: 1 %}

<div class="publications">
  {% include bib_search.liquid %}

  {% comment %} 통계 박스가 있던 자리입니다. 삭제 완료되었습니다. {% endcomment %}

  {{ total_pubs }}
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    // 논문 옆의 번호를 [Total - Index] 방식으로 매기는 로직입니다.
    var total = {{ total_count }};
    var bibNumbers = document.querySelectorAll('.bib-number');
    bibNumbers.forEach(function(span, index) {
      span.textContent = "[" + (total - index) + "]";
    });
  });
</script>
