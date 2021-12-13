# Requirement Gathering

## Topic : 온라인 카우버거 주문 시스템

| 유형  | 역할            |
| ----- | --------------- |
| User  | 카우버거 구매자 |
| Admin | 카우버거 판매자 |

### Functional Requirements


### User Requirements

| identifier | story | size |
| --- | --- | --- |
| REQ-1 | 서비스를 이용하기 위해, 이용자는 서비스에 회원 가입한다. 회원 가입 정보는 사용자 이름, 아이디, 패스워드, 핸드폰 번호를 포함한다. | 8 |
| REQ-2 | 이용자는 아이디와 비밀번호를 입력해 로그인한다. | 2 |
| REQ-3 | 이용자는 어떤 메뉴가 있는지 모르므로 메뉴 조회를 통해 메뉴를 알 수 있고 이를 통해 버거,사이드,디저트 종류를 선택할 수 있다. | 5 |
| REQ-4 | 이용자는 자신이 구매한 음식 메뉴에 대해 좋아요 또는 싫어요를 할 수 있다. | 1 |
| REQ-5 | 메뉴에 대한 정보를 알기 위해, 이용자가 특정 메뉴를 선택하면 해당 메뉴에 대한 가격 및 세부정보(구성 정보)를 제공한다. | 9 |
| REQ-6 | 주문을 기다리지 않기 위해, 이용자는 구매 시 픽업 시간을 설정할 수 있다. | 2 |
| REQ-7 | 이용자는 결제 전, 매장 식사와 픽업 중 메뉴 수령 방법을 결정할 수 있다. | 2 |
| REQ-8 | 이용자가 메뉴판을 가독성 있게 읽고 주문할 수 있도록, 카테고리에서 버거, 사이드, 디저트로 구분하고 메뉴를 선택하여 상세페이지를 통해 장바구니에 담을 수 있게 한다. | 10 |
| REQ-9 | 이용자가 메뉴의 세부 정보를 확인하고 주문할 수 있도록, 상세 페이지를 통해 메뉴를 읽고 메뉴 개수를 선택할 수 있게 한다. | 3 |
| REQ-10 | 주문 확인 및 추가,삭제를 위해, 이용자는 자신이 장바구니에 담은 메뉴를 조회할 수 있다. | 4 |
| REQ-11 | 장바구니에 담긴 메뉴 주문(구매)을 위해, 이용자는 결제할 수 있다. | 15 |
| REQ-12 | 장바구니에 담긴 메뉴 주문(구매)을 위해, 이용자는 총 결제 금액을 볼 수 있다. | 2 |
| REQ-13 | 인기 있는 메뉴를 확인하기 위해, 이용자는 좋아요 순서로 메뉴를 정렬할 수 있다. | 6 |
| REQ-14 | 이용자는 주문하기 전에 휴무일인지, 영업 시간인지 확인할 수 있다. | 1 |
| REQ-15 |  이용자는 재주문을 위해 자신이 주문 했던 메뉴를 조회할 수 있다. | 7 |

### Admin Requirements

| identifier | story | size |
| --- | --- | --- |
| REQ-16 | 서비스 관리를 위해, 관리자는 관리자 계정으로 서비스에 로그인 할 수 있다. | 3 |
| REQ-17 | 버거 메뉴를 관리하기 위해, 관리자는 등록된 버거 메뉴를 조회할 수 있다. | 9 |
| REQ-18 | 고객들의 메뉴 선택 및 주문을 위해, 관리자는 버거 메뉴를 추가할 수 있다. | 8 |
| REQ-19 | 더 이상 판매하지 않는 메뉴가 생길 때를 위해, 관리자는 등록한 버거 메뉴를 삭제할 수 있다. | 4 |
| REQ-20 | 주문을 받기 위해, 관리자는 판매 내역을 통해 주문정보를 확인할 수 있다. | 7 |
| REQ-21 | 주문 상태를 확인하기 위해, 관리자는 판매 내역을 통해 주문이 완료되었는지, 미완료 상태인지 확인할 수 있다. | 4 |
| REQ-22 | 판매량을 계산하기 위해, 관리자는 판매 내역을 통해 메뉴 판매 내역을 조회할 수 있다. | 4 |
| REQ-23 | 재고가 소진된 메뉴를 사용자에게 가리기 위해, 특정 메뉴의 판매상태를 품절로 변경할 수 있다. | 3 |