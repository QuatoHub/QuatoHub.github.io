---
title: "CodeStates IM [week 6]"
date: '2021-10-04'
category: 'CodeStates'
summary: "CodeState Pre IM 6주차 기록입니다."
thumbnail: './images/codestate-software-engineer.jpeg'
---

## 📆 &nbsp; 2021. 10. 04 (월)

**🇰🇷 개천절 대체공휴일**

## 📆 &nbsp; 2021. 10. 05 (화)

**💰 객체 지향으로 상속 받기**

immersive 1주차 시작이자 두 번째 섹션이 시작되었다.🎉 &nbsp; 첫 번째 섹션은 SPA에 대한 내용을 다뤘고, 두 번째 섹션에서는 Front-end와 Back-end의 기초에 대해 학습한다. 오늘은 그 중 객체 지향 프로그래밍(OOP, Object-oriented programming)의 개념에 대해 알아보는 시간을 가졌다.

**객체 지향 프로그래밍**

객체 지향 프로그래밍은 절차적 언어와 같이 별개의 변수와 함수로 순차적으로 작동하는 것과 달리 데이터와 기능이 별개로 취급되지 않고, 한번에 묶어서 처리할 수 있게 되었다. OOP는 객체로 그룹화되며 한번 만들고 나면, 메모리상에서 반환되기 전까지 객체 내의 모든 것이 유지된다.

**클래스**

클래스는 세부 사항(속성)이 들어가지 않은 청사진이다. 세부 사항만 넣는다면 객체가 될 수 있다. 클래스를 통해 만들어진 객체를 특별히 인스턴스 객체, 줄여서 인스턴스라고 부른다. 세부 사항을 넣어주는 역할은 생성자가 담당한다. 함수에 인자를 넣듯, 속성을 넣을 수 있다.

> OOP의 4가지 특징

**캡슐화**

캡슐화는 데이터(속성)와 기능(메소드)을 따로 정의하는 것이 아닌 하나의 객체 안에 넣어서 묶는 것이다. 데이터(속성)과 기능(메소드)들이 느슨하게 결합된 형태이다.

느슨한 결합은 코드 실행 순서에 따라 절차적으로 코드를 작성하는 것이 아니라, 코드가 상징하는 실제 모습과 닮게 코드를 모아 결합하는 것을 의미한다.

캡슐화라는 개념에는 "은닉화"의 특징도 포함하고 있는데, 은닉화는 내부 데이터나 내부 구현이 외부로 노출되지 않도록 만드는 것이다. 따라서, 디테일한 구현이나 데이터는 숨기고, 객체 외부에서 필요한 동작(메소드)만 노출시켜야 한다. 은닉화의 특징을 살려서 코드를 작성하면 객체 내 메소드의 구현만 수정하고, 노출된 메소드를 사용하는 코드 흐름은 바뀌지 않도록 만들 수 있다. 반면 절차적 코드의 경우 데이터의 형태가 바뀔 때에 코드의 흐름에 큰 영향을 미치게 되어 유지보수가 어렵다.

**추상화**

추상화를 통해 인터페이스가 단순해진다. 너무 많은 기능들이 노출되지 않은 덕분에 예기치 못한 사용상의 변화가 일어나지 않도록 만들 수 있다.

캡슐화가 코드나 데이터의 은닉에 포커스가 맞춰져있다면, 추상화는 클래스를 사용하는 사람이 필요하지 않은 메소드 등을 노출시키지 않고, 단순한 이름으로 정의하는 것에 포커스가 맞춰져 있다.

클래스 정의 시, 메소드와 속성만 정의한 것을 인터페이스라고 부른다. 이것이 추상화의 본질입니다.

**상속**

상속은 부모 클래스의 특징을 자식 클래스가 물려받는 것이다.

