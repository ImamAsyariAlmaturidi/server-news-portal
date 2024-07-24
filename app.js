const dotenv = require('dotenv')
dotenv.config()
const express = require("express");
const app = express();
const port = 3000;

const allRoute = require('./routes/routes')

app.use(express.urlencoded({ extended: false })); 
app.use(express.json());

app.use(allRoute)


module.exports = app