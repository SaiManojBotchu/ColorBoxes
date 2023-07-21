// wrote for practice
import React, { Component } from 'react';
import { choice } from './helper';
import './Box.css';

class Box1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.colors)
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    let newColor;
    do {
      newColor = choice(this.props.colors);
    } while(newColor === this.state.color);
    this.setState({ color: newColor });
  }

  render() {
    let style = { backgroundColor: this.state.color };
    return <div className='Box' style={style} onClick={this.changeColor}></div>;
  }
}

export default Box1;
