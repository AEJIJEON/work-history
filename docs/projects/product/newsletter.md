# 뉴스레터 콘텐츠 수집 자동화

## 배경

뉴스레터 제작 과정에서 콘텐츠 수집에 **4명이 각각 약 4시간**을 사용하는 반복 작업이 있었습니다.

## 구현

기존 AWS Batch 환경에서 RSS 콘텐츠 수집과 리포팅을 위한 **두 개의 Scheduler Job 로직을 구현했습니다.**

### Job 1 — 콘텐츠 수집

```text
RSS Source → RSS Parsing / Collection → Content DB 저장
```

### Job 2 — 리포팅

```text
Content DB 조회 → CSV 생성 → Slack 전송
```

## 결과

| 항목 | 변화 |
| --- | --- |
| 콘텐츠 수집 | 4명이 각각 약 4시간 수행하던 수작업 자동화 |
| 뉴스레터 한 회차 제작 투입 인원 | 4명 → 2명 |
