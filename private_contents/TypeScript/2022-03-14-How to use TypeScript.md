---
title: 'How to use TypeScript'
date: '2022-03-13'
category: 'TypeScript'
summary: "타입스크립트 기초 학습 정리입니다."
thumbnail: './images/typescript.jpeg'
---

> 코딩앙마님의 타입스크립트 강좌를 학습하며 작성된 문서입니다.

&nbsp;

# 1. 기본 타입

## 1.1 기본 타입

```ts
const age:number = 30;
const isAult:boolean: true;
const a1:number[] = [1,2,3];
const a2:Array<number> = [1,2,3]

const week1:string[] = ['mon', 'tue', 'wed'];
const week2:Array<string> = ['mon', 'tue', 'wed'];
```

## 1.2 튜플

```ts
const b: [string, number];

b = ["z", 1];
b = [1, "z"]; // error

b[0].toLowerCase();
b[1].toLowerCase(); // error
```

## 1.3 void, never

```ts
// 아무것도 반환하지 않을 경우 사용
function sayHello(): void {
  console.log("Hello");
}

// 에러를 반환하거나 끝나지 않는 함수에 사용
function showError(): never {
  throw new Error();
}

function infLoop(): never {
  while (true) {
    // do something
  }
}
```

## 1.4 enum

```ts
// 특정 값만 부여하고 싶을 때 사용
// 값을 부여하지 않으면 0부터 1씩 증가한다.
enum Os {
  Window,
  Ios = 10,
  Android,
}

let myOs: Os;
myOs = Os.Window;
// 양방향 mapping이 되어있있다.
// console.log(Window) => 1
// console.log(1) => Window
// 값에 문자를 넣으면 단방향 mapping이 된다.
```

&nbsp;

# 2. 인터페이스

## 2-1. 인터페이스(interface)

```ts
// ?는 optional한 값
// readonly는 읽기 전용, 수정 불가
type Score = "A" | "B" | "C" | "F";

interface User {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
  [grade: number]: Score;
}

const user: User = {
  name: "xx",
  age: 30,
  birthYear: 2000,
  1: "A",
  2: "B",
};

user.gender = "mail";
```

```ts
interface Add {
  (num1: number, num2: number): number;
}

const add: Add = function (x, y) {
  return x + y;
};
```

## 2-2 implements

```ts
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car {
  color = "red";
  wheels = 4;
  start() {
    console.log("go..");
  }
}
```

## 2-3 extends

```ts
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Benz extends Car {
  door: number;
  stop(): void;
}
```

&nbsp;

# 3. 함수

## 3-1 함수

```ts
// 매개변수가 두 개 이상인 경우 optional한 값은 뒤에 위치해야한다.
function hello(name?: string): string {
  return `Hello, ${name || "world"}`;
}

const tesult = hello();
```

## 3-2 전개 구문

```ts
// 전개 구문이 매개변수로 들어오면 배열로 인식하므로 배열 type을 설정해줘야한다.
function add(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

add(1, 2, 3); // 6
```

## 3-3 this

```ts
interface User {
  name: string;
}

const Sam: User = { name: "Sam" };

function showName(this: User, age: number, gender: "m" | "f") {
  console.log(this.name, age, gender);
}

const result = showName.bind(Sam);
result(30, "m");
```

## 3-3 overload

```ts
interface User {
  name: string;
  age: number;
}

function join (nmae: string, age: number): User;
function join (nmae: string, age: string): string;
function join (name: string, age: number | string): User | string {
  if (typeof age === 'number') {
    return {
      name,
      age,
    }
  } else {
    return "나이는 숫자로 입력해주세요.";
  }
}

const same: User = join("Sam", 30);
const jane: string = join("Jane", "30);
```

&nbsp;

# 4. 리터럴, 유니온/교차 타입

## 4-1 literal type

```ts
const userName1 = "Bob";
let userName2: string | number = "Tom";
userName2 = 3;

type Job = "police" | "developer" | "teacher";

interface User {
  name: string;
  job: Job;
}

interface HighSchoolStudent {
  name: string | string;
  grade: 1 | 2 | 3;
}
```

## 4-2 union types

```ts
interface Car {
  name: "car";
  color: string;
  start(): void;
}

interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}

function getGift(gift: Car | Mobile) {
  console.log(gift.color);
  if (gift.name === "car") {
    gift.start();
  } else {
    gift.call();
  }
}
```

## 4-3 intersection types

```ts
interface Car {
  name: string;
  start(): void;
}

interface Toy {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & Car = {
  name: "타요",
  start() {},
  color: "blue",
  price: 1000,
};
```

