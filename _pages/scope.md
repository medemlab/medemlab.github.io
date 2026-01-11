---
layout: page
title: RESEARCH SCOPE
permalink: /scope/
#nav: true
#nav_order: 1
---

<style>
  /* 1. 헤더 및 섹션 타이틀 (기존 페이지와 통일) */
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

  /* 2. 연구 전략 (Cycle) 스타일 */
  .strategy-box {
    background-color: var(--global-card-bg);
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    padding: 30px;
    margin-bottom: 40px;
    box-shadow: var(--global-card-box-shadow);
  }

  .cycle-step {
    text-align: center;
    padding: 15px;
  }

  .step-number {
    display: inline-block;
    background-color: var(--global-theme-color);
    color: white;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    font-weight: 800;
    margin-bottom: 15px;
  }

  /* 3. 개별 연구 분야 스타일 */
  .research-card {
    margin-bottom: 60px;
  }

  .research-img {
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--global-divider-color);
    margin-bottom: 20px;
    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
  }

  .research-title {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--global-theme-color);
    margin-bottom: 15px;
    border-left: 5px solid var(--global-theme-color);
    padding-left: 15px;
  }

  .research-text {
    font-size: 1.05rem;
    line-height: 1.8;
    text-align: justify;
    color: var(--global-text-color);
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
</style>

<div class="research-scope">

  <p class="lead">
    MEDEM Lab의 연구는 <strong>재료과학(Materials Science)</strong>의 미세조직 분석 기법과 <strong>기계공학(Mechanical Engineering)</strong>의 물성 평가 기술을 결합하여, 금속 소재의 파괴 기전을 규명하고 제조 공정을 최적화하는 데 집중하고 있습니다.
  </p>

  <h2 class="section-title">Research Strategy</h2>
  <div class="strategy-box">
    <div class="row">
      <div class="col-md-4 cycle-step">
        <div class="step-number">1</div>
        <h5><strong>공정 최적화</strong></h5>
        <p class="small">재료과학 원리를 AI 기술에 접목하여 기존 공정 최적화 및 차세대 공정 개발</p>
      </div>
      <div class="col-md-4 cycle-step">
        <div class="step-number">2</div>
        <h5><strong>소재성능 향상</strong></h5>
        <p class="small">개선된 공정을 금속 소재에 적용하여 기계적 성능(강도, 인성 등) 극대화</p>
      </div>
      <div class="col-md-4 cycle-step">
        <div class="step-number">3</div>
        <h5><strong>원리 분석 및 규명</strong></h5>
        <p class="small">미세조직 및 물성 분석을 통해 공정-소재 간의 재료과학적 인과관계 규명</p>
      </div>
    </div>
    <div class="text-center mt-3">
      <img src="{{ '/assets/img/research_cycle.png' | relative_url }}" class="img-fluid" alt="Research Cycle Diagram" style="max-width: 600px;">
    </div>
  </div>

  <h2 class="section-title">Core Research Areas</h2>

  <div class="research-card">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <h3 class="research-title">AI 기반 금속 소성해석<br><small>AI-Based Interpretation of Metal Plasticity</small></h3>
        <div class="research-text">
          <ul>
            <li>금속의 소성변형 거동은 소재 및 공정 변수에 따라 복잡하게 변화하며, 재료 성능에 직접적인 영향을 미칩니다.</li>
            <li>기계학습(Machine Learning)을 활용하여 특정 조건에서의 금속 소재 소성해석을 수행합니다.</li>
            <li>소성해석 결과와 재료과학 원리를 융합하여 최적의 공정 변수를 도출하는 인프라를 구축하고 있습니다.</li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6">
        <img src="{{ '/assets/img/research_area_01.png' | relative_url }}" class="research-img" alt="AI Plasticity">
      </div>
    </div>
  </div>

  <div class="research-card">
    <div class="row align-items-center flex-lg-row-reverse">
      <div class="col-lg-6">
        <h3 class="research-title">금속 동적파괴 평가 및 분석<br><small>Dynamic Fracture Analysis</small></h3>
        <div class="research-text">
          <ul>
            <li>피로파괴, 충격파괴, 수소취성 등 단시간 고에너지 투사 또는 장시간 변형에 따른 복합적 현상을 분석합니다.</li>
            <li>산업계 수요가 높은 동적파괴 현상을 정밀하게 측정하고 평가할 수 있는 독자적 인프라를 보유하고 있습니다.</li>
            <li>국방 및 모빌리티 분야의 핵심 소재에 대한 파손 및 수명 예측 모델을 개발합니다.</li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6">
        <img src="{{ '/assets/img/research_area_02.png' | relative_url }}" class="research-img" alt="Dynamic Fracture">
      </div>
    </div>
  </div>

  <div class="research-card">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <h3 class="research-title">전류펄스인가 및 통전성형<br><small>Electropulsing Treatment & Forming</small></h3>
        <div class="research-text">
          <ul>
            <li>전류펄스인가법(EPT)을 활용하여 금속의 미세조직을 획기적으로 제어하는 연구를 수행합니다.</li>
            <li>전류펄스의 열 효과(Thermal)와 비열 효과(Athermal)를 분리하여 분석하는 독창적 방법론을 적용합니다.</li>
            <li>저에너지 고효율 성형 공정을 위한 통전 가소성 기반 제조 기술을 최적화합니다.</li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6">
        <img src="{{ '/assets/img/research_area_03.png' | relative_url }}" class="research-img" alt="Electropulsing">
      </div>
    </div>
  </div>

</div>
