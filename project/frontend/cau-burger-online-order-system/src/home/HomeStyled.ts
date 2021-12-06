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
  background-color: #004c97;
  /* border: 1px solid black; */
  padding-left: 15vw;
  padding-top: 1vw;
  padding-bottom: 1%;
`
export const TitleText = styled.text`
  font-size: 3.5vw;
  color: white;
`

export const Container = styled.div`
  background-color: #f0f0f0;
  padding-top: 3%;
  padding-bottom: 5%;
`

export const ContentBox = styled.div`
  display: grid;
  margin-left: 15%;
  margin-right: 15%;
  padding-bottom: 3vw;
  background-color: white;
  box-shadow: 0 2.5rem 2rem -2rem hsl(200 50% 20% / 40%);
`

export const ButtonBar = styled.div`
  display: inline-grid;
  width: 80%;
  margin-left: 15%;
  margin-right: 15%;
  padding-left: 2vw;
  padding-right: 2vw;
  margin-bottom: 0.5vw;
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
  margin-left: 60%;
  margin-right: 25%;
  text-align: center;
  font-size: 1.5vw;
  border-radius: 0.7rem;
  background-color: #004c97;
`
export const HistoryButtonText = styled.text`
  color: white;
`

export const CategoryBar = styled.div`
  display: inline-grid;
  grid-template-columns: 6fr 1fr 1fr 1fr;
  padding-bottom: 0.5vw;
  padding-top: 1vw;
  padding-right: 1.5vw;
`
export const CategoryTitle = styled.div`
  display: flex;
  font-size: 2vw;
  padding-left: 7%;
`

export const Divider = styled.div`
  width: 90%;
  margin-left: 5%;
  border-bottom: 3px solid #f0f0f0;
`

export const CategoryTab = styled.div<{ tabId: number; categoryNum: number }>`
  display: flex;
  padding-top: 1vw;
  font-size: 1.5vw;
  /* border: 1px solid black; */
  justify-content: center;
  cursor: pointer;
  color: #c0c0c0;
  ${({ tabId, categoryNum }) =>
    tabId === categoryNum &&
    `
    color: #004c97;
  `}
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
