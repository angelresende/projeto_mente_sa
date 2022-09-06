import React from 'react'
import TableSessions from '../../components/TableSessions';
import Sidebar from '../../components/Sidebar';

function IndexSession() {

  return (
    <>
    <Sidebar />
      <div className='content-page'>
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