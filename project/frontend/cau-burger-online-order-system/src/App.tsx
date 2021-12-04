import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "home/Home"
import Detail from "detail/Detail"

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/detail">
        <Detail />
      </Route>
    </Switch> 
  );
}

export default App;
