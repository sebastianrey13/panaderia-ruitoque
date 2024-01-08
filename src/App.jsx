import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './componentes/Header';
import {Outlet} from 'react-router-dom'

//dependencias
//npm i react-router-dom

function App() {

  return (
    <>
    <div>
      <Header/>
      <Outlet/>
    </div>
    </>
  )
}

export default App
