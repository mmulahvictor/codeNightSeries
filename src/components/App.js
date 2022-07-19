import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './navBar/Navbar';
import Home from './navBar/Home';
import About from './navBar/About';

function App () {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="about" element={ <About /> } />
            </Routes>
        </>
    );
}

export default App;