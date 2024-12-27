import { ComponentChildren, JSX } from "preact"

import type { Meta } from "../../../types/index.ts"

import OpenGraph from "./OpenGraph/index.tsx"
import Twitter from "./Twitter/index.tsx"

export type Props = JSX.HTMLAttributes<HTMLHeadElement> & {
	children: ComponentChildren
	metadata?: Meta | undefined
	title: string
}

export default function Head({
	children,
	metadata = {} as Meta,
	title,
	...attrs
}: Props) {
	const {
		author,
		charset = "utf-8",
		copyright,
		description,
		publisher,
		robots = ["index", "follow"],
		viewport = "width=device-width, initial-scale=1",
	} = metadata

	return (
		<head {...attrs}>
			<meta charset={charset} key="charset" />
			<meta content={viewport} key="viewport" name="viewport" />
			{description
				? <meta content={description} key="description" name="description" />
				: undefined}
			{copyright
				? <meta content={copyright} key="copyright" name="copyright" />
				: undefined}
			<meta content={robots.join(",")} key="robots" name="robots" />
			{author
				? <meta key="author" name="author" content={author} />
				: undefined}
			{publisher
				? <meta key="publisher" name="publisher" content={publisher} />
				: undefined}
			<title>{title}</title>
			<OpenGraph metadata={metadata} />
			<Twitter metadata={metadata} />
			{children}
		</head>
	)
}
