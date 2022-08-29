import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Container, Row, Col } from 'react-bootstrap';

function Dashboard() {
  return (
    <>     
    <Container>
        <Sidebar />
        <Row>
            <Col>
                <div className='grid-item'>
                    <span className='item-title'>Sessões agendadas (dia)</span>
                    <span className='item-number'>5</span>
                </div>
            </Col>
            <Col>
                <div className='grid-item'>
                  <span className='item-title'>Sessões agendadas (mês)</span>
                  <span className='item-number'>15</span>
                </div>
              </Col>
              <Col>
                <div className='grid-item'>
                  <span className='item-title'>Sessões canceladas (mês)</span>
                  <span className='item-number'>1</span>
                </div>
              </Col>
              <Col>
                <div className='grid-item'>
                  <span className='item-title'>Total de pacientes cadastrados</span>
                  <span className='item-number'>61152</span>
                </div>
              </Col>
              <Col>
                <div className='grid-item'>
                  <span className='item-title'>Total de sessões (individuais)</span>
                  <span className='item-number'>5</span>
                </div>
              </Col>
              <Col>
                <div className='grid-item'>
                  <span className='item-title'>Total de sessões (dupla)</span>
                  <span className='item-number'>5</span>
                </div>
              </Col>
              <Col>
                <div className='grid-item'>
                  <span className='item-title'>Total de sessões (grupo)</span>
                  <span className='item-number'>5</span>
                </div>
              </Col>
              
        </Row>
    </Container>
        
        
    </>
       
  )
}

export default Dashboard