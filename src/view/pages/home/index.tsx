import { Layout } from "@/view/layouts/layout";
import { CTA } from "@/view/pages/home/components/cta";
import { Hero } from "@/view/pages/home/components/hero";
import { Process } from "@/view/pages/home/components/process";
import { Solutions } from "@/view/pages/home/components/solutions";

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
