'use strict';
var mongoose        = require('mongoose');
var Schema          = mongoose.Schema;

var ItemSchema      = new Schema({
    id : Number,
    title: String,
    img: String,
    group: String,
}
)
module.exports = mongoose.model('Item', ItemSchema);