import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';


// components

import Home from "./cmps/Home";
import Header from "./cmps/Header";
import Footer from "./cmps/Footer";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
