const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var http = require('http');

require('dotenv').config();

const app = express();
const port = process.env.PORT||5000;

app.use(cors());
app.use(express.json());
var server = http.createServer(app);

const uri = process.env.ATLAST_URI;

mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true})
.catch(err=>console.log(err));

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDb database connection established successfully");
});
const exercisesRouter = require('./routes/excercices');
const userRoute = require('./routes/user');

app.use('/exercises',exercisesRouter);
app.use('/users',userRoute);
app.get('/', function (req, res) {
    res.send('hello world')
  })

server.listen(port,()=>{
    console.log(port)
})