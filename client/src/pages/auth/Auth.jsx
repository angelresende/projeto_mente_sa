import React, { useState } from 'react'
import {Form, Button, Col, Modal } from 'react-bootstrap';
import FormProfissional from '../../components/FormProfissional';

function Auth() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='auth'>
        <div style={{color: '#6813D5', textAlign: 'center', fontSize:32}}><strong>Mente Sã</strong></div>
        <p style={{color: '#6813D5', fontSize:24}}>Bem vindo ao sistema</p>
        <span style={{color: '#AAAAAA', fontSize:16}}>Por favor entre com sua conta</span>
        <Form className='mt-2'>
          <Form.Group className="mb-3" controlId="ControlInputEmail">
            <Form.Control
              type="email"
              placeholder="E-mail"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ControlInputPassword">
            <Form.Control
              type="password"
              placeholder="Senha"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Col><Form.Check type="checkbox" label="Lembrar Usuário"  /><label style={{ textAlign:'right' }}>Esqueci a senha?</label></Col>            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Col className='sm-6' style={{ textAlign:'center' }}><label onClick={handleShow}>Criar Conta</label> </Col> 
          </Form.Group>
          <Button type="submit" id='buttonLogin'>
            Login
          </Button>
        </Form>

        <Modal show={show}>
        <Modal.Header>
          <Modal.Title style={{color: '#6813D5', textAlign: 'center', fontSize:32}}><strong>Mente Sã</strong></Modal.Title>
        </Modal.Header>          
        <Modal.Body>
          <p style={{color: '#6813D5', fontSize:24}}>Cadastro do profissional</p>
          <span style={{color: '#AAAAAA', fontSize:16}}>Crie sua conta e comece a desfrutar do nosso sistema</span>
          <FormProfissional />
        </Modal.Body>
        <Modal.Footer>
          <Button id='buttonSave' onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Auth