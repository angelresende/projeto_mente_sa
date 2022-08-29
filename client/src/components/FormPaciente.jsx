import React, { useState } from 'react'
import {Form, Modal, Button } from 'react-bootstrap';


function FormPaciente() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title style={{color: '#6813D5', textAlign: 'center'}}>Cadastro do paciente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="ControlInputName">
              <Form.Control
                type="text"
                placeholder="Nome"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInputDate">
              <Form.Control
                type="date"
                placeholder="Data de Nascimento"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInputCPF">
              <Form.Control
                type="text"
                placeholder="CPF"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInputGender">
              <Form.Control
                type="text"
                placeholder="Nome"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInputAdress">
              <Form.Control
                type="text"
                placeholder="Endereço"
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
            <Form.Group className="mb-3" controlId="ControlInputPhone">
              <Form.Control
                type="phone"
                placeholder="Telefone"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button id='buttonCancel'  onClick={handleClose}>
            Cancelar
          </Button>
          <Button id='buttonSave' onClick={handleClose}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default FormPaciente