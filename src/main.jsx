import React from 'react'
import { Navbar } from './Navbar'
import ReactDOM from 'react-dom/client';
import { Canvas } from './Canvas';
import { BrowserRouter } from 'react-router-dom';
import { WikiArquitectureApp } from './WikiArquitectureApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <WikiArquitectureApp/>
      </BrowserRouter>
    </React.StrictMode>
)