import React, { Component } from 'react';

import './App.css';
import {MyButton} from './MyButton';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      value : 99
    }

    this.handleTest = this.handleTest.bind(this);
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

  handleTest(value) {
    console.log(value);
  }

  render() {
    return (
      <div className="App">
        <button type="button" onClick={() => this.handleIncrement()}>+</button>
          {this.state.value}
        <button type="button" onClick={() => this.handleDecrement()}>-</button>
        <MyButton onTest={this.handleTest} test1={'1'}/>
      </div>
    );
  }
}

export default App;
