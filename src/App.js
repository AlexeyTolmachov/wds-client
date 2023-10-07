
import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router';
import AdminPanel from './components/AdminPanel/AdminPanel';
import AuthForm from './components/AuthForm/AuthForm';
import PrivateRoute from './utils/router/privateRoute';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='admin' element={<AdminPanel />} />
        </Route>

        <Route path='/' element={<HomePage />} />
        <Route path='form' element={<AuthForm />} />
      </Routes>
    </div>
  );
}

export default App;







