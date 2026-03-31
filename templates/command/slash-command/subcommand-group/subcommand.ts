import { SlashCommandSubcommandBuilder } from "discord.js";
import { createSubcommand, interactionReply } from "trivious";

export default createSubcommand({
	active: true,
	data: new SlashCommandSubcommandBuilder()
		.setName("subcommand")
		.setDescription("This is a subcommand under a group!"),

	async execute(client, interaction) {
		await interactionReply({
			interaction,
			replyPayload: { content: "Hello world, I'm in a subcommand group!" },
		});
	},
});
