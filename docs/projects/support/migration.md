# Next.js 서버 실행 환경 이전

## 배경

Lambda@Edge 환경에서 운영하던 Next.js 서버에서 **503 오류와 콜드스타트 문제**가 발생했습니다.

## 내용

사내 API 서버의 운영 구성을 참고해 **동일한 사양의 별도 Elastic Beanstalk 환경을 구성**하고, Next.js 서버를 이전했습니다.

Next.js 배포 패키징을 구성하고 기존 GitHub Actions·Blue/Green 배포 방식을 적용했습니다.
