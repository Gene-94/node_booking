const express = require('express')
const morgan = require('morgan')
var mysql = require('mysql')
const actions = require("./actions")
app = express()

// middleware 
app.use(morgan("dev"))
app.use(express.json())
app.use(express.static('public'))

// connecting to database
var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "node_bookings",
    user: "root",
    password: "Data_Master369"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

// registering routes
app.get('/', (req, res) => {
    res.send("It's alive")
})

// rpc endpoint
app.post("/rpc", (req, res) => {
    const result = actions[req.body.action](req.body.payload)

    res.send(result)
})

//start server ( using nodemon )
app.listen(7531, () => console.log("Running on port 7531"))