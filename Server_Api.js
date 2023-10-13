const express = require('express')
let app = express()
const Server= require("./Logic_Data")
const mongoose = require("mongoose");
var parser = require("body-parser");
const dotenv = require("dotenv").config();
app.use(parser.json());
const cors = require('cors');
app.use(cors());
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("hosting MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });


  app.get('/RegularFieldWork-Get', (req, res) => {
    Server.FieldworkGet(req, res, () => { })
})

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})