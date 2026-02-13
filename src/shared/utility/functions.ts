import {
	AwaitMessageCollectorOptionsParams,
	CacheType,
	GuildTextBasedChannel,
	Interaction,
	MappedInteractionTypes,
	MessageComponentType,
	TextChannel,
} from "discord.js";
import { interactionReply, SlashSubcommand } from "trivious";

type AwaitResult<T extends MessageComponentType> =
	| { ok: true; interaction: MappedInteractionTypes<boolean>[T] }
	| { ok: false; reason: "timeout" | "error" | "invalid" };

type AwaitComponentOptions<T extends MessageComponentType> =
	AwaitMessageCollectorOptionsParams<T> & { replyOnError?: boolean; clearComponents?: boolean };

/**
 * Collect a component from an interaction reply
 * @param args.interaction The interaction
 * @param args.channel The target channel, othewise interaction.channel is used
 * @param args.options.replyOnError Whether to reply to the interaction if an error occurs
 * @param args.options.clearComponents Whether to remove components from the interaction reply after collecting
 * @returns An object with whether the component was collected, if so, returns the interaction, if not, returns the reason
 */
export async function collectComponent<T extends MessageComponentType>(args: {
	interaction: Interaction<CacheType>;
	channel?: TextChannel | GuildTextBasedChannel;
	options: AwaitComponentOptions<T>;
}): Promise<AwaitResult<T>> {
	const { interaction, channel, options } = args;
	const targetChannel = channel || interaction.channel;

	const resolvedOptions: AwaitComponentOptions<T> = {
		filter: (i) => i.user.id === args.interaction.user.id,
		...options,
	};

	if (!targetChannel || !targetChannel.isTextBased() || !interaction.isRepliable())
		return { ok: false, reason: "invalid" };

	try {
		const collected = await targetChannel.awaitMessageComponent(resolvedOptions);

		if (options.clearComponents) {
			await interaction.editReply({ components: [] });
		}

		return { ok: true, interaction: collected };
	} catch (err: unknown) {
		const error = err as Error;
		const isTimeout = error.message.endsWith("with reason: time");

		if (!isTimeout) {
			console.error(error);
		}

		if (options.replyOnError) {
			await interactionReply({
				flags: ["EphemeralReply", "FollowUp"],
				interaction,
				options: {
					content: `Something went wrong! Failed to await message component, report this error to the developer.`,
				},
			});
		}

		return { ok: false, reason: isTimeout ? "timeout" : "error" };
	}
}

/**
 * @returns Formatted string 'thing1, thing2 and thing3'
 */
export function listFormat(list: Iterable<string>) {
	return new Intl.ListFormat("en-nz").format(list);
}

export function getOptionName(
	command: SlashSubcommand,
	partial: string,
	searchBy: "startsWith" | "includes" | "endsWith"
) {
	const options = command.data.options;

	switch (searchBy) {
		case "endsWith":
			return options.find((o) => o.name.endsWith(partial))?.name;
		case "startsWith":
			return options.find((o) => o.name.startsWith(partial))?.name;
		default:
		case "includes":
			return options.find((o) => o.name.includes(partial))?.name;
	}
}
