

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');

var cors = require('cors');
var passport = require('passport');
var app = express();
const products = require('./routes/products');
const shoppingcart = require('./routes/shoppingCart');
const user = require('./routes/user');
const mongoose = require('mongoose');
const port =process.env.PORT || 8080;
const config = require('./model/model');

mongoose.connect(config.database);
mongoose.connection.on('connected',()=>{
    console.log('connected to database '+ config.database);
});
mongoose.connection.on('error',()=>{
    console.log("error in database");
});

app.use(cors());

app.use(bodyParser.json());

app.use('/products',products);
app.use('/cart',shoppingcart);
app.use('/user',user);
app.use(express.static(path.join(__dirname,'../frontend')));

//index route
 app.get('/',(req,res)=>{
     res.send("invalid endpoint");
 })
app.listen(port,()=>{
    console.log("server has been started on port "+port);
});