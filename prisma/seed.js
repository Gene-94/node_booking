const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

await prisma.office.createMany({
  data:[
  {
    name: "private office 1",
    type: "office"
  },
  {
    name: "private office 2",
    type: "office"
  },
  {
    name: "private office 3",
    type: "office"
  },
  {
    name: "private office 4",
    type: "office"
  },
  {
    name: "private office 5",
    type: "office"
  },
  {
    name: "meeting room 1",
    type: "meeting room"
  },
  {
    name: "meeting room 2",
    type: "meeting room"
  },
  {
    name: "private office 1",
    type: "office"
  },
  {
    name: "private office 1",
    type: "office"
  }
] 
})