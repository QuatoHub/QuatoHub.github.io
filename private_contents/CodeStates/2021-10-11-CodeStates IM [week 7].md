---
title: "CodeStates IM [week 7]"
date: '2021-10-11'
category: 'CodeStates'
summary: "CodeState Pre IM 7주차 기록입니다."
thumbnail: './images/codestate-software-engineer.jpeg'
---

## 📆 &nbsp; 2021. 10. 11 (월)

**🇰🇷&nbsp; 한글날 대체공휴일**

## 📆 &nbsp; 2021. 10. 12 (화)

**🔎&nbsp; DFS❓ BFS❓ BTS❗️**

자료구조 마지막 학습이다. 시작부터 끝까지 쉬운게 하나도 없다...😫

재귀함수와 자료구조는 HA에서도 비중있게 나온다고 한다. 주말에 coplit을 다시 한번 풀어봐야겠다.

오늘 배운 개념은 DFS와 BFS로 그래프의 모든 정점을 탐색하는 방법이다. 두 가지가 대표적인 방법으로 데이터를 탐색하는 순서만 다를 뿐, 모든 자료를 하나씩 확인해 본다는 점은 같다.

&nbsp;

> **깊이 우선 탐색 (DFS, Depth-First Search)**

: 최대한 깊이 내려간 뒤, 더이상 깊이 갈 곳이 없을 경우 옆으로 이동한다.

