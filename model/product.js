var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var product = new Schema({
    title: String,
    price: Number,
    likes: {type: Number, default: 0}
    // the likes is default 0 because we create a new product
});

module.exports = mongoose.model('Product', product);