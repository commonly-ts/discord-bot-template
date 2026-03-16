import "dotenv/config";
import "reflect-metadata";

import { GatewayIntentBits } from "discord.js";
import { TriviousClient } from "trivious";

import { AppDataSource } from "#db";

const client = new TriviousClient({
	credentials: {
		clientIdReference: "CLIENT_ID",
		tokenReference: "BOT_TOKEN",
	},
	intents: [GatewayIntentBits.Guilds],
	ownerUserIds: ["424764032667484171"],
	corePath: "core",
	commandHashConfig: {
		enabled: true,
		persistentDataPath: "data",
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
