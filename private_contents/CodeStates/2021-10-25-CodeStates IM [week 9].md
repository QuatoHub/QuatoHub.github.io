---
title: "CodeStates IM [week 9]"
date: '2021-10-25'
category: 'CodeStates'
summary: "CodeState Pre IM 9주차 기록입니다."
thumbnail: './images/codestate-software-engineer.jpeg'
---

## 📆 &nbsp; 2021. 10. 25 (월)

### <span>[Web Server] Node.js Express</span>

&nbsp;

**프레임워크란?**

Node.js로 웹서버에 필요한 기능을 구현하려면, 많은 시간이 걸린다. 특히 다수의 페이지를 가진 복잡한 웹페이지를 만들려면 더욱 그렇다. 웹사이트 요청을 받고, 값을 리턴하고, 데이터베이스를 접속하는 것 등을 직접 구축하려 하면 까다롭다. 이러한 문제를 해결하기 위해 만들어진 것이 바로 프레임워크입니다. 단순한 기능을 모은 라이브러리가 아닌, 웹 애플리케이션으로써 기본적인 시스템 자체를 제공한다.

프레임워크란, 주어진 틀에 맞게 만들 수 있도록 도와주는 도구입니다. 웹 프레임워크란 웹 사이트를 개발하기 쉽도록 만들어진 툴이다. 웹 프레임워크를 사용하면 전문가들이 만들어 놓은 틀에 맞춰 웹사이트도 쉽게 구축할 수 있다.

&nbsp;

**express 프레임워크**

JavaScript 생태계에서 인기 있는 프레임워크의 앞글자를 따서 MERN stack (MongoDB, Express, React, Node)로 부른다. 이 중 Express.js는 Node.js를 위한 빠르고 개방적인 간결한 웹 프레임워크 중 하나로, 라우팅/세션과리 등 골치아픈 부분을 해결하여 쉽게 웹 서버를 구축할 수 있게 도와준다.

express는 경량화 웹 개발 프레임 워크로, 노드를 이용한 웹 서비스나 웹 애플리케이션 개발에 가장 널리 쓰이는 확장 모듈 중 하나이다. express는 기본 모듈 중 하나인 http 모듈을 이용하여 웹 서버를 구축하고 데이터를 표시하는 방식을 좀 더 추상화하여 웹 서비스나 웹 애플리케이션 개발을 더 편리하고 수월하게 할 수 있도록 다양한 API를 제공한다.

express는 Node.js 패키지로 제공되고 있어서 npm에서 간단히 설치하고, 이를 통합한 서버 프로그램을 만들 수 있다. 코드의 양도 줄어들고, 만들고 난 후에 유지보수를 할 때도 쉽기 때문에 많은 곳에서 사용하고 있다. Node.js에서의 구현과 동일하게 이벤트 처리를 통합해 가는 기본적인 개발 스타일은 변함이 없지만, 준비되어 있는 다양한 객체를 통해 쉽게 필요한 처리를 만들 수 있다.

&nbsp;

**express 설치**

```bash
// packages.json 파일 내 dependencies 목록에 추가
$ npm install express --save
```

&nbsp;

**express 서버 생성**

