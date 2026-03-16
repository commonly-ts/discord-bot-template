import { ButtonBuilder, ButtonStyle } from "discord.js";
import { ComponentContext, customId } from "trivious";

export default {
	button: (databaseId: number) =>
		new ButtonBuilder()
			.setLabel("Press me!")
			.setCustomId(
				customId.encode({
					context: ComponentContext.Button,
					identifier: "unique_id",
					data: databaseId.toString(),
				})
			)
			.setStyle(ButtonStyle.Secondary),
} as const;
