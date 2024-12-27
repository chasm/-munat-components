import type { JSX } from "https://esm.sh/v128/preact@10.22.0/src/index.js"

import Error from "../../../widgets/Error/index.tsx"

export type Props = JSX.HTMLAttributes<HTMLElement> & {
	href?: string | undefined
	label?: string | undefined
	useMoreLink?: boolean | undefined
}

export default function Footer(props: Props) {
	const { children, href, label, useMoreLink } = props

	return (
		<footer class="card-footer">
			{children}
			{href
				? (
					useMoreLink
						? (
							<a class="button-right" href={href}>
								Read more
								<span class="sr-only">of “{label}”</span> <slot name="arrow" />
							</a>
						)
						: (
							<a class="button-right" href={href}>
								{label} <slot name="arrow" />
							</a>
						)
				)
				: <Error message="Missing link label!" />}
		</footer>
	)
}
