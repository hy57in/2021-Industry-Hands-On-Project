/* 
  categoryNum => 0 : 버거, 1 : 사이드 , 2 : 디저트 
  임시로 0 으로 해둠
*/

import * as s from 'pages/home/HomeStyled'

import Menu from 'pages/home/menu/Menu'
import React from 'react'
import { useState } from 'react'
const Home = () => {
  const [categoryNum, setCategoryNum] = useState(0)

  return (
    <div>
      <s.TitleBar>
        <s.TitleText>CAU BURGER</s.TitleText>
      </s.TitleBar>
      <s.Container>
        <s.ButtonBar>
          <s.OrderBox>
            <s.OrderText>기본순</s.OrderText>
          </s.OrderBox>
          <s.OrderBox>
            <s.OrderText>추천순</s.OrderText>
          </s.OrderBox>
          <s.HistoryButton>
            <s.HistoryButtonText>주문내역</s.HistoryButtonText>
          </s.HistoryButton>
        </s.ButtonBar>
        <s.ContentBox>
          <Menu categoryNum={categoryNum} setCategoryNum={setCategoryNum} />
        </s.ContentBox>
      </s.Container>
    </div>
  )
}

export default Home
