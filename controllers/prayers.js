const express = require("express")
const router = express.Router()





router.get('/',(req,res)=>{
    res.render('prayers/index.ejs')
})



router.get('/new',(req,res)=>{
    res.render("prayers/new.ejs")
})






module.exports = router;
