import Link from "next/link";

export default function Navigation() {
	return (
		<nav>
			<ul>
				{navItems.map((item) => (
					<li key={item.name}>
						<Link href={item.link}>{item.name}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
