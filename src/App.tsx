import React, { useEffect, useState } from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Menu } from './components/Menu/Menu';
import { Main } from './components/views/Main/Main';
import { Address } from './components/views/Address/Address';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
      <div className="App">
        <Router>
          <Header />
          <main className="main">
            <Menu currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
            <div className="section-wrapper">
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/address' element={<Address />} />
              </Routes>
            </div>
          </main>
        </Router>
      </div>
  );
};

export default App;