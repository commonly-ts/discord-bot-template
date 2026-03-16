import { Event } from "trivious";

export default {
	name: "clientReady",
	once: true, // means the event is only executed once

	async execute(client) {
		console.log(`Successfully logged into ${client.user?.username}!`);
	},
} satisfies Event<"clientReady">;
