
import mongoose from "mongoose"
import User from "./Register.js"
import Cors from "cors";
import express from "express"
//App configuration
const app=express();
const port=process.env.PORT||8000
const connection_url="mongodb+srv://akshay:akshay@cluster0.kleau.mongodb.net/user?retryWrites=true&w=majority";

//Middleware 
app.use(express.json());
app.use(Cors());

//Db config
mongoose.connect(connection_url,{
                useNewUrlParser:true,
                useCreateIndex:true,
                useUnifiedTopology:true

}).then(res=>{
    console.log("DB Connected!")
}).catch(err => {
console.log(Error, err.message);
})

//Api endpoints 

app.get("/",(req,res)=>res.status(200).send("Hello clever programmer!!!"));
app.post("/Register/user",(req,res)=>{
    const Adduser=req.body;     
    User.create(Adduser,(err,data)=>{
        if(err)
        {
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })                               
})
app.get('/', (req, res) => {
    res.redirect('/Register/user');
})
app.get("/Register/user",(req,res)=>{
    // eslint-disable-next-line array-callback-return
    User.find((err,data)=>{
        if(err)
        {
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})
app.get("/getuser",(req,res)=>{
    // eslint-disable-next-line array-callback-return
    User.find((err,data)=>{
        if(err)
        {
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port,()=>console.log(`listening on localhost:${port}`));