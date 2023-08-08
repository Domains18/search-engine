import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
const app = express();
dotenv.config();


app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));

import postRoutes from './routes/posts.js';

app.use('/posts', postRoutes);

app.use(cors());
//mongodb connection
const secure_url = process.env.mongo_db;
const PORT = process.env.PORT || 5000;

mongoose.connect(secure_url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
