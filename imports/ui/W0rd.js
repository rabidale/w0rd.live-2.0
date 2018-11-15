import React from 'react';
import PropTypes from 'prop-types';

import { W0rds } from './../api/w0rds';

export default class W0rd extends React.Component {
  render() {
    let divStyle = {
      color: this.props.w0rd.textColor,
      backgroundColor: this.props.w0rd.backgroundColor,
      fontStyle: this.props.w0rd.fontStyle
    };
    return (
      <div key={this.props.w0rd._id} style={divStyle} className="w0rd">
        <p style={this.props.w0rd.fontStyle}>{this.props.w0rd.w0rd}</p>
          {/*unused buttons
          <button onClick={() => {
            W0rds.update({_id: this.props.w0rd._id}, {$inc: {w0rdScore: 1}})
          }}>+1</button>
          <button onClick={() => W0rds.remove({_id: this.props.w0rd._id})}>X</button>*/}
      </div>
    );
  }
}

W0rd.propTypes = {
  w0rd: PropTypes.object.isRequired
};
