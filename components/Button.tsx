import { JSX } from "npm:preact"
import { IS_BROWSER } from "$fresh/runtime.ts"

type ButtonProps = {
	disabled?: boolean | undefined
	label: string
	type: string
}

export default function Button(props: ButtonProps): JSX.Element {
	const { disabled, label, type } = props

	return (
		<button
			disabled={!IS_BROWSER || disabled}
			type={type}
		>
			{label}
		</button>
	)
}
