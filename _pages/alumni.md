---
layout: page
title: Alumni
permalink: /alumni/
---

<div class="profiles">
  {% assign alumni_types = "PhD,MS" | split: "," %}
  {% for type in alumni_types %}
    {% assign alumni_members = site.profiles | where: "category", "Alumni" | where: "course", type | sort: "importance" | reverse %}
    
    {% if alumni_members.size > 0 %}
      <div class="position-group">
        {% case type %}
          {% when 'PhD' %} <h2 class="category">Ph.D. Alumni</h2>
          {% when 'MS' %} <h2 class="category">M.S. Alumni</h2>
        {% endcase %}
        
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {% for profile in alumni_members %}
            <div class="col">
              <div class="card h-100 shadow-sm border-0">
                <div class="card-body text-center">
                  <h5 class="card-title"><strong>{{ profile.last_name }},  {{ profile.first_name }}</strong></h5>
                  <p class="card-text mb-1">{{ profile.graduation_year }} {{ profile.graduation_season }})</p>
                  {% if profile.current_affl %}
                    <p class="card-text text-primary small"><strong>{{ profile.current_affl }}</strong></p>
                  {% endif %}
                </div>
              </div>
            </div>
          {% endfor %}
        </div>
      </div>
      {% unless forloop.last %}<hr class="my-5">{% endunless %}
    {% endif %}
  {% endfor %}
</div>