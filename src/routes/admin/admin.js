const express=require('express')

const adminRoute=express.Router();

adminRoute.get('/admin',(req,res)=>{
    res.status(200).json({
        msg:'hello'
    })
})

 module.exports={adminRoute}