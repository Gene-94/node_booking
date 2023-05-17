"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const actions = {
    getOffices: async (payload) => await prisma.office.findMany(),
    createOffice: async (payload) => {
        const newOffice = await prisma.office.create({
            data: {
                name: payload.name,
                type: payload.type,
            },
        });
        return { result: newOffice };
    }
};
module.exports = actions;
//# sourceMappingURL=actions.js.map