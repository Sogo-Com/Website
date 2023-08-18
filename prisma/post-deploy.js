import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();

async function main() {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const adminSalt = process.env.ADMIN_SALT;
    const adminPasswordHashed = await bcrypt.hash(adminPassword, parseInt(adminSalt))


    const adminRole = await prisma.roles.upsert({

        where: { name: "ADMIN" },
        update: {
            name: "ADMIN",

        },
        create: {
            name: "ADMIN",
        },

    });


    const adminUser = await prisma.user.upsert({

        where: { email: adminEmail },
        update: {
            email: adminEmail,
            passwordHash: adminPasswordHashed,
            userAuthToken: "23456789",
        },
        create: {
            email: adminEmail,
            passwordHash: adminPasswordHashed,
            userAuthToken: "23456789",
            role: {
                connect: { id: 1 }
            }
        },

    });

    console.log("Admin user created:", adminUser);
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
