const express = require('express');
const router = express.Router();
const Product = require('../Schema/schema');


router.post('/addtocatalog',(req,res,next)=>{
    let product = new Product({
        productName:req.body.name,
        brand:req.body.brand,
        category:req.body.category,
        subcategory:req.body.subcategory,
        description:req.body.description,
        price:req.body.price
    });
    Product.addproduct(product,(err, product)=>{
        if(err){
            res.json({success:false,msg:'failed to add product'})
        }
        else{
            res.json({success:true,msg:'product added'})
        }

    })
});
router.get('/getallproducts',(req,res,next)=>{
    Product.getallproducts((err,products)=>{
        if(err){
            res.json({success:false,msg:'failed to add product'})
        }
        else{
            res.json({success:true,data:products})
        }  
    })
})

module.exports = router;