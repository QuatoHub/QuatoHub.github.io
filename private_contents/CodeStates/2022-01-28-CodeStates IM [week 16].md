---
title: "CodeStates IM [First Project]"
date: '2022-01-28'
category: 'CodeStates'
summary: "CodeState Pre IM 16-17주차 기록입니다."
thumbnail: './images/codestate-software-engineer.jpeg'
---

## 💡프로젝트 돌아보면서

돌이켜 보면 2주의 시간이 평소보다 길게 느껴졌는지 짧게 느껴졌는지 감이 잡히지 않는다. 평소보다 잠을 못자서 길게 느껴진는 것 같다가도 구현하지 못한 기능을 생각하면 짧게 느껴지기도 한다. Intro에서 SR의 중요성을 강조하는 내용을 보고 2주 중 절반 정도는 할애할 생각을 가지고 임했는데 생각보다 빠르게 기획이 잡혀 3일 정도의 SR을 거친 뒤 바로 구현 작업으로 들어갔다. 하지만 이때 우리는 SR이 얼마나 부족했는지 알지 못했다. 이후 확정되지 못한 디자인으로 인해 더 많은 시간이 소모되었다.

## 🥬 Shelp

처음으로 진행하는 프로젝트인 만큼 여러 아이디어가 나왔다. 그 중 내가 제시한 유통기한 관리가 채택되었고 아이디어에 살을 붙여 유통기한 관리와 선택된 식재료를 이용하여 만들 수 있는 레시피 추천 기능까지 추가되었다.

> **About**

냉장고에 식재료들이 쌓여 처리하기 힘들다면 shelp에서 도움받아보세요  
Refrigerator management application for those who have a hard time managing ingredients.

> **Feature**

유통기한이 임박한 식재료들을 한눈에 파악할수 있습니다.  
grasp the ingredients that are approaching the expiration date at a glance.

정렬된 식재료들로 만들 수 있는 요리들을 추천해 줍니다.  
recommend a dish that can be made from the ingredients in the refrigerator.

처리해야 할 재료를 잊지 않도록 알림을 설정 할 수 있습니다.  
Set the alarm according to the expiration date.

🏠 &nbsp; <a href="https://github.com/codestates/shelp">Shelp Github</a>

## 🌙 웹 페이지 내부 모습

### • 로그인

<img src="./images/로그인.gif">

&nbsp;

### • 품목 검색 및 추가

<img src="./images/품목 검색 및 추가.gif">

&nbsp;

### • 품목 삭제 및 레시피 크롤링

<img src="./images/삭제 및 레시피 크롤링.gif">

&nbsp;

### • 레시피 검색 및 외부링크 이동

<img src="./images/레시피 검색 및 외부링크 이동.gif">

&nbsp;

## 📜 Wiki 문서

### • Stack

<img src = "https://images.velog.io/images/quato/post/cfa6b74a-4b0e-481d-8be3-183e3926306a/image.png">

2주라는 짧은 기간 동안 진행되는 만큼 새로운 언어나 라이브러리를 사용하는 것 대신 지금까지 학습한 내용을 복습한다는 개념으로 스택을 구성했다.

### • DB schema

<img src = "https://images.velog.io/images/quato/post/312c6c7d-fa73-4b78-8e68-619ded20de9a/image.png">

생각보다 스키마가 단출해서 걱정했는데 2-3개 정도가 적당하다는 말을 듣고 안심했다. 원래는 recipes 테이블도 있었지만 크롤링으로 구현하면서 제외되었다.

## 👨‍👩‍👦‍👦 팀

이번 프로젝트를 겪으면서 팀원과의 소통과 호흡이 정말 중요하다는 것을 다시 배웠다. 다행히 팀원 운이 좋아 모두 시간 약속도 잘 지키고 역할 분배가 마찰없이 진행되었다. 만들어진 결과물도 다른 팀과 비교했을 때 퀄리티가 높았다.

프로젝트를 진행하며 가장 난항을 겪었던 부분은 git관리였다. 처음으로 4명에서 git을 주고 받으며 엉키지 않게 해야했기에 신경이 많이 쓰였다. 결국 몇 번 fork된 레포를 지워야했다. 하지만 이번 프로젝트를 계기로 git flow에 대해 확실히 학습할 수 있었다. 4주 프로젝트에서는 git으로 시간 낭비하지는 않을 것 같다.

프로젝트가 끝나고 팀원들과 모여 4주 프로젝트에도 같이 진행할 것인지 의견을 나눴고 만장일치로 동의하여 파이널 프로젝트도 함께하게 되었다.

## 🛌 프로젝트를 마치며

4주 프로젝트가 남은 만큼 설 연휴 동안 아이디어 구상 및 새로운 언어와 라이브러리 학습을 진행할 예정이다. 2주 동안 끼니도 거르고 잠도 제대로 못자는 경우가 많아서 4주 프로젝트에는 시간 관리 및 체력 관리에 중점을 둬야겠다. 또한 디자인이 확정되지 않은 채 SR을 마무리하면서 프로젝트 후반에 시간을 많이 잡아 먹은 점을 감안해서 SR에 시간을 많이 투자해야겠다.
