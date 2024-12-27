import type { JSX } from "https://esm.sh/v128/preact@10.22.0/src/index.js"

export type Props = JSX.HTMLAttributes<HTMLSpanElement> & {
	message?: string | undefined
}

export default function Error({ message, ...props }: Props) {
	const attrs = Object.assign(
		{
			class: "error",
		},
		props,
	)

	return <span data-error {...attrs}>ERROR{message ? `: ${message}` : ""}</span>
}
