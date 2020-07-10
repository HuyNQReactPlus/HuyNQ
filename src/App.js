import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './component/header/index';
import Footer from './component/footer/index';
import Component from './component/index'

function App() {
  return (
    <div>
      <Header />
      <Component />
      <Footer />
    </div>
  );
}

export default App;
