import type { Meta, Twitter } from "../../../../types/index.ts"

import collapseWhitespace from "../../../../utilities/collapseWhitespace/index.ts"
import getImageSrc from "../../../../utilities/getImageSrc/index.ts"

export type Props = {
	metadata: Meta
}

export default function Twitter({ metadata = {} as Meta }: Props) {
	const {
		description: pageDescription,
		hero,
		title: pageTitle,
		twitter = {} as Twitter,
	} = metadata

	const {
		app = {},
		card,
		creator = {},
		description: xDescription,
		image,
		player: playr = {},
		site = {},
		title: xTitle,
	} = twitter

	const { googleplay, ipad, iphone } = app

	const { height, src: player, stream, width } = playr

	const img = image || hero

	const src = img ? getImageSrc(img) : undefined
	const { alt } = img || {}

	const description = xDescription || pageDescription
	const title = xTitle || pageTitle

	return (
		<>
			{card
				? <meta key="twitter:card" property="twitter:card" content={card} />
				: undefined}

			{site.username
				? (
					<meta
						key="twitter:site"
						property="twitter:site"
						content={site.username}
					/>
				)
				: undefined}
			{site.id
				? (
					<meta
						key="twitter:site:id"
						property="twitter:site:id"
						content={site.id}
					/>
				)
				: undefined}

			{creator.username
				? (
					<meta
						key="twitter:creator"
						property="twitter:creator"
						content={creator.username}
					/>
				)
				: undefined}
			{creator.id
				? (
					<meta
						key="twitter:creator:id"
						property="twitter:creator:id"
						content={creator.id}
					/>
				)
				: undefined}

			{description
				? (
					<meta
						key="twitter:description"
						property="twitter:description"
						content={collapseWhitespace(description)}
					/>
				)
				: undefined}
			{title
				? <meta key="twitter:title" property="twitter:title" content={title} />
				: undefined}

			{src
				? <meta key="twitter:image" property="twitter:image" content={src} />
				: undefined}
			{alt
				? (
					<meta
						key="twitter:image:alt"
						property="twitter:image:alt"
						content={collapseWhitespace(alt)}
					/>
				)
				: undefined}

			{card === "app" && googleplay
				? (
					<>
						{googleplay.id
							? (
								<meta
									key="twitter:app:id:googleplay"
									property="twitter:app:id:googleplay"
									content={googleplay.id}
								/>
							)
							: undefined}
						{googleplay.name
							? (
								<meta
									key="twitter:app:name:googleplay"
									property="twitter:app:name:googleplay"
									content={googleplay.name}
								/>
							)
							: undefined}
						{googleplay.url
							? (
								<meta
									key="twitter:app:url:googleplay"
									property="twitter:app:url:googleplay"
									content={googleplay.url}
								/>
							)
							: undefined}
					</>
				)
				: undefined}
			{card === "app" && ipad
				? (
					<>
						{ipad.id
							? (
								<meta
									key="twitter:app:id:ipad"
									property="twitter:app:id:ipad"
									content={ipad.id}
								/>
							)
							: undefined}
						{ipad.name
							? (
								<meta
									key="twitter:app:name:ipad"
									property="twitter:app:name:ipad"
									content={ipad.name}
								/>
							)
							: undefined}
						{ipad.url
							? (
								<meta
									key="twitter:app:url:ipad"
									property="twitter:app:url:ipad"
									content={ipad.url}
								/>
							)
							: undefined}
					</>
				)
				: undefined}
			{card === "app" && iphone
				? (
					<>
						{iphone.id
							? (
								<meta
									key="twitter:app:id:iphone"
									property="twitter:app:id:iphone"
									content={iphone.id}
								/>
							)
							: undefined}
						{iphone.name
							? (
								<meta
									key="twitter:app:name:iphone"
									property="twitter:app:name:iphone"
									content={iphone.name}
								/>
							)
							: undefined}
						{iphone.url
							? (
								<meta
									key="twitter:app:url:iphone"
									property="twitter:app:url:iphone"
									content={iphone.url}
								/>
							)
							: undefined}
					</>
				)
				: undefined}

			{card === "player"
				? (
					<>
						{player
							? (
								<meta
									key="twitter:player"
									property="twitter:player"
									content={player}
								/>
							)
							: undefined}
						{width
							? (
								<meta
									key="twitter:player:width"
									property="twitter:player:width"
									content={String(width)}
								/>
							)
							: undefined}
						{stream
							? (
								<meta
									key="twitter:player:stream"
									property="twitter:player:stream"
									content={stream}
								/>
							)
							: undefined}
						{height
							? (
								<meta
									key="twitter:player:height"
									property="twitter:player:height"
									content={String(height)}
								/>
							)
							: undefined}
					</>
				)
				: undefined}
		</>
	)
}
