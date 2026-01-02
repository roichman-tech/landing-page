import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main>
				<Hero />
				<Solutions />
				<Process />
				<CTA />
			</main>
			<Footer />
		</div>
	);
};

export default Index;
