const express = require("express")
const app = express()

const prayersController = require("./controllers/prayers")


/* MiddleWare */

//  setup ejs 
app.set("view engine","ejs")
//  connect css files and js files 
app.use(express.static('public'))
// Parse data to work with ejs (req.body)
app.use(express.urlencoded({ extended: false }));

const PORT = 4000;






// Home Route 
app.get('/', (req,res)=>{
    res.render('home.ejs')
})


// Controller-> Router 

app.use('/prayers', prayersController)



// All Error Handleing Route
app.get("/*", (req, res) => {
  res.render("404.ejs");
});





app.listen(PORT, ()=>{
    console.log(`You are Listening on port: ${PORT}`)
})
