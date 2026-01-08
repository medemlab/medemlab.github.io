---
layout: page
title: PROJECTS
permalink: /projects/
display_categories: [수행중, 완료]
horizontal: true
---

<style>
  /* 1. 카테고리 헤더 스타일 (Publications 테마 통일) */
  h2.category {
    color: var(--global-theme-color) !important;
    border-bottom: 1px solid var(--global-divider-color);
    padding-bottom: 10px;
    margin-top: 50px !important;
    margin-bottom: 30px !important;
    font-weight: 800 !important;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: block;
  }
  
  a[id] { text-decoration: none !important; }

  /* 2. 프로젝트 카드 스타일 */
  .project-card {
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    border: 1px solid var(--global-divider-color);
    background-color: var(--global-card-bg);
  }

  .project-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }

  /* 3. CI 이미지 영역 (정사각형 설정) */
  .ci-container {
    background-color: #fff;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* 정사각형 유지 핵심 설정 */
    aspect-ratio: 1 / 1; 
    width: 100%;
    border-right: 1px solid var(--global-divider-color);
  }

  .ci-img {
    max-height: 85%;
    max-width: 85%;
    object-fit: contain;
  }
  
  /* 4. 텍스트 스타일 */
  .project-business {
    font-size: 0.95rem;
    color: var(--global-theme-color);
    font-weight: 600;
  }

  .project-title {
    font-weight: 800;
    font-size: 1.4rem;
    margin-top: 5px;
    margin-bottom: 15px;
    color: var(--global-text-color);
  }

  .project-info-text {
    color: var(--global-text-color);
    opacity: 0.9;
    font-size: 0.95rem;
  }

  /* 모바일 대응 */
  @media (max-width: 767.98px) {
    .ci-container {
      border-right: none;
      border-bottom: 1px solid var(--global-divider-color);
      aspect-ratio: auto;
      height: 200px;
    }
  }
</style>

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" | reverse %}

  <div class="row row-cols-1 g-4">
    {% for project in sorted_projects %}
    <div class="col">
      <div class="card project-card shadow-sm h-100 overflow-hidden">
        <div class="row g-0 h-100 align-items-center">
          
          <div class="col-md-4">
            <div class="ci-container">
              {% if project.img %}
              <img src="{{ project.img | relative_url }}" alt="{{ project.agency }} CI" class="ci-img">
              {% else %}
              <span class="text-muted font-weight-bold">{{ project.agency | default: "No Image" }}</span>
              {% endif %}
            </div>
          </div>
          
          <div class="col-md-8">
            <div class="card-body py-3 px-4">
              {% if project.business_name %}
              <div class="project-business">{{ project.business_name }}</div>
              {% endif %}
              
              <h3 class="card-title project-title">
                {% if project.redirect -%}
                  <a href="{{ project.redirect }}">{{ project.title }}</a>
                {%- else -%}
                  <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
                {%- endif %}
              </h3>
              
              <div class="project-info-text">
                <div class="row">
                  <div class="col-12 mb-2">
                    <i class="fa-solid fa-building-columns mr-2 text-muted"></i> 
                    <strong>지원기관:</strong> {{ project.agency }}
                  </div>
                  <div class="col-12">
                    <i class="fa-regular fa-calendar-days mr-2 text-muted"></i> 
                    <strong>기간:</strong> {{ project.start_year }} - {{ project.end_year }}
                    <span class="badge ml-2 {% if project.category == '수행중' %}bg-success{% else %}bg-secondary{% endif %}" style="font-size: 0.8em;">
                      {{ project.category }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
  {% endfor %}
{% endif %}
</div>
