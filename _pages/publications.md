---
layout: page
permalink: /publications/
title: PUBLICATIONS
nav: true
nav_order: 3
---
Total Publications: {{ site.scholar.bibliography.entries | size }}

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
