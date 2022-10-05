import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUsers, faCalendar, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../contexts/AuthContext'
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Sidebar() {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

  return (
      <>
        <aside className='left side-menu'>
            <div id='mentesa'>
                Mente Sã   
                <div id='bem_vindo'>
                  Bem-vindo (a)
                    <div id='name_professional'>
                      Dr. Angelo
                      <Button 
                        variant="danger" 
                        size="sm" 
                        style={{float: 'right',  marginTop: '-7px'}} 
                        onClick={handleLogout}
                      >
                        <FontAwesomeIcon icon={faPowerOff}/>
                      </Button>
                    </div>
                </div>                   
            </div>
            
            <Nav id="sidebar-menu">    
              <ul className="metismenu">
                  <li >                        
                      <Link to="/dashboard">
                        <FontAwesomeIcon icon={faHouse} className="nav-link-icon"/>
                        <span className='nav-link-name'> Dashboard</span>
                      </Link>
                  </li>
                  
                  <li>
                      <Link to="/pacientes">
                        <FontAwesomeIcon icon={faUsers} className="nav-link-icon"/>
                        <span className='nav-link-name'> Pacientes</span>
                      </Link>
                  </li>
                                  
                  <li>
                      <Link to="/sessoes">
                        <FontAwesomeIcon icon={faCalendar} className="nav-link-icon"/>
                        <span className='nav-link-name'> Sessões</span>
                      </Link>
                  </li>                     
              </ul>         
            </Nav> 
            
        </aside>
      </>
    )
}

export default Sidebar