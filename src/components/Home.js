import React, { Component } from 'react';
import PropTypes from "prop-types";

export class Home extends Component {
  constructor(props) {
    super();
    this.age = props.age;
    this.state = {
      age: props.initialAge,
      state: 0
    }
  }
  makeMeOlder() {
    this.age = this.age + 3;
    this.setState({
      state: 1
    });
  }


  render() {
    let contant = "";
    if (true) {
      contant = <p>Home</p>;
    }
    return (
      <div>
        <div> { contant } </div>
        <p> { this.age }</p>
        <button className="btn btn-primary">Click Me</button>
        <button onClick={this.makeMeOlder.bind(this)} className="btn btn-primary">Make me older</button>
        <button onClick={() => this.makeMeOlder()} className="btn btn-primary">Make me older</button>
      </div>
    )
  }
}

Home.propsType = {
  age: PropTypes.number,
  initialAge: PropTypes.number
}