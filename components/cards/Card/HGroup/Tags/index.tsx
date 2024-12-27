import type { JSX } from "https://esm.sh/v128/preact@10.22.0/src/index.js"

export type Props = JSX.HTMLAttributes<HTMLDivElement> & {
	tags?: Array<string> | undefined
}

export default function Tags({ tags, ...attrs }: Props) {
	return tags
		? (
			<div class="tags" {...attrs}>
				{tags.map((tag: string) => <span class="tag">{tag}</span>)}
			</div>
		)
		: null
}
