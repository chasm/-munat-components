import type {
	ComponentChildren,
	JSX,
} from "https://esm.sh/v128/preact@10.22.0/src/index.js"

import generateShortId from "../../../utilities/generateShortId/index.ts"

export type Props = JSX.HTMLAttributes<HTMLElement> & {
	title?: ComponentChildren | undefined
}

export default function Section(
	{ children, id = generateShortId(), title, ...attrs }: Props,
) {
	return (
		<section id={id} {...attrs}>
			{title}
			{children}
		</section>
	)
}
