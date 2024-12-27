import type { JSX } from "https://esm.sh/v128/preact@10.22.0/src/index.js"

export type Props = JSX.HTMLAttributes<HTMLElement>

export default function Footer({ children, ...attrs }: Props) {
	return (
		<footer {...attrs}>
			{children}
		</footer>
	)
}
