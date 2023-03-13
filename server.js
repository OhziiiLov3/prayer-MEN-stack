const express = require("express")
const app = express()

const PORT = 4000;

/* MiddleWare */

//  setup ejs 
app.set("view engine","ejs")
//  connect css files and js files 
app.use(express.static('public'))
// Parse data to work with ejs (req.body)
app.use(express.urlencoded({ extended: false }));







// Home Route 
app.get('/', (req,res)=>{
    res.render('home.ejs')
})










app.listen(PORT, ()=>{
    console.log(`You are Listening on port: ${PORT}`)
})
