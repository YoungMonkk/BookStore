import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional, depends on your setup
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <div className='dark:bg-white dark:text-slate-900'>
<App />
</div>
</BrowserRouter>
  
)

