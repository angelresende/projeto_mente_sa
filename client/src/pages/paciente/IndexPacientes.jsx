import React from 'react'

import Sidebar from '../../components/Sidebar';
import TablePacientes from '../../components/TablePaciente';

function IndexPacientes() {

  return (
    <>
      <Sidebar />
      <div className='content-page'>
        <div className="content">
          <div className="container-fluid">
            <div className='table-wrapper'>          
              <TablePacientes />
            </div>
          </div>
        </div>
      </div> 
                   
        
    </>
  )
}

export default IndexPacientes