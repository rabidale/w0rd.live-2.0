import React from 'react';
import Collapsible from 'react-collapsible';

import { W0rds } from './../api/w0rds';
import Component from './CirclePicker';


export default class W0rdForm extends React.Component {

  constructor () {
    super();
    this.state = {
      w0rd: 'preview',
      textColor: '',
      backgroundColor: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let input = event.target.w0rd.value
    if(input){
      W0rds.insert({
          w0rd: input,
          textColor: event.target.textColor.value,
          backgroundColor: event.target.backgroundColor.value,
          w0rdScore: 0
          /*have w0rd font/style here when added*/
      });
      event.target.w0rd.value = '';
      event.target.textColor.value = '';
      event.target.backgroundColor.value = '';
    }
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render () {
    let previewStyle = {
      color: this.state.textColor,
      backgroundColor: this.state.backgroundColor,
    }
    return (
      //bind(this) is talked about in Section 4 Lecture 31
      // If you ever want to use props in the above .insert, that's when the bind function is necessary.
      // 'this' only works for the parent object, so when the form is inserted
      // into this component class, it loses it's 'this' to the the class
      <Collapsible trigger=<div>click here to add w0rd</div> triggerWhenOpen=<div>X</div>>
        <div>
          <div className="form">
            <div style={previewStyle} className="form__preview">
              <p>{this.state.w0rd}</p>
            </div>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label>w0rd</label>
              <input type="text" name="w0rd" onChange={this.handleChange}/>
              <label>Text Color</label>
              <input type="text" name="textColor" onChange={this.handleChange}/>
              <label>Background Color</label>
              <input type="text" name="backgroundColor" onChange={this.handleChange}/>
              <button>add w0rd</button>
            </form>
          </div>
        </div>
      </Collapsible>
    );
  }
}
