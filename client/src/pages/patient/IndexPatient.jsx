import React from 'react'

import Sidebar from '../../components/Sidebar';
import TablePatient from '../../components/patient';

function IndexPatient() {

  return (
    <>
      <Sidebar />
      <div className='content-page'>
        <div className="content">
          <div className="container-fluid">
            <div className='table-wrapper'>          
              <TablePatient />
            </div>
          </div>
        </div>
      </div> 
                   
        
    </>
  )
}

export default IndexPatient