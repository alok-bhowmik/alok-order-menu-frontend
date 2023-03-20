import React, {useState} from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import authApi from "../api/authApi";


const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({email: "", password : ""});
  const [show, setShow] = React.useState(false);
  const [errorMessage,setErrorMessage] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials)


    const result = await authApi.login(credentials.email, credentials.password)
    if (result.success) {
      localStorage.setItem("token", result.authToken);
      navigate("/");
    }else {
      
      setShow(true);
      setErrorMessage(result.errors);

    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <Container>
      <Row className="login-form p-3 mt-5">
        <Col lg={6}>
          <img src="login.jpg" />
        </Col>
        <Col lg={6} className="login-section">
          <h3 className="text-center mb-2">INVENTORY SYSTEM</h3>
          <div className="p-5">
            <Form onSubmit={handleSubmit}>
              <div className="mt-2 text-center mb-4">
                <i class="fa-solid fa-lock-open fa-2xl"></i>
                <h3 className="mt-2">Login</h3>
              </div>
              <Alert variant="danger" show = {show}>{errorMessage}</Alert>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                  value={credentials.email}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  value={credentials.password}
                />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      <h6 className="text-center mt-3"> &copy; iBirds Services</h6>
    </Container>
  );
};

export default Login;
