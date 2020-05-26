import React from "react";
import ReactDOM from "react-dom";
import events from "events";
// import ajax from "../../../ajaxLogin";
import axios from "axios";
import querystring from "querystring";

// Create an emitter object so that we can do pub/sub
const emitter = new events.EventEmitter();

const LoginForm = () => {
  const data = {};
  const handleSubmit = async e => {
    e.preventDefault();
    var node = {
      user: [
        {
          value: data.user,
          format: "plain_text"
        }
      ],
      pw: [
        {
          value: data.pw,
          format: "plain_text"
        }
      ]
    };
    const url = "http://admin.terratinteriors.com" + "/user/login";
    try {
      let res = await axios.post(url, {
        headers: { "Content-Type": "application/json" },
        data: {
          name: "agalligani",
          pass: "CowFlop#123"
        },
        params: { _format: "json" } // add these query params to every request
      });
      console.log("Login attempt response", res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e, propName) => {
    data[propName] = e.target.value;
  };

  return (
    <div>
      <h4>Login</h4>
      <form onSubmit={handleSubmit}>
        <label>User Id</label>
        <br />
        <input type="text" onChange={e => handleChange(e, "user")}></input>
        <br />
        <label>Password</label>
        <br />
        <textarea onChange={e => handleChange(e, "pw")}></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
