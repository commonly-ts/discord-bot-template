import { Module } from "trivious";

export default {
	name: "exampleModule",
	events: {
		async guildMemberAdd(client, member) {
			console.log(`${member.user.username} just joined the server!`);
		},

		async guildMemberRemove(client, member) {
			console.log(`${member.user.username} just left the server!`);
		},
	},
} satisfies Module;
