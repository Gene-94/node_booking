//const express = require('express');
import express, {Request, Response, NextFunction} from 'express'
const morgan = require('morgan')
const actions = require("./actions")
//const { PrismaClient } = require('@prisma/client')
import { Office, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
const app = express()

// middleware 
app.use(morgan("dev"))
app.use(express.json())
app.use(express.static('public'))


// registering routes
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send("It's alive")
})

// rpc endpoint
app.post("/rpc", async (req: Request, res: Response, next: NextFunction) => {
    const result = await actions[req.body.action](req.body.payload)
    console.log(result)
    res.send(result)
})

// rest endpoints
app.get("/offices", async (req: Request, res: Response, next: NextFunction) => {
  const offices = await prisma.office.findMany().catch(e => {
    res.status(500).send("An error occurred: " + e.message)
  })
  await prisma.$disconnect()
  if(offices && offices.length >0) res.send(offices)
  else res.sendStatus(404)
})

app.get("/offices/office/:id", async (req: Request, res: Response, next: NextFunction) => {
  const officeId =  Number(req.params.id) ;
  const office = await prisma.office.findUnique({
    where:{
      id:officeId
    }
  }).catch(e => {
    res.status(500).send("An error occurred: " + e.message)
    return
  })
  await prisma.$disconnect()
  if(office)
  res.send(office)
  else
  res.sendStatus(404)
})

app.post("/offices/office", async (req: Request, res: Response, next: NextFunction) => {
  const newOffice = await prisma.office.create({
    data:{
      name: req.body.name,
      type: req.body.type,
      details: req.body.details
    }
  }).catch(e => {
    res.status(500).send("An error occurred: " + e.message)
    return
  })
  await prisma.$disconnect()
  res.send(newOffice)
})

app.delete("/offices/office/:id",  async (req: Request, res: Response, next: NextFunction) => {
  const delete_id:number = Number(req.params.id)
  await prisma.office.delete({where:{id : delete_id}})
  .catch(e => {
    res.status(500).send("An error occurred: " + e.message)
    return
  })
  await prisma.$disconnect()
  res.sendStatus(200)
})

app.put("/offices/office/:id",  async (req: Request, res: Response, next: NextFunction) => {
  const update_id:number = Number(req.params.id)
  const updated: Office | void = await prisma.office.update({
    where:{
      id : update_id
    },
    data: req.body
  })
  .catch(e => {
    res.status(500).send("An error occurred: " + e.message)
    return
  })
  await prisma.$disconnect()
  res.sendStatus(200)
 
})

//start server ( using nodemon )
app.listen(7531, () => console.log("Running on port 7531"))