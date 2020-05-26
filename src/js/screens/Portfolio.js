import React from "react";
import ReactDOM from "react-dom";
import ProjectList from "../components/DrupalObjects/ProjectList";
import { Container } from "react-bootstrap";

export default class Portfolio extends React.Component {
  render() {
    return (
      <Container style={{ minHeight: "45rem" }}>
        <div style={{ marginTop: "10rem" }}></div>
        <ProjectList />
      </Container>
    );
  }
}
