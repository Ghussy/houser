import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
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
