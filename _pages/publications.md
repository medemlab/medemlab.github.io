---
layout: page
permalink: /publications/
title: PUBLICATIONS
nav: true
nav_order: 3
---
<div class="citation-summary mb-4" style="border-bottom: 1px solid #ddd; padding-bottom: 15px;">
  <h5 class="text-muted">
    Researcher Statistics: 
    <span class="text-primary" style="font-weight: bold;">{{ site.data.citations.total_citations }}</span> Citations 
    (Source: <a href="https://scholar.google.com/citations?user={{ site.scholar_userid }}" target="_blank">Google Scholar</a>)
  </h5>
</div>

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

<div class="publications">

Total Publications: {{ total_count }}
{% bibliography %}

</div>
