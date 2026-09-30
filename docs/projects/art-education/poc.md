# AI 스케치와 그림심리검사 PoC

## 배경

AI 그림 서비스의 PoC를 구축하며 이미지·스케치 생성과 그림심리검사 기능을 사용자 서비스로 연결하는 Frontend가 필요했습니다.

## 내용

### AI 스케치

- Frontend 전체 구현
- Prompt·사진 기반 AI 이미지/스케치 생성 연동
- iframe + `window.postMessage` 기반 Drawing Tool 연동
- Nginx 정적 배포 (AWS EC2)

### AI 그림심리검사

- 사용자·관리자·슈퍼관리자 Frontend 구축
- Drawing Tool 및 Backend API 연동
- Next.js + Node.js + PM2 + Nginx 기반 배포 (AWS EC2)

## 결과

PoC에서 구현한 기능은 이후 **아트봉봉스쿨(B2G 디지털 미술 교육 서비스) 학생 서비스의 AI 기능으로 확장**되었습니다.

[아트봉봉스쿨 AI 기능 개발 기록](./school.md)
