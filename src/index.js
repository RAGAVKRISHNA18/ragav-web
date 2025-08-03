// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename="/ragav-web">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/project/1" element={<Project1 />} />
      <Route path="/project/2" element={<Project2 />} />
      <Route path="/project/3" element={<Project3 />} />
      <Route path="/project/4" element={<Project4 />} />
    </Routes>
  </Router>
);
