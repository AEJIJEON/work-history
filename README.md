# 개발과 문제 해결 기록

VitePress 기반 한국어 포트폴리오입니다. 근무 기록, 전체 작업, 기간별 기록, 프로젝트별 상세 페이지를 제공합니다.

## 로컬 실행

```sh
npm ci
npm run dev
```

## 빌드 및 미리보기

```sh
npm run build
npm run preview
```

## GitHub Pages 배포

1. 이 폴더를 GitHub 저장소의 `main` 브랜치에 올립니다.
2. 저장소 Settings → Pages → Build and deployment → Source를 **GitHub Actions**로 설정합니다.
3. Actions의 `Deploy portfolio to GitHub Pages`를 실행하거나 main에 커밋을 푸시합니다.

워크플로가 GitHub Pages의 실제 기본 경로를 전달하므로 저장소 이름을 바꾸어도 config를 수정할 필요가 없습니다. 사용자 사이트와 프로젝트 사이트를 모두 지원합니다.

## 문서 수정

- `docs/index.md`: 소개·근무 이력·주요 프로젝트
- `docs/projects/`: 프로젝트 개요와 상세 사례
- `docs/timeline.md`: 기간별 이력
- `docs/.vitepress/config.mts`: 메뉴·검색·사이트 설정
- `docs/.vitepress/theme/custom.css`: 스타일

프로젝트의 세부 수행 날짜와 소속 회사가 원문에서 명확하지 않은 경우 임의로 연결하지 않았습니다. 연락처와 이름은 제공받은 뒤 추가할 수 있습니다.

배포 구성 참고: https://vitepress.dev/guide/deploy
