---
layout: page
title: PUBLICATIONS
permalink: /publications/
nav: true
nav_order: 3
---

<style>
  /* 연도 헤더 클래스명(.bibliography)에 맞춰 수정 */
  h2.bibliography {
    color: var(--global-theme-color) !important; /* 라이트-블루, 다크-골드 자동 반영 */
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

<script>
  document.addEventListener("DOMContentLoaded", function() {
    var total = {{ total_count }};
    var bibNumbers = document.querySelectorAll('.bib-number');
    bibNumbers.forEach(function(span, index) {
      span.textContent = "[" + (total - index) + "]";
    });
  });
</script>
