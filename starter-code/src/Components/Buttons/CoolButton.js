import React, { Component } from "react";

let btnProps = {
  isActive: "is-active",
  isBlack: "is-black",
  isCentered: "is-centered",
  isDanger: "is-danger",
  isDark: "is-dark",
  isFocused: "is-focused",
  isGrouped: "is-grouped",
  isHovered: "is-hovered",
  isInfo: "is-info",
  isInverted: "is-inverted",
  isLarge: "is-large",
  isLight: "is-light",
  isLink: "is-link",
  isLoading: "is-loading",
  isMedium: "is-medium",
  isOutlined: "is-outlined",
  isPrimary: "is-primary",
  isRight: "is-right",
  isRounded: "is-rounded",
  isSelected: "is-selected",
  isSmall: "is-small",
  isStatic: "is-static",
  isSuccess: "is-success",
  isText: "is-text",
  isWarning: "is-warning",
  isWhite: "is-white"
};

class CoolButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  btnStyle = () => {
    let classes = "";
    for (let item in this.props) {
      if (btnProps.hasOwnProperty(item)) {
        classes += ` ${btnProps[item]}`;
      }
    }
    return classes;
  };
  render() {
    console.log(this.props);
    return (
      <div className="container column is-11">
        <button className={this.props.className + this.btnStyle()}>
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default CoolButton;
