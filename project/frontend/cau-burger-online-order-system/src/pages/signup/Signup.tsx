import * as S from '../login/LoginStyled'

import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <S.LoginWrapper>
      <S.Title>Sign Up</S.Title>
      <S.InputWrapper>
        <S.InputTitle>ID</S.InputTitle>
        <S.Input />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.InputTitle>PW</S.InputTitle>
        <S.Input />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.InputTitle>PW 확인</S.InputTitle>
        <S.Input />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.InputTitle>이름</S.InputTitle>
        <S.Input />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.InputTitle>휴대폰 번호</S.InputTitle>
        <S.Input />
      </S.InputWrapper>
      <S.LoginButtonWrapper>
        <Link to="/home">
          {' '}
          <S.LoginButton>가입하기</S.LoginButton>
        </Link>
      </S.LoginButtonWrapper>
    </S.LoginWrapper>
  )
}
