/**
 * -- Naming 규칙 --
 * 가로 한 줄은 Bar,
 * 큰 구분은 Box,
 * 카테고리 구분은 Tab,
 * Box, Bar, Tab 밑에 필요 시 Text,
 * Check 는 svg 넣을건데, 아직 안함
 */

import styled from 'styled-components'

export const TitleBar = styled.div`
  display: flex;
  /* border: 1px solid black; */
  padding-left: 5vw;
  padding-top: 1vw;
  padding-bottom: 1%;
`
export const TitleText = styled.text`
  font-size: 3.5vw;
`

export const ContentBox = styled.div`
  display: grid;
  margin-left: 6vw;
  margin-right: 6vw;
  padding-bottom: 3vw;
  border: 1px solid blue;
`

export const ButtonBar = styled.div`
  display: inline-grid;
  width: 100%;
  padding-left: 2vw;
  padding-right: 2vw;
  grid-template-columns: 1fr 1fr 6fr;
  /* border: 1px solid yellow; */
`

export const OrderBox = styled.div`
  display: flex;
  /* border: 1px solid red; */
`

export const OrderText = styled.text`
  font-size: 1.5vw;
`
export const OrderCheck = styled.svg``

export const HistoryButton = styled.div`
  margin-left: 80%;
  margin-right: 5%;
  text-align: center;
  font-size: 1.5vw;
  border: 1px solid black;
  border-radius: 0.7rem;
`
export const CategoryBar = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 2vw;
`

export const CategoryTab = styled.div`
  display: flex;
  border: 1px solid black;
`
export const MenuBox = styled.div`
  justify-content: space-evenly;
  padding-top: 3vw;
  margin-left: 3vw;
  margin-right: 3vw;
  display: grid;
  column-gap: 5vw;
  row-gap: 3vw;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`
