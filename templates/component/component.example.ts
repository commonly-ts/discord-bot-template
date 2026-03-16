import { Component, ComponentContext, decodeCustomId, interactionReply } from "trivious";

export default {
	component: ComponentContext.Button,
	identifier: "unique_id",
	async execute(client, interaction) {
		if (!interaction.isButton()) return;
		const { data } = decodeCustomId(interaction.customId);

		await interactionReply({
			interaction,
			replyPayload: { content: `You pressed the button! Passed id: ${data}` },
		});
	},
} satisfies Component;
