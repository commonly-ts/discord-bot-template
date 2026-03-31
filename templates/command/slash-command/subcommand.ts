import { SlashCommandSubcommandBuilder } from "discord.js";
import { createActionRow, createSubcommand, interactionReply } from "trivious";

import builderExample from "../../builder/builder.example";

export default createSubcommand({
	active: true,
	data: new SlashCommandSubcommandBuilder()
		.setName("subcommand")
		.setDescription("This is a subcommand under a command!"),

	async execute(client, interaction) {
		await interactionReply({
			interaction,
			replyPayload: {
				content: "Hello world, I'm in a slash command!",
				components: [createActionRow(builderExample.button(123))],
			},
		});
	},
});
