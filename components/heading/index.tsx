import type { JSX } from "https://esm.sh/v128/preact@10.22.0/src/index.js"

import generateShortId from "../../utilities/generateShortId/index.ts"
import { ComponentChildren } from "https://esm.sh/v128/preact@10.22.0/src/index.js"

export type Props = JSX.HTMLAttributes<HTMLElement> & {
	children?: ComponentChildren | undefined
	epilogue?: ComponentChildren | undefined
	h?: JSX.HTMLAttributes<HTMLHeadingElement> | undefined
	level?: number | undefined
	prologue?: ComponentChildren | undefined
	subtitle?: ComponentChildren | string | undefined
	title?: ComponentChildren | string | undefined
}

function getComponent(level = 2): "h1" | "h2" | "h3" | "h4" | "h5" | "h6" {
	switch (level) {
		case 1:
			return "h1"
		case 3:
			return "h3"
		case 4:
			return "h4"
		case 5:
			return "h5"
		case 6:
			return "h6"
		default:
			return "h2"
	}
}

export default function Heading(
	{
		children,
		epilogue,
		h = {},
		level = -1,
		prologue,
		slot: _,
		subtitle,
		title,
		...props
	}: Props,
) {
	const Hn = getComponent(level)

	const attrs = Object.assign(
		{
			id: generateShortId(),
		},
		h,
	)

	return (
		<header {...props}>
			{prologue}
			{subtitle
				? (
					<hgroup aria-roledescription="Heading group" role="group">
						<Hn {...attrs}>{children || title}</Hn>
						{subtitle
							? (
								<p aria-roledescription="subtitle" class="subtitle">
									{subtitle}
								</p>
							)
							: undefined}
					</hgroup>
				)
				: <Hn {...attrs}>{children || title}</Hn>}
			{epilogue}
		</header>
	)
}
