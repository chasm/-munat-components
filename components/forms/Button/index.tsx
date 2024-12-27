import type {
	ComponentChildren,
	JSX,
} from "https://esm.sh/v128/preact@10.22.0/src/index.js"

export type Props = JSX.HTMLAttributes<HTMLButtonElement> & {
	children?: ComponentChildren | undefined
	label?: string | undefined
}

export default function Button(
	{ children, label, type = "button", ...props }: Props,
) {
	return (
		<button class={`button button-${type}`} {...props} type={type}>
			{children || label}
		</button>
	)
}
