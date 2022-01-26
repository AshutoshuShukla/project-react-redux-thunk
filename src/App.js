import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Todo from './Components/Todo';
import Users from './Components/Users';
import Information from './Components/Information';

function App() {
  return (
    <React.Fragment>
      <Information/>
      <Switch>
        <Route exact path={"/"} component={Dashboard}/>
        <Route exact path="/todos" component={Todo}/>
        <Route exact path="/users" component={Users}/>
      
      </Switch>
    </React.Fragment>
  );
}

export default App;
