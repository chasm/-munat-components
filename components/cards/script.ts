const div = document.querySelector(".cards")
const cards = [...document.querySelectorAll(".card")]

const tagset = new Set<string>()

for (const card of cards) {
	const link = card.querySelector("a")
	const tags = card.getAttribute("data-tags")

	tags?.split(",").forEach((tag) => tag && tagset.add(tag))

	if (link) {
		card.addEventListener("click", (event) => {
			if (link !== event.target && globalThis?.getSelection()?.isCollapsed) {
				link.click()
			}
		})
	}
}

const tags: Array<string> = [...tagset]

if (tags.length) {
	addFilterSection(tags)
}

function addFilterSection(tags: Array<string>) {
	const section = document.createElement("SECTION")

	section.classList.add("cards-filter")
	section.setAttribute("aria-label", "Filter by tag")

	const enabled = new Set()

	for (const tag of tags) {
		const button = document.createElement("BUTTON")

		button.setAttribute("type", "button")
		button.setAttribute("value", tag)
		button.innerText = tag

		button.addEventListener("click", function () {
			const toggled = button.getAttribute("data-toggled")

			if (toggled) {
				button.removeAttribute("data-toggled")
				enabled.delete(tag)
			} else {
				button.setAttribute("data-toggled", "on")
				enabled.add(tag)
			}

			if (enabled.size) {
				div?.setAttribute("data-filter", [...enabled].join(","))
			} else {
				div?.removeAttribute("data-filter")
			}

			for (const card of cards) {
				const tagLabels = [...card.querySelectorAll(".card-tag")]
				const tagsOn = [...enabled]
				const cardTags = card.getAttribute("data-tags")?.split(",") || []

				if (!tagsOn.length || tagsOn.some((t) => cardTags.includes(t))) {
					card.removeAttribute("aria-hidden")
					card.removeAttribute("style")
				} else {
					card.setAttribute("aria-hidden", "true")
					card.setAttribute("style", "display:none")
				}

				for (const label of tagLabels) {
					if (tagsOn.includes(label.getAttribute("data-tag"))) {
						label.setAttribute("data-active", "true")
					} else {
						label.removeAttribute("data-active")
					}
				}
			}
		})

		section.appendChild(button)
	}

	div?.prepend(section)
}
