# 2021-Industry-Hands-On-Project
산업체 핸즈온 프로젝트 01분반  
담당 : 김명호 교수님
## Topic
온라인 카우버거 주문 시스템

참고 : [Online Pizza Ordering System](https://nevonprojects.com/online-pizza-ordering-system/)


## Members
|이름|GitHub|역할|
|------|---|---|
|김소현|[@thguss](https://github.com/thguss)||
|김효진|[@hy57in](https://github.com/hy57in)||
|정설희|[@xxeol2](https://github.com/xxeol2)||
|조현민|[@HnM97](https://github.com/HnM97)||
|채희선|[@chaehuiseon](https://github.com/chaehuiseon)||

## Sprint
|No|term|topic|meeting logs|results|feedback|
|------|---|---|---|---|---|
|0|21.11.15~21.11.21|프로젝트 주제 설정, 준비|[11/14](./document/meeting-logs/21-11-14.md), [11/21](./document/meeting-logs/21-11-21.md)|[Requirement Gathering](./document/sprint1/Requirement_gathering.md)|[1주차 피드백](./document/feedback/21-11-22.md)|
|1|21.11.22~21.12.01|Product backlog 작성, Spring backlog 작성, Usecase Diagram 작성, UI Mock up|[11/24](./document/meeting-logs/21-11-24.md), [11/27](./document/meeting-logs/21-11-27.md), [11/29](./document/meeting-logs/21-11-29.md)|[Product backlog](./document/sprint1/product_backlog.md),[Spring backlog](./document/sprint1/sprint_backlog.md), [Usecase diagram](./document/sprint1/Usecase.md), Mock up||||
|2|21.12.02~21.12.12|||||
|3|21.12.13~|||||
## Shared document
[docs](https://docs.google.com/document/d/1b8LA6jXomMK3xPr2sh1_XxCwibw56-0ldWEgzYrpA0I/edit)
[spread sheet](https://docs.google.com/spreadsheets/d/1vsu7URLWPv53WTsdFkEjsMZHs8vbxEwoJTJh-khbiA0/edit#gid=0)
[Size, Sprint](https://docs.google.com/spreadsheets/d/10ZTpL3aTN9Uo2c-ht4bpbTm-GxoEuitIfzcvI71sTTg/edit#gid=0)

## Problem statements
### The Problem
1. 오프라인 주문만 가능하기때문에 미리 주문해서 원하는 시간에 버거를 받을 수 없다. 
    → 픽업시간 설정 기능을 추가한다.
2. 온라인 메뉴판의 부재로 현재 판매중인 버거와 사이드메뉴의 종류 및 가격을 알기 어렵다.
    → 온라인 주문 시스템을 통해 미리 메뉴에 대한 정보를 명시한다.
3. 버거의 재료, 영양 성분 등 세부 정보를 알기 어렵다.
    → 메뉴 당 상세 정보에서 구성 성분을 명시한다.
4. 주문 시 인기 있는 메뉴가 무엇인지 알 수 없다. 
    → 좋아요 기준 정렬 옵션을 제공한다. 
5. 매장의 휴무일과 영업 시간을 알 수 없다. 
    → 홈페이지 하단에 가게 영업시간을 명시한다.
6. 자신이 지난번에 어떤 메뉴를 주문하였는지 알 수 없다.
    → 유저 별 지난 주문 내역 확인 페이지를 제공한다.  
7-1. 자신이 주문한 버거에 대한 의견을 매장에 남길 수 없다.  
7-2. 판매자는 고객의 피드백을 받기 힘들다.  
    →  자신이 주문한 메뉴들에 대한 좋아요, 싫어요 작성 기능을 제공한다.
8. 판매자는 재료 소진 등의 이유로 판매가 불가능한 메뉴를 고객에 알릴 수 없다.
    → 판매자가 메뉴 판매 상태를 변경할 수 있게 한다.

### User Scenarios

#### 이용자
- CASE 1
    
    나는 중앙대학교 대학원생이다. 저녁까지 연구를 하다가 잠깐 짬이 나서 식사를 해야 하는데, 빠르게 해결하고 싶다. 간단하게 배달을 시키려고 보니 가격이 비싸고 오래 걸려 학교 내의 카우버거에서 주문하려 한다. 그렇지만 식사 시간이 지나 현재 매장이 영업 중인지 알 수 없다. 온라인 시스템을 통해 **영업 중인지 확인할 수 있고 주문까지 해서 픽업한다면** 시간 절약도 되고 좋을 것 같다.  
    

- CASE 2
    
    나는 중앙대학교 학생이다. 공강 시간을 이용해 밥을 먹어야 하는데, 언제나 시간이 부족하다. 수업 쉬는 시간에 **미리 주문을 하고 수업이 끝나자마자 바로 음식을 받아서 먹을 수 있으면** 좋겠다.
    
- CASE 3
    
    나는 중앙대학교 학생이다. 팀플 회의가 있는 날에 간식을 사기 위해 카우버거에 갔었다. 개인이 아닌 여러명의 음식을 한번에 많이 주문을 해서 대기 시간이 굉장히 오래 걸렸었다. 만약 **미리 픽업시간을 설정해 주문 했다면 시간 절약도 되고 좋을 것 같다.**
    
- CASE 4
    
    나는 학교에 한번도 안가본 코로나학번(2020, 2021)이다. 중앙대학교 명물 카우버거가 그렇게 유명하다던데 한번도 못먹어봤다. 어떤 메뉴가 있고 또 어떤 메뉴가 인기있는지 알고싶은데 아는 선배도 없고 카우버거를 먹으려면 어디로 가야하는지조차 모른다. 학교홈페이지나 커뮤니티에서도 정보가 나오지 않는다. 버거 배달처럼 카우버거도 배달시켜서 먹을 수 있으면 좋겠다. **온라인으로 카우버거를 주문할 수 있고  메뉴 정보와 그리고 어떤 메뉴가 학생들 사이에서 선호 되는지 를 볼 수 있다면** 좋을 것 같다.
    
- CASE 5
    
    나는 중앙대학교 학생이다. 햄버거가 생각나서 식사를 간단하게 떼우려고 중앙대학교 내부에 있는 카우버거에 들렸다. 오늘은 새로운 메뉴를 먹어보고 싶어서 다른 메뉴를 주문하여 먹었다. 맛있게 먹고 일상생활을 하고 있는데 갑자기 몸이 가렵더니 서서히 몸에 두드러기가 나오는 것이었다. 놀라서 병원에서 진료를 받아보니 갑각류 알러지성 두드러기였고, 알고 보니 새로 먹어 본 버거 메뉴에 보이지 않게 새우가 들어있는 것이었다. 이를 방지하기 위해 주문할 때 **버거의 재료를 포함한 상세정보를 볼 수 있으면** 좋겠다.
    
- CASE 5
    
    나는 중앙대학교 학생이다. 카우버거에서 새우버거를 먹고 싶어 갔더니 재료 소진으로 인한 품절 상태였다. 이에 대해 **미리 알았다면 헛걸음 하지 않아도 되고 좋았을 것 같다.**



#### 관리자
- CASE 1
    
    나는 카우버거 점장이다. 손님들의 메뉴 선호도를 기반으로 버거 재료를 준비하고싶은데, 손님들의 선호도를 조사할 방법이 마땅치않다. 또한, 손님들의 의견을 받아 메뉴를 개선해 나가고 싶다. **손님들의 선호도를 조사할 방법이 있으면** 좋겠다.
    
- CASE 2
    
    나는 카우버거 알바생이다. 가끔 특정 메뉴에 대한 재료가 소진되는 경우가 있는데, 현재 키오스크에서는 메뉴를 품절상태로 변경시킬 수 없어서 손님들이 해당 메뉴를 주문하실때마다 난감한 경험이 많다. 손님들에게 **메뉴들에 대한 판매 상태를 알릴 방법이 존재하면** 좋겠다.
    
- CASE 3
    
    나는 카우버거 직원이다. 점심 시간, 종강 시간 등 특정 시간에 많은 주문이 들어오는데, 온라인 시스템을 통해 **주문 정보를 미리 알 수 있다면 주문을 좀 더 효율적으로 처리할 수 있을 것 같다.**

## Requirement Gathering
[Requirement Gathering](./Requirement_gathering.md)

