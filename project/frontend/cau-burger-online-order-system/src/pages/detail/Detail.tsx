/**
 * Dummy
 * 메뉴에서 클릭 시 넘어옴
 * 메뉴에서 메뉴정보를 props로 가져와야 함
 */

import React from 'react'
import { Link } from 'react-router-dom'
import MenuImage from 'components/MenuImage'
import Counter from 'components/Counter'
import * as s from 'pages/detail/DetailStyled'

import { useLocation } from 'react-router-dom'

interface MenuInfo {
  ko_name: string
  price: string
  image: string
  info: string
  like: number
}

interface ilocation {
  detailInfo: MenuInfo
}
const Detail = () => {
  const location = useLocation<ilocation>()
  const detailInfo = location.state.detailInfo
  return (
    <div>
      <s.TitleBar>
        <s.TitleText>CAU BURGER</s.TitleText>
      </s.TitleBar>

      <s.ImageBox>
        <s.NameText>새우버거</s.NameText>
        <MenuImage image={detailInfo.image} />
      </s.ImageBox>

      <s.ContentBox>
        <s.ContentText>
          메뉴 구성 성분
          <br />
        </s.ContentText>
        <s.ContentText>가격</s.ContentText>
      </s.ContentBox>

      <s.CounterBox>
        <Counter />
        <s.CashButton>주문하기</s.CashButton>
        <Link to="/">home</Link>
      </s.CounterBox>
    </div>
  )
}

export default Detail
