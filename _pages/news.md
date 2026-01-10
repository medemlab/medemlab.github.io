---
layout: page
title: NEWS
permalink: /news/
nav: true
nav_order: 4
---

<style>
  /* 1. 연도 헤더 스타일 (Publications의 h2.bibliography와 동일하게 설정) */
  .news-year {
    color: var(--global-theme-color) !important;
    border-bottom: 1px solid var(--global-divider-color);
    padding-bottom: 10px;
    margin-top: 50px !important;
    margin-bottom: 25px !important;
    font-weight: 800 !important;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: block;
    text-align: right; /* 요청하신 대로 연도를 우측에 배치 */
  }

  /* 2. 뉴스 항목 스타일 */
  .news-list {
    list-style: none;
    padding-left: 0;
  }

  .news-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px dashed var(--global-divider-color);
  }

  .news-item:last-child {
    border-bottom: none;
  }

  .news-date {
    min-width: 120px;
    font-weight: 600;
    color: var(--global-theme-color);
    font-size: 0.95rem;
  }

  .news-content {
    flex: 1;
    font-size: 1rem;
    color: var(--global-text-color);
  }

  .news-content a {
    font-weight: 600;
    text-decoration: none;
    color: var(--global-theme-color);
  }
  
  .news-content a:hover {
    text-decoration: underline;
  }
</style>

<div class="news">
  {% if site.news != blank %}
    {% assign news_pages = site.news | sort: "date" | reverse %}
    
    {% comment %} 연도별 그룹화를 위한 로직 {% endcomment %}
    {% assign current_year = "" %}
    
    {% for item in news_pages %}
      {% capture item_year %}{{ item.date | date: "%Y" }}{% endcapture %}
      
      {% if item_year != current_year %}
        {% if current_year != "" %}</div>{% endif %} {% comment %} 이전 연도 그룹 닫기 {% endcomment %}
        
        <h2 class="news-year">{{ item_year }}</h2>
        <div class="news-list-container">
        {% assign current_year = item_year %}
      {% endif %}

      <div class="news-item">
        <div class="news-date">
          <i class="fa-regular fa-calendar-check mr-2"></i>
          {{ item.date | date: "%b %d, %Y" }}
        </div>
        <div class="news-content">
          {% if item.inline %}
            {{ item.content | remove: '<p>' | remove: '</p>' }}
          {% else %}
            <a href="{{ item.url | relative_url }}">{{ item.title }}</a>
          {% endif %}
        </div>
      </div>
    {% endfor %}
    
    </div> {% comment %} 마지막 연도 그룹 닫기 {% endcomment %}
    
  {% else %}
    <p>최신 소식이 없습니다.</p>
  {% endif %}
</div>