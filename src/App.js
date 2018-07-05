import React, { Component } from 'react';
import './App.css';
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { Users } from "./components/Users";
import { User } from "./components/User";

class App extends Component {
  render() {
    let users = [{
      firstName: 'Prem',
      lastName: 'Kumar'
    },
    {
      firstName: 'Amit',
      lastName: 'Khatri'
    }];

    let user = {
      firstName: 'Prem',
      lastName: 'Kumar'
    }

    return (
      <div className="container">
        <Header/>
        <div className="App">
          <Menu/>
          <Home/>
          <Users users={users}><h2>User list</h2></Users>
          <User user={user}/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
