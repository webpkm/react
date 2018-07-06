import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export class Menu extends Component {
  
  render() {
    return (
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">      
        <ul className="nav navbar-nav navbar-right">
          <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
          <li><NavLink to="/users" activeClassName="active">Users</NavLink></li>
          <li><NavLink to="/courses" activeClassName="active">Courses</NavLink></li>
        </ul>
      </div>
    )
  }
}
