const dotenv = require('dotenv')
dotenv.config()
const express = require("express");
const app = express();

const allRoute = require('./routes/routes')

app.use(express.urlencoded({ extended: false })); 
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to News Portal')
})

app.use(allRoute)


module.exports = app