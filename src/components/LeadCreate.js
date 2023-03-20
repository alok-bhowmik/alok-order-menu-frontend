import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation,useNavigate } from "react-router-dom";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { useSelector } from "react-redux";
import inventoryApi from "../api/inventoryApi";

const LeadCreate = (props) => {
   
    const [options, setOptions] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const [lead, setLead] = useState('');

    const handleChange = (e) => {
        setLead({ ...lead, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await inventoryApi.createLead(lead);
        if (result) {
            navigate(`/leads/${result.id}`, { state: result });
        }
    };

    const handleCancel = () => {
        navigate("/leads/", { state: lead });
    };

    const [selected, setSelected] = useState([]);

    return (
        <Container className="view-form">
            <Row>
                <Col></Col>
                <Col lg={8}>
                    <Form className="mt-3" onSubmit={handleSubmit}>
                        <Row className="view-form-header align-items-center">
                            <Col lg={3}>
                                Create Lead
                                <h4>Aslam Bari</h4>
                            </Col>
                            <Col lg={9} className="d-flex justify-content-end">
                                <Button className="btn-sm mx-2" onClick={handleSubmit}>
                                    Save
                                </Button>
                                <Button
                                    className="btn-sm"
                                    variant="danger"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-between">
                                <Form.Group className="mx-3" controlId="formBasicFirstName">
                                    <Form.Label
                                        className="form-view-label"
                                        htmlFor="formBasicFirstName"
                                    >
                                        Salutation
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="salutation"
                                        placeholder="Enter salutation"
                                        value={lead.salutation}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mx-3" controlId="formBasicFirstName">
                                    <Form.Label
                                        className="form-view-label"
                                        htmlFor="formBasicFirstName"
                                    >
                                        First Name
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstname"
                                        placeholder="Enter firstname"
                                        value={lead.firstname}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mx-3" controlId="formBasicLastName">
                                    <Form.Label
                                        className="form-view-label"
                                        htmlFor="formBasicLastName"
                                    >
                                        Last Name
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastname"
                                        placeholder="Enter lastname"
                                        value={lead.lastname}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mx-3" controlId="formBasicEmail">
                                    <Form.Label
                                        className="form-view-label"
                                        htmlFor="formBasicEmail"
                                    >
                                        Email
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        value={lead.email}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mx-3" controlId="formBasicPhone">
                                    <Form.Label
                                        className="form-view-label"
                                        htmlFor="formBasicPhone"
                                    >
                                        Phone
                                    </Form.Label>
                                    <Form.Control
                                        type="phone"
                                        name="phone"
                                        placeholder="Enter phone"
                                        value={lead.phone}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
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
                                        value={lead.title}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>

                            <Col lg={6}>
                                <Form.Group className="mx-3" controlId="formBasicStreet">
                                    <Form.Label
                                        className="form-view-label"
                                        htmlFor="formBasicStreet"
                                    >
                                        Company
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="company"
                                        placeholder="Enter company"
                                        value={lead.company}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>

                            <Col lg={6}>
                                <Form.Group className="mx-3" controlId="formBasicStreet">
                                    <Form.Label
                                        className="form-view-label"
                                        htmlFor="formBasicStreet"
                                    >
                                        Street
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="street"
                                        placeholder="Enter street"
                                        value={lead.street}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mx-3" controlId="formBasicCity">
                                    <Form.Label
                                        className="form-view-label"
                                        htmlFor="formBasicCity"
                                    >
                                        City
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="city"
                                        placeholder="Enter city"
                                        value={lead.city}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mx-3" controlId="formBasicState">
                                    <Form.Label
                                        className="form-view-label"
                                        htmlFor="formBasicState"
                                    >
                                        State
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="state"
                                        placeholder="Enter state"
                                        value={lead.state}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>

                            <Col lg={6}>
                                <Form.Group className="mx-3" controlId="formBasicPin">
                                    <Form.Label
                                        className="form-view-label"
                                        htmlFor="formBasicPin"
                                    >
                                        Pincode
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="pincode"
                                        placeholder="Enter pincode"
                                        value={lead.pincode}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mx-3" controlId="formBasicCountry">
                                    <Form.Label
                                        className="form-view-label"
                                        htmlFor="formBasicCountry"
                                    >
                                        Country
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="country"
                                        placeholder="Enter country"
                                        value={lead.country}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>

                            <Col lg={6}>
                                <Form.Group className="mx-3" controlId="formBasicStreet">
                                    <Form.Label
                                        className="form-view-label"
                                        htmlFor="formBasicStreet"
                                    >
                                        Street
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="street"
                                        placeholder="Enter street"
                                        value={lead.street}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        {/*<Row className="justify-content-md-center">
                            <Col lg={8}>
                                <Button  className="mx-3" variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Col>
                </Row>*/}
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default LeadCreate;
