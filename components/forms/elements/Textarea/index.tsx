import {
	ComponentChildren,
	JSX,
} from "https://esm.sh/v128/preact@10.22.0/src/index.js"

import generateShortId from "../../../../utilities/generateShortId/index.ts"

export type Props = JSX.HTMLAttributes<HTMLTextAreaElement> & {
	children?: ComponentChildren
	labelledBy?: string | undefined
}

export default function Textarea({
	autocomplete,
	autocorrect: _autocorrect,
	children,
	form,
	id = generateShortId(),
	labelledBy,
	name,
	placeholder: _placeholder,
	value,
	...attrs
}: Props) {
	const content = value || children

	return (
		<textarea
			class="textarea"
			{...attrs}
			aria-labelledby={labelledBy}
			autocomplete={autocomplete}
			form={form}
			id={id}
			name={name}
		>
			{content}
		</textarea>
	)
}
