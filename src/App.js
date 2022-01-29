import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import Keyboard from './Keyboard';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="calculator">
          <Display />
          <Keyboard />
        </div>
      </div>
    );
  }
}

export default App;
