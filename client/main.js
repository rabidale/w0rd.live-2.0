import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { W0rds } from './../imports/api/w0rds';
import App from './../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let w0rds = W0rds.find().fetch().reverse(); //THIS IS HOW INFO IS GETTING FROM DB
    //if you want to sort by score Section 4 Lecture 36.
    // put {}, {key: 1/-1} inside find() call
    let title = 'w0rd.live';
    ReactDOM.render(<App title={title} w0rds={w0rds}/>, document.getElementById('app'));
  });
});
