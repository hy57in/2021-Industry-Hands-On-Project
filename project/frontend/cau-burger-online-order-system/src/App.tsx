import { Route, Switch } from 'react-router-dom'

import Detail from 'pages/detail/Detail'
import Home from 'pages/home/Home'
import Login from 'pages/login'
import React from 'react'
import Signup from 'pages/signup'

function App() {
  return (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route path="/detail">
        <Detail />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  )
}

export default App
