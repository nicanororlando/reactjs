import React from 'react';
import {
  Offcanvas,
  Nav,
  Navbar,
  Form,
  FormControl,
  Container,
  Button,
} from 'react-bootstrap';
import PrivateLinks from 'routes/PrivateLinks';
import PublicLinks from 'routes/PublicLinks';
import './NavBar.css';

const NavBarr = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          collapseOnSelect
          bg="dark"
          variant="dark"
          expand={expand}
          className="mb-3"
        >
          <Container fluid id="container-fluid">
            <Navbar.Toggle
              id="toggler"
              className="toggler"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              className="offcanvas"
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header
                className="justify-content-space-between"
                closeButton
                closeVariant="white"
              >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Private links
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <PrivateLinks />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Brand className="hide-sm" href="/">
              Temas estudiados
            </Navbar.Brand>
            <Navbar
              className="navbar-sm"
              collapseOnSelect
              expand="sm"
              bg="dark"
              variant="dark"
            >
              <Navbar.Brand className="hide-md" href="/">
                Temas estudiados
              </Navbar.Brand>
              <Navbar.Toggle
                id="toggler-sm"
                className="toggler"
                aria-controls="responsive-navbar-nav"
              />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <PublicLinks />
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Nav id="form-search">
              <Form className="d-flex hide-sm">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBarr;
