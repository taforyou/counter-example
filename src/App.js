import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      value : 99
    }
  }

  handleIncrement() {
    let _temp = this.state.value
    //_temp++
    _temp = _temp + 1;
    this.setState({value : _temp })
  }

  handleDecrement() {
    let _temp = this.state.value
    _temp--
    this.setState({value : _temp })
    
  }

  render() {
    return (
      <div className="App">
        <button type="button" onClick={() => this.handleIncrement()}>+</button>
          {this.state.value}
        <button type="button" onClick={() => this.handleDecrement()}>-</button>
      </div>
    );
  }
}

export default App;
