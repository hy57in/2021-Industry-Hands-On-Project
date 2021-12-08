/**
 * 관리자 메뉴에서도 사용할 예정이라 componenet로 따로 뻼
 */

import React from 'react'
import * as s from 'components/MenuCardStyled'

interface MenuProps {
  ko_name: string
  price: string
  image: string
  info: string
  like: number
}

const MenuCard = ({ image, ko_name, price, info, like }: MenuProps) => {
  return (
    <s.CardBox>
      <s.CardImage src={image} />
      <s.CardText>{ko_name}</s.CardText>
      <s.CardText>{price}원</s.CardText>
    </s.CardBox>
  )
}

export default MenuCard
