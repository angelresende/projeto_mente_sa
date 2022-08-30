import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import { useState } from 'react'

// import Auth from './pages/auth/Auth'
import Dashboard from './pages/dashboard/Dashboard'

import './assets/styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexPacientes from './pages/paciente/IndexPacientes'
import IndexSessoes from './pages/sessoes/IndexSessoes'

function History() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route  path="/dashboard" component={ <Dashboard />}/>
        <Route  path="/pacientes" component={ <IndexPacientes />}/>
        <Route  path="/sessoes" component={ <IndexSessoes />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default History