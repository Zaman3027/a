const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT||5000;

app.use(cors());
app.use(express.json);

const uri = process.env.ATLAST_URI;

mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDb database connection established successfully");
})
const exercisesRouter = require('./routes/excercices');
const userRoute = require('./routes/user');

app.use('/exercises',exercisesRouter);
app.use('/users',userRoute);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})