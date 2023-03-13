const express = require("express")
const app = express()

const PORT = 4000;

/* MiddleWare */









// Home Route 
app.get('/', (req,res)=>{
    res.render('home.ejs')
})










app.listen(PORT, ()=>{
    console.log(`You are Listening on port: ${PORT}`)
})
