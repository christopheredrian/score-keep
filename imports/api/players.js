import {Mongo} from 'meteor/mongo';
 // NOTE: Export to make it available outside
 // This will create a "Players" a mongo collection instance both for the
 // front and the back-end 
export const Players = new Mongo.Collection('players');
