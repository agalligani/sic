import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class TextColumn extends Component {
  state = {
    columnAlignment: "left" //default
  };

  componentWillReceiveProps() {
    let columnAlignment = this.props.columnAlignment;
    this.setState({ columnAlignment: columnAlignment });
  }

  _generateAlignedColumns() {
    return (
      <Fragment>
        <Col className="col-1 col-md-2"></Col>
        <Col className="col-10 col-md-6">
          {/* Cheesy */}
          <h1 id="myHeading">&nbsp;</h1>
          {this.props.children}
        </Col>
        <Col className="col-1 col-md-4"></Col>
      </Fragment>
    );
  }

  render() {
    return (
      <Container>
        <Row>{this._generateAlignedColumns()}</Row>
      </Container>
    );
  }
}
