---
layout: page
title: MEMBERS
permalink: /members/
---

<div class="profiles">
  {% assign member_types = "Postdoc,PhD,MS,Undergrad" | split: "," %}
  {% for type in member_types %}
    {% assign members = site.profiles | where: "category", "Member" | where: "course", type | sort: "importance" %}
    
    {% if members.size > 0 %}
      <div class="position-group">
        {% case type %}
          {% when 'Postdoc' %} <h2 class="category">박사후연구원/Post-Doc</h2>
          {% when 'PhD' %} <h2 class="category">박사과정/Ph.D. Candidates</h2>
          {% when 'MS' %} <h2 class="category">석사과정/M.S. Candidates</h2>
          {% when 'Undergrad' %} <h2 class="category">학부연구생/Undergrads</h2>
        {% endcase %}
        
        <div class="row">
          {% for profile in members %}
            <div class="col-sm-6 mb-3">
              <strong>{{ profile.first_name }} {{ profile.last_name }}</strong><br>
              {{ profile.degree }} (Entry: {{ profile.admission_year }})
            </div>
          {% endfor %}
        </div>
      </div>
      {% unless forloop.last %}<hr>{% endunless %}
    {% endif %}
  {% endfor %}
</div>