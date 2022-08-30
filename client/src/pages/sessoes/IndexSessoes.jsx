import React from 'react'

import Sidebar from '../../components/Sidebar';
import TableSessoes from '../../components/TableSessoes';

function IndexSessoes() {

  return (
    <>
      <Sidebar/>
      <div className='container-xl'>
        <div className='table-wrapper'>
          <TableSessoes />
        </div>
      </div> 
                   
        
    </>
  )
}

export default IndexSessoes