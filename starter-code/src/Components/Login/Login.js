import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import FormField from "../FormField/FormField";
import CoolButton from "../Buttons/CoolButton";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar login />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <CoolButton className="button is-rounded is-small" isPrimary>
          Login
        </CoolButton>
      </div>
    );
  }
}

export default Login;
