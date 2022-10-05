import React from 'react'

import TablePatients from '../../components/TablePatients';

function IndexPatient() {

  return (
    <>
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