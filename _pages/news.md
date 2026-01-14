---
layout: page
title: NEWS
permalink: /news/
nav: true
nav_order: 4
---

<style>
  /* 1. 연도 헤더 스타일 (우측 정렬, Publications 테마 통일) */
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
    text-align: right;
  }

  /* 2. 뉴스 항목 컨테이너 */
  .news-list-container {
    margin-bottom: 40px;
  }

  /* 3. 개별 뉴스 항목 스타일 */
  .news-item {
    display: flex;
    align-items: flex-start;
    padding: 15px 0;
    border-bottom: 1px dashed var(--global-divider-color);
  }

  .news-item:last-child {
    border-bottom: none;
  }

  /* 월(Month) 약자 및 아이콘 표시 영역 */
  .news-date {
    min-width: 100px;
    font-weight: 700;
    color: var(--global-theme-color);
    font-size: 1rem;
    text-transform: uppercase;
  }

  .news-content {
    flex: 1;
    font-size: 1rem;
    color: var(--global-text-color);
    line-height: 1.6;
  }

  .news-content a {
    font-weight: 600;
    color: var(--global-theme-color);
    text-decoration: none;
  }

  .news-content a:hover {
    text-decoration: underline;
  }

  /* 링크 아이콘 스타일 */
  .link-icon {
    margin-left: 6px;
    text-decoration: none !important;
    font-size: 0.85rem;
    vertical-align: middle;
  }
  
  .link-icon:hover {
    opacity: 0.7;
  }
</style>

<div class="news">
  {% if site.news != blank %}
    {% assign news_pages = site.news | sort: "date" | reverse %}
    
    {% assign current_year = "" %}
    {% assign current_month = "" %}
    
    {% for item in news_pages %}
      {% capture item_year %}{{ item.date | date: "%Y" }}{% endcapture %}
      {% capture item_month %}{{ item.date | date: "%b" }}{% endcapture %}
      
      {% if item_year != current_year %}
        {% if current_year != "" %}</div>{% endif %}
        <h2 class="news-year">{{ item_year }}</h2>
        <div class="news-list-container">
        {% assign current_year = item_year %}
        {% assign current_month = "" %}
      {% endif %}

      <div class="news-item">
        <div class="news-date">
          {% comment %} 같은 달의 최신 뉴스인 경우에만 아이콘과 월 이름을 출력 {% endcomment %}
          {% if item_month != current_month %}
            <i class="fa-regular fa-calendar mr-2"></i>
            {{ item_month }}
            {% assign current_month = item_month %}
          {% endif %}
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
    
    </div>
    
  {% else %}
    <p>등록된 뉴스가 없습니다.</p>
  {% endif %}
</div>
