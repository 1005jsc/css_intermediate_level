import React from 'react';
import logo from './logo.svg';
import './App.module.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='first'></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
