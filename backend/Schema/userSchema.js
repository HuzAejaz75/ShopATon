const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({

email:{
    type:String
},
password:{
    type:String
}
});
const User = module.exports = mongoose.model('User',UserSchema);

module.exports.getAllUsers = function(data,callback){
    const query = {email:data.email,password:data.password};
    User.find(query,callback);
}
module.exports.addUser = function(newUser,callback){
    newUser.save(callback); 
}



/*module.exports.getProductByCategory = function(category,callback){
    
}
module.exports.getProductBySubCategory = function(subcategory,callback){
    
}
module.exports.getProductByBrand = function(brand,callback){
    
}*/
