import { ApplicationCommandType, SlashCommandSubcommandBuilder } from "discord.js";
import { interactionReply, SlashSubcommandData } from "trivious";

export default {
	active: true,
	commandType: ApplicationCommandType.ChatInput,
	context: "SlashSubcommand",
	data: new SlashCommandSubcommandBuilder()
		.setName("subcommand")
		.setDescription("This is a subcommand under a group!"),

	async execute(client, interaction) {
		await interactionReply({
			interaction,
			replyPayload: { content: "Hello world, I'm in a subcommand group!" },
		});
	},
} satisfies SlashSubcommandData<false, "group">;
