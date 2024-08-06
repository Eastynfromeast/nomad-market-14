import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function test() {
	/* 	const createToken = await db.sMSToken.create({
		data: {
			token: "121212",
			user: {
				connect: {
					id: 2,
				},
			},
		},
	}); */

	const findToken = await db.sMSToken.findUnique({
		where: {
			id: 1,
		},
		include: {
			user: true,
		},
	});
	console.log(findToken);
}
test();
export default db;
