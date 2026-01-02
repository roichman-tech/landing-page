import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Solutions from "@/components/Solutions";

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
