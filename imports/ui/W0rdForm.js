import React from 'react';
import Collapsible from 'react-collapsible';

import { CirclePicker } from 'react-color';
import { W0rds } from './../api/w0rds';



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
          textColor: this.state.textColor,
          backgroundColor: this.state.backgroundColor,
          w0rdScore: 0
          /*have w0rd font/style here when added*/
      });
      event.target.w0rd.value = '';
    }
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleChangeComplete = (color) => {
    this.setState({ textColor: color.hex });
  };

  handleChangeCompleteTwo = (color) => {
    this.setState({ backgroundColor: color.hex });
  };

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
              <div>
                <label>w0rd</label>
                <input type="text" name="w0rd" maxLength="18" onChange={this.handleChange}/>
              </div>
              <div className="form__color">
                <label>Text Color</label>
                <CirclePicker
                  color={ this.state.textColor }
                  onChangeComplete={ this.handleChangeComplete }
                  circleSize={26}
                />
              </div>
              <div className="form__color">
                <label>Background Color</label>
                <CirclePicker
                  color={ this.state.backgroundColor }
                  onChangeComplete={ this.handleChangeCompleteTwo }
                  circleSize={26}
                />
              </div>
              <button>add w0rd</button>
            </form>
          </div>
        </div>
      </Collapsible>
    );
  }
}
