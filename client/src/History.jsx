import React,{ useContext } from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
// import { useState } from 'react'

import Sidebar from './components/Sidebar';
import Auth from './pages/auth/Auth'
import Dashboard from './pages/dashboard/Dashboard'
import IndexPatient from './pages/patient/Index'
import IndexProfessional from './pages/professional/Index'
import IndexSession from './pages/session/Index'

import { AuthProvider, AuthContext } from './contexts/AuthContext';

function History() {
  const PrivateRoute = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
  
    if(loading){
      return <div className='loading'>Carregando...</div>
    }

    if(!authenticated){
      return <Navigate to="/" />
    }
  
    return children ;
  };

  return (
    <>
    <Router>
      <AuthProvider>
        <Routes>
          <Route  path="/" element={ <Auth />}/>
          <Route  path="/dashboard" element={ <PrivateRoute><Sidebar /><Dashboard /></PrivateRoute>}/>
          <Route  path="/profissionais" element={ <PrivateRoute><Sidebar /><IndexProfessional /></PrivateRoute>}/>
          <Route  path="/pacientes" element={ <PrivateRoute><Sidebar /><IndexPatient /></PrivateRoute>}/>
          <Route  path="/sessoes" element={ <PrivateRoute><Sidebar /><IndexSession /></PrivateRoute>}/>
        </Routes>
      </AuthProvider>

        {/* <Routes>
          <Route  path="/" element={ <Auth />}/>
          <Route  path="/dashboard" element={ <Dashboard />}/>
          <Route  path="/profissionais" element={ <IndexProfessional />}/>
          <Route  path="/pacientes" element={ <IndexPatient />}/>
          <Route  path="/sessoes" element={ <IndexSession />}/>
        </Routes> */}
    </Router>
    </>
  )
}

export default History