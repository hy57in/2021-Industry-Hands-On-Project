import * as S from '../login/LoginStyled'

import { useCallback, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'

const BASE_URL =
  'https://asia-northeast3-cauburger-568d6.cloudfunctions.net/api'

export default function Signup() {
  const [ID, setID] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [signUpError, setSignUpError] = useState('')
  const [signUpSuccess, setSignUpSuccess] = useState('')

  const onChangeID = useCallback((e: any) => {
    setID(e.target.value)
  }, [])
  const onChangePassword = useCallback((e: any) => {
    setPassword(e.target.value)
  }, [])
  const onChangeName = useCallback((e: any) => {
    setName(e.target.value)
  }, [])
  const onChangePhone = useCallback((e: any) => {
    setPhone(e.target.value)
  }, [])
  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault()
      console.log('ID: ', ID)
      console.log('password: ', password)
      console.log('name: ', name)
      console.log('phone: ', phone)

      axios
        .post(
          `${BASE_URL}/auth/signup`,
          {
            id: ID,
            password: password,
            name: name,
            phone: phone,
          },
          {
            headers: {
              'Content-type': 'application/json',
            },
          }
        )
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error.response))
    },
    [ID, password, name, phone]
  )


  return (
    <div className="auth-inner">
      <form onSubmit={onSubmit}>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>ID</label>
          <input
            type="id"
            className="form-control"
            placeholder="Enter ID"
            value={ID}
            onChange={onChangeID}
          />
        </div>
        {!ID && <S.Error>아이디를 입력해주세요</S.Error>}
        {signUpError && <S.Error>이미 가입된 아이디입니다.</S.Error>}

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
        {!password && <S.Error>비밀번호를 입력해주세요</S.Error>}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={onChangeName}
          />
        </div>
        {!name && <S.Error>이름을 입력해주세요</S.Error>}

        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={onChangePhone}
          />
        </div>
        {!phone && <S.Error>휴대폰 번호를 입력해주세요</S.Error>}
        {signUpSuccess && (
          <S.Success>회원가입에 성공했습니다! 로그인해주세요.</S.Success>
        )}
        {/* <Link to="/login"> */}
        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        {/* </Link> */}
        <p className="forgot-password text-right">
          이미 회원이신가요? <a href="/login">로그인 하러가기</a>
        </p>
      </form>
    </div>
  )
}
