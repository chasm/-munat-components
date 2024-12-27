import type {
	ComponentChildren,
	JSX,
} from "https://esm.sh/v128/preact@10.22.0/src/index.js"

import generateShortId from "../../../utilities/generateShortId/index.ts"

export type Props = JSX.HTMLAttributes<HTMLDivElement> & {
	tip: ComponentChildren | string
}

export default function Tooltip(
	{ children, id = generateShortId(), tip, ...attrs }: Props,
) {
	return (
		<>
			<div aria-labelledby={id} class="tooltip" {...attrs}>
				{children}
			</div>
			<div id={id} role="tooltip">{tip}</div>
		</>
	)
}
