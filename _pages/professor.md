---
layout: page
title: PROFESSOR
permalink: /professor/
---

<style>
  /* 1. 헤더 스타일 (Publications/Projects와 통일) */
  .section-title {
    color: var(--global-theme-color) !important;
    border-bottom: 1px solid var(--global-divider-color);
    padding-bottom: 10px;
    margin-top: 50px !important;
    margin-bottom: 25px !important;
    font-weight: 800 !important;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: block;
  }

  /* 2. 프로필 이미지 스타일 */
  .prof-img {
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
    filter: drop-shadow(0 4px 10px rgba(0,0,0,0.15));
  }

  /* 3. 상단 텍스트 스타일 */
  .prof-name {
    font-size: 2.4rem;
    font-weight: 800;
    color: var(--global-text-color);
    margin-bottom: 5px;
  }

  .prof-pos-sub {
    font-size: 1.25rem;
    color: var(--global-theme-color);
    font-weight: 600;
    margin-bottom: 25px;
  }

  .basic-info div {
    font-size: 0.95rem;
    margin-bottom: 12px;
    display: flex;
    align-items: flex-start;
  }

  /* 아이콘 색상 강제 지정 */
  .basic-info i, .section-title i, .link-icon i {
    color: var(--global-theme-color) !important;
    width: 28px;
  }

  .basic-info i {
    margin-top: 4px;
  }

  /* 4. 리스트 및 링크 스타일 */
  .custom-list {
    list-style: none;
    padding-left: 0;
  }

  .custom-list li {
    margin-bottom: 12px;
    padding-left: 20px;
    position: relative;
    line-height: 1.6;
    color: var(--global-text-color);
  }

  .custom-list li::before {
    content: "•";
    color: var(--global-theme-color);
    font-weight: bold;
    position: absolute;
    left: 0;
  }

  .year-span {
    font-weight: 700;
    margin-right: 12px;
    color: var(--global-text-color);
    min-width: 90px;
    display: inline-block;
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

<div class="professor-page">
  <div class="row align-items-start">
    <div class="col-md-3 text-center mb-3 mb-md-0">
      <img src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" class="prof-img" alt="Taekyung Lee">
    </div>
    <div class="col-md-9">
      <h1 class="prof-name">이태경 교수</h1>
      <p class="prof-pos-sub">Prof. Taekyung LEE</p>
      <div class="basic-info">
        <div><i class="fa-solid fa-building"></i> <span>부산대학교 장전캠퍼스 기계관 607호</span></div>
        <div><i class="fa-solid fa-envelope"></i> <span>taeklee (at) pnu.edu</span></div>
        <div><i class="fa-solid fa-graduation-cap"></i> <span>Google Scholar <a href="https://scholar.google.com/citations?user=Oha_H-oAAAAJ&hl=ko" target="_blank" class="link-icon"><i class="fa-solid fa-link"></i></a></span></div>
      </div>
    </div>
  </div>

  <hr class="mt-5">

  <h2 class="section-title"><i class="fa-solid fa-briefcase mr-2"></i> 학력 및 경력</h2>
  <ul class="custom-list">
    <li><span class="year-span">2025 - 현재</span> <strong>부산대학교</strong> 기계공학부 교수</li>
    <li><span class="year-span">2021 - 2025</span> <strong>부산대학교</strong> 기계공학부 부교수</li>
    <li><span class="year-span">2017 - 2021</span> <strong>부산대학교</strong> 기계공학부 조교수</li>
    <li><span class="year-span">2016 - 2017</span> <strong>Kumamoto University</strong> (일본) 조교수</li>
    <li><span class="year-span">2015</span> <strong>Northwestern University</strong> (미국) 박사후연구원</li>
    <li><span class="year-span">2014</span> <strong>POSTECH</strong> 신소재공학과 공학박사</li>
    <li><span class="year-span">2009</span> <strong>POSTECH</strong> 신소재공학과 공학사</li>
  </ul>

  <h2 class="section-title"><i class="fa-solid fa-users mr-2"></i> 학회</h2>
  <ul class="custom-list">
    <li><span class="year-span">2025 - 현재</span> <strong>한국군사과학기술학회</strong> 정회원</li>
    <li><span class="year-span">2025 - 현재</span> <strong>The Japan Institute of Light Metals (JILM)</strong> 정회원</li>
    <li><span class="year-span">2022 - 현재</span> <strong>한국소성·가공학회</strong> 편집이사</li>
    <li><span class="year-span">2023 - 현재</span> <strong>대한금속·재료학회</strong> 인공지능재료과학분과 간사위원</li>
    <li><span class="year-span">2020 - 현재</span> <strong>대한
