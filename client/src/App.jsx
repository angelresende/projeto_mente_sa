import { useState } from 'react'

import Auth from './pages/auth/Auth'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/dashboard/Dashboard'

import './assets/styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexPacientes from './pages/paciente/IndexPacientes'


function App() {
  return (
    <>
    <Dashboard />
    </>
  )
}

export default App
