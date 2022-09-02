import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import { useState } from 'react'

// import Auth from './pages/auth/Auth'
import Dashboard from './pages/dashboard/Dashboard'

import './assets/styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexPatient from './pages/patient/IndexPatient'
import IndexSession from './pages/sessoes/IndexSession'

function History() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route  path="/dashboard" component={ <Dashboard />}/>
        <Route  path="/patients" component={ <IndexPatient />}/>
        <Route  path="/sessions" component={ <IndexSession />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default History