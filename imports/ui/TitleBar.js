import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subtitle) {
      return <div>{this.props.subtitle}</div>
    }
  }
  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <div>{this.props.title}</div>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

TitleBar.defaultProps = {
  // title: 'w0rd.love'
};

//For PropTypes:
// from Section 4 Lecture 29 of Meteor/React Course:
//  Hi,
// I was using meteor 1.6.1 and react 15.6
//
// you should run:
//
// npm install --save prop-types
//
// and then import in your component.js file:
//
// import PropTypes from 'prop-types';
//
// and then the new syntax is
//
// Component.propTypes = {
//   text: PropTypes.string.isRequired,
// };
// I hope it helps.
