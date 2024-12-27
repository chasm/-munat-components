import type {
	ComponentChildren,
	JSX,
} from "https://esm.sh/v128/preact@10.22.0/src/index.js"

import generateShortId from "../../../utilities/generateShortId/index.ts"

export type Props = JSX.HTMLAttributes<HTMLDivElement> & {
	children?: ComponentChildren | undefined
	link?: JSX.HTMLAttributes<HTMLAnchorElement> | undefined
}

export default function LinkedLogo({ children, link = {}, ...props }: Props) {
	const { pathname } = new URL(import.meta.url)

	const attrs = Object.assign(
		{
			class: "linked-logo",
			id: generateShortId(),
		},
		props,
	)

	const linkAttrs = Object.assign(
		{
			class: "logo",
			href: "/",
			title: "To the home page.",
		},
		link,
	)
	const useLink = Boolean(pathname.replace(/\/$/, ""))

	return (
		<div {...attrs}>
			{useLink
				? (
					<a {...linkAttrs}>
						{children}
					</a>
				)
				: (
					{ children }
				)}
		</div>
	)
}
