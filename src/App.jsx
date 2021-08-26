import React from 'react';
import Layout from './app/layout';
import Section from './app/section';
import './App.css';

const App = () => (
  <Layout>
    <Section name="Sites" />
    <Section name="Search" />
    <Section name="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?" />
    <Section name="Scripts" />
  </Layout>
);

export default App;
