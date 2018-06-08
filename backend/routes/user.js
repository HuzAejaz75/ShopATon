const express = require('express');
const router = express.Router();
const User = require('../Schema/userSchema');


router.post('/addUser',(req,res,next)=>{
    let user = new User({
        email:req.body.email,
        password:req.body.password,
    });
    User.addUser(user,(err, product)=>{
        if(err){
            res.json({success:false,msg:'failed to add product'})
        }
        else{
            res.json({success:true,msg:'user added'})
        }

    });
});
router.post('/getallusers',(req,res,next)=>{
    let data = new User({
        email:req.body.email,
        password:req.body.password,
    });
    User.getAllUsers(data,(err,user)=>{
        if(err){
            res.json({success:false,msg:'failed to add product'})
        }
        else{
            res.json({success:true,data:user});
        }  
    })
})



module.exports = router;