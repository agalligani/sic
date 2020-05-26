import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";
import TextColumn from "../components/TextColumn/TextColumn";

import {
  homeIndex,
  mainphoto,
  homepage1,
  homepage2,
  homepage3
} from "../../assets/images/home/homeImages.js";
import { Container, Row, Col } from "react-bootstrap";

import { blurb1, blurb2, blurb3 } from "../../assets/blurbs/home.js";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Parallax
          blur={{ min: -15, max: 25 }}
          bgImage={mainphoto}
          bgImageAlt="Terrat Interiors"
          strength={200}
        >
          <div
            style={{
              position: "absolute",
              bottom: 30,
              right: 15,
              color: "#cccccc",
              backgroundColor: "rgb(30, 30, 30, 0.7)"
            }}
          >
            This is a work in progress. Project Tortor Tristique Cras Dolor
            Justo
          </div>
          <div style={{ height: "520px", width: "100%" }} />
        </Parallax>

        {/* ----- Home Segment 1 Start -----*/}

        <TextColumn columnAlignment={"left"}>
          {blurb1}
          <Parallax
            blur={{ min: -15, max: 25 }}
            bgImage={homepage1}
            bgImageAlt="Terrat Interiors"
            strength={200}
          >
            <div style={{ height: "340px" }} />
          </Parallax>
        </TextColumn>

        {/* ----- Home Segment 1 End -----*/}

        {/* ----- Home Segment 2 Start -----*/}

        <TextColumn columnAlignment={"right"}>
          {blurb2}
          <Parallax
            blur={{ min: -15, max: 25 }}
            bgImage={homepage2}
            bgImageAlt="Terrat Interiors"
            strength={200}
          >
            <div style={{ height: "340px" }} />
          </Parallax>
        </TextColumn>

        {/* ----- Home Segment 2 End -----*/}

        {/* ----- Home Segment 3 Start -----*/}

        <TextColumn columnAlignment={"left"}>
          {blurb3}
          <Parallax
            blur={{ min: -15, max: 25 }}
            bgImage={homepage3}
            bgImageAlt="Terrat Interiors"
            strength={200}
          >
            <div style={{ height: "340px" }} />
          </Parallax>
        </TextColumn>

        {/* ----- Home Segment 3 End -----*/}
      </div>
    );
  }
}
