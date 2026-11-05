# 공공기관 SSO 연동

## 배경

새올 시스템에서 인증된 공무원이 별도 로그인 없이 AI 민원 시스템에 진입할 수 있도록 외부 SSO 솔루션과 서비스의 인증 체계를 연동했습니다.

## 구현

- **SSO 사용자 조회 및 인증 코드 발급**

  외부 SSO 솔루션은 Tomcat 컨테이너에서 동작하는 환경이었습니다. SSO 인증 성공 후 세션에서 사용자 정보를 조회하는 Java Servlet을 구성하고, 조회한 정보로 FastAPI에 짧은 유효기간의 일회용 인증 코드 발급을 요청했습니다.

- **브라우저 모드 간 인증 연결**

  IE 모드와 일반 Edge 간 세션 쿠키가 공유되지 않는 제약에 대응해, 일회용 인증 코드를 URL 파라미터로 Next.js Route Handler에 전달했습니다. Route Handler에서 FastAPI에 코드를 전달해 서비스용 JWT로 교환하고, JWT를 쿠키에 저장한 뒤 서비스 루트 경로로 리다이렉트하도록 구현했습니다.

- **요청별 인증 검증 및 실패 처리**

  Next.js Proxy에서 서비스 요청마다 인증 정보의 유효성을 검증하고, 토큰 만료 또는 인증 실패 시 오류 페이지로 리다이렉트하도록 처리했습니다.

## 검증 결과

새올 시스템에 로그인한 사용자가 별도 로그인 없이 AI 민원 시스템에 진입하는 것을 확인했습니다.

### 인증 연동 구성

일회용 인증 코드 방식의 개선 완료 후 사용할 구성입니다.

<ol class="flow-diagram" aria-label="SSO 인증 연동 구성">
<li><strong>새올 SSO → Java / Tomcat Servlet</strong><span>브라우저 진입 · SSO 세션에서 사용자 정보 조회</span></li>
<li><strong>Servlet → FastAPI 인증 API</strong><span>사용자 정보 전달 · 일회용 인증 코드 발급 요청</span></li>
<li><strong>Servlet → Next.js Route Handler</strong><span>브라우저 리다이렉트 · URL 파라미터로 인증 코드 전달</span></li>
<li><strong>Route Handler → FastAPI 인증 API</strong><span>인증 코드를 서비스용 JWT로 교환</span></li>
<li><strong>Route Handler → 서비스 루트</strong><span>JWT 쿠키 저장 · 브라우저 리다이렉트</span></li>
<li><strong>Next.js Proxy</strong><span>요청별 인증 검증 · 토큰 만료 또는 인증 실패 시 오류 페이지로 리다이렉트</span></li>
</ol>

※ 일회용 인증 코드 방식으로 개선을 완료한 후 사용할 문안입니다.
