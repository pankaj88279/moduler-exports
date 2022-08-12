
const express=require('express');
customerName =express.Router();
 
customerName.get('/get_customername',(req,res)=>{
  res.status(202).json({
    name:'pankaj',
    surname:'rathore',
  })
 })
  

 
 
 module.exports={customerName}
 