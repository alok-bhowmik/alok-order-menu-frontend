import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { useSelector } from "react-redux";
import inventoryApi from "../api/inventoryApi";

const ContactEdit = (props) => {
  const { accounts } = useSelector((state) => state.api);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    let fetchedAccounts = [];
    accounts.map((item) => {
      fetchedAccounts.push({
        label: item.firstname,
        population: 4780127,
        capital: "Montgomery",
        region: "South",
      });
    });
    setOptions(fetchedAccounts);
  }, [accounts]);

  const location = useLocation();
  const navigate = useNavigate();

  const [contact, setContact] = useState(location.state);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await inventoryApi.saveContact(contact);
    if (result.success) {
      navigate(`/contacts/${contact.id}`, { state: contact });
    }

  };

  const handleCancel = () => {
    navigate("/contacts/" + contact.id, { state: contact });
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
                Edit Contact
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
                    placeholder="Enter email"
                    value={contact.salutation}
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
                    placeholder="Enter email"
                    value={contact.firstname}
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
                    placeholder="Enter email"
                    value={contact.lastname}
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
                    value={contact.email}
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
                    placeholder="Enter email"
                    value={contact.phone}
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
                    placeholder="Enter email"
                    value={contact.title}
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
                    Account
                  </Form.Label>
                  <Typeahead
                    id="basic-example"
                    onChange={setSelected}
                    options={options}
                    placeholder="Search Accounts..."
                    selected={selected}
                    clearButton
                    defaultFilterBy="label"
                    labelKey="label"
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
                    placeholder="Enter email"
                    value={contact.street}
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
                    placeholder="Enter email"
                    value={contact.city}
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
                    placeholder="Enter email"
                    value={contact.state}
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
                    placeholder="Enter email"
                    value={contact.pincode}
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
                    placeholder="Enter email"
                    value={contact.country}
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
                    placeholder="Enter email"
                    value={contact.street}
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

export default ContactEdit;
