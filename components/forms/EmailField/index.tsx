import type { JSX } from "https://esm.sh/v128/preact@10.22.0/src/index.js"

import Field, { type Props as FieldProps } from "../Field/index.tsx"
import EmailInput, {
	type Props as EmailInputProps,
} from "../elements/EmailInput/index.tsx"

import generateShortId from "../../../utilities/generateShortId/index.ts"

export type Props =
	& JSX.HTMLAttributes<HTMLInputElement>
	& FieldProps
	& {
		datalist?: JSX.HTMLAttributes<HTMLDataListElement> | undefined
	}

export default function TextField({
	datalist = {} as JSX.HTMLAttributes<HTMLDataListElement>,
	help,
	helpProps,
	id = generateShortId(),
	label,
	labelProps,
	wrapperProps,
	...props
}: Props) {
	const labelledBy = `${label ? `${id}-label` : ""} ${help ? `${id}-help` : ""}`
		.trim()

	return (
		<Field
			{...props}
			help={help}
			helpProps={helpProps}
			id={id}
			label={label}
			labelProps={labelProps}
			wrapperProps={wrapperProps}
		>
			<EmailInput
				datalist={datalist}
				id={id}
				labelledBy={labelledBy}
				{...(props as EmailInputProps)}
			/>
		</Field>
	)
}
