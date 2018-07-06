import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Users extends Component {

  onUserChange(user) {
    this.props.userChange(user);
  }

  render() {
    return (
      <div>
        {this.props.children}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          { this.props.users.map((user, i) => 

          <tr key={i}>
            <td> {i+1} </td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td><button className="btn btn-success" onClick={() => this.onUserChange(user)}>View user</button></td>
          </tr>
          )}
          </tbody>
        </table>
      </div>
    )
  }
}


Users.propTypes = {
  users: PropTypes.array
};