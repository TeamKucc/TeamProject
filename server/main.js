require('dotenv').config()
import express from 'express';
import asyncify from 'express-asyncify'
import bodyparser, { urlencoded } from 'body-parser';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser'
import api from './api/index'

const app = express();
const { PORT, MONGO_URI } = process.env

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (!err) {
            console.log('DB ON');
        } else {
            console.log('Error!:' + JSON.stringify(err, undefined, 2))
        }
    }
)

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json());
app.use(cookieParser())

app.use('/api', api);


app.listen(PORT, () => console.log('Server ON:' + PORT));

