import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faCalendar } from '@fortawesome/free-solid-svg-icons'


function Sidebar() {
  return (
   <>    
    <div className='left side-menu'>
      <div id='mentesa'>
          <h4>Mente Sã</h4>
            <div id='bem_vindo'>
              <span>Bem-vindo (a)</span>
                <div id='name_profissional'>
                  <span>Dr. Angelo</span>
                </div>
            </div>          
      </div>
      <div id="sidebar-menu">    
        <ul className="metismenu">
            <li >                        
                <a href="/dashboard" className="waves-effect"><FontAwesomeIcon icon={faHouse} /> Dashboard</a>
            </li>
            
            <li>
                <a href="/pacientes" className="waves-effect"><FontAwesomeIcon icon={faUser} /> Pacientes</a>
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