import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import events from "events";
import ajax from "../../../ajax";
import querystring from "querystring";
import { Row, Col } from "react-bootstrap";
import OwlCarouselLoop from "../../components/OwlCarousel/OwlCarouselLoop";
import parse from "html-react-parser";

// Create an emitter object so that we can do pub/sub
const emitter = new events.EventEmitter();

export default class ProjectList extends React.Component {
  state = {
    nodes: []
  };

  componentWillMount() {
    emitter.addListener("NODE_UPDATED", this.refresh);
  }

  componentWillUnmount() {
    emitter.removeListener("NODE_UPDATED", this.refresh);
  }

  async componentDidMount() {
    await this.refresh();
  }

  async refresh() {
    // AJAX fetch server/node/rest?_format=json and setState with the response data
    try {
      const axios = await ajax(); // wait for an initialized axios object
      const response = await axios.get("/projects/rest?_format=json"); // wait for the POST AJAX request to complete
      if (response.data) {
        console.log("nodes", response.data);
        // setState will trigger repaint
        this.setState({ nodes: response.data });
      }
    } catch (e) {
      alert(e);
    }
  }

  render() {
    const deleteNode = async nid => {
      try {
        const axios = await ajax(); // wait for an initialized axios object
        const response = await axios.delete(`/node/${nid}`); // wait for the DELETE AJAX request to complete
        console.log("Node deleted", response);
        emitter.emit("NODE_UPDATED");
      } catch (e) {
        alert(e);
      }
    };
    return (
      <Fragment>
        {this.state.nodes.map((node, index) => {
          return (
            <Fragment key={index}>
              <Row id={`node-${node.nid}`} key={index}>
                <Col className="col col-md-10">
                  <h1>{node.title}</h1>
                  <img src={node.field_main_image} />
                  {parse(node.body)}
                </Col>
              </Row>
              <Row className="carousel-row">
                <Col className="col col-md-10">
                  <OwlCarouselLoop
                    images={node.field_project_images.split(",")}
                  />
                </Col>
              </Row>
            </Fragment>
          );
        })}
      </Fragment>
    );
  }
}
