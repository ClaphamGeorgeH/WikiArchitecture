import React from 'react'
import { Navbar } from './Navbar'
import ReactDOM from 'react-dom/client';
import './styles.css'
import { Canvas } from './Canvas';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navbar/>        
        <div className='container col-content'>
            <header>
                <div className='row'>
                    <div className='col'>
                        
                        <h1>WIKIARQUITECTURE</h1>
                        <h1>WIKIARQUITECTURE</h1>
                        <h1>WIKIARQUITECTURE</h1>
                        <h1>WIKIARQUITECTURE</h1>
                        <h1>WIKIARQUITECTURE</h1>
                    </div>
                </div>
            </header>
            
            <Canvas/>
            
        </div>
    </React.StrictMode>
)