import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import W0rdForm from './W0rdForm';
import W0rdList from './W0rdList';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} subtitle=""/>
        <div className="wrapper">
          <W0rdForm/>
          <W0rdList w0rds={this.props.w0rds}/> {/*using w0rds from db*/}
        </div>
      </div>
    );
  }
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  w0rds: PropTypes.array.isRequired
};
