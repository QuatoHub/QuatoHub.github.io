---
title: "CodeStates IM [week 14]"
date: '2021-11-29'
category: 'CodeStates'
summary: "CodeState Pre IM 14주차 기록입니다."
thumbnail: './images/codestate-software-engineer.jpeg'
---

## 📆 &nbsp; 2021. 11. 29 (월)

### <span>[네트워크] IP, HTTP, 웹 캐시</span>

&nbsp;

**💡 OSI 7계층 모델과 TCP/IP 모델**

**1. 데이터의 기술적 개념**

우선 데이터의 기술적 개념부터 생각해보자. 우리가 흔히 말하는, 컴퓨터 화면을 통해 볼 수 있는 모든 데이터는 컴퓨터 밖 세상의 것들과 크게 다르지 않다. 책처럼 읽을 수 있는 인터넷 신문기사의 글자들, 눈으로 본 것과 똑같이 찍혀 sns에 업로드 된 사진들... 이런 것들을 우리는 데이터라고 부른다. 너무 당연하게 받아들여온 개념이어서일까? 우리는 그것이 사실은 수많은 0과 1로 이루어진 숫자에 불과하다는 사실을 쉽게 잊는다. 그래서 데이터가 어떻게 전달되는가? 를 생각해보자니 너무 막연하고 어렵게 느껴지는 것이다.

데이터는 0혹은 1로 이루어진 숫자이고, 컴퓨터는 이진법의 숫자를 전기의 켜짐과 꺼짐으로 표현할 수 있다. 즉, 데이터는 아주 긴 전기 신호 인 것이다. 이렇게 이해하니 막연했던 데이터 전달 과정을 조금을 상상할 수 있을 것 같다. 아주 긴 케이블이 필요하겠구나. 그런데 케이블만 있으면 정말 데이터를 전달할 수 있는걸까?

&nbsp;

**2. 프로토콜(Protocol)이 필요하다**

컴퓨터, ip폰 등 한 클라이언트에서 발생한 데이터가 상대방 컴퓨터 혹은 서버로 전달되기 위해서는 표준화 된 어떠한 약속 혹은 절차를 따라야한다. 전기 신호가 그냥 케이블을 타고 상대방 컴퓨터로 전달되는 것이 아니다.

보내는 쪽에서는 데이터를 안전하고, 정확하고, 신속하게 규격화 즉 포장하는 방법이 필요하고, 받는 쪽에서는 그 데이터를 안전하고 정확하고 신속하게 해석하는 방법이 필요한 것이다. 그런 기술적 약속을 프로토콜 이라고 한다. 네트워크를 공부한다는 것은 많은 프로토콜을 학습한다는 것과 마찬가지다.

컴퓨터 간 데이터를 주고받을 때 에러가 발생하지 않도록 알맞게 나누어 전송하고, 이를 수신하여 다시 기존에 정보로 변환하는 과정, 어떤 모델이 약속되어 있는지 알아보자.

&nbsp;

**3. 계층구조**

네트워크 상에서 여러 대의 컴퓨터가 데이터를 주고 받으려면 이들을 서로 연동할 수 있도록 표준화된 인터페이스를 지원해야한다. OSI 7모델과 TPC/IP 모델 모두 계층 구조를 갖고 있기 때문에, 자세히 알아보기 전에 먼저 계층 구조가 어떤 것인지, 적용하면 어떤 점이 좋은지를 알 필요가 있다. 계층 구조(Layered)는 네트워크 뿐만 아니라 운영체제 등 다양한 분야에서 적용되는데, 계층 구조를 사용하는 목적은 분할 정복(Divide and Conquer) 때문이다. 어떠한 복잡한 문제를 해결하고자 할 때, 나누어 생각하면 쉽게 해결할 수 있다는 취지인 것이다.

계층 구조의 또다른 특징은 위, 아래 층으로만 이동할 수 있다는 점이다. 건너뛰어 한번에 맨위 또는 아래로 갈 수 없다. 즉, 다음 단계로 넘어가려면 이전 계층이 전제조건이 되어야한다.

&nbsp;

**4. OSI 7계층 모델**

OSI 7 Model은 네트워크 통신 과정을 7개의 계층으로 구분한 산업 표준 참조 모델이다. 초창기의 네트워크는 각 컴퓨터마다 시스템이 달랐기 때문에 하드웨어와 소프트웨어의 논리적인 변경없이 통신할 수 있는 표준 모델이 나타나게 되었다.

OSI 참조 모델은 위의 그림과 같이 7개의 층으로 이루어져 있다.

