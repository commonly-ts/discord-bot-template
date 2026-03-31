import { ContextMenuCommandBuilder, ModalBuilder } from "discord.js";
import { createMessageComponentCommand } from "trivious";

export default createMessageComponentCommand({
	active: true,
	flags: ["ExpectModal"],
	data: new ContextMenuCommandBuilder().setName("Do Thing"),

	async execute(client, interaction) {
		await interaction.showModal(new ModalBuilder());
	},
});
