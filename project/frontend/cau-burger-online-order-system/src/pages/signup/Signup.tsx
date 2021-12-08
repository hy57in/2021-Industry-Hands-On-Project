import * as S from '../login/LoginStyled'
import * as s from './SignupStyled'

import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <form>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="First name" />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name" />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="#">sign in?</a>
      </p>
    </form>
    // <S.LoginWrapper>
    //   <S.Title>Sign Up</S.Title>
    //   <S.InputWrapper>
    //     <S.InputTitle>ID</S.InputTitle>
    //     <S.Input />
    //   </S.InputWrapper>
    //   <S.InputWrapper>
    //     <S.InputTitle>PW</S.InputTitle>
    //     <S.Input />
    //   </S.InputWrapper>
    //   <S.InputWrapper>
    //     <S.InputTitle>PW again</S.InputTitle>
    //     <S.Input />
    //   </S.InputWrapper>
    //   <S.InputWrapper>
    //     <S.InputTitle>Name</S.InputTitle>
    //     <S.Input />
    //   </S.InputWrapper>
    //   <S.InputWrapper>
    //     <S.InputTitle>Phone</S.InputTitle>
    //     <S.Input />
    //   </S.InputWrapper>
    //   <S.LoginButtonWrapper>
    //     <Link to="/home">
    //       {' '}
    //       <S.LoginButton>가입하기</S.LoginButton>
    //     </Link>
    //   </S.LoginButtonWrapper>
    // </S.LoginWrapper>
  )
}