```js
//server.js
const express = require('express')
const app = express()
const port = 3000
//Router로 Request 처리
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

&nbsp;

**req 객체**

`req.body` : POST 정보를 가진다. 파싱을 위해서 body-parser와 같은 패키지가 필요합니다. 요청 정보가 url에 들어있는 것이 아니라 Request의 본문에 들어있다.  
`req.query` : GET 정보를 가집니다. 즉, url로 전송된 쿼리 스트링 파라미터를 담고 있다.  
`req.params` : 내가 이름 붙인 라우트 파라미터 정보를 가진다.  
`req.headers` : HTTP의 Header 정보를 가진다.

이 외에도 `req.route`, `req.cookies`, `req.acceptedLanguages`, `req.url`, `req.protocol`, `req.host`, `req.ip` 등이 존재한다.

&nbsp;

**res 객체**

`res.send `: 다양한 유형의 응답을 전송한다.  
`res.redirect` : 브라우저를 리다이렉트 한다.  
`res.render` : 설정된 템플릿 엔진을 사용해서 views를 렌더링한다.  
`res.json` : JSON 응답을 전송한다.  
`res.end `: 응답 프로세스를 종료한다.

이 외에도 `res.set`, `res.status`, `res.type`, `res.sendFile`, `res.links`, `res.cookie` 등이 존재한다.

&nbsp;

**res.send**

`res.send([body])`의 body에는 Buffer, String, Object, Array가 올 수 있습니다. 그리고 response Header에는 Body의 Content-Type이 자동으로 정의된다.

```js
res.send({ name: 'Quato' })
```

`key`는 name, `value`는 'Quato'라는 object를 body에 넣어서 response 응답을 전달하면, response Header 내 `Content-Type`은 자동으로 json으로 정의된다. 참고로 이 response Header는 response 객체 내 set메소드로 제어가 가능하다. 간단한 예로 `res.set('Content-Type', 'text/html');` 같은 형태를 들 수 있다.

&nbsp;

**res.json**

`res.json`은 JSON을 응답으로 보낸다. 여기서 `res.send`도 Object를 응답으로 보낼 수 있으니까 `res.json`이 굳이 필요할까 라는 의문이 들 수 있는데, `res.json`은 JSON 정보를 전달하는데 더 특화된 기능을 가지고 있다. 일단 이를 이해하기 위해서는 Object와 JSON은 비슷하게 생기긴 했지만 확연한 차이점을 가지고 있다는 점을 알고계셔야 한다.

JSON은 String, Number, Object, Array, Boolean, Null을 지원하지만, Function, Date, Undefined 등과 같은 타입은 지원하지 않는다. 그렇기 때문에 우리가 { x: [10, undefined, function(){}, Symbol('')] } 같은 파라미터를 입력하면 undefined, function(){}, Symbol(") 는 JSON이 지원하지 않는 타입이기에 JSON이 지원하는 타입으로 바꾸는 작업이 요구된다. 이는 `JSON.stringfy()` 메소드를 통해 구현할 수 있다.

`res.json`을 사용하면 `JSON.stringfy()` 메소드를 호출하여 파라미터를 JSON string 형태로 먼저 변환 한 뒤, res.send()를 호출하여 응답을 내보낸다. `JSON.stringfy()` 메소드는 replacer와 spaces라는 두 가지 파라미터를 가질 수 있는데 이를 Express에서는 아래와 같은 옵션을 통해 제어 가능하다.

```js
app.set('json replacer', replacer);
app.set('json spaces', 2);
```

&nbsp;

**res.end**

`res.end`는 위에서 언급한 것 처럼 응답 프로세스를 종료하는 데 사용된다. 그렇다면 `res.end()`를 굳이 코드 내 명시해줘야 할까요? 이에 대한 대답은 '맞다'가 될 수도 있고 '아니다'가 될 수도 있다. 데이터를 제공하지 않고 응답을 끝내려면 `res.end()`를 사용할 수 있다. 예를 들어 아래와 같이 404오류 페이지에 활용 될 수 있다.

```js
res.status(404).end();
```

하지만 응답 데이터를 res.json이나 res.send 같은 형태로 전송하는 경우에는 이들이 일부 데이터를 보낸 뒤에 자동으로 응답 종료처리를 하기 때문에 굳이 `res.end()`를 호출 할 필요가 없다.

&nbsp;

**express() 함수**

`express.json()` : 들어오는 request를 JSON 데이터로 파싱하며, body-parser를 기반으로 한다.  
`express.static()` : 정적 파일을 제공하며, serve-static를 기반으로 한다.  
`express.Router()` : 새 router 객체를 생성한다.  
`express.urlencoded()` : 들어오는 request를 urlencoded 데이터로 파싱하며, body-parser를 기반으로 한다.

&nbsp;

## 📆 &nbsp; 2021. 10. 26 (화)

### <span>[Web Server] 라우터, 미들웨어 </span>

&nbsp;

**Router**

express에서 router는 기본적으로 아래와 같은 형태를 가진다.

```js
app.METHOD(PATH, HANDLER)
```

‣ `METHOD`: http 요청 메서드  
‣ `PATH`: 경로(엔드포인트)  
‣ `HANDLER`: 실행될 함수

```js
app.get('/home', function(req, res) {
    res.send('home 접속');
});
app.post('/user', function(req, res) {
    res.send('user에 대한 post 요청 처리');
});
app.put('/user', function(req, res) {
    res.send('user에 대한 put 요청 처리');
});
app.delete('/user', function(req, res) {
    res.send('user에 대한 delete 요청 처리');
});
```

가장 많이 사용되는 4가지 http 메서드에 대한 예제이다.  
`/user` 경로가 중복되는 경우가 있는데 이럴 경우 `app.route(path)`를 사용할 수 있다.

```js
app.route('/user')
    .post(function(req, res) {
        res.send('user에 대한 post 요청 처리');
    })
    .put(function(req, res) {
        res.send('user에 대한 put 요청 처리');
    })
    .delete(function(req, res) {
        res.send('user에 대한 delete 요청 처리');
    });
