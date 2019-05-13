import React, { Component } from "react";

class FormField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="field column is-3">
          <label className="label">{this.props.label}</label>
          <div className="control">
            <input
              className="input"
              type={this.props.type}
              placeholder={this.props.placeholder}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FormField;
