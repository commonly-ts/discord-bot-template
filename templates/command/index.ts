import { ApplicationCommandType, SlashCommandBuilder } from "discord.js";
import { SlashCommandData } from "trivious";

export default {
	active: true,
	commandType: ApplicationCommandType.ChatInput,
	context: "SlashCommand",
	flags: ["EphemeralReply"],
	data: new SlashCommandBuilder()
		.setName("slash-command")
		.setDescription("This is a slash command!"),
} satisfies SlashCommandData;
