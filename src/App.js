import './App.css';
import React from 'react';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './views/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
