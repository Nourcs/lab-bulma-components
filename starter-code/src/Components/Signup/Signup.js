import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import FormField from "../FormField/FormField";
import CoolButton from "../Buttons/CoolButton";

class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar signup />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="e.g. **********"
        />

        <CoolButton className="button is-rounded is-small" isSuccess>
          Sign Up
        </CoolButton>
      </div>
    );
  }
}

export default Signup;
