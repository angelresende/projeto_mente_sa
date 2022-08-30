import React, { useState } from 'react'
import {Form } from 'react-bootstrap';


function FormPaciente() {
  return (
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
  )
}

export default FormPaciente