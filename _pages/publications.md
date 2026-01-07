---
layout: page
permalink: /publications/
title: PUBLICATIONS
nav: true
nav_order: 3
---
{% capture total_pubs %}{% bibliography %}{% endcapture %}
{% assign pubs_array = total_pubs | split: '<div class="row"' %}
{% assign total_count = pubs_array.size | minus: 1 %}

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

Total Publications: {{ total_count }}
{% bibliography %}

</div>
