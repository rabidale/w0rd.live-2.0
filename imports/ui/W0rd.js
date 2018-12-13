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
    if (this.props.w0rd.w0rdScore >= 0) {
      return (
        <div key={this.props.w0rd._id} style={divStyle} className="w0rd">
          <p className="w0rd__text" style={this.props.w0rd.fontStyle}>{this.props.w0rd.w0rd}</p>
          {/*<div className="w0rd__footer">
            <div onClick={() => {
              W0rds.update({_id: this.props.w0rd._id}, {$inc: {w0rdScore: 1}})
            }}>+1</div>
          </div>*/}
            {/*<div onClick={() => W0rds.remove({_id: this.props.w0rd._id})}>X</div>*/}
        </div>
      );
    };
    // if (this.props.w0rd.w0rdScore < 10) {
    //   return (
    //     <div key={this.props.w0rd._id} style={divStyle} className="w0rd--med">
    //       <p style={this.props.w0rd.fontStyle}>{this.props.w0rd.w0rd}</p>
    //         <button onClick={() => {
    //           W0rds.update({_id: this.props.w0rd._id}, {$inc: {w0rdScore: 1}})
    //         }}>+1</button>
    //         <button onClick={() => W0rds.remove({_id: this.props.w0rd._id})}>X</button>
    //     </div>
    //   );
    // };
    // if (this.props.w0rd.w0rdScore >= 10) {
    //   return (
    //     <div key={this.props.w0rd._id} style={divStyle} className="w0rd--lg">
    //       <p style={this.props.w0rd.fontStyle}>{this.props.w0rd.w0rd}</p>
    //         <button onClick={() => {
    //           W0rds.update({_id: this.props.w0rd._id}, {$inc: {w0rdScore: 1}})
    //         }}>+1</button>
    //         <button onClick={() => W0rds.remove({_id: this.props.w0rd._id})}>X</button>
    //     </div>
    //   );
    // };
  }
}

W0rd.propTypes = {
  w0rd: PropTypes.object.isRequired
};
