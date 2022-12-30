import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchForm from "../SearchForm";
import logo from "./logo.png";
import "./NavigationBar.css";

function NavigationBar() {
  const liens = {
    articles: {label: "Articles", link: "articles"},
    notYetReviewed: {label: "Not Yet Reviewed", link: "notReviewed", },
    notCompleted: {label: "Not Completed", link: "notCompleted"},
    fullyReviewed: {label: "Fully Reviewed", link: "fully"},
    categories: {label: "Categories", link: "categories"},
    classes: {label: "Classes", link: "classes"},
    groupes: {label: "Groupes", link: "groupes"},
    authors: {label: "Authors", link: "authors"},
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

            <Nav.Link href={liens.articles.link}>{liens.articles.label}</Nav.Link>

            <NavDropdown title="Review" id="collasible-nav-dropdown">

              <NavDropdown.Item href={liens.notYetReviewed.link}>{liens.notYetReviewed.label}</NavDropdown.Item>

              <NavDropdown.Item href={liens.notCompleted.link}>{liens.notCompleted.label}</NavDropdown.Item>

              <NavDropdown.Divider />
              
              <NavDropdown.Item href={liens.fullyReviewed.link}>{liens.fullyReviewed.label}</NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown title="Misc" id="collasible-nav-dropdown">
            
              <NavDropdown.Item href={liens.categories.link}>{liens.categories.label}</NavDropdown.Item>
              
              <NavDropdown.Item href={liens.classes.link}>{liens.classes.label}</NavDropdown.Item>

              <NavDropdown.Item href={liens.groupes.link}>{liens.groupes.label}</NavDropdown.Item>

              <NavDropdown.Item href={liens.authors.link}>{liens.authors.label}</NavDropdown.Item>
            
            </NavDropdown>

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

            <Nav.Link></Nav.Link>

            <Nav.Link href={liens.articles.link}>{liens.articles.label}</Nav.Link>

            <NavDropdown title="Reviews" id="collasible-nav-dropdown">

              <NavDropdown.Item href={liens.notYetReviewed.link}>{liens.notYetReviewed.label}</NavDropdown.Item>

              <NavDropdown.Item href={liens.notCompleted.link}>{liens.notCompleted.label}</NavDropdown.Item>

              <NavDropdown.Divider />
              
              <NavDropdown.Item href={liens.fullyReviewed.link}>{liens.fullyReviewed.label}</NavDropdown.Item>

            </NavDropdown>

            <NavDropdown title="Misc" id="collasible-nav-dropdown">
            
              <NavDropdown.Item href={liens.categories.link}>{liens.categories.label}</NavDropdown.Item>
              
              <NavDropdown.Item href={liens.classes.link}>{liens.classes.label}</NavDropdown.Item>

              <NavDropdown.Item href={liens.groupes.link}>{liens.groupes.label}</NavDropdown.Item>

              <NavDropdown.Item href={liens.authors.link}>{liens.authors.label}</NavDropdown.Item>
            
            </NavDropdown>

          </Nav>
          <SearchForm />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>)
}

export default NavigationBar