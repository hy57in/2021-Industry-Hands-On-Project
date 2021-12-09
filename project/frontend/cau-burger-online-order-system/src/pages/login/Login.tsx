import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'

const BASE_URL =
  'https://asia-northeast3-cauburger-568d6.cloudfunctions.net/api'

export default function Login() {
  const [ID, setID] = useState('')
  const [password, setPassword] = useState('')

  const IDHandler = (e: any) => {
    setID(e.target.value)
  }

  const passwordHandler = (e: any) => {
    setPassword(e.target.value)
  }
  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log(ID)
    console.log(password)
  }

  useEffect(() => {
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
      .then((res) => console.log(res))
      .catch()
  }, [])
  return (
    <div className="auth-inner">
      <form onSubmit={submitHandler}>
        <h3>Sign In</h3>
        <div className="form-group">
          <label>ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter ID"
            value={ID}
            onChange={IDHandler}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={passwordHandler}
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
            Sign In
          </button>
        </Link>
        <p className="forgot-password text-right">
          <a href="/signup">sign up</a>
        </p>
      </form>
    </div>
  )
}
