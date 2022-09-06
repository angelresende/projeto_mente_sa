import React from 'react'

import Sidebar from '../../components/Sidebar';
import TablePatients from '../../components/TablePatients';

function IndexPatient() {

  return (
    <>
    <Sidebar />
      <div className='content-page'>
        <div className="content">
          <div className="container-fluid">
            <div className='table-wrapper'>          
              <TablePatients />
            </div>
          </div>
        </div>
      </div> 
                   
        
    </>
  )
}

export default IndexPatient