# Docker 저장공간 고갈로 발생한 서비스 장애 추적

## 문제

운영 중 **SSO 로그인이 실패하는 장애가 발생했습니다.**

## 조사

SSO 자체의 문제로 단정하지 않고 시스템의 로그를 순차적으로 추적했습니다.

```text
SSO Tomcat → FastAPI → PostgreSQL → Server Disk → Docker
```

PostgreSQL 로그에서 `No space left on device`를 확인했고, 서버 저장공간을 조사해 **Docker Image 및 Build Cache가 누적되어 디스크를 고갈시키고 있음을 파악했습니다.**

## 원인

```text
Docker Image / Build Cache 누적
  ↓
Server Disk 고갈
  ↓
PostgreSQL 정상 동작 불가
  ↓
서비스 장애
```

## 해결 및 재발 방지

불필요한 Docker 리소스를 제거해 DB와 서비스를 복구하고, **Docker 리소스 정리를 자동화해 재발 방지 조치**를 적용했습니다.

장애 기간 동안 누락된 민원 데이터는 기존 적재 Pipeline을 통해 복구했습니다.
