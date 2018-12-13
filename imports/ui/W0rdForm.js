import React from 'react';
import Collapsible from 'react-collapsible';

import { CirclePicker } from 'react-color';
import { W0rds } from './../api/w0rds';



export default class W0rdForm extends React.Component {

  constructor () {
    super();
    this.state = {
      w0rd: 'enter a w0rd...',
      textColor: '#4a4a4a',
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
      <Collapsible trigger=<div>click here to add new w0rd</div> triggerWhenOpen=<div>X</div>>
        <div>
          <div className="form">
            <div style={previewStyle} className="form__preview">
              <p>{this.state.w0rd}</p>
            </div>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div>
                <label>w0rd</label>
                <input type="text" name="w0rd" maxLength="12" onChange={this.handleChange}/>
              </div>
              <div className="form__color">
                <label>Text Color</label>
                <CirclePicker
                  color={ this.state.textColor }
                  onChangeComplete={ this.handleChangeComplete }
                  circleSize={20}
                  colors ={["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#fff", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#2f3640"]}
                />
              </div>
              <div className="form__color">
                <label>Background Color</label>
                <CirclePicker
                  color={ this.state.backgroundColor }
                  onChangeComplete={ this.handleChangeCompleteTwo }
                  circleSize={20}
                  colors ={["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#fff", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#2f3640"]}

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
