import React from 'react'
import { Container, Row, Card, Col } from 'react-bootstrap';
import Sidebar from '../../components/Sidebar';


function Dashboard() {
  return (
    <>
    
    <Container fluid>
    <div className="content-page">
        <div className="content">
          <Row className="flex">
            <Col md={3} style={{marginTop: '1rem', marginBottom: '1rem'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title className='item-title'><strong>Sessões agendadas (dia)</strong></Card.Title>
                  <Card.Text className='item-number'>5</Card.Text>
                </Card.Body>
              </Card>           
            </Col>    

            <Col md={3} style={{marginTop: '1rem', marginBottom: '1rem'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title className='item-title'><strong>Sessões agendadas (mês)</strong></Card.Title>
                  <Card.Text className='item-number'>15</Card.Text>
                </Card.Body>
              </Card>
            </Col>   

            <Col md={3} style={{marginTop: '1rem', marginBottom: '1rem'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title className='item-title'><strong>Sessões canceladas (mês)</strong></Card.Title>
                  <Card.Text className='item-number'>1</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} style={{marginTop: '1rem', marginBottom: '1rem'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title className='item-title'><strong>Total de pacientes cadastrados</strong></Card.Title>
                  <Card.Text className='item-number'>65152</Card.Text>
                </Card.Body>
              </Card>
            </Col>   

            <Col md={3} style={{marginTop: '1rem', marginBottom: '1rem'}}>
              <Card style={{ width: '18rem'}}>
                <Card.Body>
                  <Card.Title className='item-title'><strong>Total de sessões (individuais)</strong></Card.Title>
                  <Card.Text className='item-number'>5</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} style={{marginTop: '1rem', marginBottom: '1rem'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title className='item-title'><strong>Total de sessões (dupla)</strong></Card.Title>
                  <Card.Text className='item-number'>5</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} style={{marginTop: '1rem', marginBottom: '1rem'}}>
              <Card style={{ width: '18rem'}}>
                <Card.Body>
                  <Card.Title className='item-title'><strong>Total de sessões (grupo)</strong></Card.Title>
                  <Card.Text className='item-number'>5</Card.Text>
                </Card.Body>
              </Card>  
            </Col> 

            <Col>
            </Col>        
          </Row>           
        </div>
      </div>
    </Container>    
    </>       
  )
}

export default Dashboard