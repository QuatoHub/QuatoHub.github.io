---
title: "CodeStates IM [week 11]"
date: '2021-11-08'
category: 'CodeStates'
summary: "CodeState Pre IM 11주차 기록입니다."
thumbnail: './images/codestate-software-engineer.jpeg'
---

## 📆 &nbsp; 2021. 11. 08 (월)

### <span>[Linux] 환경변수, 사용권한</span>

&nbsp;

**Read, Write, Execute 권한**

폴더인지 파일인지 확인하기

모든 파일에는 사용자마다 접근할 수 있는 권한이 있다.
파일을 읽을 수 있어도 실행하지 못할 수도 있고, 디렉토리에 들어가도 파일을 읽을 수 없을 수도 있다.
리눅스에서는 파일마다 정교하게 권한을 설정할 수 있다.
보안상 접근 권한을 정확히 설정해주는 것이 좋다.

한 번 파일을 조회해보자.

폴더 내에 있는 파일을 조회하기 위해서는 ls -l 명령어를 사용하면 된다.
-l은 파일에 대한 권한 정보를 보기 위해서 필요한 옵션이다.
아래와 같은 구조의 리스트를 확인할 수 있다.

![](https://images.velog.io/images/quato/post/218b7381-41a5-4fb7-a040-504f4d2e2906/image.png)

&nbsp;

**chmod: 권한을 변경하는 명령어**

Symbolic method 문자 이용하기

명령어 chmod 뒤에 변경할 권한을 입력한다.
액세스 클래스의 u, g, o, a를 변경할 조건에 따라 조합하여 입력하고, 연산자와 액세스 타입을 순서대로 입력하면 된다.

chmod [a,u,g,o][+,-,=][r,w,x] 순으로 선택해서 조합할 수 있다.

&nbsp;

**a,u,g,o : Access class. 권한을 부여할 대상.**

`a` : 전체. (all: u, g, and o).  
`u` : 소유자. user. 기본적으로 파일을 만든 사람이 소유자.  
`g` : 소유 그룹. group에는 여러 user가 포함될 수 있다.  
그룹에 속한 모든 user는 파일에 대한 동일한 group 액세스 권한을 갖는다.  
`o` : others. 파일을 만들지 않은 다른 모든 user.

&nbsp;

**+,-,= : Operator.**

`+` : add access. 추가  
`-` : remove access. 제거  
`=` : set exact access. 업데이트(기존 권한 무시하고 새롭게)

&nbsp;

**r,w,x : Access Type.**

`r` : read.  
`w` : write.  
`x` : execute.

```bash
chmod g-r filename # removes read permission from group
chmod g+r filename # adds read permission to group
chmod g-w filename # removes write permission from group
chmod g+w filename # adds write permission to group
chmod g-x filename # removes execute permission from group
chmod g+x filename # adds execute permission to group
chmod o-r filename # removes read permission from other
chmod o+r filename # adds read permission to other
chmod o-w filename # removes write permission from other
chmod o+w filename # adds write permission to other
chmod o-x filename # removes execute permission from other
chmod o+x filename # adds execute permission to other
chmod u+x filename # adds execute permission to user
chmod go-w sample
chmod u=rwx, go-wx sample # 소유자에게는 읽기,쓰기,실행 권한을 부여하고 / 그룹과 기타 사용자에게는 쓰기,실행 권한 제거.

chmod a=rw helloworld.js  # -rw-rw-rw-
chmod u= helloworld.js    # ----rw-rw-
chmod a+rx helloworld.js  # -r-xrwxrwx
chmod go-wx helloworld.js # -r-xr--r--
chmod a= helloworld.js    # ----------
chmod u+rwx helloworld.js # -rwx------
```

&nbsp;

**Absolute form 숫자 이용하기**

rwx 문자가 아니라 각각의 자리값을 합친 값으로 권한을 부여할 수 있다.
숫자 7까지 나타내는 3 bits의 합으로 표기한다.
r=4, w=2, x=1이다. 예를 들어, rwx권한은 4+2+1=7이 된다.

```bash
chmod 644 sample # 소유자에게는 읽기,쓰기(6) / 그룹 과 기타 사용자에게는 읽기(4)
chmod 777 sample # 모든 사용자에게 읽기,쓰기,실행(7) 권한을 부여

# u=rwx (4 + 2 + 1 = 7), go=r (4 + 0 + 0 = 4)
chmod 744 helloworld.js # -rwxr--r--
```

4(r) + 2(w) + 1(x) rwx read, write and execute  
4(r) + 2(w) + 0(-) rw- read and write  
4(r) + 0(-) + 1(x) r-x read and execute  
4(r) + 0(-) + 0(-) r-- read only  
0(-) + 2(w) + 1(x) -wx write and execute  
0(-) + 2(w) + 0(-) -w- write only  
0(-) + 0(-) + 1(x) --x execute only  
0(-) + 0(-) + 0(-) --- none

&nbsp;

**환경변수 사용법**

아무런 인자없이 export 명령을 내리면 전체 환경 변수 목록을 확인할 수 있다.
export 명령에 환경 변수와 = 기호와 값을 표현해서 환경 변수의 값을 설정할 수 있다.

특정 환경 변수의 값을 확인할 때는 echo 명령을 사용한다.
명령어 echo 와 함께 환경변수를 입력하면, 환경변수의 값을 확인할 수 있다.
이때 환경변수의 앞에는 달러사인($)을 입력하여, 변수라는 뜻을 터미널에 전달해준다.

```bash
export
export SHELL=/bin/bash
echo $SHELL
```

&nbsp;

**dotenv: 자바스크립트에서 환경변수 사용하기**

자세한 내용은 따로 포스트를 작성해야겠다

npm 모듈 dotenv를 사용하면, 자바스크립트에서 환경변수를 사용할 수 있다.
npm 모듈을 설치하고 사용하기 위해서, 새로운 폴더를 만들고 npm init 을 입력한다. 그리고 npm i dotenv 를 입력해 모듈을 설치한다.
이때 생성된 폴더는 설치할 모듈과 이름이 같아서는 안된다.

```bash
mkdir environment_variable
cd environment_variable
npm init     # 엔터 키를 여러번 입력해 init 완료.
npm i dotenv # dotenv 모듈을 설치.
```

&nbsp;

## 📆 &nbsp; 2021. 11. 09 (화)

### <span>[Algorithm] Greedy</span>

&nbsp;

**Greedy Algorithm**

이름부터가 탐욕스러운 이 알고리즘은 눈 앞에 보이는 최적의 상황만을 탐욕적으로 쫓아 최종적인 해답에 도달하는 방법이다. Greedy Algorithm의 문제 해결법을 단계적으로 나누어 본다면 아래와 같다.

**1. 선택절차(Selection Procedure)** : 현재 상태에서의 최적의 해답을 선택한다.  
**2. 적절성 검사(Feasibillity Check)** : 선택된 해가 문제의 조건을 만족하는지 검사합니다.  
**3. 해답 검사(Solution Check)**: 원래의 문제가 해결되었는지 검사하고, 해결되지 않았다면 1번으로 돌아가 반복합니다.

일반적으로 Greedy Algorithm을 설명할 때 가장 많이 나오는 것이 거스름돈의 사례인 것 같다. 거스름돈을 줄 때는 기본적으로 가장 큰 단위의 동전을 최대한 사용한 다음 그 다음 단위의 동전을 최대한 사용하는 식으로 해야 거슬러주는 동전의 수를 최적화시킬 수 있다.
예를 들어 970원을 거슬러 주려고 할 때에는 특정 단위의 동전이 부족한게 아니라면 아래와 같이 거슬러 주게 될 것이다.

500원 짜리 1개, 100원짜리 4개, 50원짜리 1개, 10원짜리 2개

&nbsp;

**1. 선택절차** : 가장 큰 단위의 동전을 선택한다. 가장 큰 단위의 동전을 선택하는 것이 탐욕!

a. 500원 선택 (a-1로)  
b. 100원 선택 (b-1로)  
c. 50원 선택 (c-1로)  
d. 10원 선택 (d-1로)  
e. 선택할 동전 없음(e-1로)

&nbsp;

**2. 적절성검사** : 1번 과정을 통해 선택된 동전들의 합이 거슬러줄 금액을 초과하는지 확인한다.

a-1. 500원 2개를 선택하면 거슬러줄 금액을 초과하므로 마지막에 추가한 동전을 빼고 1번으로 돌아가 한 단계 낮은 단위의 동전을 선택한다. (b로)  
b-1. 100원짜리를 5개째 추가하다 보니 또 거슬러줄 금액을 초과했다. 마지막에 추가한 100원짜리 동전을 다시 빼고 한 단계 낮은 단위의 동전을 선택한다. (c로)  
c-1. (중략) (d로)  
d-1. 10원짜리 동전을 2개 3개 추가했을 때 거슬러줄 금액을 초과했다. 마지막에 추가한 동전을 내려 놓고 한 단계 낮은 단위의 동전을 선택하려 했으나 더 이상 없다. (e로)  
e-1. 더 이상 초과하지 않으므로 3번 단계로 넘어 간다.

&nbsp;

**3. 해답 검사**: 선택된 동전들의 합이 거슬러줄 금액과 일치한다. 여기서 종결.

&nbsp;

**Greedy Algorithm 문제 : 짐 나르기**

박스에 짐을 2개를 묶어 넣기 위해 시도하려면 크게 3가지로 시도해 볼 수 있다.

> 가장 무거운 짐과 두 번째로 무거운 짐을 묶기 위해 시도한다.
> 가장 가벼운 짐과 두 번째로 가벼운 짐을 묶기 위해 시도한다.
> 가장 무거운 짐과 가장 가벼운 짐을 묶기 위해 시도한다.

1번 방법 가장 무거운 짐들끼리 묶어도 limit을 초과하지 않는 상황이라면 stuff는 어떤 조합으로도 묶는 것이 가능할 것이다. 그 다음 무거운 짐을 다시 선택해서 묶기 위해 시도해 본다. 묶어지지 않는 다면 다시 그 다음 무거운 짐으로... 문제는 이러다가 limit이 넘지 않는 조합을 찾았다고 하더라도 가장 무거운 짐과 조합한 짐이 배열의 중간에 있기 때문에 묶은 짐들을 제외하는 작업에서 어려움을 겪게 된다. (이걸 구현하기 위해 시도하다가 몇 시간 동안 제자리 뛰기를 했다.)

2번 방법 가장 가벼운 짐들끼리 묶었을 때 limit를 초과한다면, 이 stuff에는 그 어떤 조합도 나올 수 없다. 만약 묶인다고 해도, 아래의 예를 보면 효율적으로 묶었다고 판단하기는 어려울 것이다.

> stuff = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
> limit = 11
> 가벼운 순서대로 앞에서 부터 묶어 보기 [1, 2][3, 4] [5, 6][7] [8][9] [10]

위와 같이 초반에 순조롭게 묶이는 것 같지만 뒤로 가면 갈 수록 비효율적인 조합이 된다. 실제로 저렇게 짐을 포장하면, 어떤 박스는 짐이 2개 들어가고도 텅텅 비어 있을 것이다.

3번 방법 이 방법이 가장 효율적이라는 것을 찾는 데만 엄청나게 오랜 시간이 걸렸다. 이 방법을 사용하니 묶은 짐들을 제거하기에도 용이했다. 이제 Greedy Algorithm의 3단계로 넘어가 보자.

선택 절차 : 가장 무거운 짐과 가장 가벼운 짐을 선택한다.
적절성 검사 : 선택한 짐들의 무게의 합이 limit을 초과하는지 확인한다. 초과하지 않는다면 둘을 묶어서 한 박스에 넣은 후, 1로 돌아가 그 다음 무거운 짐과 그 다음 가벼운 짐을 선택한다. 초과한다면, 가장 무거운 짐은 어차피 다른 짐과 조합이 불가능하다. 따로 빼놓고 1번으로 돌아가 그 다음 무거운 짐을 선택한다.
해답 검사 : 위 과정을 반복하다 보면 묶인 조합들이 나오게 될 것이다. 몇 개의 조합이 나왔는지 파악한 후, stuff의 요소의 갯수에서 조합의 수를 빼주면 된다.

짐 나르기

```js
function movingStuff(stuff, limit) {
  let package = 0; // package 변수를 선언하고 0할당. limit을 넘지 않는 조합이 나오면 pakage++를 해줄 것이다.
  let sorted = stuff.sort((a, b) => a - b); // stuff를 오름차순으로 정렬하는 방법이다. 그냥 암기해두면 유용하다.
  let largeIdx = sorted.length - 1; // 가장 무거운 짐의 인덱스
  // 처음에는 인덱스가 아니라 sorted[sorted.length - 1]을 할당했다. 만약 양쪽 끝에 있는 짐들의 조합이 가능 하면 pop()과 shift()를 사용하면 되는데 가장 무거운 짐을 조합하지 못해서 그 다음 무거운 짐을 선택하는 순간 조합이 되었을 때 그 짐을 제외할 방법이 너무 복잡해진다. 인덱스를 할당하면 된다는 것을 깨닫는데 또 어마어마한 시간의 제자리 걸음이 있었다.
  let smallIdx = 0; // 가장 가벼운 짐의 인덱스는 당연히 0

  while (largeIdx > smallIdx) {
    // while 반복문을 사용하는 것은 가장 마지막에 떠올린 퍼즐조각이었다. '반복문 = for'를 머리에 두고 있으니 가끔 끝날 것 같은 상황에 끝나지 않는 답답한 상황이 생긴다. 그럴 때는 while을 간과하고 있지 않은지 점검하자.
    if (sorted[smallIdx] + sorted[largeIdx] <= limit) {
      //가장 무거운 + 가장 가벼운 <= limit인지 확인한다.
      //참일 경우
      package++; // package로 묶어 주고
      smallIdx++; // 그 다음 가벼운 짐을 선택
      largeIdx--; // 그 다음으로 무거운 짐을 선택
      // pop(), shift()따위...
    } else {
      //거짓일 경우
      largeIdx--; // 그 다음으로 무거운 짐을 선택
    }
  }
  return stuff.length - package; //짐을 한개씩 나르는 경우의 수에서 count빼준다.
}
```

&nbsp;

**Dynamic Programming**

동일하게 작은 문제에서 출발하지만, Greedy Algorithm이 순간의 최적의 방법으로 시작하는 방법이라면, Dynamic Programming은 모든 경우의 수를 따져본 후 이를 조합해 최적의 방법을 찾는다.

주어진 문제를 여러 개의 하위 문제로 나누어 풀고, 하위 무제들의 해결 방법을 결합하여 최종 문제를 해결한다.

사용하기 위한 조건도 있다.

> Overlapping Sub-problem: 큰 문제들을 작은 문제로 나눌 수 있고, 이 작은 문제들은 중복된다.
> Optional Substruction: 작은 문제에서 구한 정답은 그것을 포함하는 큰 문제에서도 같다. 즉, 작은 문제에서 구한 정답을 큰 문제에서도 사용할 수 있다.

```js
const fibonacci = (n) => {
  if (n <= 2) { // 멈춤 조건은 n이 계속 작아지다가 2와 같거나 작아졌을 때
    return 1; // n이 2라는 것은 두 번째 피보나치를 리턴하면 된다는 뜻이다.
  }
return fibonacci(n - 1) + fibonacci(n - 2);
// 입력된 n에서 1을 뺀 값과 2를 뺀 값을 각각 재귀한 후 더 해준다.
}

// 이렇게 코드를 구현했을 때 구하는 과정은 아래와 같다.
fibonacci(7) = fibonacci(6) + fibonacci(5)
fibonacci(6) = fibonacci(5) + fibonacci(4)
fibonacci(5) = fibonacci(4) + fibonacci(3)
.....
```

위 그림과 같이 같은 값을 계속해서 반복해서 구하게 된다. 안 그래도 재귀를 사용해서 작업이 복잡한데, 같은 값을 반복해서 구하다 보니 시간이 오래 걸리게 된다. 콘솔창에 입력해보니 32정도부터 눈에 띄게 딜레이가 생겼다

Dynamic Programming은 하위 문제의 해결책을 저장한 뒤 동일한 하위 문제가 나왔을 경우 저장해 놓은 해결책을 이용한다.

&nbsp;

**Recursion + Memoization**

```js
function fibMemo(n, memo = []) {
  if (memo[n] !== undefined) {
    return memo[n];
  }
  // 이미 해결한 하위 문제인지 찾아본다
  if (n <= 2) {
    return 1;
  }

  let res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  // 없다면 재귀로 결과값을 도출하여 res 에 할당
  memo[n] = res;
  // 추후 동일한 문제를 만났을 때 사용하기 위해 리턴 전에 memo 에 저장
  return res;
}

//먼저 fibMemo 함수의 파라미터로 n 과 더불어 빈 배열을 전달합니다. 이 빈 배열은 하위 문제의 결과값을 저장하는 데에 사용할 예정입니다.
//memo 라는 빈 배열의 n 번째 인덱스가 undefined 가 아니라면, 즉 n 번째 인덱스에 어떤 값이 저장되어 있다면 저장되어 있는 값을 그대로 불러서 사용합니다.
//undefined라면, 즉 처음 계산하는 수라면 fibMemo(n-1, memo) + fibMemo(n-2, memo)를 이용하여 값을 계산해 주고 그 결과값을 res 라는 변수에 할당해 줍니다.
//마지막으로 res 를 리턴하기 전 memo 의 n 번째 인덱스에 res 값을 저장해 줍니다. 그 이유는 (n+1)번째의 값을 구하고 싶을 때 n번째 값을 memo 에서 꺼내 사용하기 위함입니다.
```

저장되어 있는 값을 가져다 쓰기 시작하면서 시간복잡도가 O(2^N)에서 O(N)로 변했다. 이 방법을 사용하면 n에 큰 수를 할당해도 전과 같은 딜레이가 발생하지 않는다. 아래 그림처럼 내려가면서 문제를 해결한다고 해서 Top-down방식이라고 부르기도 한다.

&nbsp;

**Iteration + Tabulation**

Top-down이 있다면 당연히 Bottom-up도 있다.
반복문을 이용해서 피보나치를 다시 구현해보자.

```js
function fibTab(n) {
  if (n <= 2) return 1;
  let fibNum = [0, 1, 1];
  // n 이 1 & 2일 때의 값을 미리 배열에 저장해 놓는다
  for (let i = 3; i <= n; i++) {
    fibNum[i] = fibNum[i - 1] + fibNum[i - 2];
    // n >= 3 부터는 앞서 배열에 저장해 놓은 값들을 이용하여
    // n번째 피보나치 수를 구한 뒤 배열에 저장 후 리턴한다
  }
  return fibNum[n];
}
```

이 방법도 n이 1, 2일 때의 값을 미리 저장해 놓음으로써 불필요한 딜레이를 없앨 수 있는 방법이다.

&nbsp;

**금고를 털어라**

```js
function ocean(target, type) {
  // 1단계: 배열을 하나 만들어 준다. 길이는 target보다 1이 크고, 요소는 첫 요소를 제외하고 모두 0으로 채워준다. [1, 0, 0, 0, 0, 0, 0, 0, 0,........ , 0]
  // 이 배열의 각 요소는 type의 요소들(화폐 단위)을 사용해서 0부터 target+1까지 수들을 만들 수 있는 경우의 수이다. 0은 아무것도 고르지 않았을 때의 경우의 수인 1이 미리 할당되어 있고, 나머지 요소들도 경우의 수를 차차 채워 나갈 것이다.
  let arr = [1];
  for (let i = 0; i < target; i++) {
    arr.push(0);
  }
  // arr를 1을 넣은 배열로 할당해 준 후, 반복문을 돌려서 0을 target만큼 push해주었다.

  type.map(function (ele) {
    // ele = 10, 20, 50
    arr[ele] += 1; // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1....1, .... , 1]
    // 여기까지가 type에 있는 요소들을 arr에 표시하는 작업이다.
    // 화폐 단위가 있으니 그 화폐 1장만을 선택했을 경우가 1로 표시된다.
    for (let i = ele + 1; i <= target; i++) {
      arr[i] += arr[i - ele];
      // arr에 표시를 해주는 방법:
      // map을 통한 이 작업은 type의 요소의 갯수만큼 반복한다.
      // ele가 10일 때 : i가 10부터 50까지 돌면서 표시를 한다.
      // debugger를 돌려서 과정을 꼭 살펴보자.
    }
  });
  return arr[target]; // 굉장히 긴 과정을 지나다보면 어느새 target번째에는 경우의 수가 target을 만드는 경우의 수가 들어와 있다.
}
```

위와 같은 풀이처럼 하나의 '저장 배열'을 만든 다음 반복되는 작업을 진행하는 것을 Dynamic Programming이라고 기억해 두자.

&nbsp;

## 📆 &nbsp; 2021. 11. 10 (수)

### <span>[Algorithm] with Math</span>

&nbsp;

**기본 규칙**

조합, 순열, 중복 순열 모두 같은 로직으로 진행된다.

배열에서 n개를 선택하는 경우

**1.** 하나의 수를 선택한다.  
**2.** n개를 뽑는 순열중 하나의 수를 선택했으니 남은 배열에서 n-1개를 선택해야한다.

이 두 과정을 반복하면 조합, 순열, 중복순열을 구할 수 있다.  
조합, 순열, 중복 순열은 서로 남은 배열을 설정해주는 과정에서만 차이가 있다.

`조합` : 중복x, 순서x  
`순열` : 중복x, 순서o  
`중복 순열` : 중복o, 순서o

&nbsp;

**1. 조합**

서로 다른 n개의 물건에서 순서를 생각하지 않고 r개를 택할 때, 이것은 n개에서 r개를 택하는 조합이라 하고, 이 조합의 수를 기호로 nCr와 같이 나타낸다.

4C3은 4개중에 3개씩 선택할 때 나올 수 있는 모든 조합을 구한다는 말이다. 이 때, 조합의 순서는 상관이 없다. 즉 [1, 2, 3] = [3, 2, 1] 이렇게 순서가 바뀌어도 같은 구성이기 때문에 하나의 조합으로 취급한다는 이야기다.

```js
const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      // 해당하는 fixed를 제외한 나머지 뒤
      const rest = origin.slice(index + 1); 
      // 나머지에 대해서 조합을 구한다.
      const combinations = getCombinations(rest, selectNumber - 1); 
      //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      const attached = combinations.map((el) => [fixed, ...el]); 
      // 배열 spread syntax 로 모두다 push
      results.push(...attached); 
    });

    return results; // 결과 담긴 results return
}
```

&nbsp;

**2. 순열**

서로 다른 n개의 물건 중에서 r개를 택하여 한 줄로 배열하는 것을 n개의 물건에서 r개 택하는 순열이라 하고, 이 순열의 수를 기호로 nPr와 같이 나타낸다. 조합은 순서에 상관없이 선택한 것이라면, 순열은 순서가 중요하다.

```js
 const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

    arr.forEach((fixed, index, origin) => {
      // 해당하는 fixed를 제외한 나머지 배열  
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
      // 나머지에 대해서 순열을 구한다.
      const permutations = getPermutations(rest, selectNumber - 1); 
      //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
      const attached = permutations.map((el) => [fixed, ...el]); 
      // 배열 spread syntax 로 모두다 push
      results.push(...attached); 
    });

    return results; // 결과 담긴 results return
}
```

&nbsp;

**3. 중복 순열**

```js
function getPermutationWithRepetition(arr, selectNum) {
  const result = [];
  // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.
  if (selectNum === 1) return arr.map((el) => [el]);
  
  arr.forEach((fixed, idex, origin) => {
    // 중복이 혀용되므로 배열이 그대로 재귀된다.
    const rest = arr;
    // 나머지에 대해서 중복 순열을 구한다.
    const permutations = getPermutationWithRepetition(rest, selectNum - 1);
    //  돌아온 중복 순열에 떼 놓은(fixed) 값 붙이기
    const attached = permutations.map((el) => [fixed, ...el]);
    // 배열 spread syntax 로 모두다 push
    result.push(...attached);
  });
  return result; // 결과 담긴 results return
}
```

&nbsp;

## 📆 &nbsp; 2021. 11. 11 (목)

### <span>[Database] SQL</span>

&nbsp;

**DML(Data Manipulation Language)**

insert, update, delete, select

&nbsp;

**DDL(Data Definition Language)**

create, alter, drop, truncate, rename

&nbsp;

**DCL(Data Control Language)**

grant, revoke

&nbsp;

**TCL(Transaction Control Language)**

commit, rollback, savepoint

---

&nbsp;

**Create**

- 테이블 생성

```sql
CREATE table student (
칼럼명 타입 조건(not null 등),
칼럼명 타입 조건(not null 등),
칼럼명 타입 조건(not null 등),
PRIMARY KEY ~~ );
```

&nbsp;

**Insert**

- 테이블에 데이터 삽입

```sql
INSERT INTO student values(테이블에 맞는 데이터 양식);
```


&nbsp;

**Update**

- 데이터 내용 수정

```sql
UPDATE 테이블 SET 칼럼 = '값' where 조건;
```

&nbsp;

**Delete**

- 데이터 삭제

```sql
DELETE FROM 테이블 WHERE 조건;
```

&nbsp;

**select**

- 모든 컬럼 조회

```sql
SELECT * FROM student;
```

&nbsp;

- 필요한 컬럼 조회

```sql
SELECT age, name FROM student;
```

&nbsp;

**select 문법 순서**

**1.** select  
**2.** from  
**3.** where  
**4.** group by  
**5.** having  
**6.** order by \*쿼리의 실행 순서는 from ▶ where ▶ group by ▶having ▶ select ▶ order by

&nbsp;

**Where**

- 컬럼 조회의 조건

```sql
SELECT * FROM student WHERE id = 1;
```

- and, or 조건

```sql
SELECT * FROM student WHERE sex='남자' AND(OR) address='서울';
```

- like 조건  
`%` : 여러개  
`_` : 1개

```sql
SELECT * FROM student WHERE name = '김%';
SELECT * FROM student WHERE name = '김_';
```

&nbsp;

**Limit**

- 조회 결과 행의 수 제한

```sql
SELECT * FROM student LIMIT 1;
```

&nbsp;

**Group By**

- 특정 칼럼 기준의 데이터 그룹핑

```sql
SELECT age FROM student GROUP BY age;
```

&nbsp;

**Order by**

- 특정 칼럼 기준으로 정렬  
`ASC` : 오름차순  
`DESC` : 내림차순

```sql
SELECT * FROM student ORDER BY age DESC;
```

&nbsp;

**Distinct**

- 중복 행을 제거

```sql
SELECT DISTINCT name FROM student;
```

&nbsp;

**Alias**

- 칼럼에 별칭을 주고 조회

```sql
SELECT * FROM student AS highschool
```

&nbsp;

**연산자**

산술 연산자 : + - / \*  
비교 연산자 : > < >= <= = != ^= <>  
논리 연산자 : and, or, not  
비교 연산자2 : between and, in, is null, like

&nbsp;

**함수**

- `UPPER(str)` : 대문자 변환  
- `LOWER(str)` : 소문자 변환  
- `INITCAP(str)` : 첫 글자만 대문자로 변환  
- `CONCAT(str, tmp)` : 두 문자값 결합  
- `SUBSTR(str,a,b)` : 문자 추출 a = 시작위치, b = 개수  
- `LENGTH(str)` : 문자열 길이 반환  
- `L/RPAD(대상,총길이,채울문자열)` : 대상 문자열에 채울문자열을 총길이만큼 채워서 반환  
- `LTRIM, RTRIM(대상, 제거할 문자열)` : 대상 문자열에서 제거할 문자열을 없앤 뒤 반환  
- `REPLACE(대상문자열,바꾸고싶은대상,바꾸고싶은내용)` : 대상문자열에서 바꾸고 싶은 대상을 바꾸고 싶은 내용으로 수정한 뒤 반환  
`REPLACE('ABCDEFG','DEF','XXX')` ▶ ABCXXXG

&nbsp;

**계산 함수**

max, min, count, avg, sum

```sql
SELECT 계산함수(칼럼) FROM 테이블;
```

&nbsp;

**JOIN**

![](https://images.velog.io/images/quato/post/faf93250-0b2e-4974-8bf4-a43b77330fc3/image.png)

**INNER JOIN**

일반적인 조인, A와 B 테이블의 조인에서 A와 B 테이블 모두에 있는 레코드만 조회된다.

```sql
SELECT A.a, A.b, B.c
FROM A
JOIN B
ON B.a = A.c;
```

ON 대신 WHERE를 사용할 수 있다.

&nbsp;

**LEFT OUTER JOIN**

A와 B 테이블의 조인 상황에서 A테이블 기준으로 B테이블에 A테이블의 칼럼과 일치하는 조건이 없으면 B테이블의 칼럼은 NULL로 조회된다.

```sql
SELECT A.a, A.b, B.c
FROM A
LEFT OUTER JOIN B
ON B.a = A.c;
```

outer를 생략할 수 있다.

&nbsp;

**RIGHT OUTER JOIN**

A와 B 테이블의 조인 상황에서 B테이블 기준으로 A테이블에 B테이블의 칼럼과 일치하는 조건이 없으면 A테이블의 칼럼은 NULL로 조회된다.

```sql
SELECT A.a, A.b, B.c
FROM A
RIGHT OUTER JOIN B
ON B.a = A.c;
```

역시 outer를 생략할 수 있다.

&nbsp;

**CROSS JOIN(Cartesian JOIN)**

집합의 곱 개념으로

`A= {a, b, c, d}` , `B = {1, 2, 3}` 일 때 `A CROSS JOIN B`는 (a,1), (a, 2), (a,3), (b,1), (b,2), (b,3), (c, 1), (c,2), (c,3), (d, 1), (d, 2), (d,3)의 결과가 된다. 결과의 개수는 `n(A) * n(B)` 이다.

```sql
SELECT A.a A.b B.c
FROM A
CROSS JOIN B;
// 위 아래 쿼리의 결과는 같다.
SELECT A.a, A.b, B.c
FROM A, B;
```

&nbsp;

## 📆 &nbsp; 2021. 11. 12 (금)

### <span>[Database] Schema Design</span>

&nbsp;

**스키마**

스키마 : 데이터베이스의 자료구조와 자료 간의 관계를 형식언어로 정의한 구조

&nbsp;

**스키마의 종류**

- 외부 스키마(External Schema)

개인의 입장에서 필요로 하는 데이터베이스의 논리적 구조를 정의한 것이다.  
전체 데이터베이스의 한 논리적인 부분으로 볼 수 있으므로 서브 스키마라고도 부른다.  
하나의 DBMS에서 여러 개가 존재할 수 있고, 하나의 외부 스키마를 여럿이 공유 가능하다.

- 개념 스키마(Conceptual Schema)

개체 간의 관계와 제약조건을 나타내고 DBMS의 접근권한, 보안, 무결성 규칙에 대한 명세를 정의한 것이다.

- 내부 스키마(Internal Schema)

데이터베이스의 물리적 구조를 정의한 것이다.  
시스템 프로그래머나 설계자가 보는 관점의 스키마다.  
DB의 전체적인 구조로써 하나만 존재할 수 있다.

&nbsp;

**엔티티와 관계**

관계형 데이터베이스(Oracle, MySQL, MS-SQL, SQLite 등등)는 엔티티끼리 관계를 맺을 수 있어서 관계형 DB라는 이름이 붙었다.

엔티티(Entity) : DataBase에 표현하려고 하는 유형, 무형의 객체로서 서로 구별되는 것을 뜻한다.

관계는 두 엔티티가 서로 관련이 있을 때를 말하는데, 1:1, 1:N, N:M 관계를 맺을 수 있다.

&nbsp;

**1:1 관계(일대일 관계)**

1:1 관계란 어느 엔티티 쪽에서 상대 엔티티와 반드시 단 하나의 관계를 가지는 것을 말한다.

예를 들어, 우리나라에서 결혼 제도는 일부일처제로, 한 남자는 한 여자와, 한 여자는 한 남자와 밖에 결혼을 할 수 없다.

남편 또는 부인을 2명 이상 둘 수 없는데, 이러한 관계가 1:1 관계다.

&nbsp;

**1:N 관계(일대다 관계)**

1:N 관계는 한 쪽 엔티티가 관계를 맺은 엔티티 쪽의 여러 객체를 가질 수 있는 것을 의미한다.

현실세계에는 1:N관계가 많이 있는데, 실제 DB를 설계할 때 자주 쓰이는 방식이다.

1:N 관계는 N:M 관계처럼 새로운 테이블을 만들지 않는다.

예를 들어, 부모와 자식 관계를 생각해보면, 부모는 자식을 1명, 2명, 3명, 그 이상도 가질 수 있다.
이를 부모가 자식을 소유한다고(has a 관계) 표현한다.

반대로 자식 입장에서는 부모(아버지, 어머니의 쌍)를 하나만 가질 수 밖에 없다.

이러한 관계를 1:N 관계라고 하며, 계층적인 구조로 이해할 수도 있다.

여러 명의 자식(N)의 입장에서 한 쌍의 부모(1)중 어떤 부모에 속해 있는지 표현해야하므로 부모 테이블의 PK를 자식 테이블에 FK로 집어 넣어 관계를 표현한다.

PK(Primary Key) : 각 엔티티를 식별할 수 있는 대표키, 테이블에서 중복되지 않는(Unique) 값, Null일 수 없다.

FK(Foreign Key : 다른 테이블의 기본키를 참조, 모든 필드는 참조하는 기본키와 동일한 도메인(값의 종류&범위)을 갖는다.
모든 필드 값은 참조하는 기본키와 동일하거나 null 일 수 있다.

즉 부모 테이블(1)에서는 내 자식들이 누구인지 정보를 넣을 필요가 없고, 자식 테이블(N)에서만 각각의 자식들이 자신의 부모 정보(FK)를 넣음 으로써 관계를 표현할 수 있다.

&nbsp;

**N:M 관계(다대다 관계)**

N:M 관계는 관계를 가진 양쪽 엔티티 모두에서 1:N 관계를 가지는 것을 말한다.

즉, 서로가 서로를 1:N 관계로 보고 있는 것이다.

예를들어, 학원과 학생의 관계를 생각해보면, 한 학원에는 여러명의 학생이 수강할 수 있으므로 1:N 관계를 가진다.

반대로 학생도 여러개의 학원을 수강할 수 있으므로, 이 사이에서도 1:M 관계를 가진다.

그러므로 학원과 학생은 N:M 관계를 가진다고 할 수 있다.

N:M 관계는 서로가 서로를 1:N 관계, 1:M 관계로 갖고 있기 때문에, 서로의 PK를 자신의 외래키 컬럼으로 갖고 있으면 된다.

일반적으로 N:M 관계는 두 테이블의 대표키를 컬럼으로 갖는 또 다른 테이블을 생성해서 관리한다.
