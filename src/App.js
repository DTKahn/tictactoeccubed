import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Component Imports
import Header from './Header';
import GameArea from './components/GameArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <GameArea />
      </div>
    );
  }
}

export default App;
