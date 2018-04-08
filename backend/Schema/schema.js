const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
productName:{
    type:String
},
brand:{
    type:String
},
category:{
    type:String
},
subcategory:{
    type:String
},
description:{
    type:String
},
price:{
    type:Number
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
/*module.exports.getProductByCategory = function(category,callback){
    
}
module.exports.getProductBySubCategory = function(subcategory,callback){
    
}
module.exports.getProductByBrand = function(brand,callback){
    
}*/
