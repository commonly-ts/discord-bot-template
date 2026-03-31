import { SlashCommandSubcommandGroupBuilder } from "discord.js";
import { createSubcommandGroup } from "trivious";

export default createSubcommandGroup({
	data: new SlashCommandSubcommandGroupBuilder()
		.setName("subcommand-group")
		.setDescription("This is a subcommand group!"),
});
