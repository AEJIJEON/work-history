# Next.js 서버 실행 환경 이전

## 문제

Lambda@Edge 환경에서 운영하던 Next.js 서버에서 **503 오류와 콜드스타트 문제**가 발생했습니다.

## 이전

```text
Lambda@Edge → Elastic Beanstalk
```

사내 API 서버에서 사용하던 Elastic Beanstalk 환경으로 이전하면서 **Next.js 배포 패키징을 구성**하고 기존 GitHub Actions·Blue/Green 배포 방식을 적용했습니다.

## 결과

**이전 후 기존 503 오류는 재발하지 않았습니다.**
