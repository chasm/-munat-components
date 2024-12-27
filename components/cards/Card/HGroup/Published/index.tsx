import type { JSX } from "https://esm.sh/v128/preact@10.22.0/src/index.js"

export type Props = JSX.HTMLAttributes<HTMLTimeElement> & {
	published?: string | undefined
}

export default function Published({ published, ...attrs }: Props) {
	const format = Intl.DateTimeFormat("en-NZ", {
		day: "numeric",
		month: "long",
		timeZone: "Pacific/Auckland",
		year: "numeric",
	}).format

	return published
		? (
			<time {...attrs} datetime={published}>
				{format(Temporal.PlainDate.from(published))}
			</time>
		)
		: null
}
