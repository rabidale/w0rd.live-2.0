import React from 'react';
import { CirclePicker } from 'react-color';

export default class Component extends React.Component {

  handleChange(color, event) {
    // color = {
    //   hex: '#333',
    //   rgb: {
    //     r: 51,
    //     g: 51,
    //     b: 51,
    //     a: 1,
    //   },
    //   hsl: {
    //     h: 0,
    //     s: 0,
    //     l: .20,
    //     a: 1,
    //   },
    // }
  }

  render() {
    return <CirclePicker onChange={ this.handleChange } />;
  }
}
