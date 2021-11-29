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
|0|21.11.15~21.11.21|프로젝트 주제 설정, 준비|[11/14](./meeting-logs/21-11-14.md), [11/21](./meeting-logs/21-11-21.md)|[Requirement Gathering](./Requirement_gathering.md)|[1주차 피드백](https://github.com/hy57in/2021-Industry-Hands-On-Project/blob/main/document/feedback/21-11-22.md)|
|1|21.11.22~21.12.01|||||
|2|21.12.02~21.12.12|||||
|3|21.12.13~|||||
## Shared document
[docs](https://docs.google.com/document/d/1b8LA6jXomMK3xPr2sh1_XxCwibw56-0ldWEgzYrpA0I/edit)
[spread sheet](https://docs.google.com/spreadsheets/d/1vsu7URLWPv53WTsdFkEjsMZHs8vbxEwoJTJh-khbiA0/edit#gid=0)

## Problem statements
### The Problem
1. 버거를 주문할 때 주문대기 시간이 얼마나 걸리는지 알 수 없다.
2. 매장의 비정기적인 휴무일을 알 수 없다 (현재 매장이 영업하는 중인지 알 수 없다.)
3. 오프라인 주문만 가능하기때문에 미리 주문해서 원하는 시간에 버거를 받을 수 없다.
4. 온라인 메뉴판의 부재로 현재 판매중인 버거와 사이드메뉴의 종류 및 가격을 알기 어렵다.
5. 어떤 메뉴가 주문량이 많은지 알 수 없다.
6. 자신이 지난번에 어떤 메뉴를 주문하였는지 알 수 없다.
7. 자신이 주문한 버거에 대한 피드백을 매장에 남길 수 없다.
8. 판매자는 고객의 피드백을 받기 힘들다.
9. 판매자는 재료소진 등의 이유로 판매가 불가능한 메뉴를 고객에 알릴 수 없다.


### Scenarios
1. 이용자가 홈페이지 접속시, 로그인 페이지가 나온다.
2. 회원 등록이 되어있지 않은 이용자는 이름, 아이디, 패스워드를 입력하여 회원가입을 한다.

3-1. 이용자는 회원가입 후, 로그인 페이지에서 본인의 아이디와 패스워드를 입력 후 서비스에 로그인한다.

3-2. 관리자는 관리자 계정을 통해 서비스에 로그인한다.

#### 이용자
4. 이용자는 메뉴 페이지를통해 버거와 사이드메뉴를 볼 수 있다.

4-1. 이용자는 메뉴를 좋아요 순서로 정렬할 수 있다.

4-2. 이용자는 버거 선택 시 사이드 메뉴 및 개수를 선택할 수 있다.

4-3. 이용자가 선택된 메뉴는 장바구니에 담긴다.

4-4. 장바구니를 통해 선택된 메뉴와 총 금액을 확인할 수 있다.

5.  이용자는 원하는 결제 방법을 선택하고, 결제할 수 있다.
6. 이용자는 주문할 때, 픽업 시간을 설정하고 받아갈 수 있다.
7. 이용자는 자신이 구매한 음식에 대한 피드백, 좋아요 또는 싫어요를 남길 수 있다.

#### 관리자
4. 관리자는 등록된 버거 메뉴를 조회할 수 있다.

4-1. 관리자는 버거 메뉴를 추가할 수 있다.

4-2. 관리자는 등록된 버거 메뉴의 세부사항(메뉴, 가격, 사진 등)을 수정할 수 있다.

4-3. 관리자는 등록된 버거 메뉴를 삭제할 수 있다.

5. 관리자는 주문 정보(메뉴, 주소 등)을 확인할 수 있다.

5-1. 관리자는 주문 정보를 업데이트(픽업 전, 판매완료, 삭제 등)를 할 수 있다.

5-2. 관리자는 판매 내역을 조회할 수 있다.

6.  관리자는 유저 피드백을 조회할 수 있다.

## Requirement Gathering
[Requirement Gathering](./Requirement_gathering.md)
![img](https://www.notion.so/Use-Case-3af333a37ec64ed5ad2a79f52a22efc4#ff07770b96a74bfd827893022735b088)
