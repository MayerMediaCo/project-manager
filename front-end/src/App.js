import React from 'react';
import './App.scss';

import Header from './components/global/Header'
import Sidenav from './components/global/Sidenav'
import Footer from './components/global/Footer'
import Main from './components/global/Main'

function App() {
  return (
      <div className="grid-container">
        <Header />
        <Sidenav />
        <Main />
        <Footer />
      </div>
  );
}

export default App;
