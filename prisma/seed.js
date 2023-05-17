const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {

  const offices = await prisma.office.createMany({
    data:[
    {
      name: "escritório privado 1",
      type: "escritório",
      details: "Escritório privado totalmente mobilado e com acesso a internet"
    },
    {
      name: "escritório privado 2",
      type: "escritório",
      details: "Escritório privado totalmente mobilado e com acesso a internet"
    },
    {
      name: "escritório privado 3",
      type: "escritório",
      details: "Escritório privado totalmente mobilado e com acesso a internet"
    },
    {
      name: "escritório privado 4",
      type: "escritório",
      details: "Escritório privado totalmente mobilado e com acesso a internet"
    },
    {
      name: "escritório privado 5",
      type: "escritório",
      details: "Escritório privado totalmente mobilado e com acesso a internet"
    },
    {
      name: "sala de reuniões 1",
      type: "sala de reuniões",
      details: "Escritório mobilado, ideal para reuniões"
    },
    {
      name: "sala de reuniões 2",
      type: "sala de reuniões",
      details: "Escritório mobilado, ideal para reuniões de grupo e apresentações"
    },
    {
      name: "sala de formação",
      type: "conferencia",
      details: "Sala de conferencias / formação com capaciade para 25 (mobilada e disposta com mesas em U) a 50 (em formato livre) pessoas"
    },
    {
      name: "Sala de bem-estar",
      type: "massagem"
    },
    {
      name: "Espaço de co-work 1.0",
      type: "co-work"
    },
    {
      name: "Espaço de co-work 1.1",
      type: "co-work "
    },
    {
      name: "Espaço de co-work 2.0",
      type: "co-work "
    },
    {
      name: "Espaço de co-work 2.1",
      type: "co-work "
    },
    {
      name: "Espaço de co-work 3.0",
      type: "co-work "
    },
    {
      name: "Espaço de co-work 3.1",
      type: "co-work "
    },
  ] 
  })

  const users = await prisma.user.createMany({
    data:[
      {
        name: "test user 1",
        email: "tesuser@testmail.com",
        tel: "+35122456665"
      },
      {
        name: "test user 2",
        email: "tesuser22@testmail.com",
        tel: "+3512245666544"
      }
    ]
  })

  console.log({ offices, users })

}

main()

  .then(async () => {

    await prisma.$disconnect()

  })

  .catch(async (e) => {

    console.error(e)

    await prisma.$disconnect()

    process.exit(1)

  })