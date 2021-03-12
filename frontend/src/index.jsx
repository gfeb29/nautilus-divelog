import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/configureStore';
import Dashboard from './components/Dashboard/Dashboard';
import History from './components/History/History';
import LogBook from './components/LogBook/LogBook';
import Navigation from './components/NavigationMenu/NavigationMenu';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/history" component={History} />
          <Route path="/logbook" component={LogBook} />
          <Route path="/navigation" component={Navigation} />
          <Route path="/" exact component={Dashboard} />

        </Switch>

      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
