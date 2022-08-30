import React from 'react'
import {Form } from 'react-bootstrap';

function FormProfissional() {


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
        placeholder="Confirme sua senha"
        autoFocus
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Aceito os termos e políticas de privacidade"  />            
    </Form.Group>
  </Form>
  )
}

export default FormProfissional