import { SlashCommandBuilder } from "discord.js";
import { createSlashCommand } from "trivious";

export default createSlashCommand({
	active: true,
	flags: ["EphemeralReply", "DeferReply"],
	data: new SlashCommandBuilder().setName("debug").setDescription("Debug commands"),
});
