import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {Form, Modal, Button } from 'react-bootstrap';
import FormPaciente from '../../components/FormPaciente';

function IndexPacientes() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <Button id='buttonPlus' onClick={handleShow}>
        <FontAwesomeIcon icon={faPlus} /> Novo Paciente
        </Button>               
        
    </div>
  )
}

export default IndexPacientes