# Multimodal Embedding 모델 전환

## 배경

Vision Indexing Pipeline을 분석하던 중 이미지 임베딩이 벡터 DB에 적재되지 않는 현상을 발견했습니다. 원인을 조사한 결과, 기본 모델인 `gemini-embedding-001`이 Multimodal Embedding을 지원하지 않는 것을 확인했습니다.

## 대안 비교

| 대안 | 장점 | 고려 사항 |
| --- | --- | --- |
| 기본 임베딩 모델 변경 | 기존 전역 모델 설정 구조 유지 | 기존 인덱스 재인덱싱 필요, 임베딩 비용 증가 |
| Vision Collection에만 별도 모델 적용 | 모델 변경을 Vision Collection으로 한정해 재인덱싱 범위와 추가 임베딩 비용 축소 | 기존 전역 Default Model 설정 구조를 Collection별 모델 관리 구조로 변경 필요 |

## 판단 및 구현

Multimodal 지원 여부, 벡터 차원 호환성, 시스템 변경 범위, 재인덱싱 영향과 비용을 검토했습니다.

당시 비교한 요금 기준으로 `gemini-embedding-2`의 단가는 기존 모델 대비 약 3배였습니다. Vision Collection에만 적용하면 재인덱싱 범위와 추가 비용을 줄일 수 있었지만, Collection별 모델 관리 구조로 변경해야 했습니다.

비용 증가와 재인덱싱을 감수하더라도 기존 전역 설정 구조를 유지해 모델 관리를 단순화하는 방향을 선택했습니다. 기존 벡터 차원을 유지하도록 `gemini-embedding-2`를 기본 모델로 설정했습니다.

## 검증

모델 전환 후 테스트 이미지의 임베딩이 Qdrant에 정상 적재되는 것을 확인해, 이미지 임베딩 파이프라인이 정상 동작하도록 수정했습니다.
