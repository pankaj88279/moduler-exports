console.log('okk')

const express=require('express');
const { adminRoute } = require('./routes/admin/admin');
const app=express();
require('dotenv').config();


 
 app.use(adminRoute)
 

let port=process.env.PORT || 2000
app.listen(port,()=>{
    console.log('thise server running on port',port)
})