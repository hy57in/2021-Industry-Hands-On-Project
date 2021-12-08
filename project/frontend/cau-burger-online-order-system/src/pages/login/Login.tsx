import * as s from './LoginStyled'

import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="auth-inner">
      <form>
        <h3>Sign In</h3>
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
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <Link to="/home">
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </Link>
        <p className="forgot-password text-right">
          <a href="/signup">sign up</a>
        </p>
      </form>
    </div>
    // <s.LoginWrapper>
    //   <s.Title>Log In</s.Title>
    //   <div style={{ marginRight: '150px' }}>
    //     <s.InputWrapper>
    //       <s.InputTitle>ID</s.InputTitle>
    //       <s.Input />
    //     </s.InputWrapper>
    //     <s.InputWrapper>
    //       <s.InputTitle>PW</s.InputTitle>
    //       <s.Input />
    //     </s.InputWrapper>
    //   </div>
    //   <s.LoginButtonWrapper>
    //     <Link to="/home">
    //       {' '}
    //       <s.LoginButton>로그인</s.LoginButton>
    //     </Link>
    //     <Link to="/signup">
    //       {' '}
    //       <s.LoginButton>회원가입</s.LoginButton>
    //     </Link>
    //   </s.LoginButtonWrapper>
    // </s.LoginWrapper>
  )
}
