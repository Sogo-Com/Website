import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();

async function main() {
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const adminSalt = process.env.ADMIN_SALT;
    const adminPasswordHashed = await bcrypt.hash(adminPassword, parseInt(adminSalt))


    const adminUser = await prisma.user.upsert({

        where: { username: adminUsername },
        update: {
            username: adminUsername,
            passwordHash: adminPasswordHashed,
            userAuthToken: "23456789",
        },
        create: {
            username: adminUsername,
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