```

&nbsp;

**express.Router**

라우터의 기본 사용방법을 보았으니 이를 모듈화 시키는 방법을 알아보겠다.

&nbsp;

**app.js**

```js
const express = require('express');
const router = require('./route'); // 모듈화된 router를 불러옵니다.
const app = express();
　
app.use(router);
　
// 1번쨰 매개변수로 받은 /hi에 대한 라우팅이 가능하도록 해줍니다. ex) /hi, /hi/about, /hi/user
// app.use('/hi', router);
　
app.listen(4000);
```

&nbsp;

**route.js**

```js
const express = require('express');
const router = express.Router();
　
router.get('/', function(req, res) {
  res.send('Home 접속');
});
router.get('/about', function(req, res) {
  res.send('About 접속');
});
router.post('/user', function(req, res) {
    res.send('user에 대한 post 요청');
});
　
module.exports = router;
```

route.js 파일을 만들어서 router 모듈을 만들었다. 우리는 app.js에 router를 불러와 `app.use()`를 통하여 지정된 경로에 미들웨어로 마운트한 것이다. (경로가 없다면 모든 요청시마다 실행한다.)

&nbsp;

**Router : 메서드 및 URL 분기**

Router코드와 Server코드는 다른 파일에 작성하는 것은 좋은 코딩 습관이라고 한다.

```js
module.exports = function(app)
{
     app.get('/messages',function(req,res){
        //...do something..
     });
     app.post('/messages',function(req,res){
        //...do something..
     });
}
```

server.js 에서 Router모듈을 불러와서 app에 전달해줘야한다.

```js
//server.js
const express = require('express');
const app = express();
const router = require('./router.js');
const port = 3000

app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

&nbsp;

**Middleware(미들웨어)**

express는 일련의 미들웨어(함수)들로 이루어져있다. 이 미들웨어는 요청, 응답 사이에서 부가적인 처리를 할 수 있고 다음 미들웨어의 실행권한을 가지게 된다. 컨베이어 벨트 위에 올라가있는 request에 무언가 악세사리를 붙이거나, 불량품이라면 밖으로 걷어내는 역할을 한다. 미들웨어는 express의 큰 장점 중 하나다. express 애플리케이션은 기본적으로 일련의 미들웨어 함수 호출이다.

&nbsp;

**미들웨어가 주로 사용되는 상황**

