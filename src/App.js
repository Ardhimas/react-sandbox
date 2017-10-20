import React, { Component } from 'react';
import {
  AccessibleFakeButton,
  Menu,
} from 'react-md';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const opener = (
      <AccessibleFakeButton>
        Hi
      </AccessibleFakeButton>
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Menu
          className="header-dropdown"
          toggle={opener}
          visible={true}
        >
          <div>hi</div>
        </Menu>
      </div>
    );
  }
}

export default App;
