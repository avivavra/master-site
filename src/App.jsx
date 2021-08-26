import React from 'react';
import { Link } from '@material-ui/core';
import LayoutMock from './app/mock/layoutMock';
import Navbar from './app/navbar';
import pages from './app/config/paths.json';
import './App.css';

const App = () => (
  <>
    <Navbar>
      {
        Object.entries(pages).map(([name, url]) => (
          <Link href={url} color="inherit" variant="h6">{name}</Link>
        ))
      }
    </Navbar>
    <LayoutMock />
  </>
);

export default App;
