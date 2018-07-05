import React, { Component } from 'react';

export class Users extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.children}
        <p>Users</p>
        <p> {JSON.stringify(this.props.users)}</p>
      </div>
    )
  }
}
