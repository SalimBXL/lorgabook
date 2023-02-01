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
    home: {icon: "home", label: "home", link: "/"},
    articles: {icon: "article", label: "articles", link: "articles"},
    reviews: {icon: "reviews", label: "reviews", link: null}, 
    notYetReviewed: {icon: "rate_review", label: "not Yet Reviewed", link: "notReviewed", },
    notCompleted: {icon: "rate_review", label: "Not completed", link: "notCompleted"},
    fullyReviewed: {icon: "reviews", label: "Fully Reviewed", link: "fully"},
    misc: {icon: "storage", label: "misc", link: null}, 
    categories: {icon: "category", label: "Categories", link: "categories"},
    classes: {icon: "group_work", label: "Classes", link: "classes"},
    groupes: {icon: "group", label: "Groupes", link: "groupes"},
    authors: {icon: "person", label: "Authors", link: "authors"},
  };

  const menuItem = ({item, mobile, column}) => {
    const {icon, label} = item;
    const tooltip = titleize(label);
    const style = column === true 
      ? {
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "flex-start", 
          alignItems: "center", 
          margin: 0, 
          padding: 0,
        }
      : {
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "flex-start", 
        alignItems: "center", 
        margin: 0, 
        padding: 0,
      };
    const iconAlone = <div 
      title={tooltip}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>;
    const iconText = <div 
      title={tooltip} 
      style={style}>
        <span className="material-symbols-outlined">{icon}</span>
        <span style={{fontSize: "small"}}>{tooltip}</span>
      </div>;
    return mobile
      ? iconAlone
      : iconText;
  }

  return (<div>
    <Navbar 
      className='NavigationBar'
      collapseOnSelect 
      expand="md" 
      bg="dark" 
      variant="dark" 
      id='largeNavBar'
      style={{padding: 0, margin: 0}}
    >
      <Container>

        <Navbar.Brand href="/">{menuItem({item: liens.home, column: true})}</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto"></Nav>

          <Nav>

            <Nav.Link href={liens.articles.link}>{menuItem({item: liens.articles, column: true})}</Nav.Link>

            <NavDropdown 
              title={menuItem({item: liens.reviews, mobile: false, column: true})} 
              id="collasible-nav-dropdown"
            >

              <NavDropdown.Item 
                href={liens.notYetReviewed.link}>
                {menuItem({item: liens.notYetReviewed})}
              </NavDropdown.Item>

              <NavDropdown.Item href={liens.notCompleted.link}>{menuItem({item: liens.notCompleted})}</NavDropdown.Item>

              <NavDropdown.Divider />
              
              <NavDropdown.Item href={liens.fullyReviewed.link}>{menuItem({item: liens.fullyReviewed})}</NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown 
              title={menuItem({item: liens.misc, mobile: false, column: true})} 
              id="collasible-nav-dropdown"
            >
            
              <NavDropdown.Item href={liens.categories.link}>{menuItem({item: liens.categories})}</NavDropdown.Item>
              
              <NavDropdown.Item href={liens.classes.link}>{menuItem({item: liens.classes})}</NavDropdown.Item>

              <NavDropdown.Item href={liens.groupes.link}>{menuItem({item: liens.groupes})}</NavDropdown.Item>

              <NavDropdown.Item href={liens.authors.link}>{menuItem({item: liens.authors})}</NavDropdown.Item>
            
            </NavDropdown>

          </Nav>
          <SearchForm />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>)
}

export default NavigationBar