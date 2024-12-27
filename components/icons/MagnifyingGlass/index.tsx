import { JSX } from "https://esm.sh/v128/preact@10.22.0/src/index.js"

export type Props = JSX.HTMLAttributes<SVGSVGElement> & {
	bgnd?: string | undefined
	fgnd?: string | undefined
}

export default function Hamburger({
	bgnd = "black",
	fgnd = "white",
	height = 48,
	width = 48,
	...props
}: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			height={height}
			viewBox="0 0 240 240"
			width={width}
			{...props}
		>
			<circle cx="120" cy="120" r="120" fill={bgnd}></circle>
			<line
				x1="144"
				x2="176"
				y1="144"
				y2="176"
				stroke={fgnd}
				stroke-width="20"
				stroke-linecap="round"
			>
			</line>
			<circle
				cx="108"
				cy="108"
				r="42"
				fill="none"
				stroke={fgnd}
				stroke-width="20"
			>
			</circle>
		</svg>
	)
}
