import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Success from './Components/Success/Success';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
