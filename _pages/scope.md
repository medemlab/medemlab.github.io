---
layout: page
title: RESEARCH SCOPE
permalink: /scope/
nav: false
---

<style>
  /* --- Selected Publications 간소화 설정 --- */
  
  /* 1. 연도별 바(Yearly Bar) 및 배지(Badges/Abbr) 삭제 */
  .representative-papers h2.bibliography,
  .representative-papers .abbr {
    display: none !important;
  }

  /* 2. 저자 목록(Author) 및 초록(Abstract) 숨기기 */
  .representative-papers .author,
  .representative-papers .abstract,
  .representative-papers .periodical + .links + .hidden {
    display: none !important;
  }

  /* 3. DOI를 제외한 나머지 버튼(PDF, Bib, HTML 등) 숨기기 */
  /* al-folio 테마의 버튼들 중 DOI 링크만 남깁니다 */
  .representative-papers .links a:not([href*="doi.org"]) {
    display: none !important;
  }

  /* 4. 리스트 여백 및 글꼴 최적화 */
  .representative-papers .publications ol.bibliography {
    margin-top: 0 !important;
    padding-left: 0 !important;
    list-style: none !important;
  }

  .representative-papers ol.bibliography li {
    margin-bottom: 20px !important;
    padding-left: 0 !important;
  }

  /* 논문 제목 강조 */
  .representative-papers .title {
    font-weight: 700 !important;
    font-size: 1.05rem !important;
    display: block;
    margin-bottom: 4px;
  }

  /* 저널명 및 연도 스타일 */
  .representative-papers .periodical {
    font-style: italic;
    color: var(--global-text-color);
    opacity: 0.8;
    font-size: 0.95rem;
  }

  /* DOI 버튼 스타일링 (텍스트 형태나 작은 버튼으로 유지) */
  .representative-papers .links {
    margin-top: 5px;
  }
  
  .representative-papers .links a.btn {
    padding: 0px 5px !important;
    font-size: 0.8rem !important;
    height: auto !important;
    border: none !important;
    color: var(--global-theme-color) !important;
    text-decoration: underline !important;
  }
</style>

<div class="research-scope">
  <p class="lead mb-5">
    MEDEM은 금속 소재의 미세조직 분석과 기계적 특성 평가를 융합하여, 파괴 기전 규명 및 제조 공정 최적화 연구를 수행하고 있습니다.
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
            <li>금속의 소성변형 거동은 소재 및 공정 변수에 따라 복잡하게 변화하며, 그 결과 재료 성능에 직접적인 영향을 미칩니다.</li>
            <li>MEDEM은 인공지능과 재료과학 원리를 융합한 physics-informed machine learning framework를 활용하여 특정 조건에서 금속소재의 복잡한 소성 거동을 해석 및 예측합니다.</li>
            <li>이를 통해 최적 금속성형 공정 변수를 도출하고, 최고의 신소재를 제조하는 인프라를 구축하였습니다.</li>
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
            <li>동적파괴는 단시간에 소재에 고에너지 투사하거나 장시간에 걸쳐 소재의 변형거동을 변화시킴으로써 발생하는 복합적 현상으로 예측과 해석이 매우 어렵습니다.</li>
            <li>대부분의 구조재료에는 정적파괴보다 동적파괴 평가가 요구되므로 이 분야는 산업계에서 특히 높은 수요를 보입니다.</li>
            <li>MEDEM은 피로파괴, 충격파괴, 수소취성, 고온성형 등 다양한 동적파괴 현상을 측정/평가/분석 가능한 인프라를 구축하고 있으며, 이를 바탕으로 여러 기업 및 연구소와 공동 연구를 수행하고 있습니다.</li>
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
        <img src="{{ '/assets/img/research_area_03.jpg' | relative_url }}" class="research-img" alt="Electropulsing">
      </div>
      <div class="col-lg-8">
        <h3 class="research-title">
          전류펄스인가 및 통전성형
          <small>Electropulsing Treatment & Electrically-Assisted Forming</small>
        </h3>
        <div class="research-text">
          <ul>
            <li>전류펄스인가법(EPT)은 금속에 펄스 형태의 전류를 인가하는 열처리 기법이며, 통전성형(EAF)은 EPT와 금속 소성가공을 결합한 기술입니다.</li>
            <li>EPT와 EAF는 전기 에너지를 활용한 고효율/친환경/급속 가열이 가능하며 기존 공정과 차별화되는 물리적 특성이 발현될 가능성이 있어 학계와 산업계에서 큰 주목을 받고 있습니다.</li>
            <li>MEDEM은 티타늄, 마그네슘, 알루미늄, 니켈, 강철 등 다양한 금속 소재에 적용 가능한 EPT 및 EAF 인프라를 구축하고, 이를 바탕으로 공정 효과/제어/최적화 분야에서 폭넓은 연구를 수행하고 있습니다.</li>
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

  <div class="research-card">
    <div class="row">
      <div class="col-lg-4">
        <img src="{{ '/assets/img/research_area_04.png' | relative_url }}" class="research-img" alt="Electropulsing">
      </div>
      <div class="col-lg-8">
        <h3 class="research-title">
          방위산업 분야 연구
          <small>K-Defense Research</small>
        </h3>
        <div class="research-text">
          <ul>
            <li>MEDEM은 국방과학연구소, 국방기술진흥연구소, 한화에어로스페이스 및 여러 방위산업 기관과 협력하여 대한민국 방산산업 발전에 기여하는 다양한 연구를 수행하고 있습니다.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>


  <div class="research-card">
    <div class="row">
      <div class="col-lg-8">
        <h3 class="research-title">
          기타 연구주제
        </h3>
        <div class="research-text">
          <ul>
            <li>다중공형압연 (Multi-Pass Caliber Rolling)</li>
            <li>강소성가공 (Severe Plastic Deformation Processes)</li>
            <li>탄성계수 정밀 측정  (Precise Measurement of Elastic Modulus)</li>
            <li>생체 임플란트용 합금 공정 (Fabricating Biomedical Metallic Alloys)</li>
            <li>전자제품용 강판의 강성 향상 (Improving Ferrous Stiffness for Electric Devices)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</div>
