import React from 'react'

import Sidebar from '../../components/Sidebar';
import TableSessions from '../../components/TableSessions';

function IndexSession() {

  return (
    <>
      <Sidebar/>
      <div className='container-xl'>
        <div className='table-wrapper'>
          <TableSessions />
        </div>
      </div> 
                   
        
    </>
  )
}

export default IndexSession