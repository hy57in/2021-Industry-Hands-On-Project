## Requirement Gathering

[Requirement Gathering](document/sprint1/Requirement_gathering.md)

## Sprint1 이후의 product backlog update 된 
- 전화번호 삭제 
- 현장 결제 삭제

==>[관련 근거](https://github.com/hy57in/2021-Industry-Hands-On-Project/blob/main/document/meeting-logs/21-12-07.md)

- 메뉴 DB 생성
- 메뉴 조회 API 생성

(기존)

Sprint1 에서 카테고리 별 메뉴를 DB에 저장할 때 백엔드와 DB에 대한 설정이 완벽하게 되지 않았다. 

따라서 Subgroup2에서 메인 메뉴가 얼마 되지 않는다고 판단하여 프론트에 올리고 Subgroup1에서 DB 설계와 백엔드 연결을 확실히 설정하기로 결정하였다.


(수정)

메뉴의 양이 얼마 되지 않아 프론트에 올려놨지만, Sprint2에서 메뉴를 인기순으로 정렬하거나 좋아요, 싫어요를 누르는 기능은 DB에서의 query가 필요하므로 메뉴 정보를 프론트에서 DB로 옮기기로 하였다.

## spinrt2 USECASE

### [sprint2 : USECASE 상세 내용 바로가기](https://github.com/hy57in/2021-Industry-Hands-On-Project/blob/main/document/sprint2/Usecase.md)

## 전체 product backlog 개요

![image](https://user-images.githubusercontent.com/80442377/146413460-a2fbb5fa-39b1-4efe-9948-4dc3d1e5ca0f.png)


### UC -1 : 회원가입

Dod

- 카우버거 온라인 주문 시스템 홈페이지에 접속하여 회원가입 페이지로 이동한다, 중복 조건 확인

related requirements

req 1 - 서비스를 이용하기 위해, 이용자는 서비스에 회원 가입한다. 회원 가입 정보는 사용자 이름, 아이디, 패스워드, 핸드폰 번호를 포함한다.


### UC -2 : 로그인

Dod

- 이용자는 회원가입할 때 입력한 정보로 홈페이지에 로그인한다, 가입 정보가 있는지 확인

related requirements

req 2 -  이용자는 아이디와 비밀번호를 입력해 로그인한다.

req 16 - 서비스 관리를 위해, 관리자는 관리자 계정으로 서비스에 로그인 할 수 있다.


### UC -3 : 메뉴 조회

Dod

- 카테 고리별로 메뉴를 확인할 수 있음. 메뉴를 클릭하여 상세 정보 페이지로 이동가능.  (test) 관리자가 품절메뉴 가리기를 통해 메뉴를 가린다면 메뉴 조회에서 보이지 않아야함.
- 관리자가 등록한 순서의 기본 정렬과 이용자의 추천순에 따른 정렬을 할 수 있음. 관리자가 메뉴를 추가하거나, 이용자가 메뉴를 추천하였을 때 업데이트 된 DB 정보가 실시간으로 반영이 되야함.

related requirements

req 3 - 이용자는 어떤 메뉴가 있는지 모르므로 메뉴 조회를 통해 메뉴를 알 수 있고 이를 통해 버거,사이드,디저트 종류를 선택할 수 있다.

req 13 - 인기 있는 메뉴를 확인하기 위해, 이용자는 좋아요 순서로 메뉴를 정렬할 수 있다.


### UC -4 : 메뉴 정보확인

Dod

- 메뉴에 대한 정보(알레르기 유발 물질, 가격) 확인, 원하는 수량 만큼 장바구니에 담을 수 있음, 수량이 1개 이상 10개 이하여야함.

related requirements

req 5 - 메뉴에 대한 정보를 알기 위해, 이용자가 특정 메뉴를 선택하면 해당 메뉴에 대한 가격 및 세부정보(구성 정보)를 제공한다.								
req 8 -	이용자가 메뉴판을 가독성 있게 읽고 주문할 수 있도록, 카테고리에서 버거, 사이드, 디저트로 구분하고 메뉴를 선택하여 상세페이지를 통해 장바구니에 담을 수 있게 한다.								
req 9 -	이용자가 메뉴의 세부 정보를 확인하고 주문할 수 있도록, 상세 페이지를 통해 메뉴를 읽고 메뉴 개수를 선택할 수 있게 한다.								



### UC -5 : 수령방법 결정

Dod

- 매장식사, 픽업 중 원하는 수령방법을 선택할 수 있음. 픽업 선택 시 픽업 시간을 설정할 수 있음

related requirements

req 6 -	주문을 기다리지 않기 위해, 이용자는 구매 시 픽업 시간을 설정할 수 있다.				
req 7 -	이용자는 결제 전, 매장 식사와 픽업 중 메뉴 수령 방법을 결정할 수 있다.				



### UC -6 : 메뉴 수량 조절

Dod

- 메뉴 목록에서 메뉴를 선택하면 1개가 선택되고, 장바구니에서 +,- 버튼을 눌러 선택한 메뉴의 수량을 조절할 수 있음. x버튼을 눌러 메뉴 선택을 삭제할 수 있음.

related requirements

req 9	- 이용자가 메뉴의 세부 정보를 확인하고 주문할 수 있도록, 상세 페이지를 통해 메뉴를 읽고 메뉴 개수를 선택할 수 있게 한다.						
req 10	- 주문 확인 및 추가,삭제를 위해, 이용자는 자신이 장바구니에 담은 메뉴를 조회할 수 있다.						



### UC -7 : 결제하기

Dod

- 이용자는 수령방법을 선택하여 장바구니에 담은 메뉴들을 결제한다. 결제를 마친 메뉴들은 장바구니에서 제거된다.
- 총 결제 금액 확인 가능해야함.
- 결제 상세 내용을 다시 확인하기 위해, 장바구니로 돌아가는 버튼이 있어야함.
- 메뉴를 더 추가 하기 위해, 메뉴 조회 페이지로 돌아가는 버튼이 있어야함.
- 결제하기 버튼을 통해 결제 진행.


related requirements

req 11	- 장바구니에 담긴 메뉴 주문(구매)을 위해, 이용자는 결제할 수 있다.				
req 12	- 장바구니에 담긴 메뉴 주문(구매)을 위해, 이용자는 총 결제 금액을 볼 수 있다.				



### NF -8 : 영업시간

Dod

- 영업시간, 휴무일 표시. 메뉴 조회 페이지에서 볼 수 있음.

related requirements

- 이용자는 주문하기 전에 휴무일인지, 영업 시간인지 확인할 수 있다.




### UC -9 : 주문내역

Dod

- 이용자가 주문 했던 메뉴를 조회할 수 있다.

related requirements

req 15 -  이용자는 주문내역 확인 및 재주문을 위해 자신이 주문 했던 메뉴를 조회할 수 있다.



### UC -10 : 피드백 남기기

Dod

- 주문 내역마다 좋아요 또는 싫어요를 할 수 있다, 좋아요 또는 싫어요를 반대로 수정할 수 있다.

related requirements

req 4	- 이용자는 자신이 구매한 음식 메뉴에 대해 좋아요 또는 싫어요를 할 수 있다.				



### UC -11 : 등록 메뉴 확인

Dod

- 관리자 계정으로 로그인 하면 관리자가 등록했던 메뉴를 조회할 수 있다. 

related requirements

req 17	- 버거 메뉴를 관리하기 위해, 관리자는 등록된 버거 메뉴를 조회할 수 있다.				


### UC -12 : 메뉴추가

Dod

- 관리자는 메뉴를 추가할 수 있다.

related requirements

req 18	- 고객들의 메뉴 선택 및 주문을 위해 또는 신메뉴를 등록하기 위해 관리자는 버거 메뉴를 추가할 수 있다.					

### UC -13 : 메뉴 삭제

Dod

- 관리자로 로그인하여 관리자 등록메뉴 확인 페이지에서 메뉴를 삭제할 수 있다. 
- DB 에서 메뉴 삭제 확인
- 메뉴 조회에서도 업데이트 되어 메뉴가 보여지는지 확인 되어야 함.

related requirements

req 19	- 더 이상 판매하지 않는 메뉴가 생길 때를 위해, 관리자는 등록한 버거 메뉴를 삭제할 수 있다.					

### UC -14 : 판매내역

Dod

- 관리자는 판매내역을 확인할 수 있다. 

related requirements

req 20	- 주문을 받기 위해, 관리자는 판매 내역을 통해 주문정보를 확인할 수 있다.				
req 22	- 판매량을 계산하기 위해, 관리자는 판매 내역을 통해 메뉴 판매 내역을 조회할 수 있다.


### UC -15 : 주문상태 업데이트

Dod

- 관리자가 주문상태 업데이트, 즉 판매 완료로 전환하면 이용자의 주문내역에 결제 완료한 주문 정보가 업데이트 되어야함.

related requirements

req-21	주문 상태를 확인하기 위해, 관리자는 판매 내역을 통해 주문이 완료되었는지, 미완료 상태인지 확인할 수 있다.						

### UC -16 : 품절 메뉴 가리기

Dod

- 관리자가 품절된 메뉴의 판매상태를 품절로 변경하여 가린다. 사용자는 메뉴 조회에서 품절된 메뉴를 볼 수 없어야 한다.

related requirements

req-23	재고가 소진된 메뉴를 사용자에게 가리기 위해, 특정 메뉴의 판매상태를 품절로 변경할 수 있다.					



## USECASE TraceAbility

![image](https://user-images.githubusercontent.com/80442377/145838787-05279126-a200-4463-80af-51dac4cdd80c.png)

![image](https://user-images.githubusercontent.com/80442377/145839594-8b21f529-6bd2-4eb6-9fc7-5c3d661b6090.png)



위, 작업량(size)와 우선순위를 고려하여 sprint2 에서는 아래와 같이 sprint를 분배하였다.

## Sprint1 => total SIZE : 46

USECASE 1,2,3,4 => total SIZE : 46

회원가입, 로그인, 메뉴조회, 메뉴 정보 확인

[Sprint Backlog](https://github.com/hy57in/2021-Industry-Hands-On-Project/blob/main/document/sprint1/sprint_backlog.md)

## Sprint2 => total SIZE : 59

![image](https://user-images.githubusercontent.com/80442377/146413904-3c7374dc-fa4e-4d3a-ac1b-9144853933bd.png)

