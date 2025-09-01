import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider  from './context/AuthContext';
import AdminContext from './context/AdminContext';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AdminContext>
      <App />
      </AdminContext>
      
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
