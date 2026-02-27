import React from 'react';
import { Canvas } from '../Canvas';
import {PublicRoute} from './PublicRoute';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Home } from '../Home';
import '../HomeStyle.css';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='home' element={
          <PublicRoute>
            <Home/>
          </PublicRoute>
        }/>
        <Route path='home/Canvas' element={
          <PublicRoute>
            <div className="canvas-wrapper">
              <Canvas/>  
            </div>
            
          </PublicRoute>
        }/>
      </Routes>
    </>
  )
}
