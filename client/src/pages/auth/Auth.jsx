import React, { useContext, useState } from 'react'
import {Form, Button, Col, Modal, Card } from 'react-bootstrap';
import FormProfessional from '../../components/FormProfessional';
import { AuthContext } from '../../contexts/AuthContext';

function Auth() {
  const { authenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
  }

  return (
    <Card className='auth'>
      <Card.Body>
      <div style={{color: '#6813D5', textAlign: 'center', fontSize:32}}><strong>Mente Sã</strong></div>
        <p style={{color: '#6813D5', fontSize:24}}>Bem vindo ao sistema</p>
        <span style={{color: '#AAAAAA', fontSize:16}}>Por favor entre com sua conta</span>
        <Form className='mt-2' onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type='email'
              name='email'
              id='email'
              placeholder="E-mail"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type='password'
              name='password'
              id='password'
              placeholder="Senha"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Col className='colLogin'><Form.Check type="checkbox" label="Lembrar Usuário"  /><label style={{ textAlign:'right' }}>Esqueci a senha?</label></Col>            
          </Form.Group>
          <Form.Group className="mb-3">
            <Col className='sm-6' style={{ textAlign:'center' }}><label onClick={handleShow}>Criar Conta</label> </Col> 
          </Form.Group>
          <Button type="submit" id='buttonLogin'>
            Login
          </Button>
        </Form>
      </Card.Body>
        

        <Modal show={show}>
        <Modal.Header>
          <Modal.Title style={{color: '#6813D5', textAlign: 'center', fontSize:32}}><strong>Mente Sã</strong></Modal.Title>
        </Modal.Header>          
        <Modal.Body>
          <p style={{color: '#6813D5', fontSize:24}}>Cadastro do professional</p>
          <span style={{color: '#AAAAAA', fontSize:16}}>Crie sua conta e comece a desfrutar do nosso sistema</span>
          <FormProfessional />
        </Modal.Body>
        <Modal.Footer>
        <Button id='buttonCancel'  onClick={handleClose}>
            Cancelar
            </Button>
          <Button id='buttonSave' onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  )
}

export default Auth