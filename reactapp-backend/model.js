const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailSchema = new Schema({
    id: Number,
    productname: String,
    purpose: String,
    dose: String,
    instruction: String,
});

const Detail = mongoose.model('Detail', detailSchema);

module.exports = Detail;