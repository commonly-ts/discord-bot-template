import { SlashCommandBuilder } from "discord.js";
import { SlashCommand } from "trivious";

export default {
	active: true,
	context: "SlashCommand",
	flags: ["OwnerOnly", "GuildOnly", "EphemeralReply", "DeferReply"],
	data: new SlashCommandBuilder().setName("debug").setDescription("Debug commands"),
} satisfies SlashCommand;
