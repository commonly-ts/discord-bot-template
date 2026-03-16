import { Collection, SlashCommandSubcommandGroupBuilder } from "discord.js";
import { SlashSubcommandGroupData } from "trivious";

export default {
	context: "SlashSubcommandGroup",
	subcommands: new Collection(),
	data: new SlashCommandSubcommandGroupBuilder()
		.setName("subcommand-group")
		.setDescription("This is a subcommand group!"),
} satisfies SlashSubcommandGroupData;
