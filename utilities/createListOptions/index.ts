import type { Options } from "../../components/forms/types.ts"

export default function createListOptions(list: Options = []): string {
	return list.map((item) => `<option value="${item.value}"></option>`).join(
		"\n",
	)
}
