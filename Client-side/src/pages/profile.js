import React, { useContext } from "react";
import "../globalStyles.css";
import "./profile.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import BlackButton from "../components/blackButton.js";
import { UserContext } from "../UserContext.js";

export default function Profile() {

  const { user, logout } = useContext(UserContext); 

  return (
    <Container>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h1>My Account</h1>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Navbar expand="sm">
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="me-auto">
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#link">MY ORDERS</Nav.Link>
                <Nav.Link href="#link">ACCOUNT INFORMATION</Nav.Link>
                <Nav.Link href="#link">ADDRESSES</Nav.Link>
              </Nav>
              <Nav className="me-auto">
                <BlackButton text="Log out" onClick={logout}></BlackButton>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        <Col></Col>
      </Row>
      <Row>
      <Col></Col>
      <Col xs={8}>
        <p>Hello {user.name}! Welcome back.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </Col>
      <Col></Col>
      </Row>
    </Container>
  );
}
