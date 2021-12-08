import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Detail from 'pages/detail/Detail'
import Home from 'pages/home/Home'
import Login from 'pages/login'
import Signup from 'pages/signup'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/home" component={Home} />
              <Route path="/detail" component={Detail} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
