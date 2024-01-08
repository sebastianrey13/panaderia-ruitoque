import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './routes/Home.jsx'
import PanAliñado from './routes/PanAliñado.jsx'
import Tortas from './routes/Tortas.jsx'
import Bizcochos from './routes/Bizcochos.jsx'
import Lacteos from './routes/Lacteos.jsx'
import Otros from './routes/Otros.jsx'
import Galletas from './routes/Galletas.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Navigate to={"/home"} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/pan_aliñado' element={<PanAliñado/>}/>
          <Route path='/tortas' element={<Tortas/>}/>
          <Route path='/bizcohos' element={<Bizcochos/>}/>
          <Route path='/lacteos' element={<Lacteos/>}/>
          <Route path='/otros' element={<Otros/>}/>
          <Route path='/galletas' element={<Galletas/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
