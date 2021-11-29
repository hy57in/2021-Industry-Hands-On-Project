## UC-1 회원가입
|Use Case UC-1|회원가입|
|---|---|
|Related Requirement|REQ-1|
|Initialing Actor|이용자, 관리자|
|Actor's Goal|이용자는 서비스에 회원가입을 한다. 정보 입력시 이용자 이름, 아이디, 패스워드를 포함한다.|
|Participating Actors|로그인 정보 DB|
|Preconditions|카우버거 온라인 주문 시스템 홈페이지에 접속하요 회원가입 페이지로 이동한다.|
|Post Conditions|카우버거 온라인 주문 시스템 홈페이지에 로그인할 수 있다.|
|Flow|
|→1.|이용자는 이름, 아이디, 패스워드, 이용자/관리자 여부를 입력하여 계정 생성을 요청한다.|
|←2.|요청받은 정보가 로그인 정보 DB에 일치하는 정보가 없으면 계정을 생성한다.|
|→3.|이용자는 계정 생성을 완료한다.|
## UC-2 로그인
|Use Case UC-2|로그인|
|---|---|
|Related Requirement|REQ-2, REQ-17|
|Initialing Actor|이용자, 관리자|
|Actor's Goal|이용자는 회원가입할 때 입력한 정보로 홈페이지에 로그인한다.|
|Participating Actors|로그인 정보 DB|
|Preconditions|카우버거 온라인 주문 시스템 홈페이지에 접속하여 로그인 페이지로 이동한다.|
|Post Conditions|카우버거 온라인 주문 시스템 홈페이지를 이용할수 있다.|
|Flow|
|→1.|이용자는 아이디, 패스워드를 입력하여 로그인한다.|
|←2.|입력받은 정보가 로그인 정보 DB에 일치하는지 여부를 전송한다.|
|→3.|정보가 일치하면 로그인에 성공하고, 일치하지 않으면 로그인에 실패한다. 실패하면 1로 돌아간다.|
## UC-3 메뉴 조회

## UC-4 메뉴 정보 확인
|Use Case UC-4|메뉴 정보 확인|
|---|---|
|Related Requirement|REQ-6, REQ-9|
|Initialing Actor|이용자|
|Actor's Goal|판매중인 메뉴의 가격 및 세부정보를 확인하고, 구매 희망 수량만큼 장바구니에 추가 가능하다.|
|Participating Actors|메뉴 정보 DataBase|
|Preconditions|사용자가 전체 메뉴 조회 페이지에서 특정 메뉴를 선택해야하고, 해당 메뉴의 상세정보가 DB에 저장되어 있어야 한다.|
|Post Conditions|사용자가 해당 메뉴를 원하는 수량만큼 장바구니에 담거나, 뒤로가기하여 전체 메뉴 페이지로 돌아갈 수 있다.|
|→1.|사용자가 전체 메뉴 조회 페이지에서 특정 메뉴를 선택한다
|
|←2.|DB에서 해당 메뉴에 대한 가격 및 상세정보를 불러온다|
|→3.|사용자가 가격 및 상세정보 확인 후, 해당 메뉴의 구매 희망 수량을 입력하고 주문버튼을 누른다|
|←4.|입력 수량만큼 사용자의 장바구니에 추가시킨 후 전체 메뉴 조회 페이지로 돌아간다.|
## UC-5 수령 방법 결정

## UC-6 메뉴 수량 조절
<img src="https://user-images.githubusercontent.com/80442377/143823522-d4fd2918-8923-4ce2-b500-56cc266d3dd3.jpeg" width="80%"/>