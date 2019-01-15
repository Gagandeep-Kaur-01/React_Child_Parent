import React, { Component } from 'react';
import './App.css';

import Parent from './components/parentToChild/parent';

class App extends Component {
  state = {
      title:'click me'
    }

    hello =(newTitle) => {
      this.setState({title:newTitle});

    }
  render() {
    return (

      <div className="App">
        <header className="App-header">
        <h1>Welcome</h1>
        </header>
        <h2>Uffff !!! This React</h2>
        <Parent work={this.hello.bind(this, 'welcome')} title={this.state.title}/>
      </div>

    );
  }
}

export default App;
