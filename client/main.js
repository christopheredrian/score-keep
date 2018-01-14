import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from '../imports/api/players';
import {Tracker} from 'meteor/tracker';
import App from '../imports/ui/App'

// NOTE: Runs when the DOM is ready
Meteor.startup(() => {
  // NOTE: Call Tracker.autorun
  // Runs when a the DDP finishes
  Tracker.autorun(() => {
    // create var called players = fetch query
    // render players to the screen
    let players = Players.find({}, { sort: { score: -1 } }).fetch();
    let title = "Score Keep";
    let name = "cee";
    ReactDOM.render(<App title={title} players={players}/>, document.getElementById("app"));

  });
});
