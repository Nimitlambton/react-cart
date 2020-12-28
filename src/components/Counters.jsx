import React, { Component } from "react";

import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button className="btn-primary" onClick={this.props.onReset}>
          Reset
        </button>

        {this.props.Counters.map((cel) => (
          <ul key={cel.id}>
            <li>
              <Counter
                key={cel.id}
                value={cel.value}
                name={cel.name}
                id={cel.id}
                counter={cel}
                onIncrement={this.props.onIncrement}
                onDelete={this.props.onDelete}></Counter>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}
export default Counters;
