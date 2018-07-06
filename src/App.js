import React, { Component } from 'react';
import './App.css';
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { Users } from "./components/Users";
import { User } from "./components/User";
import { Login } from './components/Login';

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
      <div className="container">
        <Header/>
        <div className="App">
          <Login username={this.state.username}/>
          <Menu/>
          <Home age={25}/>
          <Users
          users={users}
          userChange={this.userChange.bind(this)}
          ><h2>User list</h2></Users>
          <User user={this.state.user}/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
