require("dotenv").config()
const express = require("express") 
const mongoose = require("mongoose") 
const bodyParser = require("body-parser")
const ejs = require("ejs")


const app = express()


app.use(bodyParser.urlencoded({
  extended :true
}))
  
app.use(express.static("public"))
app.set('view engine' , 'ejs')
 

const products_routes = require("./routes/products")
app.use("/api/products" , products_routes) 
const dataconnect = require("./db/connect")


const ArticleSchema = mongoose.Schema({
  title : String,
  content : String
}) 

const Article = mongoose.model("Artical" , ArticleSchema)


app.get('/article' , (req,res)=>{

    Article.find().then((data) => {
      res.send(data);
    })
})



app.post("/article", (req,res)=>{
     
     const newArticle = new Article({
      title :req.body.title,
      content : req.body.content
     })
     newArticle.save(); 
})



app.delete("/article", (req,res)=>{

  Article.deleteMany().then((result) => { 
    console.log("HEY ALL DELETED"); 
});
})



const start = async() =>{
  try{
    await dataconnect(process.env.Mongodb_url);

    app.listen(3000, ()=>{
        console.log("Yes I Am Connect");
    })
  } catch(error){
    console.log(error); 
  }

}

start();