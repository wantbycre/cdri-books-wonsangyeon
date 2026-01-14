# 씨디알아이(CDRI) BOOKS - 프론트엔드 사전과제

## 프로젝트 개요

Kakao 도서 검색 API를 활용한 도서 검색 및 장바구니 관리 서비스
기능 구현, 상태 관리, 컴포넌트 재사용의 주요기능

---

## 실행방법 및 환경설정

```bash
npm i
#or
yarn install
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

---

## 폴더 구조 및 주요 코드 설명

-   app/ Next App router 기반 한 페이지 라우팅 레이아웃
-   component/ 단위컴포넌트 및 UI 컴포넌트
-   services/ API 로직
-   hooks/ react-query 재사용 로직
-   store/ Atom 전역 관리, 로컬스토리자 설정
-   type/ typescript 모듈 관리

---

## 라이브러리 선택 이유

-   react-query
    에러 및 상태(loading)관리 효율성과 데이터패칭을 수동으로 관리할수 있어 사용

-   jotai
    Provider 없이 전연 상태관리를 빠르게 구독할수 있어 사용,
    localStorage의 효율적인 관리 편의성으로 사용

-   shadcn/ui
    필요 라이브러리만 설치하여 번틀 크기 최적화,
    tailwind기반의 사용과 효율적인 커스텀이 가능하여 사용

---

## 강조 하고 싶은 기능

-   react-query의 데이터를 books/keyword/cart주요 기능 Atom 동기화 하여
    여러 컴포넌트의 동일 상태와 동일 데이터관리를 할수 있도록 설정

-   atomWithStorage의 속성을 이용한 조건(키워드, 찜)의 기능을 구현

-   Next의 Image, fill, sizes를 사용한 이미지 최적화 구현

---

## stack

-   nextjs
-   typescript
-   tailwind
-   react-query
-   jotai
-   shadcn

---

## 기타

-   기획 및 디자인 링크 :
    [https://www.figma.com/file/BJNLVThe9zQ0emBKxZq1h8/30COS-Books?node-id=0%3A1](https://www.figma.com/file/VHM0w7IBWLaaCJp0l9Mkff/30COS-Books?node-id=18%3A608)
-   API 문서 링크 : API 발급 튜토리얼, 다음 검색 - 책
-   https://developers.kakao.com/docs/latest/ko/getting-started/quick-start
-   https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-book
