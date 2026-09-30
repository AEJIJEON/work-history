# Docker 저장공간 고갈로 발생한 서비스 장애 추적

## 배경

운영 중 **SSO 로그인이 실패하는 장애**가 발생했습니다.

## 내용

### 로그 추적과 원인 확인

SSO 자체의 문제로 단정하지 않고 `SSO Tomcat → FastAPI → PostgreSQL → Server Disk → Docker` 순서로 로그와 시스템 상태를 추적했습니다.

PostgreSQL 로그에서 `No space left on device`를 확인했습니다. 서버 저장공간을 조사한 결과, **Docker Image와 Build Cache 누적으로 디스크가 고갈되어 PostgreSQL이 정상 동작하지 못하고 있었습니다.**

### 복구와 재발 방지

불필요한 Docker 리소스를 제거해 DB와 서비스를 복구하고, Docker 리소스 정리를 자동화했습니다. 장애 기간 동안 누락된 민원 데이터는 기존 적재 Pipeline을 통해 복구했습니다.
