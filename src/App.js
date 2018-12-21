import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import House from './component/House/House';
import routes from './route'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header></Header>
          {routes}
         
       
      </div>
    );
  }
}

export default App;
