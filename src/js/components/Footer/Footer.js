import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = _ => (
  <footer className="page-footer font-small pt-4">
    <Container>
      <Row>
        <Col className="col-md-12">
          <div className="footer-copyright text-right py-3">
            <span className="copyright">© 2020 Copyright:</span>
            <a href="http://terratinteriors.com/"> terratinteriors.com</a>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