![image](https://images.velog.io/images/quato/post/78a098c4-3276-4ecf-9e09-80d48babab7f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-10-05%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.24.12.png)

사람은 기본적으로 이름과 성별, 나이와 같은 속성, 그리고 먹다, 자다 등과 같은 메소드가 있다.

추가적으로 학생(Student)이라는 클래스를 작성한다면 사람(Human) 클래스를 상속받아 추가적인 속성과 메소드를 추가할 수 있다.

**다형성**

다향성은 다양한 형태를 가질 수 있다는 뜻이며, 똑같은 메소드라 하더라도 다른 방식으로 구현될 수 있다.

![image](https://images.velog.io/images/quato/post/63cf128a-83d7-4e31-84d0-90302e682d12/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-10-05%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.26.00.png)

TextBox, Select, Checkbox의 공통의 부모인 HTML Element라는 클래스에 render라는 메소드를 만들고 상속을 받게 만들 수 있다. 그런데 다형성의 핵심은 이 같은 이름의 render 라는 메소드가 조금씩 다르게 작동한다는 데 있다.

**클래스와 인스턴스, 그리고 프로토타입의 관계**

![image](https://images.velog.io/images/quato/post/ec3a73f8-9223-4f8f-a350-1855f19b2a42/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-10-05%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.29.38.png)

클래스는 배열의 원리가 동일하다. 배열을 Array 클래스의 인스턴스로 생각할 수 있고, 프로토타입에 다양한 메소드가 존재한다.

학습 이후 스프린트를 진행했고 기초적인 내용에 대해 다뤘기에 난이도가 높지 않았다. 주된 내용은 class를 이용하여 객체를 만들고 extends, super를 이용하여 다른 class에 상속, 수정, 추가 등을 진행하는 것이었다. 아직 객체 지향에 대한 전반적인 이해는 부족하다. 오늘 배운 내용을 반복 학습 후 심화 학습을 진행할 예정이다.🤗

&nbsp;

## 📆 &nbsp; 2021. 10. 06 (수)

**🪃&nbsp; 재귀는 돌아오는 거야~**

천국의 계단 명대사가 떠오르게 하는 재귀함수에 대해 학습해보았다. 기본적인 개념은 함수 내에 본인을 호출하여 반복적으로 재참조를 해주는 것이다. 내용은 간단한데 적용하는 데는 쉽지 않다. 오죽하면 재귀적 사고 연습하기라는 챕터를 만들어놨을까...🙄

**재귀란?**

재귀란 동일한 구조의 더 작은 문제를 해결함으로써 주어진 문제를 해결하는 방법을 말한다.

컴퓨터 과학에 있어서 재귀(Recursion)는 자신을 정의할 때 자기 자신을 재참조하는 방법을 뜻하며, 이를 프로그래밍에 적용한 재귀 호출(Recursive call)의 형태로 많이 사용된다.

**재귀를 사용하는 이유?**

모든 재귀 함수는 반복문으로 표현할 수 있다. 하지만 재귀를 적용할 수 있는 대부분의 경우에는 재귀를 적용한 코드가 더욱 간결하고 가독성이 뛰어나다.

재귀를 사용하기 좋은 상황은 주어진 문제를 비슷한 구조의 더 작은 문제로 나눌 수 있는 경우, 중첩된 반복문이 많거나 반복문의 중첩 횟수를 예측하기 어려운 경우 등이 있다.

**재귀적 사고 연습하기**

1. 문제를 가장 추상적으로(단순하게) 정의하기

2. 문제를 쪼개고 경우의 수를 나누기

**일반적인 재귀 함수의 템플릿**

<script src="https://gist.github.com/QuatoHub/28eef67cf17569736366a56f6e949f5f.js"></script>

&nbsp;

## 📆 &nbsp; 2021. 10. 07 (목)

**🗣 외국인과 대화학기**

재귀함수 학습 마지막 날이다. 앞서 학습한 DOM과 새로 학습한 JSON을 살짝 첨가한 2가지 sprint과제를 진행했다.

JSON(JavaScript Object Notation)은 데이터 교환을 위해 만들어진 객체 형태의 포맷이다. 일반적으로 데이터 교환을 위해서는 수신자와 발신자가 같은 프로그램을 사용하거나, 문자열처럼 범용적으로 읽을 수 있어야 한다.

Javascript 객체는 타입 변환을 이용해 String으로 변환할 경우 객체 내용을 포함하지 않는다. 이러한 문제를 해결하기 위해 객체를 JSON 형태로 변환하거나 JSON을 객체의 형태로 변환한다.

![image](https://images.velog.io/images/quato/post/e42753f5-0104-48e4-92e4-d23aa5240f3f/image.png)

`JSON.stringify` : Object type을 JSON으로 변환  
`JSON.parse` : JSON을 Object type으로 변환

**🪜 재귀함수를 이용하여 JSON 구현**

```js
function stringifyJSON(obj) {
  // obj가 문자인 경우
  if (typeof obj === 'string') return `"${obj}"`

  // obj가 배열인 경우
  if(Array.isArray(obj)){
    const result = [];
    for (let i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return `[${result}]`
  }
  
  // obj가 객체인 경우
  if (typeof obj === 'object' && obj !== null){
    const result = [];
    const ent = Object.entries(obj);

    for (let [key, val] of ent) {
      if (!(obj[key] === undefined || typeof obj[key] === 'function')){
      result.push(`${stringifyJSON(key)}:${stringifyJSON(val)}`);
      }
    }
    return `{${result}}`
  }
  
  // 숫자, null, boolean인 경우
  return String(obj);
}
```

&nbsp;

**🪜 재귀함수를 이용하여 Tree UI 구현**

```js
const root = document.getElementById('root');

function createTreeView(menu, currentNode) {

  menu.forEach( (menu) => {

    // 자식 노드가 존재하는 경우
    if (menu.type === 'group') {

      // Create
      const li = document.createElement('li');
      const ul = document.createElement('ul');
      const span = document.createElement('span');
      const checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');

      // Append
      currentNode.append(li);
      li.append(checkBox);
      li.append(ul);
      li.append(span);
      
      // Update
      span.textContent = menu.name;

      // 재귀함수
      createTreeView(menu.children, ul)

      // 자식 노드가 존재하지 않는 경우
    } else {
      // Create
      const li = document.createElement('li');

      // Append
      currentNode.append(li);

      // Update
      li.textContent = menu.name;
    }
  });
}
```

&nbsp;

## 📆 &nbsp; 2021. 10. 08 (금)

**💵 &nbsp; 전 이것 밖에 못 받았는데요?**

오늘 배운 내용은 자료 구조에 관한 것으로 Stack, Queue, Tree, Graph 자료구조를 이해하고 배열을 통해 대체하는 것이다. 한번에 학습하기 적은 양은 아니었지만 개념 학습할 때는 기본적인 내용만 적혀있어 이해하는데는 어려움이 없었다.

하지만 coplit을 풀려고 하자 무슨 말인지 1도 이해가 가지 않았다. 분명 내가 아까 배운 내용은 1인데 갑자기 10을 내놓으라는 느낌...? 아무튼 페어분과 머리를 싸매며 문제를 풀었지만 결국 진도를 모두 나가지 못하였다. 주말을 이용하여 마저 풀기로 했다.😩

> **Stack**

Stack은 데이터(data)를 순서대로 쌓는 자료구조이다. 입력과 출력이 하나의 방향으로 이루어지는 제한적 접근에 있다. 이런 자료구조의 정책을 LIFO(Last In First Out) 혹은 FILO(First In Last Out)이라고 부르기도 한다.

![](https://images.velog.io/images/quato/post/7461ca7e-dfa4-47fe-b61a-d486e719eb6a/image.png)

**🪜 Stack 구현하기**

```js
class Stack {
  constructor() {
    this.storage = {};
    this.top = 0; // 스택의 가장 상단을 가리키는 포인터 변수를 초기화 합니다.
  }

  size() {
    return this.top;
  }

	// 스택에 데이터를 추가 할 수 있어야 합니다.
  push(element) {
    this.storage[this.top] = element;
    this.top += 1;
  }
	
	// 가장 나중에 추가된 데이터가 가장 먼저 추출되어야 합니다.
  pop() {
    // 빈 스택에 pop 연산을 적용해도 에러가 발생하지 않아야 합니다
    if (this.top === 0) {
      return;
    }

    const result = this.storage[this.top - 1];
    delete this.storage[this.top - 1];
    this.top -= 1;
    
    return result;
  }
}
```

&nbsp;

> **Queue**

Queue는 줄을 서서 기다리다, 대기 행렬 이라는 뜻을 가지고 있다. Stack과 반대되는 개념으로, 먼저 들어간 데이터(data)가 먼저 나오는 FIFO(First In First Out) 혹은 LILO(Last In Last Out) 을 특징으로 가지고 있다.

![](https://images.velog.io/images/quato/post/dec98253-b62f-4518-96af-7f1baa08939b/image.png)

**🪜 Queue 구현하기**

```js
class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.rear - this.front;
  }
	
	// 큐에 데이터를 추가 할 수 있어야 합니다.
  enqueue(element) {
    this.storage[this.rear] = element;
    this.rear += 1;
  }
	
	// 가장 먼저 추가된 데이터가 가장 먼저 추출되어야 합니다.
  dequeue() {
    // 빈 큐에 dequeue 연산을 적용해도 에러가 발생하지 않아야 합니다
    if (this.size() === 0) {
      return;
    }

    const result = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;

    return result;
  }
}
```

&nbsp;

> **Graph**

컴퓨터 공학에서의 그래프는 일반적인 의미와 다르다.
‣ 거미줄처럼 여러 개의 점들이 선으로 이어져 있는 “복잡한 네트워크 망”의 모습
‣ 여러개의 점들이 서로 복잡하게 연결되어 있는 관계를 표현한 자료구조

![](https://images.velog.io/images/quato/post/3e5057ac-dbf9-4397-845e-706ed8a6f0ee/image.png)

`정점(vertex)`: 그래프에서 하나의 점  
`간선(edge)`: 그래프에서 하나의 선

추가적인 정보를 파악할 수 없는 그래프, 즉 가중치(연결의 강도의 정도)가 적혀 있지 않은 그래프
‣ “비가중치 그래프”

간선에 “연결정도”(거리 등)를 표현한 그래프  
‣ “가중치 그래프”

&nbsp;

**관련 그래프 용어들**

- `무(방)향그래프(undirected graph)` : 위에서 본 네비게이션 예제 같은 케이스.
  서울에서 부산으로 갈 수 있고, 반대로 부산에서 서울로도 갈 수 있다.
  만약 단방향(directed) 그래프로 구현된다면 어느 한쪽으로만 갈 수 있다.

- `진입차수(in-degree)` / `진출차수(out-degree)` : 한 정점에 진입(들어오는 간선)하고 진출(나가는 간선)하는 간선이 몇 개인가를 나타낸다.

- `인접(adjacency)` : 두 정점 간에 간선이 “직접적”으로 이어진 경우, 이 두 정점은 “인접”한 정점이다.

- `자기 루프(self loop)` : 정점에서 진출하는 간선이 곧바로 자기 자신에게 진입하는 경우
  “자기 루프를 가졌다” 라고 표현한다. 이 자기 루프는 다른 정점을 거치지 않는다는 것이 특징이다.
- `사이클(cycle)` : 한 정점에서 출발하여 다시 해당 정점으로 돌아올 수 있는 경우 “사이클이 있다” 라고 표현한다.

&nbsp;

**그래프의 표현 방식: 인접 행렬 & 인접 리스트**

![](https://images.velog.io/images/quato/post/6b7a5b82-5fdd-4144-8f2c-595177dd559a/image.png)

&nbsp;

**인접 행렬**

인접 행렬은 서로 다른 정점들이 인접한 상태인지를 표시한 행렬로 “2차원 배열”의 형태
만약 A라는 정점과 B라는 정점이 이어져 있으면 1(true), 그렇지 않다면 0(false)로 표시한 일종의 표
‣ 가중치 그래프라면 1대신 관계에서 의미 있는 값을 저장(ex 거리)

인접 행렬은 언제 사용?

- 두 정점 사이에 관계 유무 확인에 용이
  ‣ A에서 B로 진출하는 간선의 유무 파악할 때 바로 0번째 행의 1번째 열에 값을 보면 된다
- 가장 빠른 경로(shortest path)를 찾을 때도 주로 사용

&nbsp;

**인접 리스트**

인접 리스트는 각 정점이 어떤 정점과 인접한지를 “리스트”의 형태로 표현
각 정점마다 하나의 리스트를 가지고 있으며, 이 리스트는 자신과 인접한 다른 정점을 담고 있다

B는 A와 C로 이어지는 간선이 두개가 있는데, 왜 A가 C보다 먼저인가? 이 순서가 중요?
‣ “보통은 중요하지 않음”

그래프를 인접 리스트로 구현할 때 정점별로 살펴봐야할 우선 순위를 고려해 구현할 수도 있다. 이때, 리스트에 담겨진 정점들을 우선 순위별로 정렬할 수 있다.

‣ 그런데 우선 순위를 다룰 때는 더 적합한 다른 자료구조(queue, heap)를 이용하는 것이 합리적이므로, 따라서 “보통”은 중요치 않다(예외는 존재)

인접 리스트는 언제 사용?
메모리를 효율적으로 사용하고 싶을 때 사용
‣ 인접 행렬은 연결 가능한 모든 경우의 수를 저장하므로 상대적으로 메모리를 많이 차지

&nbsp;

> **Tree**

하나의 뿌리로부터 가지가 사방으로 뻗은 형태; 나무와 닮아서 트리 구조라 부름
‣ 데이터가 바로 아래에 있는 하나 이상의 데이터에 “단방향”으로 연결된 “계층적” 자료구조
‣ 또한, 하나의 데이터 뒤에 여러 개의 데이터가 존재 가능한 “비선형 구조”
‣ 아래로만 뻗어가므로 사이클이 존재x
루트(Root)라는 하나의 데이터를 시작으로 여러 개의 데이터를 간선(edge)로 연결한다

![](https://images.velog.io/images/quato/post/528394f7-ed42-4a81-ab1e-3fbc3721d2c2/image.png)

**용어 정리**

- `노드(Node)` : 트리 구조를 이루는 모든 개별 데이터
- `루트(Root)` : 트리 구조의 시작점이 되는 노드
- `부모 노드(Parent Node)` : 두 노드가 상하관계로 연결되었을 때 상대적으로 루트에서 가까운 노드
- `자식 노드(Childe Node)` : 두 노드가 상하관계로 연결되어 있을 때 상대적으로 루트에서 먼 노드
- `리프(Leaf)` : 트리 구조의 끝 지점. 자식 노드가 없는 노드(최하위 노드)

&nbsp;

**깊이(depth)**

루트로부터 하위 계층의 특정 노드까지의 깊이를 표현할 수 있다. 루트는 깊이가 0이다.

**레벨(Level)**

같은 깊이를 가지고 있는 노드를 묶어서 레벨로 표현 가능. Depth가 0인 루트의 level은 0
같은 레벨에 나란히 있는 노드를 형제 노드(Sibling Node)라고 한다.

**높이(Height)**

리프 노드를 기준으로 루트까지의 높이를 표현 가능. 각 리프 노드의 높이를 0으로 놓고 계산  
즉, 부모 노드의 height =자식 노드의 가장 높은 높이값(height)+1

**서브 트리(Sub Tree)**

큰 트리의 내부에, “트리 구조를 갖춘 작은 트리”를 “서브 트리”라고 한다.

&nbsp;

**Binary Search Tree(이진 탐색 트리)**

트리 구조는 편리한 구조를 전시하는 것 외에 “효율적인 탐색”을 위해 사용하기도 한다.  
‣ 이진 트리(binary tree)와 이진 탐색 트리(binary search tree)가 대표적이다.

모든 왼쪽 자식의 값이 루트나 부모보다 작고, 모든 오른쪽 자식의 값이 루트나 부모보다 큰 값을 가지는 특징을 가진다.

‣ 이진 탐색 트리가 균형 잡힌 트리가 아닐 때, 입력되는 값의 순서에 따라 한쪽으로 노드들이 몰리는 문제 발생한다.(탐색 시간이 길어짐)

‣ 이 경우, 삽입과 삭제마다 트리의 구조를 재조정하는 과정을 거치는 알고리즘 추가 필요하다.

&nbsp;

**이진 트리(Binary Tree)**

자식 노드가 최대 2개인 노드들로 구성된 트리이다.  
이 2개의 자식 노드는 왼쪽 자식 노드, 오른쪽 자식 노드로 구분한다.

이진 트리는 자료의 삽입, 삭제 방법에 따라 정 이진 트리(Full binary tree), 완전 이진 트리(Complete binary tree), 포화 이진 트리(Perfect binary tree)로 나뉜다.

![](https://images.velog.io/images/quato/post/5c0458b9-18d0-45e8-9829-15ac0807f18d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-10-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.10.49.png)

- `정 이진 트리(Full binary tree)` : 각 노드가 0개 또는 2개의 자식 노드를 가짐

- `포화 이진 트리(Perfect binary tree)` : 정 이진 트리이면서(and) 완전 이진 트리인 케이스, 모든 리프 노드의 레벨이 동일하고 모든 레벨이 가득 채워져 있는 트리

- `완전 이진 트리(Complete binary tree)` : 마지막 레벨을 제외한 모든 노드가 가득 차 있어야 하고 마지막 레벨의 노드는 전부 차 있지 않아도 되지만, 왼쪽은 채워져 있어야 한다.