![](https://images.velog.io/images/quato/post/32cf2b2a-fa92-45a3-963a-825fe9d96439/image.png)

&nbsp;

**PDU 란?**

OSI 7계층에서는 PDU 개념을 중요시 하는데, PDU(Process Data Unit)란 각 계층에서 전송되는 단위이다. 1계층에서 PDU가 비트(Bit)라고 생각하기 쉽지만 PDU라고 하지 않고 여기서 비트는 단위라기 보다는 단지 전기 신호의 흐름일 뿐이다.

PDU는 2계층-프레임(Frame), 3계층-패킷(Packet), 4계층-세그먼트(Segment) 만 생각하면 된다. 네트워크 통신과정을 깊게 이해하기 위해서는 왜 각각의 계층의 PDU가 다른지 알아야 하고, 역할에 대해 알고 있어야 한다.

&nbsp;

**1계층 : 물리계층 (Physical Layer)**

물리계층은 OSI 모델의 최하위 계층에 속하며, 상위 계층에서 전송된 데이터를 물리 매체(허브, 라우터, 케이블 등)를 통해 다른 시스템에 전기적 신호를 전송하는 역할을 한다.

즉, 기계어를 전기적 신호로 바꿔서 와이어에 실어주는 것이다.

- PDU : 비트(Bit)
- 프로토콜 : Modem, Cable, Fiber, RS-232C
- 장비 : 허브, 리피터

&nbsp;

**2계층 : 링크계층 (Link Layer)**

링크계층은 네트워크 기기들 사이의 데이터 전송을 하는 역할을 한다. 시스템 간의 오류 없는 데이터 전송을 위해 패킷을 프레임으로 구성하여 물리계층으로 전송한다. 3계층에서 정보를 받아 주소와 제어정보를 헤더와 테일에 추가한다.

- PDU : 프레임(Frame)
- 프로토콜 : 이더넷, MAC, PPP, ATM, LAN, Wifi
- 장비 : 브릿지, 스위치

&nbsp;

**3계층 : 네트워크계층 (Network Layer)**

네트워크계층은 기기에서 데이터그램(Datagram)이 가는 경로를 설정해주는 역할을 한다. 라우팅 알고리즘을 사용하여 최적의 경로를 선택하고 송신측으로부터 수신측으로 전송한다. 이때, 전송되는 데이터는 패킷 단위로 분할하여 전송한 후 다시 합쳐진다. 2계층이 노드 대 노드 전달을 감독한다면, 3계층은 각 패킷이 목적지까지 성공적이고 효과적으로 전달되도록 한다.

- PDU : 패킷(Packet)
- 프로토콜 : IP, ICMP 등
- 장비 : 라우터, L3 스위치

&nbsp;

**4계층 : 전송계층 (Transport Layer)**

발신지에서 목적지(End-to-End) 간 제어와 에러를 관리한다. 패킷의 전송이 유효한지 확인하고 전송에 실패된 패킷을 다시 보내는 것과 같은 신뢰성있는 통신을 보장하며, 헤드에는 세그먼트가 포함된다. 주소 설정, 오류 및 흐름 제어, 다중화를 수행한다.

- PDU : 세그먼트(Segment)
- 프로토콜 : TCP, UDP , ARP, RTP
- 장비 : 게이트웨이, L4 스위치

&nbsp;

**5계층 : 세션계층 (Session Layer)**

통신 세션을 구성하는 계층으로, 포트(Port)번호를 기반으로 연결한다. 통신장치 간의 상호작용을 설정하고 유지하며 동기화한다. 동시송수신(Duplex), 반이중(Half-Duplex), 전이중(Full-Duplex) 방식의 통신과 함께 체크 포인팅과 유후, 종료, 다시 시작 과정 등을 수행한다.

- 프로토콜 : NetBIOS, SSH, TLS

&nbsp;

**6계층 : 표현계층 (Presentation Layer)**

표현계층은 송신측과 수신측 사이에서 데이터의 형식(png, jpg, jpeg...)을 정해준다. 받은 데이터를 코드 변환, 구문 검색, 암호화, 압축의 과정을 통해 올바른 표준방식으로 변환해준다.

- 프로토콜 : JPG, MPEG, SMB, AFP

&nbsp;

**7계층 : 응용계층 (Application Layer)**

응용계층은 사용자와 바로 연결되어 있으며 응용 SW를 도와주는 계층이다. 사용자로부터 정보를 입력받아 하위 계층으로 전달하고 하위 계층에서 전송한 데이터를 사용자에게 전달한다.

파일 전송, DB, 메일 전송 등 여러가지 응용 서비스를 네트워크에 연결해주는 역할을 한다.

- 프로토콜 : DHCP, DNS, FTP, HTTP

&nbsp;

**5. TCP/IP 모델**

그렇지만 OSI 참조 모델은 말그대로 참조 모델일 뿐 실제 사용되는 인터넷 프로토콜은 을 7계층 구조를 완전히 따르지는 않는다. 인터넷 프로토콜 스택(Internet Protocol Stack)은 현재 대부분 TCP/IP를 따른다.

TCP/IP는 인터넷 프로토콜 중 가장 중요한 역할을 하는 TCP와 IP의 합성어로 데이터의 흐름 관리, 정확성 확인, 패킷의 목적지 보장을 담당한다. 데이터의 정확성 확인은 TCP가, 패킷을 목적지까지 전송하는 일은 IP가 담당한다.

TCP/IP의 4계층
TCP/IP는 OSI 참조 모델과 달리 표현계층, 세션계층을 응용계층에 다 포함시키고 있지만, 사실상 TCP/IP Model의 Application 계층 하나에서 Application, Presentatiom, Session 계층의 구현을 다 하고 있다고 이해하는 게 올바르다.

![](https://images.velog.io/images/quato/post/d8f2f074-0b30-4704-b90d-2f9b4a37c67a/image.png)

데이터는 아래 그림과 같이 단계 별로 헤더(Data → Segment → Datagram → Frame)를 붙여 전송하며 이를 데이터 캡슐화라고 한다.

![](https://images.velog.io/images/quato/post/0c8f4e75-6d09-43a2-91ec-e28657756152/image.png)

&nbsp;

---

&nbsp;

**💡 웹 캐시**

![](https://images.velog.io/images/quato/post/bf45a6f8-1386-4b9b-8770-fe15eaf0b914/image.png)

캐시란 자주 사용하는 데이터나 값을 미리 복사해 놓는 임시 장소를 가리킨다. 캐시가 없다면 데이터가 변경되지 않아도 계속 네트워크를 통해서 데이터를 다운로드해야 한다. 인터넷 네트워크는 매우 느리고 비싸며 브라우저 로딩 속도가 느리다. 캐시를 사용하면 캐시 가능 시간 동안 네트워크를 사용하지 않아도 되고, 비싼 네트워크 사용량을 줄일 수 있으며, 브라우저 로딩 속도가 매우 빨라진다.

&nbsp;

**캐시 시간 초과**

캐시 유효 시간이 초과하면, 서버를 통해 데이터를 다시 조회하고, 캐시를 갱신한다. 이때 다시 네트워크 다운로드가 발생한다. 캐시 유효 시간이 초과해서 서버에 다시 요청하면 다음 두 가지 상황이 나타난다. 첫 번째는 서버에서 기존 데이터를 변경한다. 두 번째는 서버에서 기존 데이터를 변경하지 않는다. 만약 캐시 만료 후 서버에서 데이터를 변경하지 않았을 경우 데이터를 전송하는 대신에 저장해 두었던 캐시를 재사용 할 수 있다. 단 클라이언트의 데이터와 서버의 데이터가 같다는 사실을 확인할 수 있는 방법이 필요하다. 이때 사용할 수 있는 방법이 검증 헤더이다.

&nbsp;

**검증 헤더 (Last-Modified)**

![](https://images.velog.io/images/quato/post/eaf94604-9b69-40c4-9e01-1a66bdadf3d4/image.png)

HTTP 응답 값에 'Last-Modified:'를 받는다. 응답 결과를 캐시에 같이 저장한다. 캐시 시간이 초과된 후에 HTTP 요청을 서버에 다시 보낼 때 검증 헤더 'if-modified-since:'에 요청 헤더를 붙이고 서버에 넘긴다. 서버에서는 데이터가 아직 수정되지 않았음을 확인 후 304 Not Modified 와 헤더 메타 정보만 응답(보디 X)으로 응답한다. 반대로 데이터가 변경되었다면, 200 OK, 모든 데이터 전송(BODY 포함) 한다. 결과적으로 네트워크 다운로드가 발생하지만 용량이 작은 헤더 정보만 다운로드해서 매우 실용적인 해결책이 된다.

&nbsp;

**검증 헤더 (ETag)**

![](https://images.velog.io/images/quato/post/25b338b5-a3af-4026-804d-4f6178eb17c0/image.png)

ETag(Entity Tag)를 사용할 수 있다. 캐시 용 데이터에 임의의 고유한 버전 이름을 달아둔다. 데이터가 변경되면 이 이름을 바꾸어서 변경함 즉 Hash를 다시 생성한다. 요약하면 ETag만 보내서 같으면 유지, 다르면 다시 받기이다.

&nbsp;

**캐시 제어 헤더**

**1) Cache-Control**

- Cache-Control: max-age  
  캐시 유효 시간, 초 단위
- Cache-Control: no-cache  
  데이터는 캐시해도 되지만, 항상 원(Origin) 서버에 검증하고 사용해야 한다.
- Cache-Control: no-store  
  데이터에 민감한 정보가 있으므로 저장하면 안된다.(메모리에서 사용하고 최대한 빨리 삭제)

**2) Pragma 캐시 제어(하위 호환)**

Pragma: no-cache로 사용되며 HTTP 1.0 하위 호환 이다.

**3) Expires 캐시 만료일 지정(하위 호환)**

캐시 만료일을 정확한 날짜로 지정되며, HTTP 1.0 부터 사용되었고 지금은 더 유연한 Cache-Control: max-age 권장한다. Cache-Control: max-age와 함께 사용하면 Expires는 무시된다.

**프록시 캐시**

![](https://images.velog.io/images/quato/post/958873ff-4681-4678-8705-36a5df98a775/image.png)

지리적으로 거리가 있는 클라이언트와 서버가 접근한다면. 원 서버 입장에서는 클라이언트들이 너무 느리다고 생각이 된다. 그래서 클라이언트의 근처 어딘가에 프록시 캐시 서버를 만들어 웹 브라우저가 요청이 오면 프록시 캐시 서버를 접근하게끔 만든다. 가까운 예로 유튜브가 있다. 사람들이 많이 안 보는 동영상을 보면, 로딩 속도가 느리고 사람들이 많이 보는 동영상을 보면 로딩 속도가 빠르다. 왜냐하면 이미 한국 프록시 서버에 다운받아져 있기 때문이다.

- Cache-Control: public  
  응답이 public 캐시에 저장되어도 됨
- Cache-Control: private  
  응답이 해당 사용자만을 위한 것임, private 캐시에 저장해야 함(기본값)
- Cache-Control: s-maxage  
  프록시 캐시에만 적용되는 max-age
- Age: 60 (HTTP 헤더)  
  오리진 서버에서 응답 후 프록시 캐시 내에 머문 시간(초)

**캐시 무효화**

- Cache-Control: no-cache  
  데이터는 캐시해도 되지만, 항상 원 서버에 검증하고 사용해야 한다.
- Cache-Control: no-store  
  데이터에 민감한 정보가 있으므로 저장하면 안된다. 메모리에서 사용하고 최대한 빨리 삭제해야 한다.
- Cache-Control: must-revalidate  
  캐시 만료후 최초 조회시 원 서버에 검증해야한다, 원 서버 접근 실패시 반드시 오류가 발생해야한다. (504 Gateway Timeout), must-revalidate는 캐시 유효 시간이라면 캐시를 사용한다.
- Pragma: no-cache  
  HTTP 1.0 하위 호환을 대비해서 사용된다.

**참고**

[https://velog.io/@hidaehyunlee/데이터가-전달되는-원리-OSI-7계층-모델과-TCPIP-모델](https://velog.io/@hidaehyunlee/%EB%8D%B0%EC%9D%B4%ED%84%B0%EA%B0%80-%EC%A0%84%EB%8B%AC%EB%90%98%EB%8A%94-%EC%9B%90%EB%A6%AC-OSI-7%EA%B3%84%EC%B8%B5-%EB%AA%A8%EB%8D%B8%EA%B3%BC-TCPIP-%EB%AA%A8%EB%8D%B8)  
[https://velog.io/@hidaehyunlee/TCP-와-UDP-의-차이](https://velog.io/@hidaehyunlee/TCP-%EC%99%80-UDP-%EC%9D%98-%EC%B0%A8%EC%9D%B4)  
[https://velog.io/@baik9261/TIL-no.19-HTTP-캐시](https://velog.io/@baik9261/TIL-no.19-HTTP-%EC%BA%90%EC%8B%9C)

&nbsp;

## 📆 &nbsp; 2021. 11. 30 (화)

### <span>[Git] 브랜치 관리</span>

&nbsp;

**🌲 Branch**

:독립적으로 어떤 작업을 진행하기 위한 개념

개발하다보면 페이지 안의 여러 기능을 따로 규현하기 위해 코드를 여러개로 복사해야 하는 일이 자주 발생하는데
브랜치 기능을 활용하면 코드를 통째로 복사한후 원래 코드가 변경될 우려 없이 독립적으로 개발할 수 있다.

![](https://images.velog.io/images/quato/post/6a9feba9-32f0-4d0a-9183-d44b7aa12e97/image.png)

이렇게 나누어진 브랜치에서는 각자 독립적인 작업 영역 안에서 마음대로 소스코드를 변경을 할 수 있다.분리된 작업 영역에서 변경된 내용들은 다른 브랜치와 병합하여 다시 새로운 하나의 브랜치로 모을수 있다.

여러명이서 동시에 작업을 할 때에 다른 사람의 작업에 영향을 주거나 받지 않도록 먼저 통합 브랜치에서 자신의 작업 전용 브랜치를 만든다.

그리고 각자의 브랜치에서 맡은 영역에 대한 작업을 진행한 후, 작업이 끝난 브랜치는 통합 브랜치에 병합해서 변경 사항을 적용합니다. 이를 통해 다른 브랜치의 작업에 영향을 받지 않고 독립적으로 특정 작업을 수행하고 그 결과를 하나로 모아 나가게 됩니다. 이렇게 작업을 진행하게 되면 '작업 단위', 즉 브랜치로 그 작업의 내용들이 모두 기록되기 때문에 문제가 발생했을 때 원인이 되는 작업을 찾아내거나 그에 따른 대책을 세우기 쉬워집니다.

&nbsp;

**🌲 장점**

- 한 소스코드에서 다양한 작업을 할 수 있게 해준다
- 소스코드의 한 시점과 동일한 상태를 만들고,브랜치를 넘나들며 작업을 할 수 있다.
- 각각의 브랜치에서 생긴 변화가 다른 브랜치에 영향을 주지 않고 독립적으로 코딩을 진행할 수 있다.

&nbsp;

**🌲 종류**

> Integration Branch

:배포될 소스 코드가 기록되는 브랜치

GitHub Repositort를 생성하게 되면 기본적으로 main 브랜치가 생긴다.해당 프로젝트의 모든 기능이 정상적으로 작동하는 상태의 소스코드가 담겨 있다.

> Feature Branch

:기능 추가,버그 수정과 같이 단위 작업을 위한 브랜치

:통합 브랜치로부터 만들어내며,피처 브랜치에서 하나의 작업이 완료가 되면 다시 통합 브랜치에 병합하는 방식으로 진행된다.

> Release branch

:버그를 수정하거나 새로운 기능을 포함한 상태로 모든 기능이 정상적으로 동작하는지 확인하는 브랜치

최종적인 버그 수정 등의 개발을 수행한다. 모든 준비를 마치고 배포가능한 샅애가 되면 master 브랜치로 평합시키고 병합한 커밋에 릴리즈 번호 태그를 추가한다.

> Hotfix branch

:배포한 버전에 긴급하게 수정을 해야하 할 필요가 있을 경우, 'master' 브랜치에서 분기하는 브랜치

&nbsp;

**🌲 branch 명령어 모음**

(1) 새로운 브랜치 생성

- git branch 새로운 브랜치 이름

(2) 새로운 브랜치 생성 후 해당 브랜치로 전환

- git switch -c 새로운 브랜치 이름
- git checkout -b 새로운 브랜치 이름

(3) 브랜치 목록 확인

- git branch

(4)브랜치 목록과 각 브랜치의 최근 커밋 확인

- git branch -v

(5)브랜치 삭제

- git branch -d 삭제할 브랜치 이름
- git branch -D 해당 명령어는 병합하지 않은 브랜치를 강제 삭제하는 방법입니다.

(6)브랜치 전환

- git switch 브랜치 이름
- git checkout 브랜치 이름

(7)브랜치 병합

- master 브랜치로 dev 브랜치를 병합할 때 (master ← dev)
- git checkout master
- git merge dev

(8)로그에 모든 브랜치를 그래프로 표현

- git log --branches --graph --decorate

(9)아직 commit 하지 않은 작업을 스택에 임시로 저장

- git stash

&nbsp;

**🌲 흐름**

![](https://images.velog.io/images/quato/post/cad93164-7232-4800-bb7e-bbfdb7cb45a0/image.png)

> Remote 생성한 프로잭트 Repository를 각자의 Repository로 가져오기

- Fork: 프로젝트 Remote Repository -> 각자의 Remote Repository
- clone: 각자의 Remote Repository -> Local Repository

&nbsp;

> branch를 생성하고 생성한 branch로 이동하기

- 기본적으로 개발을 진행하는 과정에서 main branch가아닌 dev(develop) branch를 하나 만들어서 작업을 하는 경우가 많다.
- git checkout -b 새로운 브랜치 이름 or git switch -c 새로운 브랜치 이름
- Remote Repository에서도 생성한 브랜치를 반영하기 위해서는 git push origin dev 명령어를 입력하면된다.

하나의 기능을 구현할 때 예를들어 feature/기능이름'이라는 브랜치를 만들어 작업하기로 약속했다면 그이름을 가지고 브랜치를 만든다.(그 기능 branch에서 개발할 때에 또 checkout이나 switch를 이용해 만들고 이동하면된다.)

&nbsp;

> 생성한 브랜치 목록 및 현재 위치한 branch 확인하기

- git branch 명령어를 통해 확인이 가능함

&nbsp;

> 병합하기

병합하기 위해서는 병합이 될 브랜치로 이동을 해야한다. swich나 checkout으로 그 브랜치로 이동을 하자.

- git merge 병합할 branch 이름

fast-forward: 별도로 커밋을 생성하지 않고 합병될 branch가 가르키는 커밋이 합병될 branch의 이름으로 생성한 커밋으로 바꾸는 작업

**rebase와 merge의 차이점**

- `merge`:변경 내용의 이력이 모두 그대로 남아 있기 떄문에 이력이 복잡해짐
- `rebase`:말 그래도 branch base를 이동시킨다는 뜻으로,머지처럼 브랜치 통합을 목적으로 하지만,특정 시점으로 브랜치가 가리키는 곳을 변경하는 기능

만약 feature/test라는 branch를 만들어서 열심히 작업을 하고 master에 merge를 사용해서 병합한다고하면, feature/test에서 기록한 모든 commit이 master의 commit으로 기록된다.
rebase 방식을 사용해서 병합한다면, 내 작업하면서 남겼던 commit 중 불필요한 것들은 생략시키고 필요한 commit만 남겨서 master에 병합하기 때문에 master의 commit은 항상 깔끔하게 관리된다는 장점이 있다.

&nbsp;

> Remote Repository로 업로드하기

- git push origin 브랜치 이름

&nbsp;

> 내가 push한 변경 사항에 대해서 다른 사람들에게 알리는 것

- Pull Request

✋🏻 만약에 작업 중간에 업데이트가 된다면 pull로 받아주어야한다.

&nbsp;

**🌲 명령어**

> rebase

: 커밋의 베이스를 다시 정하고 싶은 경우

> squash

: 여러 개의 커밋 로그를 하나로 묶고 싶은경우

> revert

: 커밋 여러 개의 변경 사항을 취소하고 싶은 경우

> --amend

: 최근 커밋 메세지를 수정하고 싶은 경우

&nbsp;

## 📆 &nbsp; 2021. 12. 01 (수)

### <span>[배포] AWS</span>

&nbsp;

**AWS(Amazon Web Service)**

![](https://images.velog.io/images/quato/post/7072f2f2-1727-4077-9af6-e67b942340d8/image.png)

아마존 웹서비스(Amazon Web Service, AWS)는, 정말 어지러울 정도로 많은 서비스를 제공합니다. 2020년, 작년 한 해 AWS 서비스에 많은 변화가 있었던 것도 주목할 사항이고요. 무엇보다 처음 방문하면 보통 traditional 웹서버 운영방법과 다른 점도 많고 각 서비스의 이름들도 생소한 관계로 많은 개발자분들이 어려운 점을 느끼는 게 사실이라, AWS에서 가장 많이 사용하는 유익한 서비스 종류들 소개와 요약을 한번 정리해보았습니다. 각 항목에는 AWS 서비스 페이지로 링크와 간략한 설명이 있으니 한번 검토해 보세요!

&nbsp;

**EC2**

(Virtual Machine, 가상 머신)

![](https://images.velog.io/images/quato/post/dcefbc9e-0912-4da2-8502-ba86b9a947dd/image.png)

- 클라우드 Virtual Machine(가상 머신): 가상 컴퓨팅 환경 서비스
- 컴퓨팅 리소스에 대한 포괄적인 제어권을 제공: Amazon에서 제공하는 서비스의 가장 중심 되는 서비스
- 다양한 인스턴스 유형을 제공: 각 사용 사례에 맞게 여러 가지 프로세서, 스토리지, 네트워킹, 운영 체제 및 사이즈 선택 가능

`Elastic Compute Cloud`라고도하는 `EC2`는 Amazon에서 제공하는 서비스의 가장 중심 되는 서비스이라고 해도 과언이 아닙니다. 왜냐하면 Node, Go, Java, Python 등으로 만들어진 프로젝트의 백엔드를 “실행”하기 위해 아주 필수항목이기 때문입니다. EC2는 한마디로 간단한 “Virtual Machine(가상 머신)”입니다. 주목하여야 할 점은 단지 인스턴스를 시작하는 것외에, 더 많은 기능이 숨겨져 있다는 점. EC2 옵션으로 보안 그룹 세팅(외부 방화벽으로 간주), 로드 밸런싱, 그룹 자동 확장 등을 다양하게 설정 관리하는 방법이 제공되니, 이러한 정보를 좀 더 습득하여 EC2를 올바르게 사용해보세요.

&nbsp;

**S3**

(정적 파일 관리)

![](https://images.velog.io/images/quato/post/e280a782-bf2f-4975-bab4-0a7a9603cdc5/image.png)

- 오브젝트/정적 파일 스토리지 서비스 (사진, 비디오, 문서 등 또는 코드 화일까지! )
- 간편한 데이터 관리 및 액세스 제어
- 비용 효율적인 다양한 스토리지 클래스 & 백업 및 복원 솔루션 제공

`AWS S3(Simple Storage Service)`는 정적 파일 (사진, 비디오, 문서 등 또는 frontend 코드와 Lambda 함수 코드도 해당) 스토리지 서비스의 솔루션입니다. S3의 파일 저장은 “bucket (버킷 – 즉 ‘컨테이너’)”을 통해 운영이 되는데 다른 유저들의 액세스를 컨트롤할 수 있는 기능도 제공합니다. 또한 CloudFront를 구성하면 S3에 저장된 정적 파일이 CDN을 통해 더 효율적으로 빠르게 보급되는 장점이 있습니다.

&nbsp;

**IAM**

(사용자 설정 및 액세스 관리)

![](https://images.velog.io/images/quato/post/a99fb0d2-77cb-4b48-a04f-30b365c66e38/image.png)

`IAM(Identity and Access Management)`은 한마디로 AWS 서비스 관련 액세스와 권한 설정하는 “Key(키/열쇠)” 관리 서비스이니 사용 방법을 당연히 알아야 하는 핵심 중 하나입니다. 개발 사용을 위해서는 AWS 계정의 root(루트)가 아닌 다른 사용자 및 그룹 수준 권한을 설정하여 따로 사용자 ID 설정을 통한 이용을 권장드립니다.

&nbsp;

**Route 53**

(DNS 설정)

![](https://images.velog.io/images/quato/post/d13c3915-faad-4dd0-8f58-c0c63c8bb4e3/image.png)

- Domain Name System (DNS) 도메인 관리/설정 서비스
- EC2 인스턴스, Elastic 로드 밸런서, S3 저장소 등 AWS 서비스 인프라에 효과적으로 연결

`Route 53`는 AWS가 제공하는 서비스 중, 또 하나 필수로 알아야 할 "DNS 설정" 관련 서비스입니다. (이것은 별로 보통 웹서버와 다른 점이 없음. 이름만 좀 색다를 뿐) 다른 domain 등록 대행자를 통해 도메인을 구입한 경우 AWS 네임 서버(name server or NS records)를 가리키고 Route53 통해 지정 도메인이 가리키는 위치 (Elastic Load Balancer, EC2 인스턴스, CloudFront 배포, S3 버킷 등)를 쉽게 구성할 수 있습니다. Route53을 통해 도메인을 구입할 수도 있습니다.

&nbsp;

**Elastic Beanstalk**

(배포를 돕는 PaaS 같은 서비스)

![](https://images.velog.io/images/quato/post/f3383574-9b9e-444f-8fa1-ac95b1e31a01/image.png)

- 애플리케이션 배포를 간편히 관리해주는 서비스
- 코드를 업로드하기만 하면 Elastic Beanstalk가 용량 프로비저닝, 로드 밸런싱, Auto Scaling부터 시작하여 애플리케이션 상태 모니터링에 이르기까지 자동으로 처리

AWS의 Heroku와 비슷한 PaaS 같은 서비스. 진정한 PaaS는 아니지만 앱을 배포하는 점에 있어서 더 “수월한” 서비스입니다. (말하자면 잭과 콩나무, “Jack and the Beanstalk”, 처럼 “콩”을 심으면 자동적으로 쭉 자라는) 말하자면 몇 가지 다른 AWS 서비스를 사용하며, 웹 애플리케이션을 AWS에 배포하는 데 따른 복잡성을 간단히 설정해주는 서비스인데요, 제가 보기에 Lightsail과 비슷한 범주에 속합니다. 한번 시도해보십시오!

**PaaS란?**

"플랫폼-같은-서비스(Platform-as-a-service, PaaS)"는 하드웨어 및 응용 프로그램 관리가 제3사를 통해 제공되는 클라우드 컴퓨팅의 한 형식입니다. PaaS 제공업체는 자체 인프라에서 하드웨어와 소프트웨어를 호스팅하고 이러한 플랫폼을 사용자에게 통합 솔루션, 솔루션 스택 또는 인터넷을 통한 서비스로 제공. 그러니 Iaas(Infrastructure-as-a-service, 예로는 AWS과 DigitalOcean 등)보다 서버 프로비저닝 하거나 관리할 필요 없는 관계로, 더 사용 간편한 점이 있습니다.

&nbsp;

**CloudFront**

(AWS의 CDN—Content delivery network, 콘텐츠 전송 네트워크—솔루션)

![](https://images.velog.io/images/quato/post/65775ca7-cbba-4f4e-a268-c7ac51a310dd/image.png)

- 빠른 콘텐츠 전송을 위한 글로벌 규모의 네트워크: 강력한 네트워크 상의 cache 세팅을 통하여 거리 관련 콘텐츠 로드 지연을 최소화
- S3, EC2, Elastic Load Balancing, Route 53 등과 같은 AWS 서비스와 통합되어 운영

참고로 `CDN`(콘텐츠 전송 네트워크)은 강력한 네트워크 상의 cache 세팅을 통하여 웹 서버와 사용자 사이의 지역적 거리를 극복하며 페이지 콘텐츠 로드 지연을 최소화하는 기능을 말합니다. 이를 통해 전 세계 사용자들이 로딩 시간을 늦추지 않고 동일한 고품질 콘텐츠를 볼 수 있습니다. S3에 CloudFront를 설정함으로써 AWS에 저장되어있는 정적 파일을 사용자에게 지연 없이 안정적으로 전달할 수 있습니다.

국제적인 기관들에게는 필수!

&nbsp;

**RDS**

(Relational, "관계형", 데이터 베이스 서비스)

![](https://images.velog.io/images/quato/post/ef41360a-c217-422f-ba14-4a5fbe16e964/image.png)

Amazon의 `RDS`, "Relational Database Service"는 MySQL, Oracle DB, PostgreSQL과 같이 선택할 수 있는 다양한 데이터베이스 엔진을 제공하는 간단한 호스팅 서비스입니다. 구성 및 확장이 쉽습니다.

&nbsp;

**Lambda**

(AWS의 serverless compute service)

![](https://images.velog.io/images/quato/post/737a0124-77d5-42a9-9404-b87896f2701b/image.png)

- 서버 인프라를 프로비저닝하거나 관리할 필요 없이 Lambda 기능을 선호 언어 (Node.js, Python, Go, Java 등)로 작성하고 AWS 서비스에 업로드하여 코드를 자동으로 트리거하도록 설정하거나 웹 또는 모바일 앱에서 직접 코드를 호출

들어보셨는지 모르겠지만, 근래에 FaaS (Function as a Service) 제품 또한 인기가 높아졌습니다. 그런 붐에 더불어 “Serverless(서버를 사용하지 않는)” 모델은 개발자가 서버 인프라를 관리할 필요 없이 데브에만 집중할 수 있어 트렌드가 높아지고 있는 것이 사실인데요, 이것에 맞추어 나온 서비스 상품이 `AWS Lambda`, "serverless compute service"입니다.

간단한 사용 예를 들자면, JavaScript로 function 작성하고 (이미지 업로드 시 파일 압축과 다양한 이미지 사이즈 작성 등) AWS Lambda로 푸시하면, 백엔드 없이, 그 이벤트가 있을 때마다 function 실행될 수 있는 기능; 그리고 “실행 시간”에 대해서만 지불함으로 비용 절감도 가능합니다.

&nbsp;

**Lightsail**

편리한 단일 가상 서버

![](https://images.velog.io/images/quato/post/a64b5178-4164-49c8-8270-aa8d74324e0d/image.png)

- 편의적인 one-click “서버 세팅” 종류 서비스
- 주어진 리소스 옵션(Ubuntu, Node, Lamp stack, Nginx, WordPress, Django.. etc) 중 하나를 택하여 단일 가상 서버를 쉽게 설정
- 스토리지, 데이터베이스 및 CDN 등 간소하지만 종합적 서비스 제공

Digital Ocean과 같은 다른 클라우드 플랫폼이 제공하는 편의적인 one-click "서버 세팅" 서비스를 AWS이 시도해보는 신 상품으로 보입니다. 한마디로 주어진 설정 옵션 중 (거진 수요가 많은 서버 리소스들: Ubuntu, Node, Lamp stack, Nginx, WordPress, Django.. etc) 하나를 택하여 단일 소형 서버를 쉽게 설정할 수 있는 서비스입니다. 가격이 비교적 저렴하고, 간편한 세팅과 소규모로 시작한 다음 성장에 따라 확장할 수 있도록 설계되어있는점, 그리고 비교적 저렴한 가격 등에 관련하여 인기가 올라가고 있는 서비스입니다. 가상 머신(virtual machine), SSD 기반 스토리지, 데이터 베이스, DNS 관리 및 정적 IP 등을 제공합니다.

월별 3.50 USD로 시작하며, 용량이 더 필요할 때는 더 큰 패키지로 업그레이드하던가, EC2로 migrate도 가능합니다.

&nbsp;

## 📆 &nbsp; 2021. 12. 02 (목)

### <span>[배포] AWS</span>

&nbsp;

## 📆 &nbsp; 2021. 12. 03 (금)

### <span>[배포] Docker</span>

&nbsp;

![](https://images.velog.io/images/quato/post/2539ae3a-aed5-457a-b7a2-92a59694be19/image.png)

Docker란 Go언어로 작성된 리눅스 컨테이너 기반으로하는 오픈소스 가상화 플랫폼이다.

현재 Docker 0.9버전 부터는 직접 개발한 libcontainer 컨테이너를 사용하고 있다.

&nbsp;

**가상화를 사용하는 이유는?**

이제는 향상된 컴퓨터의 성능을 더욱 효율적으로 사용하기 위해 가상화 기술이 많이 등장하였습니다.

서버 관리자 입장에서 CPU사용률이 10%대 밖에 되지 않는 활용도가 낮은 서버들의 리소스 낭비일 수밖에 없습니다. 그렇다고 모든 서비스를 한 서버안에 올린다면 안정성에 문제가 생길수도 있습니다. 그래서 안정성을 높이며 리소스도 최대한 활용할 수 있는 방법으로 나타난게 서버 가상화입니다. 모두가 아는 대표적인 가상화 플랫폼으로는 VM이 있습니다. VM은 누구나 아는 OS가상화지요. 그렇다면 컨테이너란 무엇일까요?

&nbsp;

**컨테이너란?**

![](https://images.velog.io/images/quato/post/cebed433-80ac-409d-8fb2-599bcfa1411b/image.png)

컨테이너는 가상화 기술 중 하나로 대표적으로 LXC(Linux Container)가 있습니다. 기존 OS를 가상화 시키던 것과 달리 컨테이너는 OS레벨의 가상화로 프로세스를 격리시켜 동작하는 방식으로 이루어집니다.

한 서버의 여러 OS를 가상화 하여 사용하는 것과 컨테이너 방식으로 프로세스를 격리시켜 동작하는 방법은 어떠한 차이점이 있을까요?

&nbsp;

**VM 가상화 플랫폼 vs Docker 가상화 플랫폼**

![](https://images.velog.io/images/quato/post/f955f49e-6ea0-4ba0-8aa2-26fcc8d36431/image.png)

기존에 우리에게 익숙한 VM같은 경우엔 Host OS 위에 가상화를 시키기 위한 Hypervisor 엔진 그리고 그 위에 Guest OS를 올려 사용합니다. 이는 가상화된 하드웨어 위에 OS가 올라가는 형태로 거의 완벽하게 Host와 분리된다고 봐도 무방합니다. 반면에 컨테이너 기반 가상화는 Docker 엔진 위에 Application 실행에 필요한 바이너리만 올라가게 됩니다. OS 가상화를 보면 Host OS와 완전히 분리되는 장점은 있지만 OS위에 OS를 올리기 때문에 무겁고 느릴수 밖에 없습니다. 하지만 컨테이너 기반 가상화는 Host OS 그리고 Docker 엔진위에서 바로 동작하며 Host의 커널을 공유합니다. 커널을 공유하게 되면 io처리가 쉽게 되어 성능의 효율을 높일 수 있습니다.

컨테이너를 사용하는 것은 가상 머신을 생성하는 것이 아니라 Host OS가 사용하는 자원을 분리하여 여러 환경을 만들 수 있도록 하는 것입니다.

이렇게 쓰고보니 컨테이너기반이 OS가상화보다 뛰어나다라고 말하는 것 같지만 그렇지는 않습니다.
Docker를 소개하는 포스트인만큼 OS가상화에 비해 컨테이너기반의 가상화가 좋은점을 강조하며 Docker를 왜 쓰는지에 대해 설명을 한 것입니다.

OS가상화는 컨테이너기반 가상화보다 더 높은 격리 레벨을 지원합니다. 이는 보안적인 측면에서 더욱 유리합니다.
또한 OS가상화의 커널을 공유하지 않는 장점 또한 있습니다. 커널을 공유하지 않는 만큼 멀티 OS가 가능하다는 것입니다. 커널을 공유하지 않아 멀티 OS가 불가능 하다는 것은 Linux위에 Window를 올릴 수 없다는 단점이 있는 것이죠. 그럼에도 왜 Docker를 쓰는 이유는 성능향상, 뛰어난 이식성, 쉽게 Scale Out을 할 수 있는 유연성이라고 생각합니다.

&nbsp;

**Docker Image**

![](https://images.velog.io/images/quato/post/dccc7a32-fe67-41c1-a9c7-f04465c012a7/image.png)

Docker Image란 컨테이너를 실행할 수 있는 실행파일, 설정 값 들을 가지고 있는 것이라고 생각 하면 됩니다.
그림과 같이 Image를 컨테이너에 담고 실행을 시킨다면 해당 프로세스가 동작하게 되는 것이죠.
그럼 어떻게 이미지가 만드는지 알기 위해선 어떻게 이미지가 만들어지는지 먼저 알아보도록 하겠습니다.

![](https://images.velog.io/images/quato/post/ee94e1e4-0057-4229-a5a9-58c64eeb5733/image.png)

다음 그림을 보면 ubuntu 이미지를 만들기 위해 Layer A,B,C가 들어갑니다. 그럼 nginx 이미지를 만든다고 생각했을땐 어떻게 될까요? 이미 Layer A,B,C로 만들어진 ubuntu 이미지를 베이스 이미지로 사용하여 베이스 이미지에 nginx만 더하게 됩니다. 그렇다면 실질적으로 Layer A, B, C, nginx 가 더해진 것이지만 과정은 unbuntu + nginx가 더해진 것이죠. 그렇다면 web app 이미지를 만들려고 할 땐 어떻게 될까요? ubuntu 이미지에 nginx를 올리고 web app을 올리는 것이 아닌 이미 만들어진 nginx 베이스 이미지에 web app을 올려 이미지를 만들게 됩니다.
이제 이미지가 어떻게 만들어지는지 알았다면 실제로 Image를 만들어보는 Docker File에 대해 알아봅시다.

&nbsp;

**Docker File**

Docker Image들을 저장하고 배포하는 Docker Hub는 정말 잘 활성화 되어 있습니다. 이미 여러 회사들은 소프트웨어를 Docker Hub를 통해 배포하기 시작했고 우린 Docker hub에서 image를 pull하여 간단하게 컨테이너에 넣어 사용할 수 있습니다. 하지만 이는 무엇인가 부족해 보이죠. 만약 배포판이 없다면? 배포판 보다 더욱 보완하고 싶다면? 그럴때 사용 할 수 있는 것이 Docker Fille입니다.
Docker File은 이미지 생성 출발점으로 이미지를 구성하기 위한 명령어들을 작성하여 이미지를 구성할 수 있습니다. 그 뜻은 Docker File을 읽을 수만 있다면 해당 이미지가 어떻게 구성되어 있는지도 알 수 있다는 의미가 됩니다.

&nbsp;

**Docker Hub & Docker Registry**

![](https://images.velog.io/images/quato/post/867ecd94-f51a-4b79-a10a-16240237f0dc/image.png)

Docker Hub에서는 이미지를 저장하고 관리해줍니다. 위에서도 많은 회사들이 Docker로 소프트웨어를 배포하기 시작했고 공개이미지들을 공유할 수 있습니다. Docker Hub를 이용하면 손쉽게 imaer를 pull 받아 컨테이너에 적용 시킬 수 있습니다. (사실 GitHub와 동일하게 생각해도 무관함)

그렇다면 Docker Registry는 무엇일까요?

Docker Hub처럼 공개된 방식이 아닌 비공개적으로 격리된 저장소를 구축할 수 있습니다.

![](https://images.velog.io/images/quato/post/2226c462-f50a-4f36-90c1-891014a536e4/image.png)

다음은 Docker Image를 Pull받기 위한 url 입니다. 그림과 같이 앞에있는 url을 적지 않으면 default로 Docker Hub에서 Image를 pull 받게되고 url을 적어준다면 사설 저장소에서 이미지를 받을 수 있습니다.

&nbsp;

**Docker Archtecture**

![](https://images.velog.io/images/quato/post/06c5c89f-1533-4683-8b3d-62a30aa9739e/image.png)

&nbsp;

**도커의 기본 명령어들**

❗️ 명령 입력 시 permission 관련 오류가 뜨는 환경에서는 각 명령어 앞에 sudo를 붙여주세요.

- 도커 버전 확인

```bash
docker -v
```

- 도커 이미지 다운만 받기

```bash
docker pull {이미지명}:{태그}
# 예: docker pull python:3
```

- 태그는 필수가 아닙니다.

- 컴퓨터 내 도커 이미지들 보기

```bash
docker images 
```

- 이미지로 컨테이너 생성하기

```bash
docker create {옵션} {이미지명}:{태그}
# 예: docker create -it python
```

- 만들어진 컨테이너 시작하기 (이미지에 CMD로 지정해놓은 작업 시키기)

```bash
docker start {컨테이너 id 또는 이름}
```

- 컨테이너로 들어가기 (컨테이너 내 CLI 이용하기)

```bash
docker attach {컨테이너 id 또는 이름}
```

- 이미지를 다운받아(없을 시에만) 바로 컨테이너 실행하여 진입하기

```bash
docker run {이미지명}:{태그}
# 예: docker -it run python:3
```

- pull, create, start, attach 를 한꺼번에 실행하는 것과 같습니다.

| 옵션                                           | 설명                                                                        |
| ---------------------------------------------- | --------------------------------------------------------------------------- | --- |
| -d                                             | 데몬으로 실행(뒤에서 - 안 보이는 곳(백그라운드)에서 알아서 돌라고 하기)     |     |
| -it                                            | 컨테이너로 들어갔을 때 bash로 CLI 입출력을 사용할 수 있도록 해 줍니다.      |     |
| --name {이름}                                  | 컨테이너 이름 지정                                                          |
| -p {호스트의 포트 번호}:{컨테이너의 포트 번호} | 호스트와 컨테이너의 포트를 연결합니다.                                      |     |
| --rm                                           | 컨테이너가 종료되면{내부에서 돌아가는 작업이 끝나면} 컨테이너를 제거합니다. |     |
| -v {호스트의 디렉토리}:{컨테이너의 디렉토리}   | 호스트와 컨테이너의 디렉토리를 연결합니다.                                  |     |

- 동작중인 컨테이너 재시작

```bash
docker restart {컨테이너 id 또는 이름}
```

- 도커 컨테이너의 내부 쉘에서 빠져나오기 (컨테이너를 종료)

```bash
exit
```

- 또는 Ctrl + D

- 도커 컨테이너의 내부 쉘에서 빠져나오기 (컨테이너를 종료하지 않음)

- Ctrl + P, Q

- (동작중인) 컨테이너들 보기

```bash
docker ps
```

- 동작중이 아닌 것을 포함한 모든 컨테이너를 보려면 -a 옵션을 뒤에 붙입니다.

- 컨테이너 삭제

```bash
docker rm {컨테이너 id 또는 이름}

# 모든 컨테이너 삭제
docker rm `docker ps -a -q`
```

- 이미지 삭제

```bash
docker rmi {옵션} {이미지 id}
```

- 컨테이너가 있을 시 강제삭제: -f 옵션 사용

- 모든 컨테이너와 이미지 등 도커 요소 중지 및 삭제

```bash
# 모든 컨테이너 중지
docker stop $(docker ps -aq)

# 사용되지 않는 모든 도커 요소(컨테이너, 이미지, 네트워크, 볼륨 등) 삭제
docker system prune -a
```

```bash
# 아래를 복붙하여 함께 실행하면 편리합니다.
docker stop $(docker ps -aq)
docker system prune -a
```

- 확인 질문에 y로 답하고 마무리합니다.

- 도커파일로 이미지 생성

```bash
# Dockerfile 파일이 있는 디렉토리 기준.  마지막의 . 이 상대주소
docker build -t {이미지명} .
```

- 도커 컴포즈 실행

```bash
# docker-compose 파일이 있는 디렉토리 기준
docker-compose up
```

- 백그라운드에서 데몬으로 돌도록 하려면 -d 옵션을 붙입니다.

&nbsp;

### 참고 자료 📩

- [[Docker] Docker의 개념 및 핵심 설명](https://khj93.tistory.com/entry/Docker-Docker-%EA%B0%9C%EB%85%90)  
- [가장 쉽게 배우는 도커](https://www.yalco.kr/36_docker/)