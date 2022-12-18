---
title: "CodeStates Pre [week 4]"
date: '2021-09-13'
category: 'CodeStates'
summary: "CodeState Pre course 4주차 기록입니다."
thumbnail: './images/codestate-software-engineer.jpeg'
---

## 📆 &nbsp; 2021. 09. 13 (월)

**☕️ &nbsp; 여유롭다 여유로워~**

일정상으로는 지난주에 이어 DOM sprint를 진행해야 했다. 하지만 지난 주에 sprint를 모두 끝내서 할 게 없어졌다. 페어 분과 상의하여 회원가입화면에 추가할 기능에 대해 상의하고 몇 가지를 추가해 보는 것으로 sprint를 추가로 진행했다. 지난주에 사용하지 못한 정규표현식을 이용하여 특수 문자 사용을 제한하는 기능도 넣어 보았다.

{% gist 11a4738176e6f028665709ee5b4de4b9 %}

해당 기능에 사용된 코드들만 가져와 봤다. 맨 위에 let 변수들은 JS를 이용하여 원시 자료형인 변수의 값을 조회하기 위해 사용되었다. InputUsername은 아이디에 해당하는 태그이고 UnavalbleMessage는 아이디에 특수문자가 입력되었을 때 표시할 문자열을 입력한 태그이다. 이후 정규표현식을 이용하여 isUnabalableChar 함수를 만들어 주었고 이벤트 핸들러(onkeyup)를 이용하여 특수문자가 입력되면 미리 지정한 문자열이 표시되도록 해주었다.

