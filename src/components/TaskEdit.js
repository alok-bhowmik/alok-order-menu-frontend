import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "react-bootstrap-typeahead/css/Typeahead.css";
import inventoryApi from "../api/inventoryApi";
import moment from "moment";

const TaskEdit = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [task, setTask] = useState(props.task.row);
    const [taskTargetDate, setTaskTargetDate] = useState();
    useEffect(() => {
        if (props.table === "lead" && props.parent !== null && props.task !== null) {
            let current = new Date();
            task.lastmodifieddate = moment(current).format('YYYY-MM-DD');
        }
    }, []);

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (props.table === "lead") {
            const result = await inventoryApi.saveTasks(task);
            if (result) {
                submit();
            }
        }
    };

    const submit = () => {
        props.submit();
    };

    return (

        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container className="view-form">
                    <Row>
                        <Col lg={12}>
                            <Form className="mt-3" onSubmit={handleSubmit} controlId="taskEdit">
                                <Row>
                                    <Col>
                                        <Form.Group className="mx-3" controlId="formBasicTitle">
                                            <Form.Label
                                                className="form-view-label"
                                                htmlFor="formBasicTitle"
                                            >
                                                Title
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="title"
                                                placeholder="Enter title"
                                                value={task.title}
                                                onChange={handleChange}

                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mx-3" controlId="formBasicType">
                                            <Form.Label
                                                className="form-view-label"
                                                htmlFor="formBasicType"
                                            >
                                                Type
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="type"
                                                placeholder="Enter type"
                                                value={task.type}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mx-3" controlId="formBasicPriority">
                                            <Form.Label
                                                className="form-view-label"
                                                htmlFor="formBasicPriority"
                                            >
                                                Priority
                                            </Form.Label>
                                            <Form.Select aria-label="Enter Priority" name="priority" value={task.priority} onChange={handleChange}>
                                                <option>Select Priority</option>
                                                <option value="Low">Low</option>
                                                <option value="Normal">Normal </option>
                                                <option value="High">High</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mx-3" controlId="formBasicStatus">
                                            <Form.Label
                                                className="form-view-label"
                                                htmlFor="formBasicStatus"
                                            >
                                                Status
                                            </Form.Label>
                                            <Form.Select aria-label="Enter status" name="status" value={task.status} onChange={handleChange}>
                                                <option>Select Status</option>
                                                <option value="	Not Started">	Not Started</option>
                                                <option value="In Progress">In Progress </option>
                                                <option value="Completed">Completed</option>
                                                <option value="Waiting on someone else">Waiting on someone else</option>
                                                <option value="Deferred">Deferred</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <Form.Group className="mx-3" controlId="formBasicDescription">
                                            <Form.Label
                                                className="form-view-label"
                                                htmlFor="formBasicDescription"
                                            >
                                                Description
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="description"
                                                placeholder="Enter description"
                                                value={task.description}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col >
                                        <Form.Group className="mx-3" controlId="formBasicTargetdate">
                                            <Form.Label
                                                className="form-view-label"
                                                htmlFor="formBasicTargetdate"
                                            >
                                                Target date {new Date(task.targetdate).toISOString}
                                            </Form.Label>

                                            <Form.Control
                                                type="date"
                                                name="targetdate"
                                                placeholder="Enter targetdate"
                                                value={moment(task.targetdate).format('YYYY-MM-DD')}
                                                defaultValue={moment(task.targetdate).format('YYYY-MM-DD')}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleSubmit}  >Save</Button>
                <Button onClick={props.onHide} variant="light">Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default TaskEdit;
