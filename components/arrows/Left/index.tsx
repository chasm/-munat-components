import type { JSX } from "https://esm.sh/v128/preact@10.22.0/src/index.js"

import clamp from "../../../utilities/clamp/index.ts"

export type Props = JSX.HTMLAttributes<SVGElement> & {
	fill?: string | undefined
}

export default function Left(
	{ fill = "black", height = 44, width = 215 }: Props,
) {
	const h = Number(height)
	const hh = h / 2
	const w = clamp(Number(width), h * 2, h * 10)

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			height={height}
			width={width}
			viewBox={`0 0 ${w} ${h}`}
		>
			<path
				fill={fill}
				d={`M 0 ${hh} L ${h} 0 L ${h} ${hh - 1} L ${w} ${hh - 1} L ${w} ${
					hh + 1
				} L ${h} ${hh + 1} L ${h} ${h} Z`}
			>
			</path>
		</svg>
	)
}
