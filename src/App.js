import React from 'react'; 
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Product from './components/pages/Product';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
           <Route path='/' exact element={<Home />} ></Route>
           <Route path='/services' element={Services} /> 
           <Route path='/product' element={Product} /> 
           <Route path='/sign-up' element={SignUp} /> 
      </Routes>
      </Router>
    </>
  );
}

export default App;
