import React, { Component } from 'react';
import Box1 from './Box1';
import './BoxContainer.css';

class BoxContainer extends Component {
  static defaultProps = {
    allColors: ['purple', 'violet', 'pink'],
    numBoxes: 15
  };

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box1 colors={this.props.allColors} />
    ));
    return <div className='BoxContainer'>{boxes}</div>;
  }
}

export default BoxContainer;
