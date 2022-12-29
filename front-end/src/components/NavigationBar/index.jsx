import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchForm from "../SearchForm";
import logo from "./logo.png";
import "./NavigationBar.css";

function NavigationBar() {
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
              <NavDropdown.Item href="#action/3.1">
                Not Yet Reviewed
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                Not Completed
              </NavDropdown.Item>

              <NavDropdown.Divider />
              
              <NavDropdown.Item href="#action/3.4">
                Fully Reviewed
              </NavDropdown.Item>
              
            </NavDropdown>
            
            <Nav.Link href="#deets">
              [Categories]
            </Nav.Link>
            
            <Nav.Link href="#memes">
              [Classes]  
            </Nav.Link>

            <Nav.Link href="#memes">
              [Groupes]  
            </Nav.Link>


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
              <NavDropdown.Item href="#action/3.1">
                Not Yet Reviewed
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                Not Completed
              </NavDropdown.Item>

              <NavDropdown.Divider />
              
              <NavDropdown.Item href="#action/3.4">
                Fully Reviewed
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#deets">
              [Categories]
            </Nav.Link>
            
            <Nav.Link href="#memes">
              [Classes]  
            </Nav.Link>

            <Nav.Link href="#memes">
              [Groupes]  
            </Nav.Link>
          </Nav>
          <SearchForm />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>)
}

export default NavigationBar