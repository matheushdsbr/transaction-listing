import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import RegistrationForm from './components/RegistrationForm';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <SearchForm />
      </Route>
      <Route path="/register">
        <RegistrationForm />
      </Route>
    </Switch>
  </Router>
);
export default App;
