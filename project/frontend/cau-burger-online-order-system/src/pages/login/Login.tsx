import * as S from './LoginStyled'

import { useCallback, useState } from 'react'

import axios from 'axios'
import { useHistory } from 'react-router-dom'

const BASE_URL =
  'https://asia-northeast3-cauburger-568d6.cloudfunctions.net/api'

export default function Login() {
  const history = useHistory()
  const [ID, setID] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [loginSuccess, setLoginSuccess] = useState(false)

  const onChangeID = useCallback((e: any) => {
    setID(e.target.value)
  }, [])

  const onChangePassword = useCallback((e: any) => {
    setPassword(e.target.value)
  }, [])
  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault()
      console.log('ID: ', ID)
      console.log('password: ', password)
      setLoginError('')
      setLoginSuccess(false)
      axios
        .post(
          `${BASE_URL}/auth/signin`,
          {
            id: ID,
            password: password,
          },
          {
            headers: {
              'Content-type': 'application/json',
            },
          }
        )
        .then((response) => {
          console.log(response.data)
          setLoginSuccess(true)
          history.push('/home')
        })
        .catch((error) => {
          console.log(error.response)
          setLoginError(error.response.data)
        })
    },
    [history, ID, password]
  )

  return (
    <div className="auth-inner">
      <form onSubmit={onSubmit}>
        <h3>Sign In</h3>
        <div className="form-group">
          <label>ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter ID"
            value={ID}
            onChange={onChangeID}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        {loginError && <S.Error>아이디와 비밀번호가 맞지 않습니다.</S.Error>}
        {loginSuccess && <S.Success>로그인에 성공했습니다.</S.Success>}
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
        {/* <Link to="/home"> */}
        <button
          type="submit"
          className="btn btn-primary btn-block"
          style={{ width: '100%', marginTop: '20px' }}
        >
          Sign In
        </button>
        {/* </Link> */}
        <p className="forgot-password text-right">
          아직 회원이 아니신가요? <a href="/signup">회원가입 하러가기</a>
        </p>
      </form>
    </div>
  )
}
