import type { CcSvgProps as Props } from "../../../../types/index.ts"

export default function NoDerivatives({ fill, size, stroke }: Props) {
	return (
		<svg
			height={size}
			version="1.1"
			viewBox="0 0 64 64"
			width={size}
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3,31a29,29 0 1,1 0,2zm17-4h24m0,11H20"
				fill={fill}
				stroke-width="6"
				stroke={stroke}
			>
			</path>
		</svg>
	)
}
