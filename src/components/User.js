import React, { Component } from 'react';

export class User extends Component {
  
  render() {
    let userView = "";
    if (this.props.user.firstName) {
      userView = <div>
      <h2>User Details:</h2>
      <div>
        <p>
          First Name: {this.props.user.firstName}
        </p>
        <p>  
          Last Name: {this.props.user.lastName}
        </p>
      </div>
    </div>
    }
    return (
      userView
    )
  }
}
