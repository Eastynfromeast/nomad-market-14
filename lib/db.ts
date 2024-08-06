import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function test() {
	/* 	const user = await db.user.create({
		data: {
			username: "tester",
		},
	}); */
	const users = await db.user.findMany({
		where: {
			username: {
				contains: "est",
			},
		},
	});
	console.log(users);
}

test();

export default db;
