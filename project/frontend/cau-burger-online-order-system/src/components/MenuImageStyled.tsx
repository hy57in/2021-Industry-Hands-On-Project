import styled from 'styled-components'

export const CardBox = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr 1fr;
  justify-content: space-evenly;
  margin-top: 10px;
`

export const CardImage = styled.img<{ src: string }>`
  src: src;
  height: 6vw;
  width: 6vw;
  padding-bottom: 0.5vw;
  alt: 'hamburger';
`