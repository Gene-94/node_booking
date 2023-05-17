const express = require('express')
const morgan = require('morgan')
var mysql = require('mysql')
const actions = require("./actions")
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
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
app.post("/rpc", async (req, res) => {
    const result = await actions[req.body.action](req.body.payload)
    console.log(result)
    res.send(result)
})

// rest endpoints
app.get("/offices", async (req, res) => {
  const offices = await prisma.office.findMany().catch(e => {
    res.sendStatus(500)
  })
  await prisma.$disconnect()
  if(offices.length >0) res.send(offices)
  else res.sendStatus(404)
})

app.get("/offices/office/:id", async (req , res) => {
  const officeId =  Number(req.params.id) ;
  const office = await prisma.office.findUnique({
    where:{
      id:officeId
    }
  }).catch(e => {
    res.sendStatus(500)
  })
  await prisma.$disconnect()
  if(office)
  res.send(office)
  else
  res.sendStatus(404)
})

app.post("/offices/office", async (req, res) => {
  const newOffice = await prisma.office.create({
    data:{
      name: req.body.name,
      type: req.body.type
    }
  }).catch(e => {
    res.sendStatus(500)
  })
  await prisma.$disconnect()
  res.send(newOffice)
})

app.delete("/offices/ofice/:id",  async (req,res) => await prisma.office.delete({where:{id: req.params.id}}))

//start server ( using nodemon )
app.listen(7531, () => console.log("Running on port 7531"))