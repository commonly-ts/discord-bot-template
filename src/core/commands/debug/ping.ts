import { SlashCommandSubcommandBuilder } from "discord.js";
import { interactionReply, SlashSubcommand } from "trivious";

export default {
	active: true,
	context: "SlashSubcommand",
	data: new SlashCommandSubcommandBuilder().setName("ping").setDescription("Ping pong!"),

	async execute(client, interaction) {
		const ping = (await interaction.fetchReply()).createdTimestamp - interaction.createdTimestamp;

		await interactionReply({
			flags: this.flags,
			interaction,
			options: {
				content: `Pong!\nBot latency: ${ping}ms, API latency: ${client.ws.ping.toString()}ms`,
			},
		});
	},
} satisfies SlashSubcommand;
