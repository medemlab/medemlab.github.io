---
layout: page
title: ALUMNI
permalink: /alumni/
---

<div class="profiles">
  {% assign alumni_types = "PhD,MS" | split: "," %}
  {% for type in alumni_types %}
    {% assign alumni_members = site.profiles | where: "category", "Alumni" | where: "degrees", type | sort: "importance" | reverse %}
    
    {% if alumni_members.size > 0 %}
      <div class="position-group">
        {% case type %}
          {% when 'PhD' %} <h2 class="category">박사/Ph.D.</h2>
          {% when 'MS' %} <h2 class="category">석사/M.S. Alumni</h2>
        {% endcase %}
        
        <div class="row">
          {% for profile in alumni_members %}
            <div class="col-sm-12 mb-3">
              <strong>{{ profile.first_name }} {{ profile.last_name }}</strong> ({{ profile.degree }}) <br>
              Period: {{ profile.admission_year }} - {{ profile.graduation_year }} <br>
              {% if profile.current_affl %}Current Affiliation: {{ profile.current_affl }}{% endif %}
            </div>
          {% endfor %}
        </div>
      </div>
      {% unless forloop.last %}<hr>{% endunless %}
    {% endif %}
  {% endfor %}
</div>