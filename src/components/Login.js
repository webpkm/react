import React, { Component } from 'react';

export class Login extends Component {
  
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Username"/>
          </div>
          <br />
          <div className="input">
            <input type="password" className="form-control" placeholder="Password"/>
          </div>
          <br/>
          <button className="btn btn-primary btn-block">Login</button>
        </div>
      </div>
    )
  }
}
