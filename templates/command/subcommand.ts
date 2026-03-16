import { ApplicationCommandType, SlashCommandSubcommandBuilder } from "discord.js";
import { createActionRow, interactionReply, SlashSubcommandData } from "trivious";

import builderExample from "../builder/builder.example";

export default {
	active: true,
	commandType: ApplicationCommandType.ChatInput,
	context: "SlashSubcommand",
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
} satisfies SlashSubcommandData;
