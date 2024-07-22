const express = require("express");
const app = express();
const port = 3000;

const userRouter = require('./routes/routeUser')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(userRouter)

app.listen(port, () => {
  console.log("server up and running in port 3000");
});
