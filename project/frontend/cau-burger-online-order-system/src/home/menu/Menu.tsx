import React from 'react'
import * as s from 'home/HomeStyled'
import MenuCard from 'components/MenuCard'

interface MenuProps {
  categoryNum: number
}

const menu1 = {
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NYC-Diner-Bacon-Cheeseburger.jpg/330px-NYC-Diner-Bacon-Cheeseburger.jpg',
  name: '새우버거',
  price: 3000,
}

const Menu = ({ categoryNum }: MenuProps) => {
  return (
    <>
      <s.CategoryBar>
        <s.CategoryTab>버거</s.CategoryTab>
        <s.CategoryTab>사이드</s.CategoryTab>
        <s.CategoryTab>디저트</s.CategoryTab>
      </s.CategoryBar>
      <s.MenuBox>
        <MenuCard image={menu1.image} name={menu1.name} price={menu1.price} />
        <MenuCard image={menu1.image} name={menu1.name} price={menu1.price} />
        <MenuCard image={menu1.image} name={menu1.name} price={menu1.price} />
        <MenuCard image={menu1.image} name={menu1.name} price={menu1.price} />
        <MenuCard image={menu1.image} name={menu1.name} price={menu1.price} />
        <MenuCard image={menu1.image} name={menu1.name} price={menu1.price} />
        <MenuCard image={menu1.image} name={menu1.name} price={menu1.price} />
        <MenuCard image={menu1.image} name={menu1.name} price={menu1.price} />
      </s.MenuBox>
    </>
  )
}

export default Menu
