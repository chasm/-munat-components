import type { JSX } from "https://esm.sh/v128/preact@10.22.0/src/index.js"

export type Props = JSX.HTMLAttributes<HTMLSpanElement> & {
	timeToRead?: number | undefined
}

export default function TimeToRead({ timeToRead = 0, ...attrs }: Props) {
	return timeToRead
		? <span class="time-to-read" {...attrs}>{timeToRead} minute read</span>
		: null
}
