import { SlashCommandSubcommandBuilder } from "discord.js";
import { createSubcommand, interactionReply } from "trivious";

export default createSubcommand({
	active: true,
	data: new SlashCommandSubcommandBuilder().setName("ping").setDescription("Ping pong!"),

	async execute(client, interaction) {
		const ping = (await interaction.fetchReply()).createdTimestamp - interaction.createdTimestamp;

		await interactionReply({
			flags: this.flags,
			interaction,
			replyPayload: {
				content: `Pong!\nBot latency: ${ping}ms, API latency: ${client.ws.ping.toString()}ms`,
			},
		});
	},
});
