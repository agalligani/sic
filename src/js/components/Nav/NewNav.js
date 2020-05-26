import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { Container, Row, Col, NavLink } from "react-bootstrap";

export default class Nav extends Component {
  render() {
    return (
      <Container>
        <header className="Nav">
          <div className="nav-header">
            <h1>TERRAT</h1>
            <h3>interiors</h3>
            <ul className="nav-links">
              <NavLink className="nav-link one">HOME</NavLink>
              <NavLink className="nav-link two">PHOTOS</NavLink>
              <NavLink className="nav-link four">PRESS</NavLink>
              <NavLink className="nav-link three">CONTACT</NavLink>
            </ul>
          </div>
        </header>
      </Container>
    );
  }
}
