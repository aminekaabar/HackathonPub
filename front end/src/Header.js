import React from 'react';
import './navmenu.css';
import { Navbar,NavDropdown,FormControl,Button,Nav,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Module from './modal';



function Headers(){
    return(
        <header className="Docplanner-header">
            <a href="#">
            {/* <img src={Doclog} alt="logo" /> */}
            <h2>HackathonPub(LOGO)</h2>
            </a>
        {/* <Navmenu navItem={table}/> */}
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">HackathonPub</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/aboutus">About Us</Nav.Link>
      < Nav.Link href="">
      <Module />
      
      
      </Nav.Link>

     {/* <Link to='/sign-up'> */}
       < Nav.Link href="/sign-up">Sign up</Nav.Link>
       {/* </Link> */}
     
      <NavDropdown title="More" id="basic-nav-dropdown">

        <NavDropdown.Item href="http://www.google.com">List of sponsors</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Archive</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Behind the code</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Founders</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search a hackathon" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>
    </header>
    )
}
export default Headers;