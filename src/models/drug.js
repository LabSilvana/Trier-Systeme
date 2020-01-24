const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drugSchema = new Schema({

});

module.exports = mongoose.model('drug', drugSchema)