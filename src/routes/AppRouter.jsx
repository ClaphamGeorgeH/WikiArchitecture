import React from 'react';
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
      </Routes>
    </>
  )
}
