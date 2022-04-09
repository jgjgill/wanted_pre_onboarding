# wanted_pre_onboarding
## 프로젝트 세팅
CSS: tailwindcss 사용

폴더 구조 설정: App.jsx에 모든 컴포넌트 배치
#
## Toggle

### 구현 방법
-useState를 활용해서 Toggle 상태 관리(true일 경우 왼쪽 토글, false일 경우 오른쪽 토글)

-슬라이드 애니메이션 적용위해 배경색 태그 따로 설정(position, translate 활용)

### 생각하기
-토글이 왼쪽, 오른쪽으로 되어있어서 useState 상태값을 true, false로 구분하면 명확하지 않을 수 있다고 생각

-객체로 왼쪽 값과 오른쪽 값으로 설정할 수도 있었지만 코드가 길어지는 단점

-이번 경우는 간결한게 좋을 것 같아서 true, false로 결정

#
## Tab

### 구현 방법
-useState을 활용해서 Tab 상태 관리(Tab의 이름으로 토글 설정)

-Tab의 영역은 배열로 관리

-Tab 상태와 이름이 일치하면 그에 맞는 CSS 설정

### 생각하기
-배열로 Tab을 관리해서 Tab 영역을 관리할 때 용이하게 하려 했지만 CSS는 일일이 수정해야 하는 단점

#
## Slider

### 구현 방법
-input에서 range 사용해서 슬라이더 구현

-useState를 활용해서 슬라이더의 value값 할당

-option에도 슬라이더의 value값 할당해서 상태값 변경 가능하게 구현

### 생각하기
-input의 range에서 스타일 구현에서 어려움 느낌
