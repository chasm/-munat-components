import type { JSX } from "https://esm.sh/v128/preact@10.22.0/src/index.js"

export type Props = JSX.HTMLAttributes<HTMLUListElement> & {
	tags?: Array<string> | undefined
}

export default function Cards({ children, ...attrs }: Props) {
	return (
		<ul {...attrs}>
			{children}
		</ul>
	)
}
