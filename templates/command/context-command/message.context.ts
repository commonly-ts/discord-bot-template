import { ContextMenuCommandBuilder, ModalBuilder } from "discord.js";
import { createMessageContextCommand } from "trivious";

export default createMessageContextCommand({
	active: true,
	flags: ["ExpectModal"],
	data: new ContextMenuCommandBuilder().setName("Do Thing"),

	async execute(client, interaction) {
		await interaction.showModal(new ModalBuilder());
	},
});
