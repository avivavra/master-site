import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LayoutMock from './mock';
import Navbar, { NavbarLink } from './app/styled/navbar';
import './App.css';

const pages = [
  {
    path: '/',
    name: 'Home',
    component: <LayoutMock />
  }
];

const App = () => (
  <>
    <Router>
      <Navbar>
        {
          pages.map(({ path, name }) => (
            <NavbarLink path={path} name={name} />
          ))
        }
      </Navbar>

      <Switch>
        {
          pages.map(({ path, component }) => (
            <Route path={path}>
              {component}
            </Route>
          ))
        }
      </Switch>
    </Router>
  </>
);

export default App;
