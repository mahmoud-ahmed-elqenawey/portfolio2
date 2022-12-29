import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Appbar.scss";

const Appbar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">Qeno</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Appbar;
