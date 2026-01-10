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

  /* 월(Month) 약자 표시 영역 */
  .news-date {
    min-width: 100px; /* 약자로 줄어듦에 따라 너비 소폭 조정 */
    font-weight: 700;
    color: var(--global-theme-color);
    font-size: 1rem;
    text-transform: uppercase; /* JAN, FEB 등 대문자 강조 */
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
</style>

<div class="news">
  {% if site.news != blank %}
    {% comment %} 날짜(연/월/일 전체)를 기준으로 내림차순 정렬 (일 단위까지 반영) {% endcomment %}
    {% assign news_pages = site.news | sort: "date" | reverse %}
    
    {% assign current_year = "" %}
    
    {% for item in news_pages %}
      {% capture item_year %}{{ item.date | date: "%Y" }}{% endcapture %}
      
      {% if item_year != current_year %}
        {% if current_year != "" %}</div>{% endif %}
        <h2 class="news-year">{{ item_year }}</h2>
        <div class="news-list-container">
        {% assign current_year = item_year %}
      {% endif %}

      <div class="news-item">
        {% comment %} 화면에는 월(Month) 약자(%b)만 출력 {% endcomment %}
        <div class="news-date">
          <i class="fa-regular fa-calendar mr-2"></i>
          {{ item.date | date: "%b" }}
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