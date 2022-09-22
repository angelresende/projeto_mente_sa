import React from 'react'
import {Form } from 'react-bootstrap';

function FormProfessional() {

  return (
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
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="ControlInputPassword">
      <Form.Control
        type="password"
        placeholder="Senha"        
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Aceito os termos e políticas de privacidade"  />            
    </Form.Group>
  </Form>
  )
}

export default FormProfessional