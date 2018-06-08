const express = require('express');
const router = express.Router();
const Cart = require('../Schema/cartSchema');


router.post('/addtocart',(req,res,next)=>{
    let cart = new Cart({
        username:req.body.username,
        name:req.body.name,
        brand:req.body.brand,
        quantity:req.body.quantity,
        availability:req.body.availability,
        description:req.body.description,
        price:req.body.price,
        status:req.body.status
    });
    console.log(cart);
    var exists = false;
    Cart.findandmodify(cart,(err, cart)=>{
        if(err){
            res.json({success:false,msg:err})
        }
        else{
            res.json({success:true,data:cart});
        }
    });
   /* Cart.addToCart(cart,(err, product)=>{
        if(err){
            res.json({success:false,msg:'failed to add product'})
        }
        else{
            res.json({success:true,msg:'product added to cart'})
        }

    });*/
});

router.get('/getallproducts',(req,res,next)=>{
    Cart.getCart((err,items)=>{
        if(err){
            res.json({success:false,msg:'failed to add product'})
        }
        else{
            res.json({success:true,items:items})
        }  
    });
});
router.post('/removeproducts',(req,res,next)=>{
    let rcart = new Cart({
        username:req.body.username,
        name:req.body.name
    });
   Cart.removeproducts(rcart,(err,item)=>{
       if(err) {
        res.json({success:false,msg:'failed to add product'})
    }else{
        res.json({success:true,items:item})
    }
   });
});

module.exports = router;