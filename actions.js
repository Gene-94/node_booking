const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const actions = {
    getOffices: (payload) => prisma.offices,
    createTodo: async (payload) => {
        const newTodo = {
            message: payload.message
        }
        todos.push(newTodo)
        return {result: "ok"}
        const newUser = await prisma.user.create({
            data: {
              name: payload.name,
              email: 'alice@prisma.io',
            },
          })
    }
}


module.exports = actions