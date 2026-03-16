import { Component, ComponentContext, customId, interactionReply } from "trivious";

export default {
	component: ComponentContext.Button,
	identifier: "unique_id",
	async execute(client, interaction) {
		if (!interaction.isButton()) return;
		const { data } = customId.decode(interaction.customId);

		await interactionReply({
			interaction,
			replyPayload: { content: `You pressed the button! Passed id: ${data}` },
		});
	},
} satisfies Component;
