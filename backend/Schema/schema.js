const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({

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
const Product = module.exports = mongoose.model('Product',ProductSchema);

module.exports.getProductByName = function(name,callback){
    const query = {productName:name};
    Product.find(query,callback);
}
module.exports.addproduct = function(newProduct,callback){
    newProduct.save(callback); 
}

module.exports.getallproducts = function(callback){
    Product.find(callback);
}

/*module.exports.getProductByCategory = function(category,callback){
    
}
module.exports.getProductBySubCategory = function(subcategory,callback){
    
}
module.exports.getProductByBrand = function(brand,callback){
    
}*/
