import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import House from './component/House/House';
import Wizard from './component/Wizard/Wizard';
import Dashboard from './component/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Wizard></Wizard>
        <Dashboard>
          <House></House>
        </Dashboard>
      </div>
    );
  }
}

export default App;
