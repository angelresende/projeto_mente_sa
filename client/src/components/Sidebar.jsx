import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faCalendar } from '@fortawesome/free-solid-svg-icons'


function Sidebar() {
  return (
   <>    
    <div className='left side-menu'>
      <div id='mentesa'>
          Mente Sã   
          <div id='bem_vindo' style={{}}>
            Bem-vindo (a)
              <div id='name_professional'>
                Dr. Angelo
              </div>
          </div>                   
      </div>
      
      <div id="sidebar-menu">    
        <ul className="metismenu">
            <li >                        
                <a href="/dashboard" className="waves-effect"><FontAwesomeIcon icon={faHouse} /> Dashboard</a>
            </li>
            
            <li>
                <a href="/patients" className="waves-effect"><FontAwesomeIcon icon={faUser} /> Pacientes</a>
            </li>
                            
            <li>
                <a href="/sessoes" className="waves-effect"><FontAwesomeIcon icon={faCalendar} /> Sessões </a>
            </li>  
        </ul>            
      </div> 
      
    </div>
   </>
  )
}

export default Sidebar