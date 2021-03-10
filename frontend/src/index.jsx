import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Navigation from './components/NavigationMenu/NavigationMenu';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Navigation} />
        <Route path="/" component={Dashboard} />

      </Switch>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
