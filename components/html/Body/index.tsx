import type { JSX } from "https://esm.sh/v128/preact@10.22.0/src/index.js"

export type Props = JSX.HTMLAttributes<HTMLBodyElement>

export default function Body({ children, ...attrs }: Props) {
	return (
		<body {...attrs}>
			{children}
		</body>
	)
}