‣ 모든 요청에 대해 url이나 메소드를 알고자 할 때  
‣ POST 요청 등에서 쓰이는 body(payload)를 쉽게 얻어내고자 할 때  
‣ 모든 요청/응답에 CORS 헤더를 붙일 때  
‣ 요청 헤더에 사용자 인증 정보가 담겨있는지 확인하고 싶을 때

&nbsp;

**app.js**

```js
const express = require('express');
const router = require('./route.js');
const app = express();
　
app.use(function(req, res, next) {
    req.testValue = '안녕하세요.';
    console.log('1번');
    next(); // 다음 middleware 실행
}, function(req, res, next) {
    console.log('2번');
    next(); // 다음 middleware 실행
});
　
app.get('/', function(req, res) {
    console.log('home', req.testValue);
    res.send('Home');
});
app.use('/path', router); // '/path'로 시작하는 경로의 경우에만 실행됩니다.
　
app.listen(3000);
```

서버를 실행 시킨 뒤 `localhost:3000`에 접속하면 터미널에 3개의 콘솔이 찍힌 것을 볼 수 있다.

&nbsp;

**terminal**

```bash
1번
2번
home 안녕하세요.
```

작성한 미들웨어가 위에서부터 순차적으로 실행된다것과 `req.testValue`를 보아 미들웨어 스택내에서 같은 request, response를 공유하고 있다는 것을 알 수 있다.

여기서 사용한 `app.use()`가 미들웨어를 설정하는 부분인데, (app.METHOD도 미들웨어 설정이라고 볼 수 있음)  
이 메서드는 `app.use([path,] callback [, callback...])`이러한 형태를 가지게 된다.

path가 생략되어있다면 모든 요청에서 callback이 실행되고, 그렇지 않다면 해당 path로 시작하는 요청에서 callback이 실행된다. 또한 각 미들웨어는 다음에 실행되는 미들웨어의 실행 권한을 가지고 있다.

일반적으로는 예제에서 사용한 next라는 이름의 변수를 사용한다. `next()`를 호출하지 않는다면 다음 미들웨어를 실행하지 않는다. 만약 응답을 보내주지도 않았다면 요청이 온 상태에서 멈춰버리게 된다.

지금까지 직접 미들웨어를 만드는 방법을 알아보았다. 이제부터는 express에서 기본으로 제공하는 미들웨어와 써드파티 미들웨어를 사용하는 법을 알아보겠다.

우선 npm을 통하여 모듈을 설치한다.

```bash
npm i --save body-parser
```

&nbsp;

**app.js**

```js
const express = require('express');
const router = require('./route.js');
const app = express();
const bodyParser = require('body-parser'); // 설치한 모듈을 불러옵니다.
　
// set static file directory
app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
　
app.use(function(req, res, next) {
    req.testValue = '안녕하세요.';
    console.log('1번');
    next(); // 다음 middleware 실행
}, function(req, res, next) {
    console.log('2번');
    next(); // 다음 middleware 실행
});
　
app.get('/', function(req, res) {
    console.log('home', req.testValue);
    res.send('Home');
});
app.use('/path', router); // '/path'로 시작하는 경로의 경우에만 실행됩니다.
　
app.listen(3000);
```

express가 4.X 버전에 올라오면서 `express.static`을 제외한 기본 미들웨어들은 모두 별도의 모듈로 분리 되었다. 7번줄에서 사용한 이 메서드는 정적파일들을 제공해주는 역할을 합니다. 지난번 예제에서 `staticMap`을 만들어서 확장자에 따른 각 헤더값을 정해주는 작업을 이제는 하지 않아도 된다.

다음으로는 써드파트 미들웨어입니다. npm을 통하여 사용할 모듈을 설치하고 `app.use()` 를 통해 미들웨어로써 마운트한 것입니다. 예제에서는 `body-parser`라는 모듈을 설치하였는데 이 모듈은 요청 바디를 파싱하여서 req.body 객체로 접근할 수 있도록 도와준다.

