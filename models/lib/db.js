/* jshint esversion:6 */

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhose/tweetr');

module.exports = mongoose;