![](https://images.velog.io/images/quato/post/0e74aa8b-19c9-4a73-887f-ace14641def3/ezgif.com-gif-maker.gif)

루트 노드(혹은 다른 임의의 노드)에서 시작해서 다음 분기(branch)로 넘어가기 전에 해당 분기를 완벽하게 탐색하는 방식을 말한다.

예를 들어, 미로찾기를 할 때 최대한 한 방향으로 갈 수 있을 때까지 쭉 가다가 더 이상 갈 수 없게 되면 다시 가장 가까운 갈림길로 돌아와서 그 갈림길부터 다시 다른 방향으로 탐색을 진행하는 것이 깊이 우선 탐색 방식이라고 할 수 있습니다.

1. 모든 노드를 방문하고자 하는 경우에 이 방법을 선택한다.

2. 깊이 우선 탐색(DFS)이 너비 우선 탐색(BFS)보다 좀 더 간단하다.

3. 검색 속도 자체는 너비 우선 탐색(BFS)에 비해서 느리다.

&nbsp;

> **너비 우선 탐색 (BFS, Breadth-First Search)**

: 최대한 넓게 이동한 다음, 더 이상 갈 수 없을 때 아래로 이동한다.

![](<https://images.velog.io/images/quato/post/29cc2a80-ac27-4b67-920d-82f3a113677a/ezgif.com-gif-maker%20(1).gif>)

루트 노드(혹은 다른 임의의 노드)에서 시작해서 인접한 노드를 먼저 탐색하는 방법으로, 시작 정점으로부터 가까운 정점을 먼저 방문하고 멀리 떨어져 있는 정점을 나중에 방문하는 순회 방법입니다.

주로 두 노드 사이의 최단 경로를 찾고 싶을 때 이 방법을 선택합니다.

ex) 지구 상에 존재하는 모든 친구 관계를 그래프로 표현한 후 Sam과 Eddie사이에 존재하는 경로를 찾는 경우

- 깊이 우선 탐색의 경우 - 모든 친구 관계를 다 살펴봐야 할지도 모름

- 너비 우선 탐색의 경우 - Sam과 가까운 관계부터 탐색

&nbsp;

> **깊이 우선 탐색(DFS) 과 너비 우선 탐색(BFS) 비교**

![](<https://images.velog.io/images/quato/post/93751bde-54d4-4794-bca2-3b7221e79597/ezgif.com-gif-maker%20(2).gif>)

**DFS(깊이 우선 탐색)**

- 현재 정점에서 갈 수 있는 점들까지 들어가면서 탐색한다.  
- 스택 또는 재귀함수로 구현한다.

**BFS(너비 우선 탐색)**

- 현재 정점에 연결된 가까운 점들부터 탐색한다.  
- 큐를 이용해서 구현한다.

&nbsp;

> **DFS와 BFS의 시간복잡도**

두 방식 모두 조건 내의 모든 노드를 검색한다는 점에서 시간 복잡도는 동일하다.  
DFS와 BFS 둘 다 다음 노드가 방문하였는지를 확인하는 시간과 각 노드를 방문하는 시간을 합하면 된다.

N은 노드, E는 간선일 때❓

`인접 리스트` : $O(N+E)$  
`인접 행렬` : $O(N^2)$

- 일반적으로 E(간선)의 크기가 $N^2$ 에 비해 상대적으로 적기 때문에 인접 리스트 방식이 효율적이다.

&nbsp;

## 📆 &nbsp; 2021. 10. 13 (수)

**🙏🏻&nbsp; 선배님들 압도적으로 감사합니다!**

매일매일이 새롭고 짜릿하다.🤩

오늘은 비동기 학습 전 고차함수와 Callback 함수를 복습하는 시간을 가졌다. 그 후 underscore를 구현해보는 sprint를 진행했다.

underscore는 배열과 객체를 다루는 함수형 프로그래밍 라이브러리이다. 배열 메소드가 브라우저에서 자체적으로 지원되지 않던 시절에 선배 개발자들이 보다 나은 방법으로 배열이나 객체를 다루기 위한 라이브러리, 즉, 배열이나 객체를 다루기 위한 도구 모음집을 만들었다.

그때 프로그래밍을 시작했으면 손도 못댔을듯...😅

이미 고차함수 part에서 접해보았던 라이브러리도 존재했고 처음보는 것도 있었다. 그 중 앞으로 자주 사용할 것 같은 몇 가지만 가져와 해당 라이브러리의 개념과 사용법에 대해 알아보자.

&nbsp;

**take**

- \_.take는 배열의 처음 n개의 element를 담은 새로운 배열을 리턴한다.  
- n이 undefined이거나 음수인 경우, 빈 배열을 리턴한다.  
- n이 배열의 길이를 벗어날 경우, 전체 배열을 shallow copy한 새로운 배열을 리턴한다.

```js
_.take = function (arr, n) {
  // TODO: 여기에 코드를 작성합니다.
  let _n = n;
  if (_n === undefined || _n < 0) _n = 0;
  return _.slice(arr, 0, _n);
};
```

&nbsp;

**drop**

- _.drop는 _.take와는 반대로, 처음 n개의 element를 제외한 새로운 배열을 리턴한다.  
- n이 undefined이거나 음수인 경우, 전체 배열을 shallow copy한 새로운 배열을 리턴한다.  
- n이 배열의 길이를 벗어날 경우, 빈 배열을 리턴한다.

```js
_.drop = function (arr, n) {
  // TODO: 여기에 코드를 작성합니다.
  let _n = n;
  if (_n === undefined || _n < 0) _n = 0;
  return _.slice(arr, _n, arr.length);
};
```

&nbsp;

**uniq**

- \_.uniq는 주어진 배열의 요소가 중복되지 않도록 새로운 배열을 리턴한다.

```js
_.uniq = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];

  _.each(arr, function (item) {
    if (_.indexOf(result, item) === -1) {
      result.push(item);
    }
  });

  return result;
};
```

&nbsp;

**memoize**

- \_.memoize는 callback 함수에 메모이제이션(memoization)을 적용한다.  
- 메모이제이션은 이미 해결한 문제는 다시 풀지 않는 기법이다.  
- 함수의 호출은 항상 어떤 상태로부터 시작한다.  
- 함수의 호출과 함께 전달받은 인자들 또는 함수의 실행에 영향을 미치는 전역변수들이 이 상태를 결정한다.  
- 같은 상태에서 출발한 함수는 항상 같은 결과를 리턴한다.

- 예를 들어, 아래의 함수 add는 두 인자의 값이 바로 함수의 상태입니다.

```js
function add(a, b) {
  return a + b;
}  
```

- add(3, 5)는 항상 8을 리턴하고, add(2, 7)은 항상 9를 리턴한다.  
- 함수의 상태마다 하나의 문제가 있는 셈이다.  
- 문제를 해결할 때 마다 해당 문제의 답을 기록(메모)해두고, 다음에 동일한 문제를 풀 상황이 오면, 앞서 기록한 답을 활용한다.  
- 이 경우, 처음 문제를 풀 때 들였던 연산이 필요 없다.

```js
_.memoize = function (func) {
  const cache = {};

  return function (...args) {
    const problemName = JSON.stringify(args);
    if (!cache.hasOwnProperty(problemName)) {
      cache[problemName] = func(...args);
    }
    return cache[problemName];
  };
};
```

&nbsp;

## 📆 &nbsp; 2021. 10. 14 (목)

**🤙🏻 &nbsp; 변치 않는 영원한 사랑을 약속해줘~**

오늘도 새로운 개념인 비동기에 대해 학습했다. 동기, 비동기 처음 단어를 들으면 직관적으로 느낌이 오지 않는다. 이런 단어들은 한글이 오히려 어려운듯...😅

내일까지 비동기 part가 진행되는데 fs모듈, fetch API를 이용하여 비동기에서 중요한 개념인 콜백, promise, async/await에 학습한다.

먼저 콜백과 promise에 대해 학습한 내용을 정리하고 내일 async/await와 전체적인 sprint를 정리하는 시간을 가질 예정이다.

&nbsp;

**비동기(Asynchronous) 처리란?**

![image](https://images.velog.io/images/quato/post/1f1d5609-1a92-4db4-813a-2bef96edc152/image.png)

특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 자바스크립트의 특성을 의미한다.

&nbsp;

**비동기 처리 방식의 문제점 해결하기**

비동기 처리는 동기식과 달리 작업이 병렬로 배치되어 실행되며 작업의 순서가 확실하지 않아 나중에 시작된 작업이 먼저 끝나는 경우도 발생한다. 그러므로 결과값을 예상하기 어렵다.

이러한 비동기 처리의 문제를 해결하기 위한 3가지 방식이 있다.

1. 콜백 함수
2. Promise
3. Promise를 활용한 async/await

&nbsp;

> **콜백 함수**

콜백 함수의 동작 방식은 커피 주문과 같다. 커피를 주문하면 진동벨을 주기 때문에 커피가 나올 때까지 서서 기다릴 필요가 없다. 진동벨이 울리는 시점이 여기서의 콜백 함수가 호출되는 시점과 같다. 커피가 나오는 시점, 즉 데이터가 준비된 시점에서만 원하는 동작을 수행할 수 있다.

&nbsp;

**콜백 지옥 (Callback hell)**

콜백 지옥은 비동기 처리 로직을 위해 콜백 함수를 연속해서 사용할 때 발생하는 문제다.

![image](https://images.velog.io/images/quato/post/31ab4904-a809-4005-ae8c-48ea14d0880b/image.png)

웹 서비스를 개발하다 보면 서버에서 데이터를 받아와 화면에 표시하기까지 인코딩, 사용자 인증 등을 처리해야 하는 경우가 있다. 만약 이 모든 과정을 비동기로 처리해야 한다고 하면 위와 같이 콜백 안에 콜백을 계속 무는 형식으로 코딩을 하게 된다. 이러한 코드 구조는 가독성도 떨어지고 로직을 변경하기도 어렵다. 이와 같은 코드 구조를 콜백 지옥이라고 한다.

&nbsp;

**콜백 지옥을 해결하는 방법**

이렇듯 콜백 함수를 남용하게 되면 가독성과 에러 처리 등에서 불편함이 발생한다.  
이를 해소하기 위해 ES6에서 비동기 처리의 새로운 방법으로 Promise 객체가 등장한다.

&nbsp;

> **Promise**

Promise는 자바스크립트 비동기 처리에 사용되는 객체이다.  
`resolve`와 `reject`를 사용하면 비동기 작업이 종료된 이후의 성공 결과값이나 실패에 대하여 처리할 수 있다.

**프로미스의 3가지 상태(states)**

프로미스를 사용할 때 알아야 하는 가장 기본적인 개념이 바로 프로미스의 상태(states)입니다. 여기서 말하는 상태란 프로미스의 처리 과정을 의미한다. new Promise()로 프로미스를 생성하고 종료될 때까지 3가지 상태를 갖는다.

![](https://images.velog.io/images/quato/post/8ce4b2fe-c54e-4e1e-a649-cba82a1a9382/image.png)

&nbsp;

- Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
- Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
- Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

&nbsp;

**Pending(대기)**

먼저 아래와 같이 new Promise() 메서드를 호출하면 대기(Pending) 상태가 된다.

```js
new Promise();
```

new Promise() 메서드를 호출할 때 콜백 함수를 선언할 수 있고, 콜백 함수의 인자는 resolve, reject이다.

```js
new Promise(function(resolve, reject) {
  // ...
});
```

&nbsp;

**Fulfilled(이행)**

여기서 콜백 함수의 인자 resolve를 아래와 같이 실행하면 이행(Fulfilled) 상태가 된다.

```js
new Promise(function(resolve, reject) {
  resolve();
});
```

그리고 이행 상태가 되면 아래와 같이 `then()`을 이용하여 처리 결과 값을 받을 수 있다.

```js

function getData() {
  return new Promise(function(resolve, reject) {
    var data = 100;
    resolve(data);
  });
}

// resolve()의 결과 값 data를 resolvedData로 받음
getData().then(function(resolvedData) {
  console.log(resolvedData); // 100
});
```

※ 프로미스의 '이행' 상태를 좀 다르게 표현해보면 '완료' 이다.

&nbsp;

**Rejected(실패)**

new Promise()로 프로미스 객체를 생성하면 콜백 함수 인자로 resolve와 reject를 사용할 수 있다고 했습니다. 여기서 reject를 아래와 같이 호출하면 실패(Rejected) 상태가 된다.

```js
new Promise(function(resolve, reject) {
  reject();
});
```

그리고, 실패 상태가 되면 실패한 이유(실패 처리의 결과 값)를 `catch()`로 받을 수 있다.

```js
function getData() {
  return new Promise(function(resolve, reject) {
    reject(new Error("Request is failed"));
  });
}

// reject()의 결과 값 Error를 err에 받음
getData().then().catch(function(err) {
  console.log(err); // Error: Request is failed
});
```

&nbsp;

**여러 개의 프로미스 연결하기 (Promise Chaining)**

프로미스의 또 다른 특징은 여러 개의 프로미스를 연결하여 사용할 수 있다는 점입니다. 앞 예제에서 then() 메서드를 호출하고 나면 새로운 프로미스 객체가 반환된다. 따라서, 아래와 같이 코딩이 가능합하.

```js
function getData() {
  return new Promise({
    // ...
  });
}

// then() 으로 여러 개의 프로미스를 연결한 형식
getData()
  .then(function(data) {
    // ...
  })
  .then(function() {
    // ...
  })
  .then(function() {
    // ...
  });
  ```

&nbsp;

**프로미스 에러 처리 방법**

에러 처리 방법에는 다음과 같이 2가지 방법이 있다.

`then()`의 두 번째 인자로 에러를 처리하는 방법

```js
getData().then(
  handleSuccess,
  handleError
);
```

`catch()`를 이용하는 방법

```js
getData().then().catch();
```

개개인의 코딩 스타일에 따라서 `then()`의 두 번째 인자로 처리할 수도 있고 catch()로 처리할 수도 있겠지만 가급적 `catch()`로 에러를 처리하는 게 더 효율적이다.

&nbsp;

## 📆 &nbsp; 2021. 10. 15 (금)

어제에 이어 async/await와 sprint에서 사용한 fetch에 대해 정리해 보겠다.

> **async & await**

`async`와 `await`는 자바스크립트의 비동기 처리 패턴 중 가장 최근에 나온 문법이다. 기존의 비동기 처리 방식인 콜백 함수와 프로미스의 단점을 보완하고 개발자가 읽기 좋은 코드를 작성할 수 있다.

&nbsp;

**async & await 기본 문법**

```js
async function 함수명() {
  await 비동기_처리_메서드_명();
}
```

먼저 함수의 앞에 `async` 라는 예약어를 붙입니다. 그러고 나서 함수의 내부 로직 중 HTTP 통신을 하는 비동기 처리 코드 앞에 `await`를 붙입니다. 여기서 주의하셔야 할 점은 비동기 처리 메서드가 꼭 프로미스 객체를 반환해야 `await`가 의도한 대로 동작합니다.

일반적으로 `await`의 대상이 되는 비동기 처리 코드는 Axios 등 프로미스를 반환하는 API 호출 함수입니다.

&nbsp;

**async 함수**

`async`는 function 앞에 위치한다.

function 앞에 async를 붙이면 해당 함수는 항상 프로미스를 반환합니다. 프로미스가 아닌 값을 반환하더라도 이행 상태의 프로미스(resolved promise)로 값을 감싸 이행된 프로미스가 반환되도록 한다.

&nbsp;

**await**

`await`('기다리다’)는 말 그대로 프로미스가 처리될 때까지 함수 실행을 기다린다. 프로미스가 처리되면 그 결과와 함께 실행이 재개된다. 프로미스가 처리되길 기다리는 동안엔 엔진이 다른 일(다른 스크립트를 실행, 이벤트 처리 등)을 할 수 있기 때문에, CPU 리소스가 낭비되지 않는다.

`await는` `promise.then`보다 좀 더 세련되게 프로미스의 result 값을 얻을 수 있도록 해주는 문법이다. `promise.then`보다 가독성 좋고 쓰기도 쉽다.

&nbsp;

**async & await 예외 처리**

async & await에서 예외를 처리하는 방법은 바로 `try` `catch`입니다. 프로미스에서 에러 처리를 위해 `.catch()`를 사용했던 것처럼 async에서는 `catch {}` 를 사용하시면 된다.

&nbsp;

**fetch를 이용한 네트워크 요청**

fetch() 함수는 첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받고, Promise 타입의 객체를 반환한다. 반환된 객체는, API 호출이 성공했을 경우에는 응답(response) 객체를 resolve하고, 실패했을 경우에는 예외(error) 객체를 reject한다.

```js
fetch(url, options)
  .then((response) => console.log("response:", response))
  .catch((error) => console.log("error:", error));
```

fetch는 JSON 형태의 데이터를 응답하기 때문에, 응답(response) 객체는 json() 메서드를 제공한다.

```js
fetch(url)
  .then((response) => response.json()) // 자체적으로 json() 메소드가 있어, 응답을 JSON 형태로 변환시켜서 다음 Promise로 전달합니다
  .then((json) => console.log(json)) // 콘솔에 json을 출력합니다
  .catch((error) => console.log(error)); // 에러가 발생한 경우, 에러를 띄웁니다
```

이 메서드를 호출하면, 응답(response) 객체로 부터 JSON 포멧의 응답 전문을 자바스크립트 객체로 변환하여 얻을 수 있다.

&nbsp;
