import type {
	ComponentChildren,
	JSX,
} from "https://esm.sh/v128/preact@10.22.0/src/index.js"

export type Props =
	& JSX.HTMLAttributes<HTMLInputElement>
	& JSX.HTMLAttributes<HTMLTextAreaElement>
	& {
		children?: ComponentChildren | undefined
		help?: ComponentChildren | string | undefined
		helpProps?: JSX.HTMLAttributes<HTMLDivElement> | undefined
		label?: ComponentChildren | string | undefined
		labelProps?: JSX.HTMLAttributes<HTMLDivElement> | undefined
		wrapperProps?: JSX.HTMLAttributes<HTMLLabelElement> | undefined
	}

export default function Field({
	children,
	help,
	helpProps = {},
	id,
	label,
	labelProps = {},
	wrapperProps = {},
	...props
}: Props) {
	const helpId = help ? `${id}-help` : ""
	const labelId = label ? `${id}-label` : ""
	// const labelledBy = `${labelId} ${helpId}`.trim()

	return (
		<label class="field-wrapper" {...wrapperProps}>
			{label
				? <div class="field-label" id={labelId} {...labelProps}>{label}</div>
				: undefined}
			{help
				? (
					<div
						aria-live="assertive"
						class="field-help"
						id={helpId}
						role="status"
						{...helpProps}
					>
						{help}
					</div>
				)
				: undefined}
			{children}
		</label>
	)
}
