import { defineConfig } from 'vitepress'

// GitHub Actions supplies the repository's actual Pages base path.
export default defineConfig({
  lang: 'ko-KR',
  title: '경력기술서',
  description: '회사별 프로젝트와 담당 업무, 기술 선택 및 문제 해결 기록',
  base: process.env.PAGES_BASE_PATH || '/',
  cleanUrls: false,
  lastUpdated: false,
  themeConfig: {
    siteTitle: '경력기술서',
    nav: [{ text: '경력기술서', link: '/' }, { text: '회사별 프로젝트', link: '/projects/' }, { text: '기간별 기록', link: '/timeline' }, { text: '소개', link: '/about' }],
    sidebar: [
    {
        "text": "경력기술서",
        "link": "/"
    },
    {
        "text": "스마트마인드AI",
        "link": "/companies/smartmind",
        "collapsed": false,
        "items": [
            {
                "text": "AI 민원 시스템",
                "collapsed": false,
                "items": [
                    {
                        "text": "프로젝트 개요",
                        "link": "/projects/civil-complaints/"
                    },
                    {
                        "text": "민원 Workflow Backend",
                        "link": "/projects/civil-complaints/workflow"
                    },
                    {
                        "text": "폐쇄망 데이터 흐름 검증",
                        "link": "/projects/civil-complaints/validation"
                    },
                    {
                        "text": "공공기관 SSO 연동",
                        "link": "/projects/civil-complaints/sso"
                    },
                    {
                        "text": "Docker 저장공간 장애 대응",
                        "link": "/projects/civil-complaints/disk-incident"
                    }
                ]
            },
            {
                "text": "Qurify",
                "collapsed": false,
                "items": [
                    {
                        "text": "프로젝트 개요",
                        "link": "/projects/qurify/"
                    },
                    {
                        "text": "Index 조회와 시각화",
                        "link": "/projects/qurify/index-visualization"
                    },
                    {
                        "text": "Multimodal Embedding 모델 전환",
                        "link": "/projects/qurify/embedding"
                    }
                ]
            }
        ]
    },
    {
        "text": "아이스크림아트",
        "link": "/companies/iscreamart",
        "collapsed": false,
        "items": [
            {
                "text": "AI 미술 교육 서비스",
                "collapsed": false,
                "items": [
                    {
                        "text": "프로젝트 개요",
                        "link": "/projects/art-education/"
                    },
                    {
                        "text": "AI 스케치와 그림심리검사 PoC",
                        "link": "/projects/art-education/poc"
                    },
                    {
                        "text": "아트봉봉스쿨 AI 기능",
                        "link": "/projects/art-education/school"
                    },
                    {
                        "text": "재검사 중복 요청 방지",
                        "link": "/projects/art-education/duplicate-request"
                    },
                    {
                        "text": "Drawing Tool 신버전 전환",
                        "link": "/projects/art-education/drawing-tool"
                    }
                ]
            }
        ]
    },
    {
        "text": "기발한사람들",
        "link": "/companies/gibalhan",
        "collapsed": false,
        "items": [
            {
                "text": "써폿",
                "collapsed": false,
                "items": [
                    {
                        "text": "프로젝트 개요",
                        "link": "/projects/support/"
                    },
                    {
                        "text": "상품 유사도 검색",
                        "link": "/projects/support/search"
                    },
                    {
                        "text": "Next.js 서버 환경 이전",
                        "link": "/projects/support/migration"
                    },
                    {
                        "text": "이미지 업로드 HTTP 413 해결",
                        "link": "/projects/support/upload"
                    }
                ]
            },
            {
                "text": "뉴스레터 콘텐츠 수집 자동화",
                "link": "/projects/product/newsletter"
            },
            {
                "text": "콜시트",
                "link": "/projects/product/callsheet"
            }
        ]
    }
],
    outline: { level: [2, 3], label: '이 페이지에서' },
    search: { provider: 'local', options: { locales: { root: { translations: {
      button: { buttonText: '검색', buttonAriaLabel: '문서 검색' },
      modal: { noResultsText: '검색 결과가 없습니다.', resetButtonTitle: '검색어 지우기', footer: { selectText: '선택', navigateText: '이동', closeText: '닫기' } }
    } } } } },
    docFooter: { prev: '이전 작업', next: '다음 작업' },
    sidebarMenuLabel: '작업 목록', returnToTopLabel: '맨 위로',
    darkModeSwitchLabel: '화면 테마', lightModeSwitchTitle: '밝은 화면', darkModeSwitchTitle: '어두운 화면',
    footer: { message: '문제의 원인에서 시작해 구현과 운영까지 이어간 개발 기록' }
  }
})
