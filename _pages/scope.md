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

  /* 2. 이미지 스타일 (원본 크기 유지) */
  .research-img {
    width: auto !important;
    max-width: 100%;
    height: auto;
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

  /* 4. 주요 연구 성과 스타일 (한 줄 서식) */
  .representative-papers {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px dashed var(--global-divider-color);
  }

  .papers-label {
    font-weight: 800;
    color: var(--global-theme-color);
    font-size: 0.9rem;
    text-transform: uppercase;
    margin-bottom: 12px;
    display: block;
    letter-spacing: 0.5px;
  }

  .manual-pub-list {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  .manual-pub-list li {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 8px;
    color: var(--global-text-color);
  }

  /* 및 아이콘 스타일 */
  .doi-link {
    color: var(--global-theme-color) !important;
    text-decoration: none !important;
    margin-left: 8px;
    font-weight: 600;
    white-space: nowrap;
  }

  .doi-link i {
    font-size: 0.8rem;
    margin-right: 3px;
  }

  .doi-link:hover {
    text-decoration: underline !important;
  }
</style>

<div class="research-scope">

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
          <span class="papers-label"><i class="fa-solid fa-file-lines mr-2"></i> 주요 연구 성과</span>
          <ul class="manual-pub-list">
            <li>
              Lee et al., <b>J. Mater. Res. Technol.</b>, 2025.
              <a href="https://doi.org/10.1016/j.jmrt.2025.10.222" class="doi-link" target="_blank"><i class="fa-solid fa-link"></i></a><br>
              Yu et al., <b>J. Magnes. Alloy.</b>, 2024.
              <a href="https://doi.org/10.1016/j.jma.2024.10.014" class="doi-link" target="_blank"><i class="fa-solid fa-link"></i></a><br>
              Byun et al., <b>J. Magnes. Alloy.</b>, 2024.
              <a href="https://doi.org/10.1016/j.jma.2023.12.007" class="doi-link" target="_blank"><i class="fa-solid fa-link"></i></a>
            </li>
          </ul>
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
          <span class="papers-label"><i class="fa-solid fa-file-lines mr-2"></i> 주요 연구 성과</span>
          <ul class="manual-pub-list">
            <li>
              Shams et al., <b>J. Mater. Sci. Technol.</b>, 2022.
              <a href="https://doi.org/10.1016/j.jmst.2021.10.010" class="doi-link" target="_blank"><i class="fa-solid fa-link"></i></a><br>
              Lee et al., <b>J. Alloys Compd.</b>, 2020.
              <a href="https://doi.org/10.1016/j.jallcom.2020.154401" class="doi-link" target="_blank"><i class="fa-solid fa-link"></i></a>
            </li>
          </ul>
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
          <span class="papers-label"><i class="fa-solid fa-file-lines mr-2"></i> 주요 연구 성과</span>
          <ul class="manual-pub-list">
            <li>
              Song et al., <b>J. Magnes. Alloy.</b>, 2026.
              <a href="https://doi.org/10.1016/j.jma.2025.11.017" class="doi-link" target="_blank"><i class="fa-solid fa-link"></i></a><br>
              Oh et al., <b>J. Mater. Res. Technol.</b>, 2024.
              <a href="https://doi.org/10.1016/j.jmrt.2023.08.103" class="doi-link" target="_blank"><i class="fa-solid fa-link"></i></a><br>
              Lee et al., <b>Int. J. Plast.</b>, 2017.
              <a href="https://doi.org/10.1016/j.ijplas.2017.02.012" class="doi-link" target="_blank"><i class="fa-solid fa-link"></i></a><br>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="research-card">
    <div class="row">
      <div class="col-lg-4">
        <img src="{{ '/assets/img/research_area_04.png' | relative_url }}" class="research-img" alt="Defense Research">
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
        <div class="representative-papers">
          <span class="papers-label"><i class="fa-solid fa-file-lines mr-2"></i> 주요 연구 성과</span>
          <ul class="manual-pub-list">
            <li>
              비공개
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="research-card">
    <div class="row">
      <div class="col-lg-12">
        <h3 class="research-title">기타 연구주제</h3>
        <div class="research-text">
          <ul>
            <li>다중공형압연 (Multi-Pass Caliber Rolling)</li>
            <li>강소성가공 (Severe Plastic Deformation Processes)</li>
            <li>탄성계수 정밀 측정 (Precise Measurement of Elastic Modulus)</li>
            <li>생체 임플란트용 합금 공정 (Fabricating Biomedical Metallic Alloys)</li>
            <li>전자제품용 강판의 강성 향상 (Improving Ferrous Stiffness for Electric Devices)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</div>
