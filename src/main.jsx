import React from 'react'
import { Navbar } from './Navbar'
import ReactDOM from 'react-dom/client';
import './styles.css'




ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navbar/>
        <div className='container col-content'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
    </React.StrictMode>
)