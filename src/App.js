import React, { Component } from 'react';
import logo from './logo.svg';
import scss from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={scss['App']}>
        <header className={scss['App-header']}>
          <img src={logo} className={scss['App-logo']} alt="logo" />
          <h1 className={scss['App-title']}>Welcome to React</h1>
        </header>
        <p className={scss['App-intro']}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
