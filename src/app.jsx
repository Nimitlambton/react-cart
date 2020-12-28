import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Counters from "./components/Counters";
import ADD from "./components/addScreen";
class App extends Component {
  state = {
    Counters: [
      { name: "RAM", value: 0, id: 0 },
      { name: "PC", value: 0, id: 1 },
      { name: "DESKTOP", value: 0, id: 2 },
    ],
  };

  constructor() {
    super();
    this.handelDelete = this.handelDelete.bind(this);
    this.handelReset = this.handelReset.bind(this);
    this.handelIncrement = this.handelIncrement.bind(this);
    this.handelAdd = this.handelAdd.bind(this);
  }

  handelAdd(value, name) {
    let newcounter = [...this.state.Counters];

    newcounter.push({ name: name, value: value, id: newcounter.length });

    this.setState({ Counters: newcounter });
  }

  handelDelete(pp) {
    console.log("impressed" + pp);

    const result = this.state.Counters.filter((res) => res.id !== pp);

    console.log(result);

    this.setState({ Counters: result });
  }

  handelReset() {
    console.log("hey hey");
    var newarray = [];
    newarray = this.state.Counters;

    for (let index = 0; index < newarray.length; index++) {
      newarray[index].value = 0;
    }

    console.log(newarray);
    this.setState({ Counters: newarray });
  }

  handelIncrement(counter) {
    // console.log(counter.value);
    const counters = [...this.state.Counters]; //copy of counter
    const index = counters.indexOf(counter); //to find inex of given Counters
    counters[index].value++;
    console.log(counters);
    this.setState({ Counters: counters });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar total={this.state.Counters.filter((c) => (c.value > 0).length)}>
          >
        </Navbar>
        <main className="container">
          <Counters
            Counters={this.state.Counters}
            onIncrement={this.handelIncrement}
            onDelete={this.handelDelete}
            onReset={this.handelReset}></Counters>

          <ADD onAdd={this.handelAdd}></ADD>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
