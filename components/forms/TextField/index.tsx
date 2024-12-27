import type {
	ComponentChildren,
	JSX,
} from "https://esm.sh/v128/preact@10.22.0/src/index.js"

import Field, { type Props as FieldProps } from "../Field/index.tsx"
import TextInput, {
	type Props as TextInputProps,
} from "../elements/TextInput/index.tsx"
import Textarea from "../elements/Textarea/index.tsx"

import generateShortId from "../../../utilities/generateShortId/index.ts"

export type Props =
	& JSX.HTMLAttributes<HTMLInputElement>
	& JSX.HTMLAttributes<HTMLTextAreaElement>
	& FieldProps
	& {
		children?: ComponentChildren
		datalist?: JSX.HTMLAttributes<HTMLDataListElement> | undefined
	}

export default function TextField({
	children,
	cols,
	datalist = {} as JSX.HTMLAttributes<HTMLDataListElement>,
	help,
	helpProps,
	id = generateShortId(),
	label,
	labelProps,
	rows,
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
			{parseInt(`${rows}`) > 0
				? (
					<Textarea
						cols={cols}
						id={id}
						labelledBy={labelledBy}
						rows={rows}
						{...props}
					>
						{children}
					</Textarea>
				)
				: (
					<TextInput
						datalist={datalist}
						id={id}
						labelledBy={labelledBy}
						{...(props as TextInputProps)}
					/>
				)}
		</Field>
	)
}
