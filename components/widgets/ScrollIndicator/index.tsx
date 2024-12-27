import type { JSX } from "https://esm.sh/v128/preact@10.22.0/src/index.js"

export type Props = JSX.HTMLAttributes<HTMLProgressElement>

export default function ScrollIndicator(props: Props) {
	const attrs = Object.assign(
		{
			class: "scroll-indicator",
		},
		props,
	)

	return (
		<progress aria-hidden="true" max="100" value="0" {...attrs}>
			<span>
				<span></span>
			</span>
		</progress>
	)
}
