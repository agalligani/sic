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

import OwlCarouselLoop from "../components/OwlCarousel/OwlCarouselLoop";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default class Projects extends Component {
  render() {
    return (
      <Container>
        <Row className="project-row">
          <Col className="col col-md-10">
            <h1>Mid-Century Modern Cottage</h1>
            <p>
              Vestibulum id ligula porta felis euismod semper. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec
              ullamcorper nulla non metus auctor fringilla. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam.
            </p>
          </Col>
        </Row>
        <Row className="carousel-row">
          <Col className="col col-md-10">
            <OwlCarouselLoop />
          </Col>
        </Row>
        <Row className="project-row">
          <Col className="col col-md-10">
            <h1>Classic Beacon Hill Townhome</h1>
            <p>
              Vestibulum id ligula porta felis euismod semper. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec
              ullamcorper nulla non metus auctor fringilla. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam.
            </p>
          </Col>
        </Row>
        <Row className="carousel-row">
          <Col className="col col-md-10">
            <OwlCarouselLoop />
          </Col>
        </Row>
        <Row className="project-row">
          <Col className="col col-md-10">
            <h1>Contemporary Pied-à-Terre</h1>
            <p>
              Vestibulum id ligula porta felis euismod semper. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec
              ullamcorper nulla non metus auctor fringilla. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam.
            </p>
          </Col>
        </Row>
        <Row className="carousel-row">
          <Col className="col col-md-10">
            <OwlCarouselLoop />
          </Col>
        </Row>
      </Container>
    );
  }
}
