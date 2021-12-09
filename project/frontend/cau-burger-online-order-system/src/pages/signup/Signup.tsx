import * as S from '../login/LoginStyled'

import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {
  return (
    <div className="auth-inner">
      <form>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>ID</label>
          <input type="id" className="form-control" placeholder="Enter ID" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Phone"
          />
        </div>

        <Link to="/home">
          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
        </Link>
        <p className="forgot-password text-right">
          <a href="/login">sign in</a>
        </p>
      </form>
    </div>
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
