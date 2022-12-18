---
title: "CodeStates IM [week 8]"
date: '2021-10-18'
category: 'CodeStates'
summary: "CodeState Pre IM 8주차 기록입니다."
thumbnail: './images/codestate-software-engineer.jpeg'
---

## 📆 &nbsp; 2021. 10. 18 (월)

### <span>[HTTP/네트워크] 기초</span>

&nbsp;

백엔드 기초 중 HTTP와 네트워크에 대해 학습했다. 익숙하지만 제대로 된 뜻을 알지 못했던 개념과 처음 접한 개념들이 많아 모두 이해하지는 못했다. 차근히 정리하며 틈 날때 마다 보면서 익숙해져야겠다.😁

> **클라이언트(Client)와 서버(Server)**

![](https://images.velog.io/images/quato/post/89d04a91-cacb-4be7-8658-32b2e49491e2/image.png)

**클라이언트**는 서비스를 사용하는 사용자, **서버**는 클라이언트에게 네트워크를 통해 서비스를 제공하는 시스템을 뜻한다. 우리가 일반적으로 사용하는 PC는 클라이언트의 역할을 하는데 서버 컴퓨터로부터 정보를 받아 웹 브라우저를 통해 정보를 볼 수 있는 원리다.

&nbsp;

**클라이언트 - 서버 아키텍처(Client Server Architecture)**

![client-serve arcitecture](https://images.velog.io/images/quato/post/a338e250-6343-4995-8caa-d8fc5d2d7c09/image.png)

클라이언트-서버 아키텍처(Client–server architecture)는 서비스 요청자인 클라이언트와 서비스 자원(resource)의 제공자인 서버 간의 작업을 분리한 네트워크 모델이다. 자원은 요청의 대상으로 해당 소프트웨어가 관리하는 모든 것이다. 클라이언트와 서버로 이루어진 모델을 2-Tier 아키텍처라고도 한다. 클라이언트는 서비스를 사용하는 사용자 혹은 사용자의 단말기를 가리킨다. 서버는 서비스를 제공하는 컴퓨터이다.

클라이언트와 서버는 **요청**(request)과 **응답**(response)을 주고 받는다. 클라이언트가 자원 요청을 하면 서버가 요청을 처리해서 자원을 담은 응답을 보낸다. 일반적으로 서버는 자원을 전달하는 역할만 담당하고, 데이터베이스에 자원을 저장한다. 이렇게 클라이언트-서버 아키텍처에 데이터베이스가 추가된 형태를 3-Tier 아키텍처라 한다.

![3-Tier architecture](https://images.velog.io/images/quato/post/65345441-4d61-4b2c-b4a7-2387fb0223c4/image.png)

대표적인 클라이언트-서버 아키텍처는 월드 와이드 웹(World Wide Web, WWW, W3)이다. 웹 사이트에서는 웹 서버가 서버 역할을 하고, 사용자가 사용하는 브라우저가 클라이언트 프로그램이 된다.

또한 클라이언트는 플랫폼에 따라 구분할 수 있다. 브라우저를 통해 주로 이용하는 웹 플랫폼에서의 클라이언트는 웹 사이트 또는 웹 앱이다. 스마트폰/태블릿 플랫폼, 그리고 윈도우와 같은 데스크탑 플랫폼에서 이용하는 앱 역시 클라이언트가 될 수 있다.

서버는 역할에 따라 구분된다. 웹 사이트에서 필요로 하는 정보를 제공하는 앱인 웹 서버, 파일을 제공하는 파일 서버, 메일을 주고 받을 수 있게 도와주는 메일 서버 등이 있다. 그리고 데이터 제공자의 역할을 하는 데이터 베이스 역시 일종의 서버라 할 수 있다.

---

&nbsp;

> **HTTP 프로토콜**

프로토콜(Protocol)은 컴퓨터 상호 간 데이터 송수신에 필요한 통신 규약이다. HTTP 프로토콜(Hypertext Transfer Protocol)은 웹에서 이루어지는 모든 데이터 교환의 기초로, 클라이언트와 서버는 HTTP를 이용해서 정보를 주고받는다. 클라이언트와 서버는 HTTP 메시지를 교환하며 요청과 응답을 하고 HTML 문서와 같은 자원을 주고받을 수 있다.

![](https://images.velog.io/images/quato/post/a7c60d52-04ce-4a05-9d00-2fb125ecf2e1/image.png)

&nbsp;

**HTTP 특징**

HTTP로 통신을 주고받는 과정에서 기본적으로 서버는 요청에 대한 응답을 보내면 클라이언트와의 연결을 끊어버린다(Connectionless, 비연결성). 하나에 자원에 하나의 연결만 만드는 방법이다. 하지만 HTTP/1.1부터는 기본적으로 지속적 연결 상태를 지원하여, Keep-Alive 속성으로 지정한 시간만큼 연결을 유지한다. 클라이언트의 접속을 최소한으로 유지하면 서버는 부하를 줄일 수 있고 잠재적인 다수의 클라이언트의 요청을 처리할 수 있다.

서버는 클라이언트의 상태 정보를 유지하지 않아서 요청을 한 클라이언트의 이전 상태을 알 수 없다. 각 요청은 독립적으로 관리되고 HTTP는 클라이언트나 서버의 상태를 확인하지 않는다. 즉, HTTP는 상태를 가지지 않는다(Stateless, 무상태성). 하지만 상태를 아예 저장하지 않는다면 웹 서비스에 문제가 생길 수 있으므로 상태를 기억하기 위해 쿠키(cookie)와 세션(session)을 사용한다.

&nbsp;

**HTTP 흐름**

HTTP는 서버/클라이언트 모델을 따른다.

1. TCP 연결을 연다. (HTTP/1, HTTP/2)  
   클라이언트는 새 연결을 열거나, 기존 연결을 재사용한다.
2. 클라이언트가 HTTP 요청 메시지를 전송한다.
3. 서버가 보낸 HTTP 응답 메시지를 읽는다.
4. 연결을 닫거나 다른 요청을 위해 재사용한다.

서버에게 요청을 할 때는 정확한 방법으로 요청을 해야한다. 만약 서버가 어떻게 구성되어 있는지 모른다면 API를 이용해서 사용 가능한 자원을 파악할 수 있다.

&nbsp;

**API**

API(Application Programming Interface)는 클라이언트가 자원을 잘 활용할 수 있도록 서버가 제공하는 인터페이스이다. HTTP API 디자인에는 Best Practice가 존재한다. 데이터를 요청할 때는 주소(URL, URI)를 통해 자원에 접근할 수 있어야 한다. 그리고 HTTP 요청에는 메소드가 존재하는데, CRUD에 따라 알맞은 요청 메소드를 사용해서 자원에 대한 행위(Verb)를 표현해야 한다.

&nbsp;

**HTTP 요청 메소드**

HTTP 요청 메소드(HTTP 동사)는 주어진 자원에 수행하기 원하는 행동을 나타낸다. HTTP 요청 메시지를 보낼 때는 메소드를 지정해야 한다. 다음은 RESTful API를 기준으로 분류된 메소드이다.

![](https://images.velog.io/images/quato/post/f66124b3-370c-4429-902f-2b23752e8acc/image.png)

&nbsp;

**HTTP 메시지**

HTTP 메시지(HTTP Messages)는 서버와 클라이언트 간에 데이터가 교환되는 방식이다. 두 가지 메시지 타입, 요청과 응답이 있다. HTTP 메시지는 몇 줄의 텍스트 정보로 구성된다. 개발자가 직접 HTTP 메시지를 작성하는 경우는 드물며, 대신에 구성 파일, API, 기타 인터페이스에서 자동으로 완성한다.

![](https://images.velog.io/images/quato/post/3d3447b4-89a1-4d19-94d0-6bfee93c9d40/image.png)

HTTP 요청과 응답의 구조는 서로 비슷하다. 시작 줄, 헤더, 빈 줄(emply line), 그리고 본문으로 구성되어 있다. 시작 줄과 헤더를 합쳐서 헤드(Head)라고하며 payload(전송되는 데이터)는 본문(Body)이 된다. 본문은 모든 메시지에 들어가지는 않는다.

&nbsp;

**HTTP 요청**

시작 줄(Start line)

- HTTP 메소드: 수행할 작업(GET, PUT, POST 등)이나 방식(HEAD or OPTIONS)을 설명
- 요청 대상: 주로 URL로 지정
- HTTP 버전
  헤더(Headers): 요청과 요청 자원에 대한 메타 정보, key-value 쌍 형태
- 일반 헤더(General headers): 메시지 전체(요청과 응답)에 적용 가능
- 요청 헤더(Request headers): 요청에 대한 부가 정보
- 엔티티 헤더(Entity headers): 본문에 대한 부가 정보
  본문(Body): 다양한 형식의 데이터
- 단일-리소스 본문(Single-resource bodies)
- 다중-리소스 본문(Multiple-resource bodies)

&nbsp;

**HTTP 응답**

상태 줄(Status line)

- HTTP 버전
- 상태 코드(Status code): 요청의 결과
- 상태 텍스트(Reason phrase): 상태 코드에 대한 설명
  헤더
- 일반 헤더
- 응답 헤더(Response headers): 응답에 대한 부가 정보
- 엔티티 헤더
  본문
- 단일-리소스 본문
- 다중-리소스 본문

&nbsp;

**HTTP 상태 코드**

HTTP 응답 상태 코드는 특정 HTTP 요청이 성공적으로 완료되었는지 알려준다. 개발자는 이 상태 코드로 에러 처리를 할 수 있다. 상태 코드는 5개의 그룹으로 나누어진다.

**1xx** (정보): 요청을 수신하고 프로세스를 계속함  
100: Continue. 요청의 첫 번째 부분을 받았으며 나머지를 기다리는 중  
101: Switching Protocols. 프로토콜 전환 요청을 승인 중

**2xx** (성공): 요청을 수신하고 성공적으로 처리함  
200: OK. 요청을 처리하고 요청한 자원을 제공  
204: No Content. 요청을 처리했지만 콘텐츠를 제공하지 않음  
205: Reset Content. 요청을 처리했지만 콘텐츠를 표시하지 않음. 새로 고침 권고  
206: Partial Conent. 요청의 일부만 성공적으로 처리

**3xx** (리다이렉션): 요청 완료를 위해 클라이언트는 추가 작업이 필요  
301: Moved Permanently. 요청한 자원이 새 URL에 존재  
302: Found. 리다이렉트할 URL을 확인함  
303: See Other. 요청한 자원이 임시 주소에 존재  
304: Not Modified. 마지막 요청 이후 요청한 페이지가 수정되지 않음

**4xx** (클라이언트 오류): 요청의 문법이 잘못되었거나 요청을 처리 불가  
400: Bad Request. 잘못된 요청  
401: Unauthorized. 요청에 대해 인증이 필요  
403: Forbidden. 서버에 의해 요청이 거부됨  
404: Not Found. 요청한 자원을 찾을 수 없음  
405: Method Not Allowed. 요청에 대해 지정된 메소드를 사용 불가  
406: Not Acceptable. 클라이언트가 응답 코드를 받을 수 없음  
409: Conflict. 요청을 처리 중에 충돌 발생

**5xx** (서버 오류): 서버가 유효한 요청에 대한 처리 실패  
500: Internal Server Error. 서버에서 에러가 발생함  
501: Not Implemented. 서버에 해당 요청의 처리 기능이 없음  
503: Service Unavailable. 서버가 과부하되거나 유지 보수로 내려간 경우

---

&nbsp;

> **OSI 7 Layers 주요 프로토콜**

OSI 7 Layers

OSI 모형(Open Systems Interconnection Reference Model, OSI 7 계층)은 컴퓨터 네트워크 프로토콜 디자인과 통신을 계층으로 나누어 설명한 것이다. 네트워크 통신이 일어나는 과정을 7단계로 나누어서 단계별로 파악할 수 있으며, 통신 중 문제가 발생해도 어떤 계층의 문제인지 알아내면 해당 계층의 문제만 해결하면 된다.

![](https://images.velog.io/images/quato/post/87c957ad-771c-47ac-a0de-33017dec59dd/image.png)

HTTP 프로토콜은 애플리케이션 레벨(응용 계층)의 프로토콜로 TCP/IP위에서 작동한다.

**응용 계층 프로토콜**

![](https://images.velog.io/images/quato/post/f13f0fcb-c583-4651-877c-b613d27abacb/image.png)

**전송 계층 프로토콜**

![](https://images.velog.io/images/quato/post/ba89ee25-0e3a-408c-886c-82f03c13435e/image.png)

**네트워크(인터넷) 계층 프로토콜**

![](https://images.velog.io/images/quato/post/8a5efc6a-0c52-45a5-b9fb-f18e53d5318a/image.png)

**데이터링크 계층 프로토콜**

![](https://images.velog.io/images/quato/post/a1dc6394-44fa-4dee-ae54-8e5fe3828255/image.png)

---

&nbsp;

> **브라우저의 작동 원리**

**URI**(Uniform Resource Identifier, 통합 자원 식별자)

URI는 인터넷에 있는 하나의 자원을 가리키는 유일한 주소이다.
URI는 URL와 URN을 포함하는 상위 개념이다.

**URL**(Uniform Resource Locator)

네트워크 상에서 웹 페이지, 이미지, 동영상 등 자원의 위치를 가리키는 주소로, URI의 가장 흔한 형태이다. URL은 일반적으로 scheme, hosts, url-path로 구분할 수 있다.

- scheme: 프로토콜을 결정하며 일반적인 웹 브라우저에서는 http(s)를 사용
- hosts는 웹 서버의 이름이나 도메인, IP를 사용하며 주소를 나타냄
- url-path: 웹 서버에서 지정한 루트 디렉토리부터 시작해 파일이 위치한 경로와 파일명을 나타냄

**URN**(Uniform Resource Name)

인터넷에 있는 자원의 위치에 영향을 받지 않고 해당 자원을 식별 가능한 유일한 이름이다.

---

&nbsp;

> **IP와 포트**

**IP 주소**(Internet Protocol address)
IP는 인터넷에서 사용하는 주소 체계로 컴퓨터에 부여되는 값이다. 범용적으로 사용되는 IPv4은 4 바이트 주소 체계로 2^(32)인 약 43억 개의 IP 주소를 표현할 수 있다.

이미 용도가 정해진 IP도 존재한다.

localhost, 127.0.0.1: 현재 사용 중인 로컬 PC
0.0.0.0, 255.255.255.255: broadcast address, 로컬 네트워크에 접속된 모든 장치와 소통하는 주소
IP 주소가 고갈될 것을 염려하여 16 바이트 크기로 확장한 IPv6가 만들어졌고 2^(128)개의 주소를 표현할 수 있다. 하지만 아직은 사용량이 적으며, IPv4를 IPv6로 전환할 수 있는 듀얼스택이나 터널링 같은 기술이 사용된다.

**PORT**

PORT(포트) 번호는 IP 주소가 가리키는 컴퓨터에 접속할 수 있는 통로(채널)이다. 하나의 운영체제 내에서 소켓(네트워크 망의 연결에 사용되는 도구)을 구분하는 용도로 사용되므로, 사용중인 포트는 중복해서 사용할 수 없다. 포트 번호는 16비트로 표현되므로 사용할 수 있는 범위는 0~65535까지이고, 0~1024번의 포트는 잘 알려진 PORT(Well-known PORT)로 주요 통신을 위한 규약에 할당하기로 예약되어 있다.

Well-known PORT 예시

- 22: SSH
- 80: HTTP
- 443: HTTPS

---

&nbsp;

> **도메인과 DNS**

**도메인 이름**(Domain name)

도메인 이름은 IP 주소를 대신해서 사용하는 주소이다. IP 주소의 형태로 서버의 주소를 기억하는 것은 어렵기 때문에 IP 주소에 도메인 이름을 부여하여 사용한다.

nslookup 명령어를 사용하면 도메인 이름으로 IP주소를 확인할 수 있다.

**DNS**(Domain Name System)

DNS는 도메인 이름을 IP 주소로 변환하거나 반대의 경우를 수행하는 데이터베이스 시스템이다. 만약 브라우저의 검색창에 도메인 이름을 입력하면 이 요청은 DNS에서 IP주소를 찾는다. 그리고 이 IP 주소에 해당하는 웹 서버로 요청을 전달하며 클라이언트와 서버가 통신할 수 있도록 한다.

---

&nbsp;

> **AJAX**

AJAX(Asynchronos JavaScript And XML)는 그 자체가 특정한 기술은 아니며, 자바스크립트를 이용해서 비동기적으로 서버와 클라이언트가 데이터를 교환할 수 있도록 구현하는 방식을 의미한다. HTML, CSS, JavaScript, DOM, XMLHttpRequest 객체 등을 비롯한 기존의 여러 기술을 사용하는 새로운 접근법이다. CSR을 구현하기 위해 사용된다.

다양한 기술을 AJAX 모델로 결합했을 때, 웹 애플리케이션은 전체 페이지를 새로 고침할 필요 없이 필요한 부분만 서버에서 응답 받아 동적으로 페이지 구성 요소를 변경할 수 있는 SPA를 구현할 수 있다. AJAX의 X가 XML을 의미하지만 요즘은 JSON을 이용하여 정보를 담는 경우가 많다.

AJAX는 XMLHttpRequest(XHR) API 혹은 fetch API를 사용해서 구현할 수 있다.

---

&nbsp;

> **SSR과 CSR**

CSR과 SSR의 주요 차이점은 페이지가 렌더링되는 위치이다.

**SSR**(Server Side Rendering)
SSR은 웹 페이지를 클라이언트(브라우저)에서 렌더링하지 않고 서버에서 렌더링한다. 브라우저가 서버의 URI로 GET 요청을 보내면, 서버는 완성된 해당 웹 페이지 파일(HTML)을 전송하고 브라우저에 도착하면 완전히 렌더링된다. 웹 페이지의 내용에 DB가 필요한 경우 서버는 DB를 불러와 웹 페이지를 변환하고 응답한다. 브라우저가 다른 경로로 이동할 때마다 이 과정을 반복한다.

SEO(Search Engine Optimization)가 우선 순위라면, 일반적으로 페이지마다 메타 태그를 삽입할 수 있는 SSR을 사용한다. 단일 파일의 용량이 작기 때문에 웹 페이지의 첫 화면 렌더링이 빠르게 필요한 경우나 사용자와의 상호작용이 적은 경우 SSR이 적합하다.

**CSR**(Client Side Rendering)
CSR은 브라우저에서 웹 페이지를 렌더링한다. 브라우저에서 요청을 보내면, 서버는 웹 페이지의 골격이 되는 단일 페이지와 자바스크립트 파일을 보낸다. 응답을 받으면 브라우저에서 자바스크립트 파일로 웹 페이지를 렌더링하고, DB가 필요한 경우 API를 사용한다. 브라우저가 다른 경로로 이동하면 서버는 이미지 같은 자원만 제공하고, 브라우저에서 페이지를 다시 렌더링한다.

SEO가 우선 순위가 아닌 경우에 CSR을 사용할 수 있다. 첫 화면 렌더링은 느려도 이후에 빠른 라우팅, 빠른 동적 렌더링으로 상호 작용이 풍부한 사이트에서 더 나은 사용자 경험을 제공한다.

&nbsp;

## 📆 &nbsp; 2021. 10. 19 (화)

### <span>[HTTP/네트워크] REST API</span>

&nbsp;

어제 학습한 개념을 바탕으로 간단한 HTML 메시지를 Postman을 이용하여 요청해보는 실습을 진행했다. 실습에 앞서 API 요청과 응답을 어떻게 하는 것이 바람직한 것인지 알아보기 위해 REST API에 대해 알아보는 시간을 가졌다.

> **REST API란?**

REST API에서 REST는 “Representational State Transfer”의 약자로, 로이 필딩의 박사학위 논문에서 웹(http)의 장점을 최대한 활용할 수 있는 아키텍처로써 처음 소개되었다. REST API는 웹에서 사용되는 데이터나 자원(Resource)을 HTTP URI로 표현하고, HTTP 프로토콜을 통해 요청과 응답을 정의하는 방식을 말한다.

&nbsp;

> **리차드슨의 REST 성숙도 모델**

REST API를 작성할 때는 몇 가지 지켜야 할 규칙들이 있다. 로이 필딩이 논문에서 제시한 REST 방법론을 보다 더 실용적으로 적용하기 위해 레오나르드 리차드슨은 REST API를 잘 적용하기 위한 4단계 모델을 만들었다.

![](https://images.velog.io/images/quato/post/63d38715-6aec-4cbb-9edd-7e90eb3d8c2e/image.png)

REST 성숙도 모델은 총 4단계(0~3단계)로 나누어진다.

앞서 이야기한 로이 필딩은 이 모델의 모든 단계를 충족해야 REST API라고 부를 수 있다고 주장했다. 그러나 실제로 엄밀하게 3단계까지 지키기 어렵기 때문에 2단계까지만 적용해도 좋은 API 디자인이라고 볼 수 있고, 이런 경우 HTTP API 라고도 부릅다.

&nbsp;

**Level 0 : 1 URI, 1 HTTP method**

REST 성숙도 모델에 따르면, 0단계에서는 단순히 HTTP 프로토콜을 사용하기만 해도 된다. 물론 이 경우, 해당 API를 REST API라고 할 수는 없으며, 0단계는 좋은 REST API를 작성하기 위한 기본 단계이다.

**Request**

```bash
POST https://api/user
{
  "function": "getUser",
  "arguments" [
    "1"
  ]
}
```

**Response**

```bash
HTTP/1.1 200 OK
{
  "result" {
  	"id": "1"
    "name": "Quato",
  }
}
```

**CRUD**

```bash
CREATE : POST /api/user
READ :   POST /api/user
UPDATE : POST /api/user
DELETE : POST /api/user
```

&nbsp;

**Level 1 : N URI, 2 HTTP method**

1단계에서는 개별 리소스와의 통신을 준수해야 한다. 모든 자원은 개별 리소스에 맞는 엔드포인트(Endpoint)를 사용해야 한다. 또한 요청하고 받은 자원에 대한 정보를 응답으로 전달한다.

HTTP method는 `GET`과 `POST`만 사용하고 있고, Response에서는 error인 경우에도 Status Code를 200으로 전달하고 있다. 또 HTTP headers에 Content-Type이나 Cache 관련 정보를 제공하지 않는다.

**Request**

```bash
POST https://api/users/create
{
  "name": "Quato"
}
```

**Response**

```bash
HTTP/1.1 200 OK
{
  "result" {
    "error": "already exist member"
  }
}
```

**CRUD**

```bash
CREATE : POST /api/users/create
READ :   GET /api/users/1
UPDATE : POST /api/users/update
DELETE : POST /api/users/remove/1
```

&nbsp;

**Level 2 : N URI, 4 HTTP method**

2단계에서는 HTTP method인 GET, POST, PUT, DELETE를 사용해 CRUD를 나타내고 메시지에 Status Code도 담겨 반환한다. GET은 상태를 변화시키지 않는 안전한 Action을 나타내고, 안전하게 얼마든지 호출할 수 있고 매번 같은 결과를 얻는다. 그리고 캐싱을 할 수 있어 사용자 입장에서 성능 향상도 느낄 수 있다.

- `GET` 메소드 같은 경우는 서버의 데이터를 변화시키지 않는 요청에 사용해야 합니다.
- `POST` 는 요청마다 새로운 리소스를 생성하고 PUT 은 요청마다 같은 리소스를 반환합니다. 이렇게 매 요청마다 같은 리소스를 반환하는 특징을 멱등(idempotent)하다고 합니다. 그렇기 때문에 멱등성을 가지는 메소드 PUT과 그렇지 않은 POST는 구분하여 사용해야 합니다.
- `PUT` 과 `PATCH` 도 구분하여 사용해야 합니다. `PUT`은 교체, `PATCH`는 수정의 용도로 사용합니다.

2단계에서는 URI에 action이 담기지 않고, 멱등성을 보장하는 `GET`에는 캐시가 적용된다. Response에는 의미있는 HTTP Status Code가 반환된다. Status Code를 모두 활용할 필요는 없고, 클라이언트 입장에서 200 OK인지, 클라이언트 잘못(400 Bad Request) 인지, 서버 잘못(500 Internal Server Error)인지 정도를 알 수 있도록 전달해주면 충분하다. 다만, 실패일 경우 Body에 왜 실패했는지 정보를 보내주면 좋다.

**Request**

```bash
PUT https://api/users
{
  "name": "Quato"
}
```

**Response**

```bash
HTTP/1.1 201 Created
Content-Type: application/json
{
  "result" {
    "id": "1",
    "name": "Quato"
  }
}
```

**CRUD**

```bash
CREATE : POST /api/users
READ :   GET /api/users/1
UPDATE : PUT /api/users/1
DELETE : DELETE /api/users/1
```

&nbsp;

**Level 3 : Hypermedia As Engine of Application State**

마지막 단계는 HATEOAS(Hypertext As The Engine Of Application State)라는 약어로 표현되는 하이퍼미디어 컨트롤을 적용한다. 3단계의 요청은 2단계와 동일하지만, 응답에는 리소스의 URI를 포함한 링크 요소를 삽입하여 작성한다.

이때 응답에 들어가게 되는 링크 요소는 응답을 받은 다음에 할 수 있는 다양한 액션들을 위해 많은 하이퍼미디어 컨트롤을 포함하고 있다.

**Request**

```bash
GET https://api/
```

**Response**

```bash
HTTP/1.1 200 OK
Content-Type: application/json
{
  "/api/users",
  "/api/users/{userId}/roles",
  "/api/products",
  "/api/..."
}
```

**Request**

```bash
GET https://api/users/1
```

**Response**

```bash
HTTP/1.1 200 OK
Content-Type: application/json
{
 "result" {
    "id": "1",
    "name": "Quato",
    "nextActions": {
       "/api/users/{userId}/roles",
     }
  }
}
```

&nbsp;

## 📆 &nbsp; 2021. 10. 20 (수)

### <span>React] 데이터 흐름, State 끌어올리기</span>

&nbsp;

Section 1에서 괴롭혔던 리액트가 돌아왔다. 과연 친해질 수 있을까?😭

> **React 에서의 데이터 흐름**

리액트는 컴포넌트 단위 기준으로 상향식으로 앱을 만든다. 이는 테스트가 쉽고 확장성이 좋다. 기획자나 PM, 또는 UX 디자이너로부터 앱의 디자인을 전달받고 나면, 이를 컴포넌트 계층 구조로 나누는 것이 가장 먼저 한다. 컴포넌트 단위로 나누는 이유는 단일 책임 원칙 즉, 하나의 컴포넌트에 하나의 일만 시키기 위함이다.

![](https://images.velog.io/images/quato/post/47f71c79-278c-43df-8fa1-ce7128da7f49/image.png)

&nbsp;

**단방향 데이터 흐름(one-way data flow)**

리액트는 데이터를 위에서 아래로 보내는 단방향 top-down 구조이다. 컴포넌트는 컴포넌트 바깥에서 props를 이용해 데이터를 마치 인자(arguments) 혹은 속성(attributes)처럼 전달받을 수 있다. 즉 데이터를 전달하는 주체는 부모 컴포넌트가 된다. 이는 데이터 흐름이 하향식(top-down)임을 의미한다.

&nbsp;

**데이터**

애플리케이션에서 필요한 데이터 중에 변하는 값과, 변하지 않는 값은 무엇인가?

‣ `state` 변하는 값  
‣ `props` 변하지 않는 값

모든 데이터를 상태로 둘 필요는 없다. 사실 상태는 최소화하는 것이 가장 좋다. 상태가 많아질수록 애플리케이션은 복잡해진다. 어떤 데이터를 상태로 두어야 하는지 여부는 다음 세가지 질문을 통해 판단할 수 있다.

‣ 부모로부터 props를 통해 전달됩니까? 그러면 확실히 state가 아닙니다.  
‣ 시간이 지나도 변하지 않나요? 그러면 확실히 state가 아닙니다.  
‣ 컴포넌트 안의 다른 state나 props를 가지고 계산 가능한가요? 그렇다면 state가 아닙니다.

부모 컴포넌트가 props로 자식 컴포넌트에게 데이터를 보내줄 경우, '읽기 전용의 데이터' 일 뿐입니다. 변경이 불가능하다.

&nbsp;

**데이터(상태) 위치 정하기**

두 개의 자식 컴포넌트가 하나의 상태에 접근하고자 할 때는 두 자식의 공통의 부모 컴포넌트에 상태를 위치해야 한다.

![](https://images.velog.io/images/quato/post/406f2c6c-8119-4649-b8ff-eba144973872/image.png)

새 글을 추가하는 이벤트가 발생할 경우, 이때에 전체 트윗 목록에 새로운 트윗 객체를 추가할 수 있어야 한다. 즉, 두 컴포넌트 모두 트윗 목록에 의존한다. 두 컴포넌트의 부모는 무엇인가요? 바로 Twittler다. 전체 트윗 목록 상태는 여기에 위치한다.

&nbsp;

> **State 끌어올리기**

부모 컴포넌트에서의 상태가 하위 컴포넌트에 의해 변하는 것을 발견할 수 있다. 이는 단방향 데이터 흐름에 위배된다. 이를 해결할 수 있는 키워드는 바로 "State 끌어올리기(Lifting state up)"이다.

이는 상태를 변경시키는 함수(handler)를 하위 컴포넌트에 props로 전달해서 해결할 수 있다. 이는 마치 콜백 함수를 사용하는 방법과 비슷하다.

```js
import React, { useState } from "react";

export default function ParentComponent() {
  const [value, setValue] = useState("날 바꿔줘!");

  const handleChangeValue = () => {
    setValue("보여줄게 완전히 달라진 값");
  };

  return (
    <div>
      <div>값은 {value} 입니다</div>
      <ChildComponent handleButtonClick={handleChangeValue}  /> // 하위 컴포넌트로 상태 변경 함수 전달
    </div>
  );
}

function ChildComponent({ handleButtonClick }) {     // 함수를 인자로 받는다.
  const handleClick = () => {
    handleButtonClick('넘겨줄게 자식이 원하는 값')         // props로 전달받은 함수를 컴포넌트 내에서 실행
  }

  return (
    <button onClick={handleClick}>값 변경</button>
  )
}
```

&nbsp;

## 📆 &nbsp; 2021. 10. 21 (목)

### <span>[React] useEffect</span>

&nbsp;

> **useEffect**

useEffect 함수는 리액트 컴포넌트가 랜더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook이다.
useEffect는 컴포넌트가 mount 됐을 때, unmount 됐을 때, update 됐을 때, 특정 작업을 처리할 수 있다. 즉, 클래스형 컴포넌트에서 사용할 수 있었던 생명주기 메소드를 함수형 컴포넌트에서도 사용할 수 있게 해준다.

![](https://images.velog.io/images/quato/post/eaaa1be2-fe32-4309-846c-c08c530c51c1/image.png)

&nbsp;

> **useEffect 사용법**

기본형태 : **useEffect (function, deps)**

‣ `function` : 수행하고자 하는 작업  
‣ `deps` : 배열 형태이며, 배열 안에는 검사하고자 하는 특정 값 or 빈 배열

&nbsp;

**useEffect 함수 불러오기**

```js
import React, { useEffect } from 'react';
```

&nbsp;

**컴포넌트가 mount 됐을 때 (처음 생성됐을 때)**

컴포넌트가 화면에 가장 처음 렌더링 될 때, 한 번만 실행하고 싶을 때는 deps위치에 빈 배열을 넣는다.

```js
useEffect(() => {
  console.log('마운트 될 때만 실행된다.');
},[]);
```

만약 배열을 생략한다면 리렌더링 될 때 마다 실행된다.

```js
useEffect(() => {
  console.log('랜더링 될 때 실행된다.');
});
```

&nbsp;

**컴포넌트가 update 될 때 (특정 props, states가 바뀔 때)**

특정값이 업데이트 될 때 실행하고 싶을 때는 deps 위치의 배열 안에 검사하고 싶은 값을 넣어준다.  
(의존값이 들어있는 배열 deps이라고도 한다. dependency를 의미)

```js
useEffect(() => {
  console.log(name);
  console.log('업데이터 될 때 실행된다.');
}, [name]);
```

업데이트 될 때만 실행하는 것이 아니라 마운트 될 때도 실행된다.
따라서 업데이트 될 때만 특정 함수를 실행하고 싶다면 아래와 같은 꼼수를 사용하면 좋다.

```js
// 코드 생략

const mounted = useRef(false);

useEffect(() => {
  if (!mounted.current){
    mounted.current = true;
  } esle {
    // ajax
  }
}, [바뀌는 값]);

// 코드 생략
```

컴포넌트가 mount 될 때는 if 문에서는 아무것도 실행하지 않고 mounted 값만 바꿔주고, else에서 배열 안에 있는 값이 바뀌면, ajax 서버 통신이라던지 원하는 코드를 실행할 수 있다.

&nbsp;

**컴포넌트가 unmount 될 때(사라질 때) & update 되기 직전에**

cleanup 함수 반환 (return 뒤에 나오는 함수이며 useEffect에 대한 뒷정리 함수라고 한다.)

```js
useEffect(() => {
  console.log('effect');
  console.log(name);
  return () => {
    console.log('cleanup');
    console.log(name);
}, []);
```

**unmount 될 때만 cleanup 함수를 실행하고 싶을 때**  
두 번째 파라미터로 빈 배열을 넣는다.

**특정 값이 update 되기 직전에 cleanup함수를 실행하고 싶을 때**  
deps 배열 안에 검사하고 싶은 값을 넣어준다.

&nbsp;

**deps에 특정 값 넣기**

deps에 특정값을 넣게 된다면 컴포넌트가 처음 마운트 될 때, 지정한 값이 바뀔 때, 언마운트 될때, 값이 바뀌기 직전에 모두 호출이 된다.

useEffecrt 안에서 사용하는 상태나, props가 있다면, useEffect의 deps에 넣어주어야 하는 것이 규칙이다. 만약 사용하는 값이 넣어주지 않는다면, useEffect 안의 함수가 실행될 때 최신 상태, props를 가리키지 않는다.

deps 파라미터를 생략한다면, 컴포넌트가 리랜더링 될 때마다 useEffect 함수가 호출된다.

## 📆 &nbsp; 2021. 10. 22 (금)

### <span>[Web Server] Node.js 요청 처리</span>

&nbsp;

> **기본 스크립트와 http 객체**

```js
var http = require('http');

var server = http.createServer();
server.on('request', doRequest); 
server.listen(process.env.PORT, process.env.IP); 
console.log('Server running!'); 

// 요청 처리 
function doRequest(req, res) { 
  res.writeHead(200, {'Content-Type': 'text/plain'}); 
  res.write('Hello World\n'); 
  res.end(); 
}
```

&nbsp;

**http 개체 로드**

```js
var http = require('http');
```

먼저 최초에 해야 하는 것은 필요한 라이브러리들의 로드이다. 이것은 "require"함수를 사용한다. 인수에 가져올 개체 이름을 지정하여 해당 개체가 로드되어 반환된다. 이것을 변수에 대입하여 이용한다.

여기에서는 "http"라는 개체를 로드 이고, 이것은 말 그대로 HTTP의 각종 기능을 요약한 것이다. 여기에서 서버 개체를 만든다.

&nbsp;

**Server 개체 생성**

```js
var server = http.createServer();
```

http 오브젝트의 "createServer"메서드를 호출하여 http.Server 개체를 만든다. 이것이 Node.js의 "서버"가 되는 부분이다. 이 개체를 준비하고 필요한 설정을 하여 서버로 실행한다. 여기에서는 인수없이 호출하고 있지만, 다음과 같이 작성 할수 있다

```js
http.createServer(function(XX){ 
  ……필요한 처리…… 
}).listen(XX);
```

아마도 Node.js 사이트 및 기타 해설 사이트를 보면 대부분이 이 작성법에 대해 있는 것이다. createServer 인수에 서버에서 요청을 받았을 때의 처리하는 함수를 작성한다. 그리고, 이 후에 listen이라는 대기하기 위한 메소드도 계속 작성되고 있다.

이 작성에는 전혀 문제가 없지만, 모두 한 덩어리로 작성되어 있기 때문에, 익숙해지기 전에는 조금 이해하기 어려울 것이기에, 여기에서는 쉽게 "createServer에 때로는 인수없이, 나중에 필요한 처리를 작성한다"라고만 기억하도록 하자.

&nbsp;

**요청 처리 설정**

```js
server.on('request', doRequest);
```

http.Server 개체에는 다양한 이벤트가 준비되어 있으며, 그 처리를 통합하는 방법도 준비되어 있다. "on"이라는 메소드는 지정된 이벤트 처리를 통합하는 것으로, 첫번째 인수에 이벤트 이름을, 두번째 인수에 통합 처리(함수)를 각각 지정한다.

여기에서는 "request"라는 이벤트에 "doRequest"라는 함수를 할당한다. request라는 것은 http.Server 객체가 클라이언트의 요청을 받았을 때 발생하는 이벤트로, 이를테면 여기에 "브라우저에서 서버에 액세스할 때 서버 응답 처리"를 포함한다.

&nbsp;

**대기 시작**

```js
server.listen(1234);
```

http.Server 개체의 준비가 되면, "listen" 메소드를 실행한다. 그러면 서버는 대기 상태가 되고, 클라이언트에서 요청이 있으면 그것을 받아 처리할 수 있다. 인수는 포트 번호를 지정하고 있다. 두번째 인수로서 호스트 이름을 지정하거나, 세번째 인수에 백 로그를 지정하거나, 네번째 인수에 콜백 함수를 제공할 수도 있지만, 우선 "첫번째 인수에 포트 번호"인 것만 기억해두면 충분하다.

&nbsp;

**콘솔에 출력**

```js
console.log( 'Server running!');
```

listen에서 대기 시작했던 곳으로 메시지를 콘솔에 출력한다. console은 콘솔 작업을 하기 위한 개체로 "log"로 로그 출력을 할 수 있다. 약간의 디버깅 용으로 로그 출력을 사용하면 편리하다.

&nbsp;

> **요청 처리를 위한 함수**

이것으로 http.Server 객체의 작성, 준비, 대기 시작까지의 흐름은 대체로 알 수 있었다. 남은 것은 "요청을 받았을 때의 처리"의 내용이다.

앞의 예제에서는 "doRequest"라는 함수를 정의해 두고, 이를 on 메소드에서 "request"이벤트에 조합했다. 이 request 이벤트에서 수행하는 작업이야말로 클라이언트의 요청을 처리하기 위한 것이다.

이 함수는 아래 같은 형태로 정의되어 있습니다.

```js
function 함수명 (req, res) { 
  ...... 필요한 처리 ...... 
}
```

인수는 두 개체가 전달된다. 각각 다음과 같다.

‣ `request`

첫번째 인수는 'request' 객체가 전달된다. 이는 http.IncomingMessage라는 객체에서 클라이언트의 요청에 대한 기능을 정리하고 있다.

‣ `response`

두번째 인수는 "response"개체가 전단된다. 이는 http.serverResponse라는 개체에 서버에서 클라이언트로 리턴되는 응답에 대한 기능을 정리하고 있다.

이 `reques`t와 `response`를 사용하여, 요청을 받았을 때의 처리를 만든다. 여기에서는 다음과 같은 처리를 한다.

&nbsp;

**헤더 정보 내보내기**

```js
res.writeHead(200, {'Content-Type': 'text/plain'});
```

"writeHead"는 response 객체의 메소드에서 헤더 정보를 응답에 작성해서 내보내는 것이다. 첫번째 인자는 상태 코드를 지정하고 두번째인수에 헤더 정보를 연관 배열로 정리한 것이다.

여기에서는 `{'Content-Type': 'text/plain'}`값이 포함되어 있다. 이로 인해 `Content-type`이라는 헤더 정보에 `'text/plain'`의 값을 설정하고 있는 것을 알 수 있다. 이것은 응답으로 반송하는 콘텐츠의 종류를 나타내는 헤더 정보로, 이것으로 "이 콘텐츠는 표준 텍스트이다"라는 것이 클라이언트에 전달된다.

&nbsp;

**컨텐츠 내보내기**

```js
res.write('Hello World\n');
```

HTTP에는 헤더 정보의 다음에 바디 부분이 되는 콘텐츠를 작성하고 있는데, 이 내용 내보내기를 하고 있는 것이 response 객체의 "write"이다. 인수에 지정한 값이 바디 부분의 컨텐츠로 작성된다.

이 write는 여러번 호출 할 수 있다. 이것을 호출하여 작성을 하더라도, 아직 콘텐츠는 종료하지 않으므로, 계속해서 write으로 추가 작성할 수 있다.

&nbsp;

**컨텐츠 출력 완료(응답 종료)**

```js
res.end();
```

내용 내보내기가 완료되면 마지막으로 response의 "end"를 호출하여 콘텐츠 출력을 완료한다. 여기에서는 단지 end를 호출하고 있을 뿐이지만, 인수로 내보낼 내용의 값을 지정할 수 있다. 그러면 인수의 값을 쓴 후에 내용을 완료한다.

이 end로 인해 응답 처리는 종료되고, 그 요청의 처리가 완료된다. "writeHead", "write", "end"의 3개가 있으면, 클라이언트에 반환 내용은 모두 쓸 수 있다.
