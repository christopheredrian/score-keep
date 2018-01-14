import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from '../imports/api/players';
import {Tracker} from 'meteor/tracker';
import TitleBar  from '../imports/ui/TitleBar';
import AddPlayer  from '../imports/ui/AddPlayer';
import Player from '../imports/ui/Player';

const renderPlayers = (playersList) => {
  return playersList.map(p => {
    return <Player key={p._id} player={p}/>
  });
};



// Runs when the DOM is ready
Meteor.startup(() => {
  // Call Tracker.autorun
  // Runs when a the DDP finishes
  Tracker.autorun(() => {
    // create var called players = fetch query
    // render players to the screen
    let players = Players.find().fetch();
    let title = "Score Keep";
    let name = "cee";
    let jsx = (<div>
      <TitleBar title={title} subtitle="Created by Cee Esp"/>
      <p>Hello {name}</p>
      <p>This is my second p</p>
      {renderPlayers(players)}
      <AddPlayer score={10} />
    </div>);
    ReactDOM.render(jsx, document.getElementById("app"));

  });
});
