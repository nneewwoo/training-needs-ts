import { PrismaClient } from "@prisma/client/react-native";
// import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient();

export { prisma };
