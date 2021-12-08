/**
 * 홈에서 메뉴를 렌더링 하는 페이지
 * 홈에서 category를 넘겨주면
 * category number를 가지고 API를 통해 정보 획득
 * ---> 미리 정의된 데이터를 가져오기로 함
 */

import * as s from 'pages/home/HomeStyled'

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
