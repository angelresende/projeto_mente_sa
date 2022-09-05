import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Dashboard() {
  return (
    <>
    <Container>

    <div className="content-page">
        <div className="content">
          <Row className="flex">
            <Card style={{ width: '13rem' }}>
              <Card.Body>
                <Card.Title className='item-title'><strong>Sessões agendadas (dia)</strong></Card.Title>
                <Card.Text className='item-number'>5</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '13rem', marginLeft:12 }}>
              <Card.Body>
                <Card.Title className='item-title'><strong>Sessões agendadas (mês)</strong></Card.Title>
                <Card.Text className='item-number'>15</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '13rem', marginLeft:12 }}>
              <Card.Body>
                <Card.Title className='item-title'><strong>Sessões canceladas (mês)</strong></Card.Title>
                <Card.Text className='item-number'>1</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '13rem', marginLeft:12 }}>
              <Card.Body>
                <Card.Title className='item-title'><strong>Total de patients cadastrados</strong></Card.Title>
                <Card.Text className='item-number'>65152</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '13rem', marginTop:14}}>
              <Card.Body>
                <Card.Title className='item-title'><strong>Total de sessões (individuais)</strong></Card.Title>
                <Card.Text className='item-number'>5</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '13rem', marginLeft:12, marginTop:14 }}>
              <Card.Body>
                <Card.Title className='item-title'><strong>Total de sessões (dupla)</strong></Card.Title>
                <Card.Text className='item-number'>5</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '13rem', marginLeft:12, marginTop:14}}>
              <Card.Body>
                <Card.Title className='item-title'><strong>Total de sessões (grupo)</strong></Card.Title>
                <Card.Text className='item-number'>5</Card.Text>
              </Card.Body>
            </Card>            
          </Row>           
        </div>
      </div>
    </Container>    
    </>       
  )
}

export default Dashboard