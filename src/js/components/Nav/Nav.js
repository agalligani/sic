import React, { Component } from "react";
import {
  Alert,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default class MainNav extends Component {
  state = { navBarClass: "navbar-area" };
  componentWillReceiveProps() {
    this.setState({ navBarClass: this.props.navBarClass });
  }

  render() {
    return (
      <div className={`sticky-wrapper ${this.state.navBarClass}`}>
        <Navbar expand="lg" className={"sticky-wrapper"}>
          <Navbar.Brand href="#home">
            <span className="logo1">TERRAT</span>
            <span className="logo2">interiors</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon="bars" focusable="true" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-links">
              <Nav.Link as={Link} to="/">
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                ABOUT
              </Nav.Link>
              <Nav.Link as={Link} to="/projects">
                PROJECTS
              </Nav.Link>
              <Nav.Link as={Link} to="/press">
                PRESS
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
