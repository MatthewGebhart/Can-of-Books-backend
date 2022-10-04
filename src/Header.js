import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/book" className="nav-link" style={{color: "white"}} >Home</Link></NavItem>
        <NavItem><Link to="/about" className="nav-link" style={{color: "white"}}>About</Link></NavItem>
      </Navbar>
    )
  }
}

export default Header;
