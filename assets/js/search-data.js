// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-medem",
    title: "MEDEM?",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-professor",
              title: "PROFESSOR",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/professor/";
              },
            },{id: "dropdown-members",
              title: "MEMBERS",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/members/";
              },
            },{id: "dropdown-alumni",
              title: "ALUMNI",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/alumni/";
              },
            },{id: "dropdown-scope",
              title: "SCOPE",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/scope/";
              },
            },{id: "dropdown-projects",
              title: "PROJECTS",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "dropdown-patents",
              title: "PATENTS",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/patents/";
              },
            },{id: "nav-publications",
          title: "PUBLICATIONS",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "NEWS",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "news-전류펄스의-열-효과와-비열-효과를-분리하여-분석할-수-있는-독창적-방법론에-대한-연구가-journal-of-magnesium-and-alloys에-게재되었습니다",
          title: '전류펄스의 열 효과와 비열 효과를 분리하여 분석할 수 있는 독창적 방법론에 대한 연구가...',
          description: "",
          section: "News",},{id: "news-github-기반으로-새로운-연구실-홈페이지를-제작-중입니다",
          title: 'GitHub 기반으로 새로운 연구실 홈페이지를 제작 중입니다.',
          description: "",
          section: "News",},{id: "profiles-taein-kong",
          title: 'Taein Kong',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/001_Taein_Kong/";
            },},{id: "profiles-byung-je-kwak",
          title: 'Byung Je Kwak',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/002_ByungJe_Kwak/";
            },},{id: "profiles-in-su-kim",
          title: 'In-Su Kim',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/003_In-Su_Kim/";
            },},{id: "profiles-유진영",
          title: '유진영',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/004_Jinyeong_Yu/";
            },},{id: "profiles-이명재",
          title: '이명재',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/005_Myoungjae_Lee/";
            },},{id: "profiles-배민화",
          title: '배민화',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/006_MinHwa_Bae/";
            },},{id: "profiles-천세호",
          title: '천세호',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/007_Seho_Cheon/";
            },},{id: "profiles-오승준",
          title: '오승준',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/008_SeungJun_Oh/";
            },},{id: "profiles-ma-ying",
          title: 'Ma, Ying',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/009_YingMa/";
            },},{id: "profiles-강태진",
          title: '강태진',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/010_Tae-Jin_Kang/";
            },},{id: "profiles-",
          title: '',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/011_HyeonJin_Lee/";
            },},{id: "profiles-황슬기",
          title: '황슬기',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/012_SeulGi_Hwang/";
            },},{id: "profiles-이성호",
          title: '이성호',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/013_SeongHo_Lee/";
            },},{id: "profiles-김민섭",
          title: '김민섭',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/014_Minseob_Kim/";
            },},{id: "profiles-문무성",
          title: '문무성',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/015_Mooseong_Mun/";
            },},{id: "profiles-변수정",
          title: '변수정',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/016_Sujeong_Byun/";
            },},{id: "profiles-김지우",
          title: '김지우',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/017_Jiwoo_Kim/";
            },},{id: "profiles-박동준",
          title: '박동준',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/018_DongJune_Park/";
            },},{id: "profiles-송종한",
          title: '송종한',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/019_JongHan_Song/";
            },},{id: "profiles-이승엽",
          title: '이승엽',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/020_SeungYeop_Lee/";
            },},{id: "profiles-이정훈",
          title: '이정훈',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/021_JeonghoonLee/";
            },},{id: "profiles-이진규",
          title: '이진규',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/022_Jingyu_Lee/";
            },},{id: "profiles-김성원",
          title: '김성원',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/023_Sungwon_Kim/";
            },},{id: "profiles-이수정",
          title: '이수정',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/024_Sujeong_Lee/";
            },},{id: "profiles-윤재원",
          title: '윤재원',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/025_JaeWon_Yoon/";
            },},{id: "profiles-허수빈",
          title: '허수빈',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/026_Supin_Heo/";
            },},{id: "profiles-권용준",
          title: '권용준',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/027_Yongjun_Kwon/";
            },},{id: "profiles-장대웅",
          title: '장대웅',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/101_DaeWoong_Jang/";
            },},{id: "profiles-유진영",
          title: '유진영',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/profiles/999_Jinyeong_Yu/";
            },},{id: "projects-타이타늄-합금-형단조-공정용-프리폼-설계-및-특성평가",
          title: '타이타늄 합금 형단조 공정용 프리폼 설계 및 특성평가',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/001_project/";
            },},{id: "projects-고강도-고인성-mg-봉재-제조를-위한-통전공형압연-신기술-개발",
          title: '고강도/고인성 Mg 봉재 제조를 위한 통전공형압연 신기술 개발',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/002_project/";
            },},{id: "projects-조선-해양플랜트-열교환기용-cp-ti의-스마트-가열-신기술-개발",
          title: '조선·해양플랜트 열교환기용 CP-Ti의 스마트 가열 신기술 개발',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/003_project/";
            },},{id: "projects-통합소재설계법을-활용한-적층제조-기반-생체소재용-ti-신소재-및-조형체-개발",
          title: '통합소재설계법을 활용한 적층제조 기반 생체소재용 Ti 신소재 및 조형체 개발',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/004_project/";
            },},{id: "projects-︎-︎-︎-︎-︎-소재-분석-및-특정",
          title: '◼︎◼︎◼︎◼︎◼︎ 소재 분석 및 특정',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/005_project/";
            },},{id: "projects-︎-︎-︎-︎-︎-종류-및-특성-파악",
          title: '◼︎◼︎◼︎◼︎◼︎ 종류 및 특성 파악',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/006_project/";
            },},{id: "projects-︎-︎-︎-︎-︎-부품-파괴-원인-분석",
          title: '◼︎◼︎◼︎◼︎◼︎ 부품 파괴 원인 분석',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/007_project/";
            },},{id: "projects-︎-︎-︎-︎-︎를-위한-피로특성-분석",
          title: '◼︎◼︎◼︎◼︎◼︎를 위한 피로특성 분석',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/008_project/";
            },},{id: "projects-인공지능-제어-펄스를-활용한-mg합금의-미세조직-최적화-및-자가-치유-기술",
          title: '인공지능 제어 펄스를 활용한 Mg합금의 미세조직 최적화 및 자가 치유 기술',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/009_project/";
            },},{id: "projects-︎-︎-︎-︎-︎을-위한-피로물성-확보-및-기법연구",
          title: '◼︎◼︎◼︎◼︎◼︎을 위한 피로물성 확보 및 기법연구',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/010_project/";
            },},{id: "projects-︎-︎-︎-︎-︎-밸브-파손-및-피로-예측",
          title: '◼︎◼︎◼︎◼︎◼︎ 밸브 파손 및 피로 예측',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/011_project/";
            },},{id: "projects-︎-︎-︎-︎-︎-피로물성-확보-및-︎-︎-︎-︎-︎-개발-연구",
          title: '◼︎◼︎◼︎◼︎◼︎ 피로물성 확보 및 ◼︎◼︎◼︎◼︎◼︎ 개발 연구',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/012_project/";
            },},{id: "projects-1250mpa급-고비강도-타이타늄합금-대형-블레이드-제조기술-개발",
          title: '1250MPa급 고비강도 타이타늄합금 대형 블레이드 제조기술 개발',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/013_project/";
            },},{id: "projects-︎-︎-︎-︎-︎-대상-조직-연계-물성-d-b-구축",
          title: '◼︎◼︎◼︎◼︎◼︎ 대상 조직 연계 물성 D/B 구축',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/014_project/";
            },},{id: "projects-︎-︎-︎-︎-︎",
          title: '◼︎◼︎◼︎◼︎◼︎',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/015_project/";
            },},{id: "projects-부산-울산-지역에너지-클러스터-인력양성",
          title: '부산·울산 지역에너지 클러스터 인력양성',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/016_project/";
            },},{id: "projects-청정에너지-융합-발전-융합대학원",
          title: '청정에너지 융합 발전 융합대학원',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/017_project/";
            },},{id: "projects-해외수요-대응-15mw-이상급-초대형-해상풍력발전용-고청정-잉곳-및-seamless-ring-단조품-제조기술-개발",
          title: '해외수요 대응 15MW 이상급 초대형 해상풍력발전용 고청정 잉곳 및 Seamless Ring 단조품 제조기술...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/018_project/";
            },},{id: "projects-금속3d프린팅-기반-열방호-소재-특화연구실-실제-운용환경에서의-금속-3d-프린팅-부품-적용성-평가",
          title: '금속3D프린팅 기반 열방호 소재 특화연구실 / 실제 운용환경에서의 금속 3D 프린팅 부품 적용성...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/019_project/";
            },},{id: "projects-지역원자력산업-기반-에너지기술공유대학",
          title: '지역원자력산업 기반 에너지기술공유대학',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/020_project/";
            },},{id: "projects-︎-︎-︎-︎-︎-설계용-︎-︎-︎-︎-︎",
          title: '◼︎◼︎◼︎◼︎◼︎ 설계용 ◼︎◼︎◼︎◼︎◼︎',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/021_project/";
            },},{id: "projects-차세대-︎-︎-︎-︎-︎-연구",
          title: '차세대 ◼︎◼︎◼︎◼︎◼︎ 연구',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/022_project/";
            },},{id: "projects-디퓨전커플-기반-하이스루풋-실험과-인공지능을-결합한-차세대-합금-설계법-개발",
          title: '디퓨전커플 기반 하이스루풋 실험과 인공지능을 결합한 차세대 합금 설계법 개발',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/023_project/";
            },},{id: "projects-︎-︎-︎-︎-︎",
          title: '◼︎◼︎◼︎◼︎◼︎',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/024_project/";
            },},{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-1589-3900", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Oha_H-oAAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=55386632500", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
