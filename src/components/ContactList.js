import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import inventoryApi from "../api/inventoryApi";

import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader
} from 'react-bs-datatable';
import { Link } from "react-router-dom";


const ContactList = () => {
  
  const [body, setBody] = useState([]);
  useEffect( () => {
       async function init(){
        const contacts = await inventoryApi.fetchContacts();
        if(contacts)
          setBody(contacts);
      }
      init();

  }, []);

// Create table headers consisting of 4 columns.
const header = [
  { title: 'First Name', prop: 'firstname' , isFilterable: true ,
  cell: (row) => (
    <Link
      to={"/contacts/" + row.id}
      state={row}
       
      
    >
      {row.firstname}
    </Link>
  ) },
  { title: 'Last Name', prop: 'lastname', isFilterable: true ,
  cell: (row) => (
    <Link
      to={"/contacts/" + row.id}
      
    >
      {row.lastname}
    </Link>
  )},
  { title: 'Email', prop: 'email' , isFilterable: true }, 
  {title: 'Phone', prop: 'phone' , isFilterable: true },
  {title: 'City', prop: 'city' , isFilterable: true },
  {title: 'State', prop: 'state'}
];

// Randomize data of the table columns.
// Note that the fields are all using the `prop` field of the headers.
const labels = {
  beforeSelect: " "
}

  return (
    <Row className="g-0">
      <Col lg={2} className="mx-2">
        
      <Link className="nav-link">Home <i class="fa-solid fa-chevron-right"></i> Contacts</Link>
      </Col>
      <Col lg={8}>
       
      {body ? 
      <DatatableWrapper body={body} headers={header} paginationOptionsProps={{
        initialState: {
          rowsPerPage: 10,
          options: [5, 10, 15, 20]
        }
      }}>
      <Row className="mb-4">
        <Col
          xs={12}
          lg={4}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          <Filter />
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-start align-items-start"
        >
        <PaginationOptions labels={labels}/>
        
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          <Button className="btn-sm" variant="outline-primary">New Contact</Button>
        </Col>
      </Row>
      <Table striped className="data-table">
        <TableHeader />
        <TableBody />
      </Table>
      <Pagination />
      
    </DatatableWrapper> : '' }
      </Col>
      <Col lg={2}></Col>
    </Row>
  );
};

export default ContactList;
