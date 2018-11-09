import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../HomePage';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Users from '../Users';
import User from '../User';
import Pwd from '../Pwd';
import Phone from '../Phone';
import NotFoundPage from '../NotFoundPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signin/identifier" component={SignIn} />
      <Route path="/signin/identifier/pwd" component={Pwd} />
      <Route exact path="/signup/createaccount" component={SignUp} />
      <Route path="/signup/createaccount/phone" component={Phone} />
      <Route path="/login" component={User} />
      <Route path="/users" component={Users} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </Router>
);

export default App;

// /phone
