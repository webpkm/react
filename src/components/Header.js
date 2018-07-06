import React, { Component } from 'react';
import { Menu } from "./Menu";
import { NavLink } from "react-router-dom";

export class Header extends Component {
  
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavLink to="/home" activeClassName="active" className="navbar-brand">ReactJS Basics</NavLink>
          </div>
          <Menu/>          
        </div>
      </nav>
    )
  }
}
