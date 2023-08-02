import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
      <div>
        <Header />
        <Home />
      </div>
      } />

      <Route path='/checkout' element={ <Checkout />} />

    </Routes>
  </BrowserRouter>
  )
}

export default App
