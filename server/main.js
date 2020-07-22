require('dotenv').config();
import express from 'express';

import mongoose from 'mongoose';
<<<<<<< HEAD
import cookieParser from 'cookie-parser'
import api from './api/index'
=======
import api from './api/index';
>>>>>>> 173e0f07595014dd2b535d0d6b2189995cf14739

const app = express();
const { PORT, MONGO_URI } = process.env;

mongoose.connect(
  MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log('DB ON');
    } else {
      console.log('Error!:' + JSON.stringify(err, undefined, 2));
    }
<<<<<<< HEAD
)

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json());
app.use(cookieParser())
=======
  },
);
>>>>>>> 173e0f07595014dd2b535d0d6b2189995cf14739

app.use('/api', api);

app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => console.log('Server ON:' + PORT));
