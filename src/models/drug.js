const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drugSchema = new Schema({
    drug: String,
    substance: String,
    laboratory: String,
    presentation: String
});

module.exports = mongoose.model('drug', drugSchema)