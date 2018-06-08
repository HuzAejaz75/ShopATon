const mongoose = require('mongoose');
const cartSchema = mongoose.Schema({
username:{
    type:String
},
name:{
    type:String
},
brand:{
    type:String
},
quantity:{
    type:Number
},
availability:{
    type:Number
},
description:{
    type:String
},
price:{
    type:Number
},
status:{
    type:Boolean
}

});
const Cart = module.exports = mongoose.model('Cart',cartSchema);
/*
module.exports.getProductByName = function(name,callback){
    const query = {productName:name};
    Product.find(query,callback);
}*/
module.exports.addToCart = function(newItem,callback){
    newItem.save(callback); 
}
module.exports.getCart = function(callback){
    Cart.find(callback); 
}

module.exports.findItemByName = function(data,callback){
    var query = {username:data.username,name:data.name};
    Cart.findOne(query,callback);
}

module.exports.findandmodify = function(item,callback){
    
   
    var query = {username:item.username,name:item.name};
    Cart.findOneAndUpdate(query,{quantity:item.quantity,price:item.price,brand:item.brand},{upsert: true},callback);
}

module.exports.getallproducts = function(callback){
    Cart.find(callback);
}

module.exports.removeproducts = function(data,callback){
    var query = {username:data.username,name:data.name};
    Cart.findOneAndRemove(query,callback);
}


