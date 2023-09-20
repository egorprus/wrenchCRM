import React, { useState } from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Menu } from './components/Menu/Menu';
import { Main } from './views/Main/Main';
import { Address } from './views/Address/Address';

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const updateIndex = (index: number) => {
    setCurrentIndex(index);
  }

  return (
      <div className="App">
        <Router>
          <Header />
          <main className="main">
            <Menu currentIndex={currentIndex} updateIndex={updateIndex} />
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