
import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router';
import AdminPanel from './components/AdminPanel/AdminPanel';
import AuthForm from './components/AuthForm/AuthForm';




function App() {
  return (
    <div className='App'>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='admin' element={<AdminPanel />} />
        <Route path='form' element={<AuthForm />} />
      </Routes>
    </div>
  );
}

export default App;







