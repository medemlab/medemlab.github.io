---
layout: page
title: Members
permalink: /members/
---

<style>
  /* 카테고리 제목: 라이트-블루 / 다크-골드 반영 */
  .category {
    color: var(--global-theme-color) !important;
    margin-top: 40px;
    margin-bottom: 25px;
    font-weight: 700;
  }
  /* 카드 설정: 고정된 bg-light를 제거하고 테마 변수 적용 */
  .card {
    background-color: var(--global-card-bg) !important;
    border: 1px solid var(--global-divider-color) !important;
    transition: all 0.3s ease;
  }
  /* 텍스트 색상: 모드에 따라 자동 전환 */
  .card-title, .card-text {
    color: var(--global-text-color) !important;
  }
  .card-text {
    opacity: 0.8;
  }
</style>

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
              <div class="card h-100 shadow-sm">
                <div class="card-body text-center d-flex flex-column justify-content-center">
                  <h5 class="card-title mb-2"><strong>{{ profile.last_name }}, {{ profile.first_name }}</strong></h5>
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