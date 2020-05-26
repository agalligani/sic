import React, { Component, Fragment } from "react";

export default class ContactForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    message: ""
  };

  render() {
    return (
      <Fragment>
        <div>Contact</div>
      </Fragment>
    );
  }
}
