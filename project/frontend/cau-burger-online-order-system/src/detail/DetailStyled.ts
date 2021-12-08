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

export const NameText = styled.text`
  font-size: 3vw;
  color: black;
  margin-top: 20px;
`

export const ImageBox = styled.div`
  display: grid;
  justify-content: center;
  margin-left: 15%;
  margin-right: 15%;
  background-color: white;
`

export const ContentBox = styled.div`
  // display: grid;
  justify-content: center;
  margin-top: 0;
  margin-left: 15%;
  margin-right: 15%;
  padding-bottom: 3vw;
  background-color: white;
  border: 1px solid black;
`

export const ContentText = styled.text`
  font-size: 25px;
  color: black;
`

export const CounterBox = styled.div`
  // display: grid;
  justify-content: center;
  margin-top: 0;
  margin-left: 15%;
  margin-right: 15%;
  padding-bottom: 3vw;
  background-color: white;
`

export const CashButton = styled.button`
  margin-left: 88%;
  margin-right: 10px;
`