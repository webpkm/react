import React, { Component } from 'react';
import './App.css';
import Home from "./Home";
import Footer from "./Footer";
import Menu from "./Menu";
import Users from "./Users";
import User from "./User";

class App extends Component {
  render() {
    
    let user = {
      firstName: 'Prem',
      lastName: 'Kumar'
    }

    return (
      <div className="App">
      <Menu/>
      <Home/>
      <Users user={user}/>
      <User/>
      <Footer/>
      </div>
    );
  }
}

export default App;
