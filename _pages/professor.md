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
    border-radius: 10px;
    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
  }

  /* 3. 기본 텍스트 스타일 */
  .prof-name {
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--global-text-color);
    margin-bottom: 5px;
  }

  .prof-pos {
    font-size: 1.2rem;
    color: var(--global-theme-color);
    font-weight: 600;
    margin-bottom: 20px;
  }

  .contact-info {
    font-size: 0.95rem;
    line-height: 1.8;
  }

  .contact-info i {
    width: 25px;
    color: var(--global-theme-color);
  }

  /* 4. 리스트 스타일 */
  ul.custom-list {
    list-style: none;
    padding-left: 0;
  }

  ul.custom-list li {
    margin-bottom: 12px;
    padding-left: 20px;
    position: relative;
    line-height: 1.6;
  }

  ul.custom-list li::before {
    content: "•";
    color: var(--global-theme-color);
    font-weight: bold;
    position: absolute;
    left: 0;
  }

  .year-span {
    font-weight: 600;
    margin-right: 10px;
    color: var(--global-text-color);
  }
</style>

<div class="professor-page">
  <div class="row align-items-center">
    <div class="col-md-4 text-center mb-4 mb-md-0">
      <img src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" class="prof-img" alt="Taekyung Lee">
    </div>
    <div class="col-md-8">
      <h1 class="prof-name">Taekyung Lee, Ph.D.</h1>
      <p class="prof-pos">Associate Professor</p>
      
      <div class="contact-info">
        <div><i class="fa-solid fa-building"></i> School of Mechanical Engineering, Pusan National University</div>
        <div><i class="fa-solid fa-location-dot"></i> 201, Mechanical Engineering Building, 2 Busandaehak-ro 63beon-gil, Geumjeong-gu, Busan, 46241, Korea</div>
        <div><i class="fa-solid fa-envelope"></i> <a href="mailto:taekyung@pusan.ac.kr">taekyung@pusan.ac.kr</a></div>
        <div><i class="fa-solid fa-phone"></i> +82-51-510-2321</div>
        <div><i class="fa-solid fa-link"></i> <a href="https://medemlab.github.io" target="_blank">medemlab.github.io</a></div>
      </div>
    </div>
  </div>

  <hr class="mt-5">

  <h2 class="section-title">Education</h2>
  <ul class="custom-list">
    <li><span class="year-span">2012</span> <strong>Ph.D.</strong> in Materials Science and Engineering, Seoul National University, Korea</li>
    <li><span class="year-span">2006</span> <strong>B.S.</strong> in Materials Science and Engineering, Seoul National University, Korea</li>
  </ul>

  <h2 class="section-title">Career</h2>
  <ul class="custom-list">
    <li><span class="year-span">2021 - Present</span> <strong>Associate Professor</strong>, School of Mechanical Engineering, Pusan National University, Korea</li>
    <li><span class="year-span">2017 - 2021</span> <strong>Assistant Professor</strong>, School of Mechanical Engineering, Pusan National University, Korea</li>
    <li><span class="year-span">2014 - 2017</span> <strong>Senior Researcher</strong>, Korea Institute of Materials Science (KIMS), Korea</li>
    <li><span class="year-span">2012 - 2014</span> <strong>Postdoctoral Researcher</strong>, University of Pennsylvania, USA</li>
  </ul>

  <h2 class="section-title">Honors and Awards</h2>
  <ul class="custom-list">
    <li><span class="year-span">2023</span> Best Teaching Award, Pusan National University</li>
    <li><span class="year-span">2016</span> Best Researcher Award, Korea Institute of Materials Science</li>
    <li><span class="year-span">2012</span> Global PhD Fellowship, National Research Foundation of Korea</li>
  </ul>

  <h2 class="section-title">Professional Activities</h2>
  <ul class="custom-list">
    <li>Member, The Korean Institute of Metals and Materials</li>
    <li>Member, The Korean Society of Mechanical Engineers</li>
    <li>Reviewer for Journals: Acta Materialia, International Journal of Plasticity, etc.</li>
  </ul>
</div>
