# 공공기관 SSO 연동

## 배경

새올 시스템에서 인증된 공무원이 별도 로그인 없이 AI 민원 시스템에 진입할 수 있도록 **외부 SSO 솔루션과 신규 서비스의 인증 체계를 연동**해야 했습니다.

## 내용

- Java/Tomcat Servlet을 구축해 외부 SSO의 인증 세션에서 사용자 정보를 조회했습니다.
- 조회한 사용자 정보를 FastAPI 인증 API와 연동해 서비스용 JWT를 발급했습니다.
- Next.js Route Handler를 구현해 외부 시스템에서 진입하는 인증 흐름을 처리했습니다.
- 인증 완료 후 AI 민원 시스템으로 연결되는 SSO 로그인 흐름을 구현했습니다.

### 인증 연동 구성

각 구성 요소의 역할과 인증 정보의 전달 관계를 나타낸 도식입니다.

<ol class="flow-diagram" aria-label="SSO 인증 연동 구성">
<li><strong>새올 SSO</strong><span>기존 공무원 인증 세션</span></li>
<li><strong>Java / Tomcat Servlet</strong><span>SSO 세션의 사용자 정보 조회</span></li>
<li><strong>FastAPI 인증 API</strong><span>사용자 정보 연동 · 서비스용 JWT 발급</span></li>
<li><strong>Next.js Route Handler</strong><span>외부 진입 인증 흐름 처리</span></li>
<li><strong>AI 민원 시스템</strong><span>인증 완료 후 서비스 진입</span></li>
</ol>

## 결과

새올 시스템에서 인증된 공무원이 **별도 로그인 없이 AI 민원 시스템에 진입할 수 있도록 연동**했습니다.
