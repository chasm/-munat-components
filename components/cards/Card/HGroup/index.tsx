import type { JSX } from "https://esm.sh/v128/preact@10.22.0/src/index.js"

import Published from "./Published/index.tsx"
import Tags from "./Tags/index.tsx"
import TimeToRead from "./TimeToRead/index.tsx"

export type Props = JSX.HTMLAttributes<HTMLElement> & {
	published?: string | undefined
	tags?: Array<string> | undefined
	timeToRead?: number | undefined
}

export default function HGroup(
	{ children, published, tags, timeToRead, ...props }: Props,
) {
	return (
		<hgroup class="card-hgroup" {...props}>
			{children}
			<div class="timeline">
				<Published published={published} />
				<TimeToRead timeToRead={timeToRead} />
			</div>
			<Tags tags={tags} />
		</hgroup>
	)
}
