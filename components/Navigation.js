import React from "react";
import logo from './logo.png'; // Tell webpack this JS file uses this image
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import styled from 'styled-components';
import icon_doc from './icon_doc.png';
import icon_home from './icon_home.png';
import icon_about from './icon_about.png';
import icon_profile from './icon_profile.png';
/*This component is used for setting the Navbar and Nav links*/

const Navigation=()=>{
  return(
    <Wrapper> 
      <div class="col"> 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <img src={logo} alt="Logo"  width="50" length="50"/>
          <Navbar.Brand href="/home" className="navbar-brand">SP22-16</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <div class="col-9">
              <Navbar.Collapse
                className="justify-content-end"
                id="responsive-navbar-nav"
              >
              <Nav.Link href="/">
              <img src={icon_home} alt="home" width="20" length="20"/>Home</Nav.Link>
              <Nav.Link href="/about">
              <img src={icon_about} alt="about" width="21" length="21"/>About</Nav.Link>

              <NavDropdown title = "USER" id="nav-dropdown">
              {/*<NavDropdown.Item href="/mylist">My List</NavDropdown.Item>*/}
                <NavDropdown.Item href="/Profile">
                  <img src={icon_profile} alt="profile" width="24" length="20"/> Profile </NavDropdown.Item>
                <NavDropdown.Item href="/Documents">
                <img src={icon_doc} alt="document" width="18" length="18"/> Documents </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
            </div>
        </Navbar>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div `
h1{
  text-align: center;
  font-size: 40px;
  text-underline-offset: 0.3em;
  text-shadow: white 2px 2px;
}

p{
  color:white;
  text-align: center;
  font-family:'Quantico';
}

.navbar-brand{
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
}

#nav-dropdown{
  color: white;
  font-weight: bold;
  background-color: black;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

#nav-dropdown:hover{
  background-color: #1888ff;
  border-radius: 4px;
  transition: all 0.2s ease-out;
}

nav-bar-right {
  float: right;
}
`;
export default Navigation;