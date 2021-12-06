import * as s from './LoginStyled'

import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <s.LoginWrapper>
      <s.Title>CAU BURGER</s.Title>
      <s.InputWrapper>
        <s.InputTitle>ID</s.InputTitle>
        <s.Input />
      </s.InputWrapper>
      <s.InputWrapper>
        <s.InputTitle>PW</s.InputTitle>
        <s.Input />
      </s.InputWrapper>
      <s.LoginButtonWrapper>
        <Link to="/home">
          {' '}
          <s.LoginButton>로그인</s.LoginButton>
        </Link>
        <Link to="/signup">
          {' '}
          <s.LoginButton>회원가입</s.LoginButton>
        </Link>
      </s.LoginButtonWrapper>
    </s.LoginWrapper>
  )
}
