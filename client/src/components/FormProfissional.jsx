import React, { useState } from 'react'
import {Form, Modal, Button } from 'react-bootstrap';

function FormProfissional() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title style={{color: '#6813D5', textAlign: 'center', fontSize:32}}><strong>Mente Sã</strong></Modal.Title>
        </Modal.Header>          
        <Modal.Body>
          <p style={{color: '#6813D5', fontSize:24}}>Cadastro do profissional</p>
          <span style={{color: '#AAAAAA', fontSize:16}}>Crie sua conta e comece a desfrutar do nosso sistema</span>
          <Form className='mt-2'>
            <Form.Group className="mb-3" controlId="ControlInputName">
              <Form.Control
                type="text"
                placeholder="Nome"
                autoFocus
              />
            </Form.Group>
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
            <Form.Group className="mb-3" controlId="ControlInputPasswordConfirm">
              <Form.Control
                type="password"
                placeholder="Senha"
                autoFocus
              />
            </Form.Group>
          </Form>
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

export default FormProfissional