import Layout from "@/view/layouts/Layout";
import CTA from "@/view/pages/home/components/cta";
import Hero from "@/view/pages/home/components/hero";
import Process from "@/view/pages/home/components/process";
import Solutions from "@/view/pages/home/components/solutions";

function Index() {
	return (
		<Layout>
			<Hero />
			<Solutions />
			<Process />
			<CTA />
		</Layout>
	);
};

export default Index;
