import type { Article, Meta } from "../../../../types/index.ts"

import collapseWhitespace from "../../../../utilities/collapseWhitespace/index.ts"
import getImageSrc from "../../../../utilities/getImageSrc/index.ts"

export type Props = {
	metadata: Meta
}

export default function OpenGraph({ metadata = {} as Meta }: Props) {
	const {
		article,
		author,
		canonical,
		description,
		hero,
		profile,
		publisher,
		timeZone = "UTC",
		title: pageTitle,
		type: t,
	} = metadata

	const {
		modifiedOn,
		publishedOn,
		section,
		tags = [],
		title: articleTitle,
	} = article || {} as Article

	const type = article ? "article" : t || "website"

	const src = getImageSrc(hero)

	const modifiedTime = modifiedOn
		? Temporal.PlainDateTime.from(modifiedOn)
			.toZonedDateTime(timeZone)
			.toJSON()
		: undefined
	const publishedTime = publishedOn
		? Temporal.PlainDateTime.from(publishedOn)
			.toZonedDateTime(timeZone)
			.toJSON()
		: undefined

	const title = articleTitle || pageTitle

	return (
		<>
			<meta key="og:type" property="og:type" content={type} />
			{title
				? <meta key="og:title" property="og:title" content={title} />
				: undefined}
			<meta key="og:url" property="og:url" content={canonical} />
			{src
				? <meta key="og:image" property="og:image" content={src} />
				: undefined}
			{description
				? (
					<meta
						key="og:description"
						property="og:description"
						content={collapseWhitespace(description)}
					/>
				)
				: undefined}

			{type === "article"
				? (
					<>
						{author
							? (
								<meta
									key="article:author"
									property="article:author"
									content={author}
								/>
							)
							: undefined}
						{publisher
							? (
								<meta
									key="article:publisher"
									property="article:publisher"
									content={publisher}
								/>
							)
							: undefined}
						{publishedTime
							? (
								<meta
									key="article:published_time"
									property="article:published_time"
									content={publishedTime}
								/>
							)
							: undefined}
						{modifiedTime
							? (
								<meta
									key="article:modified_time"
									property="article:modified_time"
									content={modifiedTime}
								/>
							)
							: undefined}
						{section
							? (
								<meta
									key="article:section"
									property="article:section"
									content={section}
								/>
							)
							: undefined}
						{tags.map((tag) => (
							<meta key="article:tag" property="article:tag" content={tag} />
						))}
					</>
				)
				: undefined}

			{type === "profile"
				? (
					<>
						{profile?.given
							? (
								<meta
									key="profile:first_name"
									property="profile:first_name"
									content={profile.given}
								/>
							)
							: undefined}
						{profile?.family
							? (
								<meta
									key="profile:last_name"
									property="profile:last_name"
									content={profile.family}
								/>
							)
							: undefined}
					</>
				)
				: undefined}
		</>
	)
}
