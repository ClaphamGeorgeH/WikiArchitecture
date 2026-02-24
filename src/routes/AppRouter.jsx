import React from 'react';
import { Canvas } from '../Canvas';
import {PublicRoute} from './PublicRoute';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Home } from '../Home';

export const AppRouter = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='home' element={
          <PublicRoute>
            <Home/>
          </PublicRoute>
        }/>
        <Route path='home/Canvas' element={
          <PublicRoute>
            <Canvas/>
          </PublicRoute>
        }/>
      </Routes>
    </>
  )
}
