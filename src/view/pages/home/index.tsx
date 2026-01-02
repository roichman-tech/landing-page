import { Layout } from "@/view/layouts/layout-a";
import { CTA } from "@/view/pages/home/components/CTA";
import { Hero } from "@/view/pages/home/components/Hero";
import { Process } from "@/view/pages/home/components/Process";
import { Solutions } from "@/view/pages/home/components/Solutions";

export function HomePage() {
	return (
		<Layout>
			<Hero />
			<Solutions />
			<Process />
			<CTA />
		</Layout>
	);
}