`bodyParser.urlencoded()`는 헤더의 Content-Type이 application/x-www-form-urlencoded일 경우에 대한 파싱을 해주고, `bodyParser.json()`은 마찬가지로 Content-Type이 application/json일 경우에 대한 파싱을 해준다. 추가로 bodyParser.urlencoded의 옵션으로 들어가는 extended는 값에 따라서 데이터 파싱을 querystring 라이브러리를 사용하는지 `qs` 라이브러리로 하는지의 차이를 가지고 있다.

&nbsp;

## 📆 &nbsp; 2021. 10. 27 (수)

### <span>[React] CDD & Storybook</span>

다시 React로 넘어와 컴포넌트 디자인에 대하여 학습하였다. CDD, Storybook, CSS in JS 방법론 등을 학습하였다. 오늘은 CDD와 Storybook에 대해 학습한 내용을 정리하고 내일 실습 내용과 함께 CSS in JS 방법론 정리하겠다.

&nbsp;

> **Component-Driven Development(CDD)**

기획자로부터 하나의 페이지 기획이 도착했고, 디자이너와 개발자가 협력하여 디자인과 개발이 진행되었다.
페이지가 모두 완성되었는데, 다른 페이지에 적용되는 버튼에 대한 추가적인 기획안이 도착했다.
그런데 기획자가 버튼에 대한 기획을 이전에 요청했던 버튼과 똑같이 사용하도록 요청했다.
이럴 때 디자이너와 개발자는 이 부분을 모두 새로 만들어야 하는 걸까?

여러 프로젝트 혹은 여러 팀간에 간은 UI 컴포넌트를 공유한다면 이런 고민을 하지 않아도 된다.
디자인과 개발 단계에서부터 재사용할 수 있는 UI 컴포넌트를 미리 디자인하고 개발하면 이런 고민을 해결하 수 있다.

이 고민을 해결하기 위해 등장한 개발 방법이 바로 Component Driven Development(CDD)이다.
레고처럼 조립해 나갈 수 있는 부품 단위로 UI 컴포넌트를 만들어 나가는 개발을 진행할 수 있다.