![](https://images.velog.io/images/quato/post/d414d8bb-c1cc-49f9-b277-4c2a5c08b8ee/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.14.41.png)

추가로 진행한 sprint도 생각 보다 일찍 끝나서 3시간 정도 여유가 생겼다. 최근에 겪어보지 못했던 여유라 무엇을 해야 할까 고민하다 페어 분과 zoom을 켜둔 상태로 자습을 진행하기로 했다. 서로 공부를 하다가 모르는 부분이 생기면 물어보는 방식으로 진행했다.

이전에 coplit 문제 중 헷갈리는 문제나 다른 방식으로 푼 경험을 공유했다. 앞으로 정규 시간 중 이런 여유가 생길지 모르겠다. 그래도 프로그램을 잘 따라가고 있다는 느낌을 많이 받을 수 있는 하루였다.😄

&nbsp;

## 📆 &nbsp; 2021. 09. 14 (화)

**🛫&nbsp; 높다 높아 高차함수**

고차함수에 관하여 학습했다. 처음 이름을 들었을 때 어려운 수학 공식 같은 느낌이 확 들어서 문과생인 나에게는 왠지 모를 거부감이...😅 하지만 개념에 대해 학습해보니 새로운 개념이 아니라 지금까지 배워왔던 함수의 응용 버전이었다. 고차 함수란 함수를 인자로 전달받거나 함수를 결과로 반환하는 함수를 말한다. 그러므로 다른 함수를 인자로 받는 경우, 함수를 반환하는 경우, 함수를 인자로 받고, 함수를 반환하는 경우 3가지가 있다. 함수안에 함수라 점점 복잡해진다.😱

또한 배열 내장 고차함수 filter, map, reduce에 관해서도 학습했다. 배열의 filter 메소드는, 모든 배열의 요소 중에서 특정 조건을 만족하는 요소를 걸러내는 기능을 하며 지금까지 조건문을 이용하여 긴 코드를 작성해 왔는데 filter 메소드를 사용하니 코드가 획기적으로 줄어서 자주 사용하지 않을까 싶다. map 메소드는 배열의 각 요소를 특정 논리에 의해 다른 요소로 지정하는 메소드이며 reduce 메소드는 배열의 각 요소를 특정 방법에 따라 원하는 하나의 형태로 응축하는 기능을 가진다. reduce는 두가지 인자를 받으며 첫 번째 인자는 누적값, 두 번째 인자는 선택 값을 가지며 원하는 대로 사용이 가능하다.

아래의 coplit 문제는 학습한 filter, map, reduce를 사용하여 풀었다. referrence와는 차이가 있지만 세 가지 메소드의 기능을 잘 보여주는 문제여서 가져오게 되었다.

{% gist bc2783db57da15979646ec4d1f5c2c5c %}

&nbsp;

## 📆 &nbsp; 2021. 09. 15 (수)

**☁️ &nbsp; 뜬 구름 잡기**

React를 학습하면서 이전에 HTML, CSS, JS를 배웠을 때 보다 뭔가를 개발한다는 느낌을 많이 받았다. 하지만 그만큼 이해가 힘들기도 했다.😩 지금까지는 처음 학습 시 70% 정도를 이해하고 나머지 30%를 추가로 학습하는 느낌이었다면 React는 30%를 이해하고 70%는 도저히 감이 오지 않았다. JavaScript에 나머지를 다 같이 넣는다는 개념인 것 같은데 왜 이렇게 이해가 안 갈까? React는 이해하는 데 많은 시간이 필요할 것 같다.

React는 프론트 엔드 개발을 위해 2013년 페이스북에서 선보인 자바스크립트 📚 라이브러리이다. 선언형, 컴포넌트 기반, 범용성이라는 3가지 특징을 가지고 있다. 선언형이란 HTML, CSS, JS를 각각 작성하지 않고 하나의 파일에 명시적으로 작성하는 것을 의미하며 이를 가능하게 해주는 것이 JSX이다. JSX는 JavaScript를 확장한 문법이다. 하지만 JSX는 브라우저에서 바로 실행할 수 없으며 브라우저가 이해할 수 있는 JavaScript 코드로 변환해주어야 한다. 이때 이용하는 것이 “Babel”이다. Babel은 JSX를 브라우저가 이해할 수 있는 JavaScript로 컴파일한다. DOM에서 JavaScript와 함께 사용하기 위해서는 JavaScript와 HTML을 연결하기 위한 작업이 필요했다. 하지만 React에서는 JSX를 이용해서 DOM 코드보다 명시적으로 코드를 작성할 수 있다. 그러므로 기능과 구조를 한눈에 확인할 수 있다.

또한, React는 기능 구현을 위해 컴포넌트를 기반으로 개발한다. 컴포넌트란 구조와 동작에 대한 코드를 한 뭉치로 적은 코드셋을 의미하며 컴포넌트를 분리하면 서로 독립적이고 재사용이 가능하기 때문에 기능 자체에 집중하여 개발할 수 있다.

모든 React 애플리케이션은 최소 한 개의 컴포넌트를 가지고 있으며, 이 컴포넌트는 애플리케이션 내부적으로는 🌴 근원이 되는 역할을 한다. 최상위 컴포넌트는 근원의 역할을 하므로 다른 자식 컴포넌트를 가질 수 있다. 이 계층적 구조(hierarchy)를 트리 구조로 형상화할 수 있다. 이렇게 독립적인 컴포넌트들을 여러 개 만들고 이들을 한데 모아 복잡한 UI를 구성할 수도 있고, 더 나아가 최종적으로는 복잡한 애플리케이션도 만들 수 있다.

애플리케이션을 React를 이용하여 컴포넌트 기반으로 만들게 되면 컴포넌트는 각자의 기능을 가지고 있고, UI의 한 부분을 담당하고 있기 때문에 원하는 수정사항에 맞추어 기존 컴포넌트의 위치만 변경해주면 되므로 수정이 간편하다.

마지막으로 React는 Javascript 프로젝트 어디에든 유연하게 적용할 수 있다. Facebook에서 관리되어 안정적이고, 가장 유명하며, 리액트 네이티브로 모바일 개발도 가능하다.

&nbsp;

## 📆 &nbsp; 2021. 09. 16 (목)

**🔗&nbsp; 너와 나의 연결고리**

두 번째 React 학습을 진행했다. React Router를 이용하여 간단한 SPA(Single Page Application)를 만들어 보았다. 주된 학습 키워드는 BrowserRouter, Switch, Route, Link이다. 이를 이용하여 각 페이지를 유기적으로 연결하여 하나의 페이지처럼 보이게 만드는 것이다. 오늘도 30% 이해를 바탕으로 고군분투했다.😫

```js
import React from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">MyPage</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <MyPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
```
BrowserRouter는 웹 애플리케이션에서 HTML5의 History API를 사용해 페이지를 새로고침하지 않고도 주소를 변경할 수 있는 역할을 해준다. ReactDOM의 렌더 단계인 index.js 에 넣어서 활용할 수도 있다. BrowserRouter가 상위에 작성되어 있어야 Route 컴포넌트를 사용할 수 있다.

Switch, Route는 경로를 매칭해주는 역할을 하는 컴포넌트이다. Switch 컴포넌트는 여러 Route를 감싸서 그 중 경로가 일치하는 단 하나의 라우터만 렌더링해주는 역할을 합니다. Switch를 사용하지 않으면 매칭되는 모든 요소를 렌더링한다. Route 컴포넌트는 path 속성을 지정하여 해당 path에 어떤 컴포넌트를 보여줄지 정한다. Link 컴포넌트가 정해주는 URL 경로와 일치하는 경우에만 작동됩니다.

Link 컴포넌드는 to 속성을 활용하여 Route 컴포넌트에 설정해준 path 주소를 연결해준다. 페이지 전환을 통해 페이지를 새로 불러오지 않고 애플리케이션을 그대로 유지하여 HTML5 History API를 이용해 페이지의 주소만 변경해 준다. React Router에서 a태그가 아닌 Link를 사용하는 이유는 a태그는 페이지를 전환하는 과정에서 페이지를 불러오기 때문에 처음부터 렌더링을 진행한다. 즉, 새로고침 현상이 일어나게 된다. 하지만 Link 컴포넌트는 페이지 전환을 방지하는 기능이 내장되어있기 때문에 SPA를 구현할 수 있다.

React router는 특성상 exact속성이 없으면 해당 경로(예시의 "/")로 시작하는 중복된 Route 컴포넌트를 모두 보여줍니다. 따라서 exact를 사용함으로 인해 주어진 경로와 정확히 일치하는 Route 컴포넌트를 보여주는 역할을 한다. exact를 사용하지 않는 경우에는 Switch가 exact의 역할을 대신해준다. 하지만 Switch는 순서와 위치가 중요하다. 비교할 Route를 더 상단에 작성해야 정상적으로 작동하며 위 예제처럼 작성할 경우 다른 Route로의 이동이 불가능하다.

React는 배울수록 어려운 것 같다. 부지런히 따라가자!!😆

&nbsp;

## 📆 &nbsp; 2021. 09. 17 (금)

**🎁 &nbsp; 선물 같은 한 주**

React 기초의 마지막 학습은 props와 state의 개념을 이해하고 이벤트 핸들링을 이용하여 최종적으로 Twittler가 정상적으로 작동할 수 있도록 구현하는 것이다. 실습은 5주 차 월요일까지 진행되며 오늘은 학습한 개념에 대한 설명 위주로 작성하겠다.

**Props**

props는 컴포넌트의 속성(property)을 의미한다. props는 상위 컴포넌트로부터 전달받은 변하지 않는 값이다. 또한 props는 어떤 타입의 값도 넣어 전달할 수 있도록 객체의 형태를 가진다. 결론적으로 props는 변경될 수 없는 읽기 전용 객체이다. 만약 props를 전달받은 하위 컴포넌트 내에서 props의 수정이 가능하다면 props를 전달한 상위 컴포넌트의 값에 영향을 미칠 수 있게 된다. 즉, React의 단방향, 하향식 데이터 흐름 원칙에 위배된다.

props를 사용하는 방법은 3단계 순서로 나눌 수 있다. 먼저 하위 컴포넌트에 전달하고자 하는 값과 속성을 정의한다. 두 번째 props를 이용하여 정의된 값과 속성을 전달한다. 세 번째 전달받은 props를 렌더링한다.

```js
function Parent() {
  return (
    <div className="parent">
      <h1>I'm the parent</h1>
      <Child text={"I'm the eldest child"} />
      <Child />
    </div>
  );
}

function Child(props) {
  console.log("props : ", props);
  return (
    <div className="child">
      <p>{props.text}</p>
    </div>
  );
}
```

우선 Parent와 Child라는 컴포넌트를 선언하고, Parent 컴포넌트 안에 Child 컴포넌트를 작성한다. 그리고 text라는 속성을 선언하고, 이 속성에 "I'm the eldest child"라는 문자열 값을 할당하여 Child 컴포넌트에 전달해준다.

Paraent 컴포넌트에서 전달한 문자열을 받기 위해서는 함수에 인자를 전달하듯이 React 컴포넌트에 props를 전달하면 props가 필요한 모든 데이터를 가지고 온다.

마지막으로 props를 렌더링해준다. 렌더링을 하기 위해서는 JSX 안에 직접 불러서 사용하면 된다. 다만, props는 객체이고, 객체의 { key : value }는 Parent 컴포넌트에서 정의한 { attribute : value }의 형태를 띠게 된다. 따라서 dot notation을 사용하는 것과 동일하게 props의 value 또한 dot notation으로 접근할 수 있다.

```js
const App = () => {
  const itemOne = "React를";
  const itemTwo = "배우고 있습니다.";

  return (
    <div className="App">
      <Learn>{itemOne} {itemTwo}</Learn>
      <Learn />
    </div>
  );
};

const Learn = (props) => {
  return <div className="Learn">
    <p>{props.children}</p>
  </div>;
};
```

props를 전달하는 또 다른 방법으로 여는 태그와 닫는 태그의 사이에 value를 넣어 전달할 수 있다. 이 경우 props.children을 이용하면 해당 value에 접근하여 사용할 수 있다.

**State**

State는 Props와 달리 컴포넌트 내부에서 변할 수 있는 값이다. React에서는 state를 다루는 방법 중 하나는 useState라는 특별한 함수를 사용하는 것이다. useState를 이용하기 위해서는 React로부터 useState를 불러와야 한다.

```js
import React, { useState } from "react";

function CheckboxExample() {
  console.log("rerendered?");
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="App">
      <input type="checkbox" checked={isChecked} onChange={handleChecked} />
      <span>{isChecked ? "Checked!!" : "Unchecked"}</span>
    </div>
  );
}

export default CheckboxExample;
```

useState를 호출하면 배열을 반환하는데, 배열의 0번째 요소는 현재 state 변수이고, 1번째 요소는 이 변수를 갱신할 수 있는 함수입니다. useState의 인자로 넘겨주는 값은 state의 초기값입니다.

state를 갱신하려면 state 변수를 갱신할 수 있는 함수인 setIsChecked를 호출해야한다. 사용자가 체크 박스 값을 변경하면 onChange 이벤트가 이벤트 핸들러 함수인 handleChecked를 호출하고, 이 함수가 setIsChecked를 호출하게 된다. setIsChecked가 호출되면 호출된 결과에 따라 isChecked 변수가 갱신되며, React는 새로운 isChecked 변수를 CheckboxExample 컴포넌트에 넘겨 해당 컴포넌트를 다시 렌더링한다.

배운 개념을 바탕으로 sprint를 진행했고 state와 props를 사용하기 전 단계까지 마무리하였다. 다다음 주 월요일에 진행될 두 번째 sprint에서 오늘 배운 내용을 바탕으로 sprint를 마무리할 예정이다. 다음 주에는 추석 연휴가 겹쳐 한 주 동안은 수업이 진행되지 않는다. 5주 차 화요일부터 HA를 치르기 때문에 지금까지 학습한 내용을 복습할 시간이 필요했는데 다행히 추석으로 인해 공부할 시간을 넉넉히 벌 수 있게 되었다.👍🏻