import React from 'react'
import {Form } from 'react-bootstrap';

function Auth() {
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
        </Form>
    </div>
  )
}

export default Auth