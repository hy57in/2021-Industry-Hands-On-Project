import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'

const BASE_URL =
  'https://asia-northeast3-cauburger-568d6.cloudfunctions.net/api'

export default function Signup() {
  const [ID, setID] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const onIDhandler = (e: any) => {
    setID(e.target.value)
  }
  const onPasswordhandler = (e: any) => {
    setPassword(e.target.value)
  }
  const onNamehandler = (e: any) => {
    setName(e.target.value)
  }
  const onPhoneNumberhandler = (e: any) => {
    setPhoneNumber(e.target.value)
  }
  const onSubmitHandler = (e: any) => {
    e.preventDefault()
    console.log(ID)
    console.log(password)
    console.log(name)
    console.log(phoneNumber)
  }
  useEffect(() => {
    axios
      .post(
        `${BASE_URL}/auth/signup`,
        {
          id: ID,
          password: password,
          name: name,
          phoneNumber: phoneNumber,
        },
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e))
  }, [])

  return (
    <div className="auth-inner">
      <form onSubmit={onSubmitHandler}>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>ID</label>
          <input
            type="id"
            className="form-control"
            placeholder="Enter ID"
            value={ID}
            onChange={onIDhandler}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={onPasswordhandler}
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={onNamehandler}
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Phone"
            value={phoneNumber}
            onChange={onPhoneNumberhandler}
          />
        </div>

        <Link to="/login">
          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
        </Link>
        <p className="forgot-password text-right">
          <a href="/login">sign in</a>
        </p>
      </form>
    </div>
  )
}
