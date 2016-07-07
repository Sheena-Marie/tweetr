/*jshint esversion:6*/

const mongoose = require('../lib/db');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  text: String,
  createdAt: Date
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