&nbsp;

# 5. 클래스

## 5-1 class

```ts
// 접근 제한자(Access modifier) - public, private(#), protected
/*
public - 자식 클래스, 클래스 인스턴스 모두 접근 가능
protected - 자식 클래스에서 접근 가능
private - 해당 클래스 내부에서만 접근 가능
*/
class Car {
  name: string = "car";
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
    console.log(this.name);
  }
}

class Bmw extends Car {
  constructor(color: string) {
    super(color);
  }
  showName() {
    console.log(super.name); // name private 설정 시 error!
  }
}

const z4 = new Bmw("black");
console.log(z4.name); // name protected 설정 시 error!
```

## 5-2 static

```ts
// static 설정 시 this가 아닌 class명을 넣어준다.
class Car {
  name: string = "car";
  color: string;
  static wheels = 4;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
    console.log(this.name);
    console.log(Car.wheels); // this.wheels은 error!
  }
}

class Bmw extends Car {
  constructor(color: string) {
    super(color);
  }
  showName() {
    console.log(super.name);
  }
}

const z4 = new Bmw("black");
console.log(Car.wheels);
```

## 5-3 abstract

```ts
// 추상 class
class Car {
  name: string = "car";
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
  abstract doSomething():void: // 추상화
}

class Bmw extends Car {
  constructor(color: string) {
    super(color);
  }
  // 상속받은 곳에서 구체적으로 구현해야한다.
  doSomething(){
    alert(3);
    }
}

const z4 = new Bmw("black");
console.log(Car.wheels);
```

&nbsp;

# 6. 제네릭

## 6-1 function

```ts
// 타입스크립트는 전달받은 매개변수를 보고 타입을 판단할 수 있다.
// 특정 타입으로 강제하고 싶은 경우에만 타입을 지정해주면 된다.
function getSize<T>(arr: T[]): number {
  return arr.length;

  const arr1 = [1, 2, 3];
  getSize<number | string>(arr1);

  const arr2 = ["a", "b", "c"];
  getSize<string>(arr2);

  const arr3 = [false, true, true];
  getSize(arr3); // getSize<boolean>(arr3)과 같음

  const arr4 = [{}, {}, { name: "Tim" }];
  getSize(arr4); // getSize<object>(arr4)과 같음
}
```

## 6-2 interface

```ts
interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile<object> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};

const m2: Mobile<string> = {
  name: "s20",
  price: 900,
  option: "good",
};
```

&nbsp;

# 7. 유틸리티 타입

## 7-1 keyof

```ts
interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

type UserKey = keyof User; // "id" | "name" | "age" | "gender"

const uk: UserKey = "id";
```

## 7-2 Partial<T>

```ts
interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

let admin: Partial<User> = {
  id : 1,
  name: "Bob:,
}
```

## 7-3 Required<T>

```ts
// Required 사용 시 age도 필수 property가 된다.
interface User {
  id: number;
  name: string;
  age?: number;
}

let admin: Required<User> = {
  id : 1,
  name: "Bob:,
  age: 30,
}
```

## 7-4 Readonly<T>

```ts
// Required 사용 시 age도 필수 property가 된다.
interface User {
  id: number;
  name: string;
  age?: number;
}

let admin: Readonly<User> = {
  id : 1,
  name: "Bob:,
};

admin.id = 4; // error!
```

## 7-5 Record<K, T>

```ts
interface User {
  id: number;
  name: string;
  age: number;
}

function isValid(user: User) {
  const result: Record<keyof User, boolean> = {
    id: user.id > 0,
    name: user.name !== "",
    age: user.age > 0,
  };
  return result;
}
```

## 7-6 Pick<K, T>

```ts
interface User {
  id: number;
  name: string;
  age: number;
  gender: "M" | "W";
}

const admin: Pick<User, "id" | "name"> = {
  id: 0,
  name: "Bob",
};
```

## 7-7 Omit<K, T>

```ts
interface User {
  id: number;
  name: string;
  age: number;
  gender: "M" | "W";
}

const admin: Pick<User, "age" | "gender"> = {
  id: 0,
  name: "Bob",
};
```

## 7-8 Exclude<T1, T2>

```ts
// Omit은 key값을 제외하고 Exclude는 type을 제외한다.
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>; // boolean
```

## 7-9 NonNullabel<Type>

```ts
// null과 undefined를 제외한다.
type T1 = string | null | undefined | void;
type T2 = NonNullable<T1>; // string, void
```
