import React, { Component } from 'react';

export class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      username: props.username
    }
  }
  onHandleChnage(event) {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Username" value={this.state.username} onChange={(event) => this.onHandleChnage(event)}/>
          </div>
          <br />
          <div className="input">
            <input type="password" className="form-control" placeholder="Password"/>
          </div>
          <br/>
          <button className="btn btn-primary btn-block">Login</button>

          <p> Your username: {this.state.username}</p>
        </div>
      </div>
    )
  }
}
