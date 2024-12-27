import type {
	ComponentChildren,
	JSX,
} from "https://esm.sh/v128/preact@10.22.0/src/index.js"

import generateShortId from "../../../utilities/generateShortId/index.ts"

export type Props = JSX.HTMLAttributes<HTMLElement> & {
	title?: ComponentChildren
}

export default function Article(
	{ children, id = generateShortId(), title, ...attrs }: Props,
) {
	return (
		<article class="article" id={id} {...attrs}>
			{title}
			{children}
		</article>
	)
}
