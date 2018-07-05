import React, { Component } from 'react';

export class Home extends Component {
  constructor() {
    super();
  }

  render() {
    let contant = "";
    if (true) {
      contant = <p>Home</p>;
    }
    return (
      <div>
        <div> { contant } </div>
        <p> { 2+2 }</p>
        <button className="btn btn-primary">Click Me</button>
      </div>
    )
  }
}
