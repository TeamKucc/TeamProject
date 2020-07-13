require('dotenv').config()
import express from 'express';
import bodyparser, { urlencoded } from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const {PORT,MONGO_URI} = process.env

mongoose.connect(MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true},
    err=>{
        if(!err){
            console.log('DB ON');
        }else{
            console.log('Error!:'+JSON.stringify(err,undefined,2))
        }
    }
)

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());


app.listen(PORT,()=>console.log('Server ON:'+PORT));

