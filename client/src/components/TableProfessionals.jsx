import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'
import { Modal, Button, Table  } from 'react-bootstrap';
import FormProfessional from './FormProfessional';


function TableProfessionals() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <div className='table-title'>
      <div className='row'>
      <div className='col-sm-6'>
          <h4 style={{color:'#666666', fontSize: 32}}>Minhas Sessões</h4>
        </div>     
        <Col sm={2}>
            <Button className='btn btn-success float-right' id='buttonPlus' onClick={handleShow}>
                <FontAwesomeIcon icon={faPlus} /> Nova Sessão
            </Button> 
        </Col>
      </div>
    </div>
    

     

    <Table  className='table table-striped table-hover'>
      <thead style={{background: '#6813D5'}}>
        <tr>
          <th style={{color: '#fff'}}>Paciente</th>
          <th style={{color: '#fff'}}>Agendamento</th>
          <th style={{color: '#fff'}}>Tema Abordado</th>
          <th style={{color: '#fff'}}>Duração</th>
          <th style={{color: '#fff'}}>Tipo de sessão</th>
          <th style={{color: '#fff'}}>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong></strong></td>
          <td><strong></strong></td>
          <td><strong></strong></td>
          <td><strong></strong></td>
          <td><strong></strong></td>
          <td>
          <a href='#addDepartmentModal' id='View' data-toggle='modal'><FontAwesomeIcon icon={ faEye } data-toggle='tooltip' title='View'/></a>
            <a href='#addDepartmentModal' id='edit' data-toggle='modal'><FontAwesomeIcon icon={ faEdit } data-toggle='tooltip' title='Edit'/></a>
            <a href='#addDepartmentModal' id='delete' data-toggle='modal'><FontAwesomeIcon icon={ faTrash } data-toggle='tooltip' title='Delete'/></a>
          </td>
        </tr>
        
      </tbody>
    </Table >  

        
        
    <Modal show={show}>
        <Modal.Header>
            <Modal.Title style={{color: '#6813D5', textAlign: 'center'}}>Cadastro de Sessão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormProfessional />
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


    </>
    
  )
}

export default TableProfessionals