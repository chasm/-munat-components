import type { JSX } from "https://esm.sh/v128/preact@10.22.0/src/index.js"

export type Props = JSX.HTMLAttributes<HTMLElement>

export default function Main({ children, ...attrs }: Props) {
	return (
		<main id="main-content" {...attrs}>
			{children}
		</main>
	)
}
