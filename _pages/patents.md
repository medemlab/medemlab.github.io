---
layout: page
title: PATENTS
permalink: /patents/
---

<style>
  /* 1. 연도 헤더 스타일 (Publications/News 테마 통일) */
  .patent-year {
    color: var(--global-theme-color) !important;
    border-bottom: 1px solid var(--global-divider-color);
    padding-bottom: 10px;
    margin-top: 50px !important;
    margin-bottom: 25px !important;
    font-weight: 800 !important;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: block;
    text-align: right; /* News 페이지와 동일하게 우측 정렬 */
  }

  /* 2. 특허 리스트 스타일 */
  .patent-list {
    list-style: none;
    padding-left: 0;
    margin-bottom: 40px;
  }

  .patent-item {
    display: flex;
    align-items: flex-start;
    padding: 18px 0;
    border-bottom: 1px dashed var(--global-divider-color);
  }

  .patent-item:last-child {
    border-bottom: none;
  }

  /* 아이콘 및 인덱스 영역 */
  .patent-icon {
    min-width: 40px;
    color: var(--global-theme-color);
    font-size: 1.1rem;
    margin-top: 2px;
  }

  /* 특허 상세 내용 */
  .patent-content {
    flex: 1;
    font-size: 1rem;
    line-height: 1.6;
    color: var(--global-text-color);
  }

  .patent-title {
    font-weight: 700;
    font-size: 1.1rem;
    display: block;
    margin-bottom: 5px;
    color: var(--global-text-color);
  }

  .patent-authors {
    display: block;
    font-size: 0.95rem;
    margin-bottom: 3px;
  }

  .patent-details {
    display: block;
    font-size: 0.9rem;
    opacity: 0.8;
  }

  .status-badge {
    font-size: 0.75rem;
    padding: 2px 8px;
    border-radius: 4px;
    font-weight: 600;
    margin-left: 8px;
    vertical-align: middle;
  }
  .status-registered { background-color: var(--global-theme-color); color: white; }
  .status-pending { background-color: #6c757d; color: white; }

  /* 링크 아이콘 */
  .patent-link {
    color: var(--global-theme-color);
    text-decoration: none;
    margin-left: 10px;
  }
</style>

<div class="patents">

  <h2 class="patent-year">2026</h2>
  <ul class="patent-list">

    <li class="patent-item">
      <div class="patent-icon"><i class="fa-solid fa-certificate"></i></div>
      <div class="patent-content">
        <span class="patent-title">특허 국문 명칭 또는 영문 명칭 (Patent Title) <span class="status-badge status-registered">등록</span></span>
        <span class="patent-authors"><strong>이태경</strong>, 홍길동, 김철수</span>
        <span class="patent-details">대한민국 등록번호: 10-XXXXXXX-0000 | 등록일자: 2026.01.11</span>
      </div>
    </li>

  </ul>


  <h2 class="patent-year">2025</h2>
  <ul class="patent-list">

    <li class="patent-item">
      <div class="patent-icon"><i class="fa-solid fa-file-signature"></i></div>
      <div class="patent-content">
        <span class="patent-title">마그네슘 합금의 미세조직 제어 방법 (Method for Controlling Microstructure of Mg Alloys) <span class="status-badge status-pending">출원</span></span>
        <span class="patent-authors"><strong>이태경</strong>, 박영희</span>
        <span class="patent-details">대한민국 출원번호: 10-2025-XXXXXXX | 출원일자: 2025.10.20</span>
      </div>
    </li>

    <li class="patent-item">
      <div class="patent-icon"><i class="fa-solid fa-certificate"></i></div>
      <div class="patent-content">
        <span class="patent-title">티타늄 합금의 동적 파괴 저항성 향상 기술 <span class="status-badge status-registered">등록</span></span>
        <span class="patent-authors"><strong>이태경</strong>, 최민수, 이준호</span>
        <span class="patent-details">대한민국 등록번호: 10-XXXXXXX-0000 | 등록일자: 2025.05.15</span>
      </div>
    </li>

  </ul>

</div>