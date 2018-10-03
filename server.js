var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swagshop', {useNewUrlParser: true});

var Product = require('./model/product');
var WishList = require('./model/wishlist');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/product', function(req, res) {
    var product = new Product(); 
    // also can be wrote: new Product(req.body);
    // or: new Product({title:req.body.title,price:req.body.price});
    // instead of write inside the object.
    product.title = req.body.title;
    product.price = req.body.price;
    // the likes is default 0 because we create a new product
});

app.listen(3000, function() {
    console.log("Swag Shop API running on port 3000...");
});