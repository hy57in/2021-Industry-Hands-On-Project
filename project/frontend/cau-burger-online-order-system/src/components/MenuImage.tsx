/**
 * 관리자 메뉴에서도 사용할 예정이라 componenet로 따로 뻼
 */

 import React from 'react'
 import * as s from 'components/MenuImageStyled'
 
 type MenuProps = {
   image: string
 }
 
 const MenuImage = ({ image }: MenuProps) => {
   return (
     <s.CardBox>
       <s.CardImage src={image} />
     </s.CardBox>
   )
 }
 
 export default MenuImage
 