import type { CcSvgProps, LicenseAttributes } from "../../../types/index.ts"

import ByAttribution from "./ByAttribution/index.tsx"
import CreativeCommons from "./CreativeCommons/index.tsx"
import NoDerivatives from "./NoDerivatives/index.tsx"
import NonCommercial from "./NonCommercial/index.tsx"
import PublicDomainDedication from "./PublicDomainDedication/index.tsx"
import ShareAlike from "./ShareAlike/index.tsx"

import getLicense from "./getLicense/index.ts"

export type Props = CcSvgProps & LicenseAttributes

export default function CCLicense({
	byAttribution,
	fill = "var(--cc-license-fill-color, #fafafa)",
	noDerivatives,
	nonCommercial,
	shareAlike,
	size = "2rem",
	stroke = "var(--cc-license-stroke-color, #131315)",
	...attrs
}: Props) {
	const { href, license } = getLicense({
		byAttribution,
		noDerivatives,
		nonCommercial,
		shareAlike,
	})

	return (
		<div class="cc-license" {...attrs}>
			<a
				aria-label={`Creative Commons ${license}`}
				class="cc-license-link image"
				href={href}
				rel="license"
			>
				<CreativeCommons
					fill={fill}
					license={license}
					size={size}
					stroke={stroke}
				/>
				{byAttribution
					? <ByAttribution fill={fill} size={size} stroke={stroke} />
					: <PublicDomainDedication fill={fill} size={size} stroke={stroke} />}
				{byAttribution && nonCommercial
					? <NonCommercial fill={fill} size={size} stroke={stroke} />
					: null}
				{byAttribution && noDerivatives
					? <NoDerivatives fill={fill} size={size} stroke={stroke} />
					: byAttribution && shareAlike
					? <ShareAlike fill={fill} size={size} stroke={stroke} />
					: null}
			</a>
		</div>
	)
}
