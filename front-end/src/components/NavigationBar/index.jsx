import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchForm from "../SearchForm";
import logo from "./logo.png";
import "./NavigationBar.css";

function NavigationBar({notReviewed, notCompleted}) {
  const strNotReviewed = `Not Yet Reviewed ${notReviewed > 0 && `(${notReviewed})`}`;
  const strNotCompleted = `Not Completed ${notCompleted > 0 && `(${notCompleted})`}`;

  const liens = {
    notYetReviewed: {label: strNotReviewed, link: "#notReviewed", },
    notCompleted: {label: strNotCompleted, link: "#NotCompleted"},
    fullyReviewed: {label: "Fully Reviewed", link: "#fully"},
    categories: {label: "Categories", link: "#categories"},
    classes: {label: "Classes", link: "#Classes"},
    groupes: {label: "Groupes", link: "#Groupes"},
  };

  return (<div className='NavigationBar'>
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" id='largeNavBar'>
      <Container>
        <Navbar.Brand href="/">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>

          <Nav>

            <NavDropdown title="Reviews" id="collasible-nav-dropdown">

              <NavDropdown.Item href={liens.notYetReviewed.link}>{liens.notYetReviewed.label}</NavDropdown.Item>

              <NavDropdown.Item href={liens.notCompleted.link}>{liens.notCompleted.label}</NavDropdown.Item>

              <NavDropdown.Divider />
              
              <NavDropdown.Item href={liens.fullyReviewed.link}>{liens.fullyReviewed.label}</NavDropdown.Item>
              
            </NavDropdown>
            
            <Nav.Link href={liens.categories.link}>{liens.categories.label}</Nav.Link>
            
            <Nav.Link href={liens.classes.link}>{liens.classes.label}</Nav.Link>

            <Nav.Link href={liens.groupes.link}>{liens.groupes.label}</Nav.Link>

          </Nav>
          <SearchForm />
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" id='smallNavBar'>
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          &nbsp; LorgaBook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
          </Nav>
            
          <Nav>

          <Nav.Link>
              
            </Nav.Link>

            <NavDropdown title="Reviews" id="collasible-nav-dropdown">

              <NavDropdown.Item href={liens.notYetReviewed.link}>{liens.notYetReviewed.label}</NavDropdown.Item>

              <NavDropdown.Item href={liens.notCompleted.link}>{liens.notCompleted.label}</NavDropdown.Item>

              <NavDropdown.Divider />
              
              <NavDropdown.Item href={liens.fullyReviewed.link}>{liens.fullyReviewed.label}</NavDropdown.Item>

            </NavDropdown>

            <Nav.Link href={liens.categories.link}>{liens.categories.label}</Nav.Link>
            
            <Nav.Link href={liens.classes.link}>{liens.classes.label}</Nav.Link>

            <Nav.Link href={liens.groupes.link}>{liens.groupes.label}</Nav.Link>

          </Nav>
          <SearchForm />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>)
}

export default NavigationBar