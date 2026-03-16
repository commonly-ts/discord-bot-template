import { ButtonBuilder, ButtonStyle } from "discord.js";
import { ComponentContext, encodeCustomId } from "trivious";

export default {
	button: (databaseId: number) =>
		new ButtonBuilder()
			.setLabel("Press me!")
			.setCustomId(
				encodeCustomId({
					context: ComponentContext.Button,
					identifier: "unique_id",
					data: databaseId.toString(),
				})
			)
			.setStyle(ButtonStyle.Secondary),
} as const;
