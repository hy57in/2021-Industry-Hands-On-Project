import styled from 'styled-components'

export const CardBox = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr 1fr;
  justify-content: space-evenly;
`

export const CardImage = styled.img<{ src: string }>`
  src: src;
  height: 6vw;
  width: 6vw;
  alt: 'hamburger';
`

export const CardText = styled.div`
  display: flex;
  font-size: 1vw;
  border: 1px solid black;
`