![](https://images.velog.io/images/quato/post/8863869d-c86f-49bb-b9d7-22c0f23e76d4/image.png)

&nbsp;

> **컴포넌트 UI 개발을 위한 Storybook**

Component Driven Development가 트렌드로 자리잡게 되면서 이를 지원하는 도구 중 하나인 Component Explorer(컴포넌트 탐색기)가 등장했다. Component Explorer에는 많은 UI 개발도구가 있는데 그 중 하나가 Storybook이다.

&nbsp;

**Storybook이란?**

Storybook은 UI 개발 즉, Component Driven Development를 하기 위한 도구이다. 각각의 컴포넌트들을 따로 볼 수 있게 구성해주어 한 번에 하나의 컴포넌트에서 작업할 수 있다. 복잡한 개발스택을 시작하거나, 특정 데이터를 데이터베이스로 강제 이동하거나, 애플리케이션을 탐색할 필요 없이 전체 UI를 한눈에 보고 개발할 수 있다.

Storybook은 재사용성을 확대하기 위해 컴포넌트를 문서화하고, 자동으로 컴포넌트를 시각화하여 시뮬레이션할 수 있는 다양한 테스트 상태를 확인할 수 있다. 이를 통해 버그를 사전에 방지할 수 있도록 도와준다. 또한 테스트 및 개발 속도를 향상시키는 장점이 있으며, 애플리케이션 또한 의존성을 걱정하지 않고 빌드할 수 있다.

![](https://images.velog.io/images/quato/post/3b3ae88c-6d3d-400d-bedd-5cea57c4a9d5/image.png)

&nbsp;

**Storybook과 같은 UI 개발 도구를 왜 사용할까?**

Storybook은 기본적으로 독립적인 개발환경에서 실행된다. 개발자는 애플리케이션의 다양한 상황에 구애받지 않고 UI 컴포넌트를 집중적으로 개발할 수 있다.

예를 들어 회사의 내부 개발자들을 위해 문서화(Documentation)를 하여 UI 라이브러리로써 사용하거나, 외부 공개용 디자인 시스템(Design System)을 개발하기 위한 기본 플랫폼으로 사용할 수 있다.

&nbsp;

**Storybook에서 지원하는 주요 기능은?**

‣ UI 컴포넌트들 카탈로그화  
‣ 컴포넌트 변화를 Stories로 저장  
‣ 핫 모듈 재로딩과 같은 개발 툴 경험 제공  
‣ 리액트를 포함한 다양한 뷰 레이어 지원

&nbsp;

&nbsp;

## 📆 &nbsp; 2021. 10. 28 (목)

### <span>[React] Styled-Component</span>

오늘은 어제 배웠던 Styled-Component, Storybook 라이브러리를 활용해서 React-custom-component Sprint 완성하면서 실습을 해보는 시간을 가졌다.

이론적인 부분을 처음 봤을때는 이해가 가지 않았지만 오늘 실습을 통해서 어떤 방식으로 사용하는지 알게 되었다.
매번 새로운 툴이나 라이브러리를 접할때는 알수없는 두려움과 거부감이 들지만 막상해보면 크게 다른 점이 없다는걸 알면서도 이 두려움과 거부감이 없어지지는 않는다.

Sprint Bare minimum의 모든 테스트는 통과했지만 테스트 케이스 Tag Component의 "Enter키를 누르면 실제 태그가 추가되어야 합니다." 이 부분이 조금 해맸다. 내일은 Advanced Challenge 및 HA 대비 학습을 진행할 예정이다.

> **CSS in JS 방법론 (feat. Styled-Component)**

**1. CSS 방법론들의 특징 및 장단점**

![](https://images.velog.io/images/quato/post/ef88a07e-9843-4605-a473-eb866b8cad90/image.png)

![](https://images.velog.io/images/quato/post/46a5cd10-3f70-41ca-9b2d-d458d7619a8b/image.png)

&nbsp;

**2. 컴포넌트 기반 CSS 작성에 적합한 Styled-Component**

**Styled Component**

Styled Component는 React의 컴포넌트 기반 개발 환경에서 스타일링을 위한 CSS의 성능 향상을 위해 탄생했다. Styled Componen를 사용하면 CSS 문법으로도 스타일 속성이 추가된 React 컴포넌트를 만들 수 있다. 예를 들어 Styled Component를 이용하여 애플리케이션 내에 다른 웹페이지로 이동하는 기능을 가진 Button을 하나 만든다면 아래 코드와 같을 것이다. 하나하나 살펴보면 JS(React), CSS와 크게 다르지 않다. JS에서 변수를 선언하듯(React에서 컴포넌트를 만들듯) Button을 만들고, tag의 속성을 정의하고, back-tick(``) 안에 기존 CSS 문법을 이용하여 스타일 속성을 정의해 주는 것뿐이다.

```js
const Button = styled.a`
    display: inline-block;
    border-radius: 2.5px;
    padding: 0.5rem 0;
    margin: 1rem;
    width: 10rem;
`;
```

&nbsp;

**Styled Component 특징**

**Automatic critical CSS**

Styled Component는 화면에 어떤 컴포넌트가 렌더링 되었는지 추적해서 해당하는 컴포넌트에 대한 스타일을 자동으로 삽입한다. 따라서 코드를 적절히 분배해 놓으면 사용자가 애플리케이션을 사용할 때 최소한의 코드만으로 화면이 띄워지도록 할 수 있다.

**No class name bugs**

Styled Component는 스스로 유니크한 className을 생성한다. 이는 className의 중복이나 오타로 인한 버그를 줄여준다.

**Easier deletion of CSS**

Styled Component는 모든 스타일 속성이 특정 컴포넌트와 연결되어 있기 때문에 만약 컴포넌트를 더 이상 사용하지 않아 삭제할 경우 이에 대한 스타일 속성도 함께 삭제된다.

**Simple dynamic styling**

className을 일일이 수동으로 관리할 필요 없이 React의 props나 전역 속성을 기반으로 컴포넌트에 스타일 속성을 부여하기 때문에 간단하고 직관적이다.

**Painless maintenance**

컴포넌트에 스타일을 상속하는 속성을 찾아 다른 CSS 파일들을 검색하지 않아도 되기 때문에 코드의 크기가 커지더라도 유지보수가 어렵지 않다.

**Automatic vendor prefixing**

개별 컴포넌트마다 기존의 CSS를 이용하여 스타일 속성을 정의하면 될 뿐이다. 이외의 것들은 Styled Component가 알아서 처리해 준다.

&nbsp;

**Adapting based on props & Extending Styles**

Styled Component는 스타일 속성을 지닌 컴포넌트를 정의할 때에 함수를 전달하고, 그 함수 안에서 props를 사용할 수 있다.

Button 컴포넌트의 background와 color 속성은 primary라는 props의 전달 여부에 따라 컬러 값을 정의하고 있다.

```js
// Button component
...
  background: ${(props) => (props.primary ? "black" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};
...

// App component
...
  <Button>Normal</Button>
  <Button primary>Primary</Button>
...
```

또한 같은 스타일 속성을 지닌 여러 개의 컴포넌트들 중 몇 개의 컴포넌트에는 약간의 변화를 주고 싶은 경우도 있다. 이때에는 상속받고자 하는 스타일 속성을 지닌 컴포넌트를 style()로 감싼 뒤, 변경하고 싶은 속성만 새로 정의해 주면 기존 속성을 확장하여 사용할 수 있다.

```js
// 기존의 Button 컴포넌트에 Apple 컴포넌트만을 위한 새로운 속성 추가

const Apple = styled(Button)`
  color: red;
  border-color: re
  ```

&nbsp;

**Passed props**

아래의 코드에서 props로 color 속성이 전달된 Input 컴포넌트는 해당 color 속성이 글자색에 적용되고, props가 전달되지 않은 Input 컴포넌트는 기본 색상이 적용된다. 이처럼 컴포넌트에 props로 스타일 속성이 전달된다면 해당 컴포넌트는 props로 전달된 속성을 우선 적용하며, 전달되는 속성이 없다면 기본으로 설정된 속성을 적용한다. 이는 Styled Component가 개발자에 의해 설정된 속성과 기본 속성을 구분할 수 있기 때문이다.

```js
...
// Input component
const Input = styled.input`
  padding: 1rem;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "pink"};
  background: skyblue;
  border: none;
  border-radius: 2px;
`;
...

...
// App component
  <div>
    <Input defaultValue="아담" type="text" />
    <Input defaultValue="이브" type="text" inputColor="blue" />
  </div>
...
```

위와 같은 경우 Input(아담)의 글자색은 pink, Input(이브)의 글자색은 blue로 나타난다.

&nbsp;

## 📆 &nbsp; 2021. 10. 29 (금)

### <span>[React] Styled-Component</span>

어제 진행했던 Styled-Component 스프린트의 Advanced Challenge를 추가로 진행했다. 추가로 구현할 Custom Component는 자동완성과 클릭을 통한 편집을 제공하는 기능이다. 오전, 오후 진행을 했지만 결국 완성을 하지 못해 레퍼런스 코드를 보며 추가학습을 진행했다.

&nbsp;

**Autocomplete Component**

```js
export const Autocomplete = () => {
  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(deselectedOptions);
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    if (inputValue === '') {
      setHasText(false);
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    if (value.includes('\\')) return;

    // input에 텍스트가 있는지 없는지 확인하는 코드
    value ? setHasText(true) : setHasText(false);

    // updateText
    setInputValue(value);

    // dropdown을 위한 기능
    const filterRegex = new RegExp(value, 'i');
    const resultOptions = deselectedOptions.filter((option) =>
      option.match(filterRegex)
    );
    setOptions(resultOptions);
  };

  const handleDropDownClick = (clickedOption) => {
    setInputValue(clickedOption);
    const resultOptions = deselectedOptions.filter(
      (option) => option === clickedOption
    );
    setOptions(resultOptions);
  };

  const handleDeleteButtonClick = () => {
    setInputValue('');
  };

  const handleKeyUp = (event) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState#example
    // eslint-disable-next-line
    if (event.getModifierState("Fn") || event.getModifierState("Hyper") || event.getModifierState("OS") || event.getModifierState("Super") || event.getModifierState("Win")) return; if (event.getModifierState("Control") + event.getModifierState("Alt") + event.getModifierState("Meta") > 1) return;
    if (hasText) {
      if (event.code === 'ArrowDown' && options.length - 1 > selected) {
        setSelected(selected + 1);
      }
      if (event.code === 'ArrowUp' && selected >= 0) {
        setSelected(selected - 1);
      }
      if (event.code === 'Enter' && selected >= 0) {
        handleDropDownClick(options[selected]);
        setSelected(-1);
      }
    }
  };

  return (
    <div className='autocomplete-wrapper' onKeyUp={handleKeyUp}>
      <InputContainer hasText={hasText}>
        <input
          type='text'
          className='autocomplete-input'
          onChange={handleInputChange}
          value={inputValue}
        />
        <div className='delete-button' onClick={handleDeleteButtonClick}>
          &times;
        </div>
      </InputContainer>
      {hasText ? (
        <DropDown
          options={options}
          handleDropDownClick={handleDropDownClick}
          selected={selected}
        />
      ) : null}
    </div>
  );
};

export const DropDown = ({ options, handleDropDownClick, selected }) => {
  return (
    <DropDownContainer>
      {options.map((option, idx) => (
        <li
          key={idx}
          onClick={() => handleDropDownClick(option)}
          className={selected === idx ? 'selected' : ''}
        >
          {option}
        </li>
      ))}
    </DropDownContainer>
  );
};
```

&nbsp;

**ClickToEdit Component**

```js
export const MyInput = ({ value, handleValueChange }) => {
  const inputEl = useRef(null);
  const [isEditMode, setEditMode] = useState(false);
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    if (isEditMode) {
      inputEl.current.focus();
    }
  }, [isEditMode]);

  const handleClick = () => {
    setEditMode(!isEditMode);
  };

  const handleBlur = () => {
    setEditMode(false);
    handleValueChange(newValue);
  };

  const handleInputChange = (e) => {
    setNewValue(e.target.value);
  };

  return (
    <InputBox>
      {isEditMode ? (
        <InputEdit
          type='text'
          value={newValue}
          ref={inputEl}
          onBlur={handleBlur}
          onChange={handleInputChange}
        />
      ) : (
        <span onClick={handleClick}>{newValue}</span>
      )}
    </InputBox>
  );
};

const cache = {
  name: '김코딩',
  age: 20
};

export const ClickToEdit = () => {
  const [name, setName] = useState(cache.name);
  const [age, setAge] = useState(cache.age);

  return (
    <>
      <InputView>
        <label>이름</label>
        <MyInput value={name} handleValueChange={(newValue) => setName(newValue)} />
      </InputView>
      <InputView>
        <label>나이</label>
        <MyInput value={age} handleValueChange={(newValue) => setAge(newValue)} />
      </InputView>
      <InputView>
        <div className='view'>이름 {name} 나이 {age}</div>
      </InputView>
    </>
  );
};
```
