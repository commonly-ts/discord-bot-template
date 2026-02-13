import "dotenv/config";
import "reflect-metadata";

import { AppDataSource } from "@db";
import { GatewayIntentBits } from "discord.js";
import { TriviousClient } from "trivious";

const client = new TriviousClient({
	clientIdReference: "CLIENT_ID",
	tokenReference: "BOT_TOKEN",
	intents: [GatewayIntentBits.Guilds],
	botOwnerIds: ["424764032667484171"],
	corePath: "core",
	commandHashConfig: {
		enabled: true,
		filePath: "data",
	},
});

(async () => {
	try {
		await AppDataSource.initialize();

		await client.start();
	} catch (error: any) {
		console.error(error);
	}
})();
