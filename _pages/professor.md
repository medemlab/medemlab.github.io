---
layout: page
title: PROFESSOR
permalink: /professor/
---

<div class="profiles">
  {% assign professors = site.profiles | where: "category", "Professor" | sort: "importance" %}
  {% for profile in professors %}
    <div class="row">
      <div class="col-sm-12">
        <h3><strong>{{ profile.first_name }} {{ profile.last_name }}</strong></h3>
        <p>{{ profile.degree }}</p>
        <div class="profile-content">
          {{ profile.content }}
        </div>
      </div>
    </div>
  {% endfor %}
</div>

under construction