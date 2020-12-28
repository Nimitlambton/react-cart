import React, { Component } from "react";

class AddScreen extends Component {
  constructor() {
    super();

    this.HandelNameValue = this.HandelNameValue.bind(this);
  }

  state = {
    name: "",
    value: 0,
  };

  HandelNameValue(event) {
    if (event.target.name === "name") {
      let str = "";
      str = event.target.value;

      this.setState({ name: str });
    } else {
      let str = "";
      str = event.target.value;

      this.setState({ value: str });
    }
  }

  render() {
    return (
      <React.Fragment>
        <input
          type="textfield"
          placeholder="enter name"
          className="m-2"
          onChange={this.HandelNameValue}
          name="name"
        />
        <input
          type="number"
          placeholder="enter value"
          className="m-2"
          onChange={this.HandelNameValue}
          name="value"
        />
        <button
          className="btn-primary lg m-2"
          onClick={() => this.props.onAdd(this.state.value, this.state.name)}>
          Add
        </button>
      </React.Fragment>
    );
  }
}

export default AddScreen;
