# Index 및 Chunk 조회 기능

## 배경

LLM 처리 과정에서 블랙박스로 보이던 Vector 검색 데이터를 서비스 화면에서 직접 확인할 수 있는 기능이 필요했습니다.

## 내용

기존 Qdrant 기반 데이터 저장 구조를 분석하고, 다음 데이터를 조회할 수 있는 Frontend와 Backend API를 구현했습니다.

- File / DB Index 목록
- Chunk 상세 데이터
- Vision Index 데이터

**AI 응답에 사용되는 검색 데이터를 서비스 화면에서 확인하고 추적할 수 있는 구조**를 만들었습니다.
