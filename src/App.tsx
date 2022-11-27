import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import logo from './logo.svg';
import Navbar from './components/navbar';
import NotFound from './pages/NotFound';
import Intro from './pages/Intro';
import './App.css';
import path from 'path';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Intro />} path="/" />
          <Route element={<Intro />} path="/index" />
          <Route element={<Intro />} path="/home" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
