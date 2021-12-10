import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #004c97;
  width: 100vw;
  height: 100vh;
`

export const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  color: white;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const InputTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: white;
  text-align: center;
  width: 150px;
`
export const Input = styled.input`
  width: 350px;
  height: 50px;
  border-radius: 5px;
  border: none;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 30px;
  }
`

export const LoginButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 30px;
`
export const LoginButton = styled.button`
  font-size: 16px;
  border: none;
  width: 100px;
  height: 50px;
  border-radius: 5px;
  background-color: D5D7DD;
  color: #004c97;
`

export const Error = styled.div`
  color: red;
`
export const Success = styled.div`
  color: green;
`
