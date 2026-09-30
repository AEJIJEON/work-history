# 공공기관 SSO 연동

## 목적

새올 시스템에서 인증된 공무원이 별도 로그인 없이 서비스에 진입할 수 있도록 외부 SSO 솔루션과 서비스 인증 체계를 연결했습니다.

## 연동 흐름

```text
새올 SSO → Java/Tomcat Servlet → FastAPI → Next.js
```

## 관련 운영 기록

[SSO 로그인 장애에서 시작한 저장공간 고갈 원인 추적](./disk-incident.md)
