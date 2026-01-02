import { ArrowRight, Code2, Shield, Zap } from "lucide-react";
import { Button } from "@/view/components/ui/button";

function Hero() {
	return (
		<section className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-20">
			{/* Background decorations */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div
					className="circuit-line h-48 top-32 left-[15%] animate-pulse-soft"
					style={{ animationDelay: "0s" }}
				/>
				<div
					className="circuit-line h-32 top-48 left-[25%] animate-pulse-soft"
					style={{ animationDelay: "0.5s" }}
				/>
				<div
					className="circuit-line h-64 top-24 right-[20%] animate-pulse-soft"
					style={{ animationDelay: "1s" }}
				/>
				<div
					className="circuit-line h-40 top-40 right-[30%] animate-pulse-soft"
					style={{ animationDelay: "1.5s" }}
				/>
				<div className="circuit-dot top-32 left-[15%]" />
				<div className="circuit-dot top-48 left-[25%]" />
				<div className="circuit-dot top-24 right-[20%]" />
				<div className="circuit-dot top-40 right-[30%]" />
			</div>

			<div className="container relative z-10">
				<div className="max-w-3xl mx-auto text-center">
					{/* Badge */}
					<div
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-sm text-muted-foreground mb-8 opacity-0 animate-fade-in"
						style={{ animationDelay: "0.1s" }}
					>
						<span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
						Engenharia de software com excelência
					</div>

					{/* Headline */}
					<h1
						className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in"
						style={{ animationDelay: "0.2s" }}
					>
						Software que funciona.{" "}
						<span className="text-gradient">Parceiro que entrega.</span>
					</h1>

					{/* Subheadline */}
					<p
						className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in"
						style={{ animationDelay: "0.3s" }}
					>
						Desenvolvemos soluções sob medida para o seu negócio, com foco em
						qualidade, prazos e resultados de longo prazo.
					</p>

					{/* CTA Buttons */}
					<div
						className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in"
						style={{ animationDelay: "0.4s" }}
					>
						<Button variant="hero" asChild>
							<a href="#contato">
								Iniciar Projeto
								<ArrowRight className="ml-2" size={18} />
							</a>
						</Button>
						<Button variant="hero-outline" asChild>
							<a href="#solucoes">Ver Soluções</a>
						</Button>
					</div>

					{/* Trust indicators */}
					<div
						className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-0 animate-fade-in"
						style={{ animationDelay: "0.5s" }}
					>
						<div className="flex items-center gap-3 text-muted-foreground">
							<div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
								<Code2 size={20} className="text-primary" />
							</div>
							<span className="text-sm font-medium">Código Limpo</span>
						</div>
						<div className="flex items-center gap-3 text-muted-foreground">
							<div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
								<Zap size={20} className="text-primary" />
							</div>
							<span className="text-sm font-medium">Entrega Rápida</span>
						</div>
						<div className="flex items-center gap-3 text-muted-foreground">
							<div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
								<Shield size={20} className="text-primary" />
							</div>
							<span className="text-sm font-medium">Suporte Contínuo</span>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom gradient fade */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
		</section>
	);
};

export default Hero;
