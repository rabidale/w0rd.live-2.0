import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import Masonry from 'react-mason';

import W0rd from './W0rd';

export default class W0rdList extends React.Component {
  renderW0rds() {
    if (this.props.w0rds.length === 0) {
      return (
        <div className="w0rd">
          <p>add some w0rds!</p>
        </div>
      );
    } else {
      return this.props.w0rds.map((w0rd) => {
        return <W0rd key={w0rd._id} w0rd={w0rd}/>
      });
    }
  }
  render() {
    return(
      <div>
          <div className="wrapper-w0rd" >
            {this.renderW0rds()}
          </div>
      </div>
    )
  }
};

//This is just to make sure in the future that you're
// still using an array of data (objects in this case)
W0rdList.propTypes = {
  w0rds: PropTypes.array.isRequired
}

// OLD used in stuff above changed function to method (section 4 Lecture 33)
//This is just a function, it only gets DB stuff when executed
// const renderW0rds = (w0rdList) => {
//   return w0rdList.map((w0rd) => {
//     return <W0rd key={w0rd._id} w0rd={w0rd}/>
//   });
// };
