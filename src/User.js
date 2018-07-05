import React, { Component } from 'react';

class User extends Component {
  constructor() {
    super();
  }

  render() {
    let user = {
      firstName: 'Prem',
      lastName: 'Kumar'
    }
    return (
      <div>
        <h2>User Details:</h2>
        <div>
          <p>
            First Name: {user.firstName}
          </p>
          <p>  
            Last Name: {user.lastName}
          </p>
        </div>
      </div>
    )
  }
}

export default User;