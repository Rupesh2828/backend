require('dotenv').config()

const express = require("express");

const app = express();

const port = process.env.PORT || 6000;

// const json = {
//     name:"start"
// }

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res)=> {
    res.send("rupeshjadhavdotcom")

});

app.get("/login", (req, res)=> {
    res.send('<h1> This is Login page </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
