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
  
  /* 2. 링크 밑줄 제거 */
  a[id] {
    text-decoration: none !important;
  }

  /* 3. 프로젝트 카드 커스텀 스타일 */
  .project-card {
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    border: 1px solid var(--global-divider-color); /* 다크모드 대응 테두리 */
    background-color: var(--global-card-bg); /* 다크모드 대응 배경 */
  }

  /* 호버 효과 (선택사항) */
  .project-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }

  /* CI 이미지 영역 스타일 */
  .ci-container {
    background-color: #fff;
    padding: 20px; /* 여백 약간 증가 */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 180px; /* 기존 120px에서 1.5배 확장 */
    border-right: 1px solid var(--global-divider-color);
  }

  .ci-img {
    max-height: 120px; /* 기존 80px에서 1.5배 확장 */
    max-width: 90%;   /* 좌우 꽉 차지 않게 소폭 조정 */
    object-fit: contain;
  }
  
  /* 텍스트 스타일 */
  .project-business {
    font-size: 0.9rem;
    color: var(--global-theme-color); /* 테마색 적용 */
    font-weight: 600;
  }

  .project-title {
    font-weight: 800; /* Publications처럼 두껍게 */
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
    color: var(--global-text-color); /* 다크모드 대응 */
  }

  .project-info-text {
    color: var(--global-text-color); /* 다크모드 대응 */
    opacity: 0.85;
  }
  
  /* 모바일 대응: 좁은 화면에서는 이미지가 위로 가게 */
  @media (max-width: 767.98px) {
    .ci-container {
        border-right: none;
        border-bottom: 1px solid var(--global-divider-color);
        min-height: auto;
        padding: 20px;
    }
  }
</style>

{% comment %} ... 상단 style 블록은 이전과 동일 ... {% endcomment %}

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  
  {% assign categorized_projects = site.projects | where: "category", category %}
  
  {% comment %} 중요도(importance) 숫자가 클수록 상단에 오도록 reverse 추가 {% endcomment %}
  {% assign sorted_projects = categorized_projects | sort: "importance" | reverse %}

  <div class="row row-cols-1 g-4">
    {% for project in sorted_projects %}
    <div class="col">
      <div class="card project-card shadow-sm h-100 overflow-hidden">
        <div class="row g-0 h-100 align-items-center">
          
          <div class="col-md-4 col-lg-3 h-100">
            <div class="ci-container h-100">
              {% if project.img %}
              <img src="{{ project.img | relative_url }}" alt="{{ project.agency }} CI" class="ci-img rounded-start">
              {% else %}
              <span class="text-muted font-weight-bold">{{ project.agency | default: "No Image" }}</span>
              {% endif %}
            </div>
          </div>
          
          <div class="col-md-9 col-lg-10">
            <div class="card-body py-3">
              {% if project.business_name %}
              <div class="project-business mb-1">{{ project.business_name }}</div>
              {% endif %}
              
              <h3 class="card-title project-title">
                {% if project.redirect -%}
                  <a href="{{ project.redirect }}">{{ project.title }}</a>
                {%- else -%}
                  <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
                {%- endif %}
              </h3>
              
              <div class="project-info-text mt-3">
                <div class="row">
                    <div class="col-md-6 mb-2 mb-md-0">
                        <i class="fa-solid fa-building-columns mr-2 text-muted"></i> 
                        <strong>지원기관:</strong> {{ project.agency }}
                    </div>
                    <div class="col-md-6">
                        <i class="fa-regular fa-calendar-days mr-2 text-muted"></i> 
                        <strong>기간:</strong> {{ project.start_year }} - {{ project.end_year }}
                        <span class="badge ml-2 {% if project.category == '수행중' %}bg-success{% else %}bg-secondary{% endif %}" style="font-size: 0.8em; vertical-align: middle;">
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
