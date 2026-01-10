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

  .basic-info i {
    width: 28px;
    color: var(--global-theme-color);
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

  /* 텍스트 링크 스타일: 강조 및 색상 유지 */
  .custom-list li a {
    color: var(--global-text-color);
    font-weight: 700;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all 0.2s ease;
  }

  .custom-list li a:hover {
    color: var(--global-theme-color);
    border-bottom: 1px solid var(--global-theme-color);
  }

  .year-span {
    font-weight: 700;
    margin-right: 12px;
    color: var(--global-text-color);
    min-width: 90px;
    display: inline-block;
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

  <h2 class="section-title"><i class="fa-solid fa-pen-nib mr-2"></i> 학술지 편집위원</h2>
  <ul class="custom-list">
    <li><span class="year-span">2023 - 현재</span> <a href="https://www.jmamg.com/index.aspx" target="_blank">Journal of Magnesium and Alloys</a> / Youth Committee Member</li>
    <li><span class="year-span">2022 - 현재</span> <a href="https://www.springer.com/journal/12540" target="_blank">Metals and Materials International</a></li>
    <li><span class="year-span">2022 - 현재</span> <a href="http://kstp.or.kr/journal/archive.html" target="_blank">Transactions of Materials Processing</a></li>
    <li><span class="year-span">2022 - 현재</span> <a href="http://kjmm.org/" target="_blank">Korean Journal of Metals and Materials</a></li>
  </ul>

  <h2 class="section-title"><i class="fa-solid fa-users mr-2"></i> 학회 활동</h2>
  <ul class="custom-list">
    <li><span class="year-span">2025 - 현재</span> <strong>한국군사과학기술학회</strong> 정회원</li>
    <li><span class="year-span">2025 - 현재</span> <strong>The Japan Institute of Light Metals (JILM)</strong> 정회원</li>
    <li><span class="year-span">2022 - 현재</span> <strong>한국소성·가공학회</strong> 편집이사</li>
    <li><span class="year-span">2023 - 현재</span> <strong>대한금속·재료학회</strong> 인공지능재료과학분과 간사위원</li>
    <li><span class="year-span">2020 - 현재</span> <strong>대한금속·재료학회</strong> 마그네슘분과 간사위원</li>
    <li><span class="year-span">2019 - 현재</span> <strong>대한금속·재료학회</strong> 타이타늄분과 간사위원</li>
  </ul>

  <h2 class="section-title"><i class="fa-solid fa-handshake mr-2"></i> 산학연 컨소시엄 및 자문위원회</h2>
  <ul class="custom-list">
    <li><span class="year-span">2024 - 현재</span> <strong>한화에어로스페이스</strong> Hub-University Global R&D</li>
    <li><span class="year-span">2022 - 현재</span> <strong>LG전자</strong> 리빙가전 신기술 산학연구회 구조·소재분과</li>
    <li><span class="year-span">2022 - 현재</span> <strong>LG전자</strong> 차세대 HVAC 기술컨소시엄 재료분과</li>
  </ul>
  
  <h2 class="section-title"><i class="fa-solid fa-university mr-2"></i> 대학 내부기관 및 사업단</h2>
  <ul class="custom-list">
    <li><span class="year-span">2024 - 현재</span> <a href="https://nuclear.aerodrone.kr/" target="_blank">지역 원자력산업 기반 에너지기술공유대학</a></li>
    <li><span class="year-span">2023 - 현재</span> <a href="https://pnu-himec.pusan.ac.kr/" target="_blank">하이브리드 제조혁신 엔지니어링 센터 (HIMEC)</a></li>
    <li><span class="year-span">2023 - 현재</span> <a href="https://futuremobility.pusan.ac.kr/" target="_blank">미래모빌리티센터</a></li>
    <li><span class="year-span">2020 - 현재</span> <a href="https://bk21four-me.pusan.ac.kr/" target="_blank">첨단기계부품소재 고급인력교육연구단 (BK21)</a></li>
    <li><span class="year-span">2018 - 현재</span> <a href="https://rimt.pusan.ac.kr/" target="_blank">기계기술연구원 (RIMT)</a></li>
  </ul>

  <h2 class="section-title"><i class="fa-solid fa-trophy mr-2"></i> 수상 경력</h2>
  <ul class="custom-list">
    <li><span class="year-span">2025</span> 한국소성·가공학회 제14회 신진학술상</li>
    <li><span class="year-span">2025</span> KIM 논문상 제1부문 & 제2부문</li>
    <li><span class="year-span">2023</span> 부산대학교 공과대학 논문상 / 우수연구자상</li>
    <li><span class="year-span">2021</span> 윤인구 신진연구자상 / 대한금속·재료학회 신진학술상</li>
  </ul>

  <h2 class="section-title"><i class="fa-solid fa-chalkboard-user mr-2"></i> 강의 과목</h2>
  <ul class="custom-list">
    <li>경량금속재료특론 (Theory of Lightweight Metals)</li>
    <li>피로파괴론 (Fatigue Fracture)</li>
    <li>미래차 금속재료공학 (Metallic Materials Engineering for Future Vehicles)</li>
    <li>고체역학 (Solid Mechanics) / 응용고체역학 (Advanced Solid Mechanics)</li>
    <li>공학선형대수학 / 공학미분방정식</li>
  </ul>
</div>