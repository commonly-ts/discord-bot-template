import { SlashCommandBuilder } from "discord.js";
import { createSlashCommand } from "trivious";

export default createSlashCommand({
	active: true,
	flags: ["EphemeralReply"],
	data: new SlashCommandBuilder()
		.setName("slash-command")
		.setDescription("This is a slash command!"),
});
