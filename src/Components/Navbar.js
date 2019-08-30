import React from "react";
import {Nav,Navbar,Form,FormControl,Button} from "react-bootstrap";

var navb = function(){
    return(
        <div>
  <Navbar bg="primary1" varient="light" expand="lg">
  <Navbar.Brand href="#home">E-Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default navb;