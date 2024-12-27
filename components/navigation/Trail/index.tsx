export type Props = JSX.HTMLAttributes<HTMLElement> & {
	links: Array<{ href: string; label: string }>
	noPage?: boolean | undefined
}

export default function Trail({ links = [], noPage }: Props) {
	return (
		<nav class="trail">
			<h2 class="sr-only">Breadcrumb trail</h2>
			<ul>
				{links.map(({ href, label }, index) =>
					index + 1 === links.length
						? (noPage ? null : (
							<li>
								<span class="this-page">{label}</span>
							</li>
						))
						: (
							<li>
								<a href={href}>{label}</a>
							</li>
						)
				)}
			</ul>
		</nav>
	)
}
