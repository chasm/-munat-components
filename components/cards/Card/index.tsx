import type {
	ComponentChildren,
	JSX,
} from "https://esm.sh/v128/preact@10.22.0/src/index.js"

import type { Card, CardLink } from "../../../types/index.ts"

import Error from "../../widgets/Error/index.tsx"
import Footer from "./Footer/index.tsx"
import HGroup from "./HGroup/index.tsx"

import generateShortId from "../../../utilities/generateShortId/index.ts"

export type Props = JSX.HTMLAttributes<HTMLLIElement> & {
	arrow?: ComponentChildren | undefined
	card: Card
	footer?: ComponentChildren | undefined
	hgroup?: JSX.HTMLAttributes<HTMLElement> | undefined
	href?: string | undefined
	label?: string | undefined
	cardTitle?: string | undefined
	picture?: ComponentChildren | undefined
	published?: string | undefined
	tags?: Array<string> | undefined
	timeToRead?: number | undefined
	title: string | ComponentChildren
	useMoreLink?: boolean | undefined
}

export default function Card(props: Props) {
	const {
		arrow,
		card,
		children,
		footer,
		hgroup = {},
		href: pageHref,
		id = generateShortId(),
		label: lbl,
		picture,
		published,
		tags,
		timeToRead,
		title,
	} = props

	const {
		link: { href: linkHref, label: linkLabel, useMoreLink } = {} as CardLink,
		title: cardTitle,
	} = card

	const href = linkHref || pageHref
	const ttl = cardTitle || title
	const label = linkLabel || lbl || title
	const dataTags = tags ? { "data-tags": tags.join(",") } : {}

	return (
		<li class="card" id={id} {...dataTags}>
			{tags
				? (
					<div class="card-tags">
						{tags.map((tag: string) => (
							<span class="card-tag" data-tag={tag}>
								{tag}
							</span>
						))}
					</div>
				)
				: undefined}
			<div class="content">
				{picture}
				{ttl
					? (
						published
							? (
								<header>
									<HGroup
										published={published}
										tags={tags}
										timeToRead={timeToRead}
										{...hgroup}
									>
										<h2>{ttl}</h2>
									</HGroup>
								</header>
							)
							: (
								<header>
									<h2>{ttl}</h2>
								</header>
							)
					)
					: <Error message="Missing title!" />}
				{children}
			</div>
			<Footer href={href} label={label} useMoreLink={useMoreLink}>
				{footer}
				{arrow}
			</Footer>
		</li>
	)
}
