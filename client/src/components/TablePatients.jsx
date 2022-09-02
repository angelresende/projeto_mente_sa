import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEdit, faTrash, faEye, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Modal, Button, Table, Row, Col, Form  } from 'react-bootstrap';
import FormPatient from './FormPatient';


function TablePatients() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    
    <div className='table-title'>
      <Row>
        <Col>
          <h4 style={{color:'#666666', fontSize: 32}}>Meus Pacientes</h4>
        </Col>
        <Col>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pesquisar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"><FontAwesomeIcon icon={faSearch}/></Button>
          </Form>
        </Col>      
        <Col>
            <Button className='btn btn-success float-right' id='buttonPlus' onClick={handleShow}>
                <FontAwesomeIcon icon={faPlus} /> Novo Paciente
            </Button> 
        </Col>
      </Row>
    </div>
    
    <Row>
    <Table  className='table table-striped table-hover'>
      <thead style={{background: '#6813D5'}}>
        <tr>
          <th style={{color: '#fff'}}>Nome</th>
          <th style={{color: '#fff'}}>Endereço</th>
          <th style={{color: '#fff'}}>E-mail</th>
          <th style={{color: '#fff'}}>Gênero</th>
          <th style={{color: '#fff'}}>Estado</th>
          <th style={{color: '#fff'}}>Cidade</th>
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
          <td><strong></strong></td>
          <td>
          <a href='#addDepartmentModal' id='View' data-toggle='modal'><FontAwesomeIcon icon={ faEye } data-toggle='tooltip' title='View'/></a>
            <a href='#addDepartmentModal' id='edit' data-toggle='modal'><FontAwesomeIcon icon={ faEdit } data-toggle='tooltip' title='Edit'/></a>
            <a href='#addDepartmentModal' id='delete' data-toggle='modal'><FontAwesomeIcon icon={ faTrash } data-toggle='tooltip' title='Delete'/></a>
          </td>
        </tr>
        
      </tbody>
    </Table > 
    </Row>
     

    

        
        
    <Modal show={show}>
        <Modal.Header>
            <Modal.Title style={{color: '#6813D5', textAlign: 'center'}}>Cadastro do patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormPatient />
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

export default TablePatients