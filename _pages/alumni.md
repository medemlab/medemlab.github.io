---
layout: page
title: Alumni
permalink: /alumni/
nav: false
---

<div class="profiles">
  {% assign alumni_types = "PhD,MS" | split: "," %}
  {% for type in alumni_types %}
    {% assign alumni_members = site.profiles | where: "category", "Alumni" | where: "course", type | sort: "importance" | reverse %}
    
    {% if alumni_members.size > 0 %}
      <div class="position-group mb-5">
        {% case type %}
          {% when 'PhD' %} <h2 class="category mb-4">Ph.D. Alumni</h2>
          {% when 'MS' %} <h2 class="category mb-4">M.S. Alumni</h2>
        {% endcase %}
        
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {% for profile in alumni_members %}
            <div class="col">
              <div class="card h-100 shadow-sm border">
                <div class="card-body text-center d-flex flex-column justify-content-center">
                  <h5 class="card-title mb-2"><strong>{{ profile.first_name }} {{ profile.last_name }}</strong></h5>
                  <p class="card-text mb-2 text-dark">
                    {{ profile.graduation_year }} {{ profile.graduation_season }}
                  </p>
                  
                  {% if profile.current_affl %}
                    <p class="card-text mt-auto">
                      <strong>
                        {% if profile.affl_url %}
                          <a href="{{ profile.affl_url }}" target="_blank" rel="noopener noreferrer" class="text-primary" style="text-decoration: none;">
                            {{ profile.current_affl }} <i class="fa-solid fa-arrow-up-right-from-square fa-xs"></i>
                          </a>
                        {% else %}
                          <span class="text-primary">{{ profile.current_affl }}</span>
                        {% endif %}
                      </strong>
                    </p>
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