/* jshint esversion:6 */

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tweetr');

module.exports = mongoose;
