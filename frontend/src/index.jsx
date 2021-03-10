import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import History from './components/History/History';
import LogBook from './components/LogBook/LogBook';
import Navigation from './components/NavigationMenu/NavigationMenu';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/history" component={History} />
        <Route path="/logbook" component={LogBook} />
        <Route path="/navigation" component={Navigation} />
        <Route path="/" exact component={Dashboard} />

      </Switch>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
