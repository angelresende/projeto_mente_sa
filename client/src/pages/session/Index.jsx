import React from 'react'
import TableSessions from '../../components/TableSessions';

function IndexSession() {

  return (
    <>
      <div  className='content-page'>
        <div className="content">
          <div className="container-fluid">
            <div className='table-wrapper'>          
              <TableSessions />
            </div>
          </div>
        </div>
      </div>                   
        
    </>
  )
}

export default IndexSession