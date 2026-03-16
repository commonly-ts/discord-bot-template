import { ApplicationCommandType, SlashCommandBuilder } from "discord.js";
import { SlashCommandData } from "trivious";

export default {
	active: true,
	commandType: ApplicationCommandType.ChatInput,
	context: "SlashCommand",
	flags: ["EphemeralReply", "DeferReply"],
	data: new SlashCommandBuilder().setName("debug").setDescription("Debug commands"),
} satisfies SlashCommandData;
