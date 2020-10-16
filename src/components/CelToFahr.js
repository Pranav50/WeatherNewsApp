import React, { Component } from "react";
import "./CelToFahr.css";

class CelToFahr extends Component {
  state = {
    celOn: false,
    unit: "F"
  };

  changeUnit = () => {
    this.setState({ celOn: !this.state.celOn });
    const newUnit = this.state.celOn === false ? "F" : "C";
    this.props.onUnitChange(newUnit);
  };

  render() {
    return (
      <div className="toggle-button-cover">
        <div className="button r" id="button-3">
          <input
            type="checkbox"
            className="checkbox"
            onClick={this.changeUnit}
          />
          <div className="knobs"></div>
          <div className="layer"></div>
        </div>
      </div>
    );
  }
}

export default CelToFahr;
