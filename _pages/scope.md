---
layout: page
title: RESEARCH SCOPE
permalink: /scope/
---

<style>
  /* 1. 섹션 및 연구 분야 타이틀 스타일 */
  .research-card {
    margin-bottom: 80px;
  }

  .research-title {
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--global-theme-color);
    margin-bottom: 20px;
    border-left: 5px solid var(--global-theme-color);
    padding-left: 15px;
    line-height: 1.2;
  }

  .research-title small {
    font-size: 1rem;
    color: var(--global-text-color);
    opacity: 0.7;
    display: block;
    margin-top: 5px;
  }

  /* 2. 이미지 스타일 (좌측 정렬 통일) */
  .research-img {
    width: 100%;
    border-radius: 12px;
    border: 1px solid var(--global-divider-color);
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
    margin-bottom: 20px;
  }

  /* 3. 본문 텍스트 스타일 */
  .research-text {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--global-text-color);
    margin-bottom: 25px;
  }

  .research-text ul {
    list-style: none;
    padding-left: 0;
  }

  .research-text li {
    margin-bottom: 10px;
    padding-left: 20px;
    position: relative;
  }

  .research-text li::before {
    content: "○";
    color: var(--global-theme-color);
    font-weight: bold;
    position: absolute;
    left: 0;
  }

  /* 4. 대표 논문 섹션 (Selected Publications 서식) */
  .representative-papers {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px dashed var(--global-divider-color);
  }

  .papers-label {
    font-weight: 800;
    color: var(--global-theme-color);
    font-size: 0.95rem;
    text-transform: uppercase;
    margin-bottom: 15px;
    display: block;
  }

  /* 논문 리스트 가독성 조정 */
  .representative-papers .publications ol.bibliography li {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 15px;
  }

  /* Selected Publications 내의 연도 헤더(2026, 2025 등)와 구분선 숨기기 */
  .representative-papers h2.bibliography,
  .representative-papers .abbr,
  .representative-papers .author,
  .representative-papers .abstract,
  .representative-papers .links,
  .representative-papers .badges {
    display: none !important;
  }

  /* 학술지 정보 내에서 권(Volume), 호(Number), 페이지(Pages) 숨기기 */
  .representative-papers .periodical em + span, 
  .representative-papers .periodical .volume,
  .representative-papers .periodical .number,
  .representative-papers .periodical .pages {
    display: none !important;
  }
  
  /* 연도 헤더가 사라진 후 생기는 상단 여백 조정 */
  .representative-papers ol.bibliography {
    margin-top: 0 !important;
    padding-top: 0 !important;
  }
</style>

<div class="research-scope">
  <p class="lead mb-5">
    MEDEM Lab은 금속 소재의 미세조직 분석과 기계적 특성 평가를 융합하여, 파괴 기전 규명 및 제조 공정 최적화 연구를 수행하고 있습니다.
  </p>

  <div class="research-card">
    <div class="row">
      <div class="col-lg-4">
        <img src="{{ '/assets/img/research_area_01.png' | relative_url }}" class="research-img" alt="AI Plasticity">
      </div>
      <div class="col-lg-8">
        <h3 class="research-title">
          AI 기반 금속 소성해석
          <small>AI-Based Interpretation of Metal Plasticity</small>
        </h3>
        <div class="research-text">
          <ul>
            <li>기계학습(Machine Learning)을 활용한 특정 조건에서의 금속 소재 소성해석 수행</li>
            <li>소성해석 결과와 재료과학 원리를 융합한 최적 공정 변수 도출 인프라 구축</li>
            <li>소재 및 공정 변수에 따른 복잡한 변형 거동의 정밀 예측 모델 개발</li>
          </ul>
        </div>
        
        <div class="representative-papers">
          <span class="papers-label"><i class="fa-solid fa-file-lines mr-2"></i> Selected Publications</span>
          <div class="publications">
            {% bibliography -f {{ site.scholar.bibliography }} -q @*[area=plasticity]* %}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="research-card">
    <div class="row">
      <div class="col-lg-4">
        <img src="{{ '/assets/img/research_area_02.png' | relative_url }}" class="research-img" alt="Dynamic Fracture">
      </div>
      <div class="col-lg-8">
        <h3 class="research-title">
          금속 동적파괴 평가 및 분석
          <small>Dynamic Fracture Analysis</small>
        </h3>
        <div class="research-text">
          <ul>
            <li>피로파괴, 충격파괴, 수소취성 등 단시간 고에너지 투사 및 장시간 변형 분석</li>
            <li>산업계 수요가 높은 동적파괴 현상의 정밀 측정 및 평가 독자 인프라 보유</li>
            <li>국방 및 모빌리티 핵심 소재에 대한 파손 기전 규명 및 수명 예측 기술 연구</li>
          </ul>
        </div>

        <div class="representative-papers">
          <span class="papers-label"><i class="fa-solid fa-file-lines mr-2"></i> Selected Publications</span>
          <div class="publications">
            {% bibliography -f {{ site.scholar.bibliography }} -q @*[area=fracture]* %}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="research-card">
    <div class="row">
      <div class="col-lg-4">
        <img src="{{ '/assets/img/research_area_03.png' | relative_url }}" class="research-img" alt="Electropulsing">
      </div>
      <div class="col-lg-8">
        <h3 class="research-title">
          전류펄스인가 및 통전성형
          <small>Electropulsing Treatment & Forming</small>
        </h3>
        <div class="research-text">
          <ul>
            <li>전류펄스인가법(EPT)을 활용한 금속 미세조직의 획기적 제어 및 물성 개선</li>
            <li>전류펄스의 열/비열 효과 분리 분석을 통한 독창적 재료과학 방법론 적용</li>
            <li>저에너지 고효율 성형 공정을 위한 통전 가소성 기반 제조 공정 최적화</li>
          </ul>
        </div>

        <div class="representative-papers">
          <span class="papers-label"><i class="fa-solid fa-file-lines mr-2"></i> Selected Publications</span>
          <div class="publications">
            {% bibliography -f {{ site.scholar.bibliography }} -q @*[area=electropulsing]* %}
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
