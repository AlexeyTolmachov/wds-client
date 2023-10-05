
import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router';
import AdminPanel from './components/AdminPanel/AdminPanel';




function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='admin' element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;







