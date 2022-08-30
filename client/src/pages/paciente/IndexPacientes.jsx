import React from 'react'

import Sidebar from '../../components/Sidebar';
import TablePacientes from '../../components/TablePaciente';

function IndexPacientes() {

  return (
    <>
      <Sidebar/>
      <div className='container-xl'>
        <div className='table-wrapper'>
          <TablePacientes />
        </div>
      </div> 
                   
        
    </>
  )
}

export default IndexPacientes