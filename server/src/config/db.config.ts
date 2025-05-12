import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient({
	log: ["query", "info", "warn", "error"],
	errorFormat: "pretty"
});

process.on("SIGINT", async () => {
	await prisma.$disconnect();
	console.log("Prisma client disconnected");
	process.exit(0);
});
process.on("SIGTERM", async () => {
	await prisma.$disconnect();
	console.log("Prisma client disconnected");
	process.exit(0);
});
process.on("uncaughtException", async (error) => {
	console.error("Uncaught Exception:", error);
	await prisma.$disconnect();
	console.log("Prisma client disconnected due to uncaught exception");
	process.exit(1);
});
process.on("unhandledRejection", async (reason) => {
	console.error("Unhandled Rejection:", reason);
	await prisma.$disconnect();
	console.log("Prisma client disconnected due to unhandled rejection");
	process.exit(1);
});

export default prisma;
