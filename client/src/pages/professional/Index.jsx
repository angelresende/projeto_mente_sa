import React from 'react'

import Sidebar from '../../components/Sidebar';
import TableProfessional from '../../components/TableProfessionals';

function IndexPatient() {

  return (
    <>
      <Sidebar />
      <div className='content-page'>
        <div className="content">
          <div className="container-fluid">
            <div className='table-wrapper'>          
              <TableProfessional />
            </div>
          </div>
        </div>
      </div> 
                   
        
    </>
  )
}

export default IndexPatient