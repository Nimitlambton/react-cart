import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class Counter extends Component {
  //     state = {
  //     Count: this.props.value,
  //   };

  constructor(props) {
    super(props);

    //this.handelIncrement = this.handelIncrement.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <span> {this.props.name} </span>
          <span className={this.getBadgeType()}> {this.displayCount()}</span>
          <button
            className="  btn-sm btn-primary m-2 "
            onClick={() => this.props.onIncrement(this.props.counter)}>
            Increment
          </button>
          <button
            className="btn-danger "
            onClick={() => this.props.onDelete(this.props.id)}>
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }

  displayCount = () => {
    const value = this.props.value;

    return value === 0 ? " zero" : value;
  };

  getBadgeType() {
    const value = this.props.value;

    return value === 0 ? "badge-warning" : "badge-primary";
  }
}

export default Counter;
