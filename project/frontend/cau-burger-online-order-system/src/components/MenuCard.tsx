/**
 * 관리자 메뉴에서도 사용할 예정이라 componenet로 따로 뻼
 */

import React, { useCallback } from 'react'
import * as s from 'components/MenuCardStyled'
import { useHistory } from 'react-router-dom'

interface MenuInfo {
  ko_name: string
  price: string
  image: string
  info: string
  like: number
}

const MenuCard = ({ image, ko_name, price, info, like }: MenuInfo) => {
  const history = useHistory()

  const detailInfo: MenuInfo = {
    ko_name: ko_name,
    price: price,
    image: image,
    info: info,
    like: like,
  }
  const handleOnClick = useCallback(
    () =>
      history.push({
        pathname: '/detail',
        state: {
          detailInfo: detailInfo,
        },
      }),
    [history, ko_name, price, image, info, like]
  )

  return (
    <s.CardBox onClick={(e) => handleOnClick()}>
      <s.CardImage src={image} />
      <s.CardText>{ko_name}</s.CardText>
      <s.CardText>{price}원</s.CardText>
    </s.CardBox>
  )
}

export default MenuCard
