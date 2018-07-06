import React, { Component } from 'react';
import './App.css';
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Users } from "./components/Users";
import { User } from "./components/User";
import { Login } from './components/Login';
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      username: 'admin'
    };
  }

  userChange(newUser) {
    this.setState({
      user: newUser
    });
  }

  render() {
    let users = [{
      firstName: 'Prem',
      lastName: 'Kumar'
    },
    {
      firstName: 'Amit',
      lastName: 'Khatri'
    }];

    this.user = {
      firstName: 'Prem',
      lastName: 'Kumar'
    }    

    return (
      <BrowserRouter>
        <div>
          <Header/>
          <div className="container">
            <Route exact path={"/"} render={() => <Home age={25}/>}/>
            <Route exact path={"/home"} render={() => <Home age={25}/>}/>
            <Route exact path={"/login"} render={() => <Login username={this.state.username}/>}/>
            <Route exact path={"/user"} component={ User }/>
            <Route exact path={"/users"} render={() => <Users users={users}/>}/>
            <Route path={"/courses/"} render={() => <p>This is course</p>}/>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
