# Multimodal Embedding 모델 전환

## 배경

기존 Vision Indexing Pipeline을 분석하는 과정에서 **Multimodal Embedding이 정상적으로 처리되지 않고 있음을 확인**했습니다. 당시 Default Model인 `gemini-embedding-001`이 Multimodal Embedding을 지원하지 않는 것을 확인했습니다.

## 내용

### 대안 비교

| 대안 | 장점 | 고려 사항 |
| --- | --- | --- |
| 전체 Default Embedding Model 변경 | 기존 시스템 구조 유지 | 기존 Index 재인덱싱 필요, Embedding 비용 증가 가능 |
| Vision 기능이 활성화된 Collection에만 별도 Multimodal Model 적용 | 재인덱싱 범위 제한 | Collection별 Model 관리 필요, 기존 전역 Default Model 구조 변경 |

### 판단 기준

Multimodal 지원 여부, 기존 Vector Dimension 호환성, 시스템 변경 범위, 재인덱싱 영향과 비용을 함께 검토했습니다.

검토 당시 `gemini-embedding-2`의 비용은 기존 `gemini-embedding-001` 대비 약 3배였지만, **전체 모델 사용 비용에서 Embedding이 차지하는 비중은 크지 않았습니다.** 또한 향후 채팅 검색을 이미지 등 시각 정보까지 확장할 가능성을 고려했습니다.

이에 비용 증가와 기존 Index 재인덱싱을 감수하더라도, **Collection별 모델을 별도로 관리하지 않고 전역 Default Model을 전환하는 방향**을 선택했습니다.

기존 Vector Dimension을 유지하면서 Multimodal Embedding을 지원하는 **`gemini-embedding-2`를 Default Model로 전환했습니다.**
