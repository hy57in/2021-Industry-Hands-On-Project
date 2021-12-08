/**
 * Dummy
 * 메뉴에서 클릭 시 넘어옴
 * 메뉴에서 메뉴정보를 props로 가져와야 함
 */

import React from 'react'
import { Link } from 'react-router-dom'
import * as s from 'detail/DetailStyled'
import MenuImage from 'components/MenuImage'
import Counter from 'components/Counter'

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
        <s.NameText>{detailInfo.ko_name}</s.NameText>
        <MenuImage image={detailInfo.image} />
      </s.ImageBox>

      <s.ContentBox>
        <s.ContentText>
          구성 성분: {detailInfo.info}
          <br />
        </s.ContentText>
        <s.ContentText>가격: {detailInfo.price}원</s.ContentText>
      </s.ContentBox>

      <s.CounterBox>
        <Counter />
        <s.CashButton>주문하기</s.CashButton>
        <Link to="/"><s.LinkHome>홈으로</s.LinkHome></Link>
      </s.CounterBox>
    </div>
  )
}

export default Detail
