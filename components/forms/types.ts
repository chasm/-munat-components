import type { JSX } from "https://esm.sh/v128/preact@10.22.0/src/index.js"

export type Dataset = Record<string, string | number | boolean>

export type FormValidation = "default" | "fallback" | "operations"

export type Help =
	& JSX.HTMLAttributes<HTMLDivElement>
	& {
		dataset?: Dataset
		for?: string | undefined | null
		form: string
		help?: string | undefined | null
		name?: string | undefined | null
	}

export type Label =
	& JSX.HTMLAttributes<HTMLLabelElement>
	& {
		dataset?: Dataset
		for?: string | undefined | null
		form: string
		help?: string | undefined | null
		helpAttributes?: Help | undefined | null
		helpId?: string | undefined | null
		id: string
		label?: string | undefined | null
		name?: string | undefined | null
		required?: boolean | undefined | null
	}

export type Option = {
	alpha2?: string | undefined | null
	alpha3?: string | undefined | null
	checked?: boolean | string | undefined | null
	"class:list"?:
		| Record<string, boolean>
		| Record<string | number | symbol, unknown>
		| Iterable<string>
		| Iterable<unknown>
		| string
	form?: string | undefined | null
	groupLabelId?: string | undefined | null
	id?: string | undefined | null
	label: string
	name?: string | undefined | null
	numeric?: string | number | undefined | null
	options?: Options | undefined | null
	readonly?: boolean | string | undefined | null
	required?: boolean | string | undefined | null
	type?: never
	value?: string | number | undefined | null
	wrapper?: Partial<Label>
}

export type Options = Array<Option>
