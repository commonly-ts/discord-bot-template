import "dotenv/config";
import "reflect-metadata";

import { AppDataSource } from "@db";
import { GatewayIntentBits } from "discord.js";
import { TriviousClient } from "trivious";

const client = new TriviousClient({
	credentials: {
		clientIdReference: "CLIENT_ID",
		tokenReference: "BOT_TOKEN",
	},
	intents: [GatewayIntentBits.Guilds],
	ownerUserIds: [],
	corePath: "features",
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
