---
layout: page
title: MEMBERS
permalink: /members/
nav: true
nav_order: 2
parent: PEOPLE
---

<div class="profiles">
  {% assign types = "postdoc,phd,ms,undergrad" | split: "," %}
  {% assign titles = "Post-Doc,Ph.D. Candidate,M.S. Candidate,Undergraduate" | split: "," %}

  {% for type in types %}
    {% assign group = site.data.profiles | where: "type", type %}
    {% if group.size > 0 %}
      <h2 class="category" style="margin-top: 50px;">{{ titles[forloop.index0] }}</h2>
      {% for profile in group %}
        <hr>
        <div class="name"><strong>{{ profile.name }}</strong></div>
        <div class="desc">{{ profile.description }}</div>
      {% endfor %}
    {% endif %}
  {% endfor %}
</div>