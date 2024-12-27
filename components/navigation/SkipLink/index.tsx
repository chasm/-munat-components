import type { JSX } from "https://esm.sh/v128/preact@10.22.0/src/index.js"

export type Props = JSX.HTMLAttributes<HTMLAnchorElement> & {
	label?: string | undefined
}

export default function SkipLink(props: Props) {
	const { href, label = "Skip to content", ...attrs } = props

	return <a class="skip-link" {...attrs} href={href}>{label}</a>
}
