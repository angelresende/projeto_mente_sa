import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { useState } from 'react'

import Auth from './pages/auth/Auth'
import Dashboard from './pages/dashboard/Dashboard'
import IndexPatient from './pages/patient/Index'
import IndexProfessional from './pages/professional/Index'
import IndexSession from './pages/session/Index'

function History() {
  return (
    <>
    <Router>
      <Routes>
        <Route  path="/auth" element={ <Auth />}/>
        <Route  path="/dashboard" element={ <Dashboard />}/>
        <Route  path="/profissionais" element={ <IndexProfessional />}/>
        <Route  path="/pacientes" element={ <IndexPatient />}/>
        <Route  path="/sessoes" element={ <IndexSession />}/>
      </Routes>
    </Router>
    </>
  )
}

export default History