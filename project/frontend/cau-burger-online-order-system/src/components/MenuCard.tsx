/**
 * 관리자 메뉴에서도 사용할 예정이라 componenet로 따로 뻼
 */

import React from 'react'
import * as s from 'components/MenuCardStyled'

type MenuProps = {
  image: string
  name: string
  price: number
}

const MenuCard = ({ image, name, price }: MenuProps) => {
  return (
    <s.CardBox>
      <s.CardImage src={image} />
      <s.CardText>{name}</s.CardText>
      <s.CardText>{price}원</s.CardText>
    </s.CardBox>
  )
}


export default MenuCard
