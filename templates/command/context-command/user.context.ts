import { ContextMenuCommandBuilder } from "discord.js";
import { createUserContextCommand, interactionReply } from "trivious";

export default createUserContextCommand({
	active: true,
	flags: ["EphemeralReply"],
	data: new ContextMenuCommandBuilder().setName("Do Thing"),

	async execute(client, interaction) {
		await interactionReply({
			interaction,
			flags: this.flags,
			replyPayload: { content: `Target user: ${interaction.targetUser.username}` },
		});
	},
});
