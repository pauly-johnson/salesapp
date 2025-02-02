import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Milk from './Milk';
import Bread from './Bread';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/milk">Milk</a></li>
              <li><a href="/bread">Bread</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/bread" element={<Bread />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;