import React, { Component } from "react";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import "bulma/css/bulma.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Login />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Signup />
      </div>
    );
  }
}

export default App;
