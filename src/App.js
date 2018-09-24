import React, { Component } from 'react';
import HeaderSection from './components/headerSection'
import Main from './components/main'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderSection />
          <Main/>
      </div>
    );
  }
}

export default App;
