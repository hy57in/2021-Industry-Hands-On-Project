/* 
  categoryNum => 0 : 버거, 1 : 사이드 , 2 : 디저트 
  임시로 0 으로 해둠
*/

import React from 'react'
import Menu from 'home/menu/Menu'
import * as s from 'home/HomeStyled'
const Home = () => {
  return (
    <div>
      <s.TitleBar>
        <s.TitleText>CAU BURGER</s.TitleText>
      </s.TitleBar>
      <s.ContentBox>
        <s.ButtonBar>
          <s.OrderBox>
            <s.OrderText>기본순</s.OrderText>
          </s.OrderBox>
          <s.OrderBox>
            <s.OrderText>추천순</s.OrderText>
          </s.OrderBox>
          <s.HistoryButton>주문내역</s.HistoryButton>
        </s.ButtonBar>
        <Menu categoryNum={0} />
      </s.ContentBox>
    </div>
  )
}

export default Home
