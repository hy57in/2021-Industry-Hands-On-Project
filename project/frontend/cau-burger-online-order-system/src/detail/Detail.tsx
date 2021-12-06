/**
 * Dummy
 * 메뉴에서 클릭 시 넘어옴
 * 메뉴에서 메뉴정보를 props로 가져와야 함
 */

import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as s from 'detail/DetailStyled'
import MenuImage from 'components/MenuImage'
import Counter from 'components/Counter'


interface MenuInfo {
  image: string
}

// 임시 데이터
const menu1: MenuInfo = {
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NYC-Diner-Bacon-Cheeseburger.jpg/330px-NYC-Diner-Bacon-Cheeseburger.jpg',
}

const Detail = () => {

  return (
    <div>
      <s.TitleBar>
        <s.TitleText>CAU BURGER</s.TitleText>
      </s.TitleBar>

      <s.ImageBox>
        <s.NameText>새우버거</s.NameText>
        <MenuImage image={menu1.image} />
      </s.ImageBox>

      <s.ContentBox>
        <s.ContentText>메뉴 구성 성분<br/></s.ContentText>
        <s.ContentText>가격</s.ContentText>
      </s.ContentBox>

      <s.CounterBox>
        <Counter />
        <Link to="/">home</Link>
      </s.CounterBox>

    </div>
  )
}

export default Detail
