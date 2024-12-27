import type { JSX } from "https://esm.sh/v128/preact@10.22.0/src/index.js"

import type { Options } from "../../types.ts"

import createListOptions from "../../../../utilities/createListOptions/index.ts"
import generateShortId from "../../../../utilities/generateShortId/index.ts"

export type Props = JSX.HTMLAttributes<HTMLInputElement> & {
	datalist?: JSX.HTMLAttributes<HTMLDataListElement> | undefined
	labelledBy?: string | undefined
	list?: Options | undefined
}

export default function TextInput({
	autocorrect: _autocorrect,
	datalist = {},
	id = generateShortId(),
	inputmode = "text",
	labelledBy,
	list,
	placeholder: _placeholder,
	type: _type,
	...props
}: Props) {
	const listId = `${id}_list`
	const lst = list ? { list: listId } : {}

	return (
		<>
			<input
				aria-labelledby={labelledBy}
				class="text-input"
				{...props}
				id={id}
				inputmode={inputmode}
				{...lst}
				type="text"
			/>
			{list
				? (
					<datalist class="datalist" {...datalist} id={listId}>
						{createListOptions(list)}
					</datalist>
				)
				: null}
		</>
	)
}
