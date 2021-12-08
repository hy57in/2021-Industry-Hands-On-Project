/**
 * 홈에서 메뉴를 렌더링 하는 페이지
 * 홈에서 category를 넘겨주면
 * category number를 가지고 API를 통해 정보 획득
 * ---> 미리 정의된 데이터를 가져오기로 함
 */

import React from 'react'
import * as s from 'home/HomeStyled'
import MenuCard from 'components/MenuCard'
import * as menuData from 'assests/data.json'

interface MenuProps {
  categoryNum: number
  setCategoryNum: React.Dispatch<React.SetStateAction<number>>
}

interface MenuInfo {
  ko_name: string
  price: string
  image: string
  info: string
  like: number
}

// 임시 데이터
// const menu1: MenuInfo = {
//   image:
//     'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NYC-Diner-Bacon-Cheeseburger.jpg/330px-NYC-Diner-Bacon-Cheeseburger.jpg',
//   name: '새우버거',
//   price: 3000,
// }

// const menu2: MenuInfo = {
//   image:
//     'https://w.namu.la/s/91358088c687de68488f921cf22ebcdc819dea6ff14807b532d20f41950e443413e55bd4ee40bc7c7db2c374182c6f182c916063dc1a8ed72da0d24096a73e7a00af211c043da18042572979fd3973dde516fce581746a3c537adba89ebccb3c836af072faa11219f105d80ab6f60bd4',
//   name: '콜라',
//   price: 1000,
// }

// const menu3: MenuInfo = {
//   image:
//     'https://www.paris.co.kr/wp-content/uploads/%ED%99%94%EC%9D%B4%ED%8A%B8%EC%9A%94%EA%B1%B0%ED%8A%B8%EC%95%84%EC%9D%B4%EC%8A%A4%ED%81%AC%EB%A6%BC.png-%EA%B7%B8%EB%A6%BC%ED%8C%90.jpg',
//   name: '아이스크림',
//   price: 2000,
// }

const Menu = ({ categoryNum, setCategoryNum }: MenuProps) => {
  let menuList: MenuInfo[]
  const burgerMenu = menuData.burger
  const sideMenu = menuData.side
  const dessertDrinkMenu = menuData.dessert_drink

  if (categoryNum === 0) {
    menuList = burgerMenu
  } else if (categoryNum === 1) {
    menuList = sideMenu
  } else {
    menuList = dessertDrinkMenu
  }

  return (
    <>
      <s.CategoryBar>
        <s.CategoryTitle>메뉴</s.CategoryTitle>
        <s.CategoryTab
          tabId={0}
          categoryNum={categoryNum}
          onClick={(e) => setCategoryNum(0)}
        >
          버거
        </s.CategoryTab>
        <s.CategoryTab
          tabId={1}
          categoryNum={categoryNum}
          onClick={(e) => setCategoryNum(1)}
        >
          사이드
        </s.CategoryTab>
        <s.CategoryTab
          tabId={2}
          categoryNum={categoryNum}
          onClick={(e) => setCategoryNum(2)}
        >
          디저트
        </s.CategoryTab>
      </s.CategoryBar>
      <s.Divider />
      <s.MenuBox>
        {menuList.map((menu, index) => (
          <MenuCard
            image={menu.image}
            ko_name={menu.ko_name}
            price={menu.price}
            info={menu.info}
            like={menu.like}
          />
        ))}
      </s.MenuBox>
    </>
  )
}

export default Menu
