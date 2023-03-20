import React from 'react'
import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap'
import Confirm from './Confirm'
import { useLocation } from 'react-router-dom'
import ContactEdit from './ContactEdit'
import { useNavigate } from "react-router-dom";
import RelatedListTask from './RelatedListTask';
import inventoryApi from "../api/inventoryApi";

const ContactView = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const contact = location.state;
    const [modalShow, setModalShow] = React.useState(false);

    const deleteContact = async () => {
        const result = await inventoryApi.deleteContact(contact.id);
        console.log('result:', result);
        if(result.success)
            navigate(`/contacts`);
    }

    const editContact = () =>{
        navigate(`/contacts/${contact.id}/e`, {state:contact});
    }
  return (
    <Container>
        <Confirm show={modalShow}
        onHide={() => setModalShow(false) } deleteContact={deleteContact} title="Confirm delete?" message="You are going to delete the record. Are you sure?" table="contact"/>
    <Row className='view-form'>
        <Col></Col>
        
        <Col lg={8}>
        <Row className='view-form-header align-items-center'>
        <Col lg={3}>
        Contact
            <h4>Aslam Bari</h4> 
        </Col>
        <Col lg={9} className="d-flex justify-content-end">
            <Button className='btn-sm mx-2' onClick={() => editContact(true)}><i class="fa-regular fa-pen-to-square"></i></Button>
            <Button className='btn-sm' variant="danger" onClick={() => setModalShow(true)}>Delete</Button>
        </Col>
        </Row>
        <Row>
        <Col lg={6}>
            <label >Name</label>
            <span>{contact.salutation} {contact.firstname} {contact.lastname}</span>
        </Col>
            <Col lg={6}>
                <label>Title</label>
                <span>{contact.title}</span>
            </Col>
        
            <Col lg={6}><label> Account </label>
            <span>{contact.firstname}</span>
            </Col>
        <Col lg={6}>
            <label >Email</label>
            <span>{contact.email}</span>
        </Col>
            <Col lg={6}>
                <label>Phone</label>
                <span>{contact.phone}</span>
            </Col>
        
     
        <Col lg={6}>
            <label >Street</label>
            <span>{contact.street}</span>
        </Col>
            <Col lg={6}>
                <label>City</label>
                <span>{contact.city}</span>
            </Col>
        
   
        <Col lg={6}>
        <label>State</label>
                <span>{contact.state}</span>
        </Col>
            <Col lg={6}>
            <label>Pincode</label>
                <span>{contact.pincode}</span>
            </Col>
    
        <Col lg={6}>
        <label>Country</label>
                <span>{contact.country}</span>
        </Col>
            
        
        </Row>
        
        </Col>
        <Col></Col>
  
    </Row>
    {/* {[
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
          <RelatedListTask/> 
          </Card.Body>
        </Card>
      ))} */}

<Card bg="light"
          text='light'
          className="mb-2 mt-4">
      <Card.Header className='d-flex justify-content-between'>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Tasks</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Files</Nav.Link>
          </Nav.Item>
        </Nav>
        <Button className='float-right btn-sm'>New Task</Button>
      </Card.Header>
      <Card.Body>
      <RelatedListTask/> 
      </Card.Body>
    </Card>

    </Container>
  )
}

export default ContactView