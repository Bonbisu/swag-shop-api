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
    product.save(function(err, savedProduct){
        if (err) {
            res.status(500).send({error:"Could not save product"}); 
        } else {
            res.status(200).send(savedProduct); // for status 200 we can ommit .status
            // also, we can replace .send to .json
        }
    });
});

app.get('/product', function(req,res) {
    
    Product.find({}, function(err, products) {
       if (err) {
           res.status(500).send({error:"Could not fetch products"});
       } else {
           res.send(products);
       }
    });
});

app.listen(3000, function() {
    console.log("Swag Shop API running on port 3000...");
});

// mongodb://ademir:1ruthe@ds139715.mlab.com:39715/m-transactions

// mongodb://localhost/swagshop