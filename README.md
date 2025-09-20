# 🧠 내 안에 숨어있는 직업캐 찾기 - MBTI 데이터 탐험가

> **"내게 찰떡인! 데이터 탐험 타입은?"**

MBTI 성격 유형을 기반으로 한 직업 성향 테스트 웹사이트입니다. 사용자의 성격을 분석하여 가장 적합한 데이터 관련 직업을 추천해드립니다.

## 데모 사이트

[**🚀 지금 테스트해보기**](https://fantastic-hummingbird-e9c0f2.netlify.app/)

### 데모 영상

![화면 기록 2025-09-20 오후 6 57 04](https://github.com/user-attachments/assets/d5ccc90b-029a-4e26-b24f-5369eab1fca8)


## 프로젝트 개요

이 프로젝트는 MBTI 성격 유형을 활용하여 사용자에게 맞는 데이터 관련 직업을 추천하는 인터랙티브 웹 애플리케이션입니다.

### 주요 기능

- **성격 유형 테스트**: MBTI 기반 질문을 통한 성격 분석
- **실시간 점수 계산**: 사용자 응답에 따른 즉시 점수 집계
- **직업 추천**: 데이터 분석가, 데이터 사이언티스트, 비즈니스 인텔리전스 전문가 등
- **결과 공유**: 소셜 미디어를 통한 결과 공유 기능
- **진행 상태 저장**: 테스트 중단 시에도 이어서 진행 가능
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 환경 지원


## 기술 스택

### Frontend

- **HTML5**: 시맨틱 마크업
- **CSS3**: 반응형 디자인, 애니메이션
- **Vanilla JavaScript**: ES6+ 문법 활용
- **Pretendard Variable**: 웹폰트

### 테스트 엔진 & 데이터 처리

- **JavaScript 알고리즘**: MBTI 점수 계산 로직
- **Local Storage**: 사용자 응답 데이터 저장
- **Session Storage**: 테스트 진행 상태 관리
- **JSON 데이터 구조**: 질문과 결과 데이터 관리
- **조건부 렌더링**: JavaScript 기반 동적 결과 표시
- **점수 집계 시스템**: E/I, S/N, T/F, J/P 차원별 점수 계산

### 배포 & 호스팅

- **Netlify**: 정적 사이트 호스팅
- **GitHub Pages**: 소스 코드 관리

### SEO & 소셜 미디어

- **Open Graph**: 페이스북, 카카오톡 공유 최적화
- **Twitter Cards**: 트위터 공유 최적화
- **메타 태그**: 검색 엔진 최적화

## 프로젝트 구조

```
mbti-data-explorer-hiding-inside-me/
├── index.html          # 메인 페이지
├── questions.html      # 질문 페이지
├── results.html        # 결과 페이지
├── css/               # 스타일시트
├── js/                # JavaScript 파일
├── images/            # 이미지 리소스
│   ├── demo.gif       # 데모 영상
│   ├── test-progress.gif # 테스트 진행 과정
│   └── result-screen.gif # 결과 화면
├── favicon.ico        # 파비콘
└── README.md          # 프로젝트 문서
```

### 스크린샷

[메인 페이지]
<img width="1263" height="1059" alt="스크린샷 2025-09-20 오후 6 45 50" src="https://github.com/user-attachments/assets/b1e6354f-f3ab-476e-a002-f2568ad1e3c3" />


[질문 페이지]
 <img width="1267" height="800" alt="스크린샷 2025-09-20 오후 6 48 31" src="https://github.com/user-attachments/assets/9c0545af-0c68-4680-ac2f-927fa41c86b0" />
<img width="1267" height="800" alt="스크린샷 2025-09-20 오후 6 48 45" src="https://github.com/user-attachments/assets/c271c5f9-215b-47e6-b903-5abb434cf0ce" />


[결과 페이지]
<img width="1263" height="1271" alt="스크린샷 2025-09-20 오후 6 49 06" src="https://github.com/user-attachments/assets/727b80e2-e0a9-4aa7-8f35-890e5817d93c" />



## 주요 특징

### 반응형 디자인

- 모바일 우선 설계 (Mobile First)
- 모든 디바이스에서 최적화된 사용자 경험
- 터치 친화적 인터페이스

### 사용자 경험

- 직관적인 질문 진행
- 시각적 피드백
- 결과 공유 기능
- 빠른 로딩 속도

### SEO 최적화

- 메타 태그 최적화
- 소셜 미디어 공유 최적화
- 검색 엔진 친화적 구조

## MBTI 유형별 추천 직업

| MBTI 유형 | 추천 직업           | 특징                            |
| --------- | ------------------- | ------------------------------- |
| **INTJ**  | 데이터 아키텍트     | 체계적이고 전략적인 데이터 설계 |
| **INTP**  | 데이터 사이언티스트 | 복잡한 문제 해결과 분석         |
| **ENTJ**  | 데이터 전략가       | 비즈니스 인사이트 도출          |
| **ENTP**  | 혁신 데이터 분석가  | 창의적 데이터 활용              |
| **INFJ**  | 데이터 스토리텔러   | 데이터를 통한 인사이트 전달     |
| **INFP**  | 데이터 윤리 전문가  | 데이터의 윤리적 사용            |
| **ENFJ**  | 데이터 교육자       | 데이터 리터러시 교육            |
| **ENFP**  | 데이터 마케터       | 데이터 기반 마케팅              |

## 테스트 알고리즘

### 데이터 흐름

1. **질문 데이터**: JSON 형태로 구조화된 질문과 선택지
2. **응답 수집**: 사용자 선택을 실시간으로 저장
3. **점수 계산**: 4개 차원(E/I, S/N, T/F, J/P)별 점수 집계
4. **결과 매핑**: 계산된 MBTI 유형을 직업 데이터와 매칭
5. **결과 렌더링**: 동적으로 결과 페이지 생성

### 상태 관리

- **Local Storage**: 완료된 테스트 결과 영구 저장
- **Session Storage**: 현재 진행 중인 테스트 상태
- **DOM 조작**: JavaScript로 동적 UI 업데이트

## 디자인 시스템

### 색상 팔레트

- **Primary**: 데이터 블루 (#2563EB)
- **Secondary**: 분석 그린 (#10B981)
- **Accent**: 인사이트 퍼플 (#8B5CF6)
- **Neutral**: 그레이 스케일 (#6B7280)

### 타이포그래피

- **Font Family**: Pretendard Variable
- **Headings**: 700 weight
- **Body**: 400 weight
- **Captions**: 300 weight

