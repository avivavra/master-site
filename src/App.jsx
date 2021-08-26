import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Typography } from '@material-ui/core';
import LayoutMock from './app/mock/layoutMock';
import Navbar from './app/navbar';
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
            <Typography color="inherit" variant="h6">
              <Link to={path}>{name}</Link>
            </Typography>
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
    <LayoutMock />
  </>
);

export default App;
