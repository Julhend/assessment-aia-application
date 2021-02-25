import React from "react";
import "../App.css";
import * as ReactBootStrap from "react-bootstrap";
import { Button, FormGroup, Input } from 'reactstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xl"
        bg="primary"
        variant="dark"
        className="nava"
      >
        <ReactBootStrap.Navbar.Brand href="#home">
          Assessment AIA
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <Link to="/Feeds">
              <ReactBootStrap.Nav.Link href="#feeds">
                Feeds
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/Feeds2">
              <ReactBootStrap.Nav.Link href="#feeds2">
                Feeds2
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/Feedss">
              <ReactBootStrap.Nav.Link href="#feedss">
                Feedss
              </ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input type="search" name="search" id="search" placeholder="search" />
            </FormGroup>
            <Button type="submit">Search</Button>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default NavBar;
