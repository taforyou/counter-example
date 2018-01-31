import React, { Component } from 'react';

export class MyButton extends Component {

  constructor(props) {
    super(props);
    
    console.log(props);
    
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.onTest(this.props.test1)}> {this.props.test1} </button>
      </div>
    );
  }
}
