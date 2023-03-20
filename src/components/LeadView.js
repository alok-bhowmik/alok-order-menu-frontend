import React, { useState, useEffect, useRef } from "react";
import { Button, Card, Col, Container, Nav, Row } from "react-bootstrap";
import Confirm from "./Confirm";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RelatedListTask from "./RelatedListTask";
import inventoryApi from "../api/inventoryApi";
import TaskCreate from "./TaskCreate";
import logger from 'logging-library';
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';
import moment from "moment";
import Files from "./Files";

const LeadView = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const lead = location.state;
  const [modalShow, setModalShow] = useState(false);
  const [modalShowTask, setModalShowTask] = useState(false);
  const [relatedListTask, setRelatedListTask] = useState(true);
  const [fileUplode, setFileUplode] = useState(false);
  const [fileTab, setFileTab] = useState(false);
  const inputRef = useRef(null);
  
  const deleteLead = async () => {
    const result = await inventoryApi.deleteLead(lead.id);
    if (result.success) navigate(`/leads`);
  };

  const editLead = () => {
    navigate(`/leads/${lead.id}/e`, { state: lead });
  };

  const submit = () => {
    setModalShowTask(false);
    navigate(`/leads/${lead.id}`, { state: lead });
  };

  const handleChangeNav = () => {
    setRelatedListTask(!relatedListTask);
    setFileTab(!fileTab);
  }

  return (
    <div>
      {lead && <Container>
        {modalShow &&
          <Confirm
            show={modalShow}
            onHide={() => setModalShow(false)}
            deleteLead={deleteLead}
            title="Confirm delete?"
            message="You are going to delete the record. Are you sure?"
            table="lead"
          />}
        <Row className="view-form">
          <Col></Col>
          <Col lg={8}>
            <Row className="view-form-header align-items-center">
              <Col lg={3}>
                Lead
                <h4>Aslam Bari</h4>
              </Col>
              <Col lg={9} className="d-flex justify-content-end">
                <Button className="btn-sm mx-2" onClick={() => editLead(true)}>
                  <i class="fa-regular fa-pen-to-square"></i>
                </Button>
                <Button
                  className="btn-sm"
                  variant="danger"
                  onClick={() => setModalShow(true)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <label>Name</label>
                <span>
                  {lead.salutation} {lead.firstname} {lead.lastname}
                </span>
              </Col>
              <Col lg={6}>
                <label>Title</label>
                <span>{lead.title}</span>
              </Col>
              <Col lg={6}>
                <label>Email</label>
                <span>{lead.email}</span>
              </Col>
              <Col lg={6}>
                <label>Phone</label>
                <span>{lead.phone}</span>
              </Col>
              <Col lg={6}>
                <label>Company</label>
                <span>{lead.company}</span>
              </Col>
              <Col lg={6}>
                <label>Street</label>
                <span>{lead.street}</span>
              </Col>
              <Col lg={6}>
                <label>City</label>
                <span>{lead.city}</span>
              </Col>
              <Col lg={6}>
                <label>State</label>
                <span>{lead.state}</span>
              </Col>
              <Col lg={6}>
                <label>Pincode</label>
                <span>{lead.pincode}</span>
              </Col>
              <Col lg={6}>
                <label>Country</label>
                <span>{lead.country}</span>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Card bg="light" text="light" className="mb-2 mt-4">
          <Card.Header className="d-flex justify-content-between">
            <Nav variant="tabs" defaultActiveKey="#tasks">
              <Nav.Item onClick={handleChangeNav}>
                <Nav.Link href="#tasks">Tasks</Nav.Link>
              </Nav.Item>
              <Nav.Item onClick={handleChangeNav}>
                <Nav.Link href="#files" >Files</Nav.Link>
              </Nav.Item>
            </Nav>
            {relatedListTask && <Button className="float-right btn-sm" onClick={() => setModalShowTask(true)}>New Task</Button>}
            {modalShowTask &&
              <TaskCreate
                show={modalShowTask}
                onHide={() => setModalShowTask(false)}
                parent={lead}
                table="lead"
                submit={submit}
              />}
            {fileTab && <Button className="float-right btn-sm" onClick={() => setFileUplode(true)}>Upload File</Button>}
          </Card.Header>
          <Card.Body>
            {relatedListTask &&
              <RelatedListTask
                parent={lead}
              />}
              {fileUplode &&
              <Files show={fileUplode}
              onHide={() => setFileUplode(false)}
              />
            }
          </Card.Body>
        </Card>
      </Container>}
    </div>
  );
};

export default LeadView;
