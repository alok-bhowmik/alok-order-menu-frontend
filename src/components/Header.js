import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import authApi from "../api/authApi";

const Header = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/login");
  }, []);

  const [sidebar, setSidebar] = useState(true);
  const logout = () => {
    authApi.logout();
    navigate("/login");
  };

  const toggleSidebar = () => {
    document.querySelector("#sidebar").classList.toggle("active");
  };
  return (
    <>
      <Navbar className="header px-2" bg="" expand="lg" variant="">
        <button
          type="button"
          id="sidebarCollapse"
          class="btn btn-info"
          onClick={toggleSidebar}
        >
          <i className="fas fa-align-left"></i>
        </button>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">Link</Nav.Link>
          </Nav>

          <Nav className="ml-auto">
            <Nav.Link href="/about">
              <i class="fa-solid fa-bell"></i>
            </Nav.Link>
            {localStorage.getItem("token") ? (
              <Button variant="btn btn-primary" onClick={logout} title="Logout">
                <i class="fa-solid fa-right-from-bracket"></i>
              </Button>
            ) : (
              <></>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
