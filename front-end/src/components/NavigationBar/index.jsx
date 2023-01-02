import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchForm from "../SearchForm";
import {titleize} from "../../utils/text";
import logo from "./logo.png";
import "./NavigationBar.css";

function NavigationBar() {
  const liens = {
    articles: {label: "articles", link: "articles"},
    notYetReviewed: {label: "not Yet Reviewed", link: "notReviewed", },
    notCompleted: {label: "Not completed", link: "notCompleted"},
    fullyReviewed: {label: "Fully Reviewed", link: "fully"},
    categories: {label: "Categories", link: "categories"},
    classes: {label: "Classes", link: "classes"},
    groupes: {label: "Groupes", link: "groupes"},
    authors: {label: "Authors", link: "authors"},
  };

  return (<div className='NavigationBar'>
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" id='largeNavBar'>
      <Container>

        <Navbar.Brand href="/">[{titleize("Home")}]</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto"></Nav>

          <Nav>

            <Nav.Link href={liens.articles.link}>[{titleize(liens.articles.label)}]</Nav.Link>

            <NavDropdown title={`[${titleize("Review")}]`} id="collasible-nav-dropdown">

              <NavDropdown.Item href={liens.notYetReviewed.link}>{titleize(liens.notYetReviewed.label)}</NavDropdown.Item>

              <NavDropdown.Item href={liens.notCompleted.link}>{titleize(liens.notCompleted.label)}</NavDropdown.Item>

              <NavDropdown.Divider />
              
              <NavDropdown.Item href={liens.fullyReviewed.link}>{titleize(liens.fullyReviewed.label)}</NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown title={`[${titleize("Misc")}]`} id="collasible-nav-dropdown">
            
              <NavDropdown.Item href={liens.categories.link}>{titleize(liens.categories.label)}</NavDropdown.Item>
              
              <NavDropdown.Item href={liens.classes.link}>{titleize(liens.classes.label)}</NavDropdown.Item>

              <NavDropdown.Item href={liens.groupes.link}>{titleize(liens.groupes.label)}</NavDropdown.Item>

              <NavDropdown.Item href={liens.authors.link}>{titleize(liens.authors.label)}</NavDropdown.Item>
            
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

            <Nav.Link href={liens.articles.link}>[{titleize(liens.articles.label)}]</Nav.Link>

            <NavDropdown title={`[${titleize("Review")}]`} id="collasible-nav-dropdown">

              <NavDropdown.Item href={liens.notYetReviewed.link}>{titleize(liens.notYetReviewed.label)}</NavDropdown.Item>

              <NavDropdown.Item href={liens.notCompleted.link}>{titleize(liens.notCompleted.label)}</NavDropdown.Item>

              <NavDropdown.Divider />
              
              <NavDropdown.Item href={liens.fullyReviewed.link}>{titleize(liens.fullyReviewed.label)}</NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown title={`[${titleize("Misc")}]`} id="collasible-nav-dropdown">
            
              <NavDropdown.Item href={liens.categories.link}>{titleize(liens.categories.label)}</NavDropdown.Item>
              
              <NavDropdown.Item href={liens.classes.link}>{titleize(liens.classes.label)}</NavDropdown.Item>

              <NavDropdown.Item href={liens.groupes.link}>{titleize(liens.groupes.label)}</NavDropdown.Item>

              <NavDropdown.Item href={liens.authors.link}>{titleize(liens.authors.label)}</NavDropdown.Item>
            
            </NavDropdown>

          </Nav>
          <SearchForm />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>)
}

export default NavigationBar