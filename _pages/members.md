---
layout: page
title: Members
permalink: /members/
---

<div class="profiles">
  {% assign member_types = "Post-Doc,PhD,MS,Undergrad" | split: "," %}
  {% for type in member_types %}
    {% assign members = site.profiles | where: "category", "Member" | where: "course", type | sort: "importance" %}
    
    {% if members.size > 0 %}
      <div class="position-group">
        {% case type %}
          {% when 'Post-Doc' %} <h2 class="category">Postdoctoral Researcher</h2>
          {% when 'PhD' %} <h2 class="category">Ph.D. Students</h2>
          {% when 'MS' %} <h2 class="category">M.S. Students</h2>
          {% when 'Undergrad' %} <h2 class="category">Undergraduate Students</h2>
        {% endcase %}
        
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {% for profile in members %}
            <div class="col">
              <div class="card h-100 shadow-sm border-0 bg-light">
                <div class="card-body text-center">
                  <h5 class="card-title"><strong>{{ profile.last_name }},  {{ profile.first_name }}</strong></h5>
                  <p class="card-text mb-0">{{ profile.degree }}</p>
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