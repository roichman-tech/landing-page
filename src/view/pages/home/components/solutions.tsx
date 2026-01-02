import {
	BarChart3,
	Cloud,
	Database,
	Globe,
	ShoppingCart,
	Smartphone,
} from "lucide-react";

const solutions = [
	{
		icon: Globe,
		title: "Sistemas Web",
		description:
			"Aplicações web robustas e escaláveis para digitalizar processos e aumentar a eficiência do seu negócio.",
	},
	{
		icon: Smartphone,
		title: "Apps Mobile",
		description:
			"Aplicativos nativos e híbridos para iOS e Android, com foco em usabilidade e performance.",
	},
	{
		icon: Database,
		title: "Integrações & APIs",
		description:
			"Conectamos seus sistemas existentes, automatizando fluxos e eliminando trabalho manual repetitivo.",
	},
	{
		icon: BarChart3,
		title: "Dashboards & BI",
		description:
			"Painéis analíticos que transformam dados em insights acionáveis para tomada de decisão.",
	},
	{
		icon: ShoppingCart,
		title: "E-commerce",
		description:
			"Lojas virtuais completas e personalizadas, integradas a meios de pagamento e logística.",
	},
	{
		icon: Cloud,
		title: "Infraestrutura Cloud",
		description:
			"Migração e gestão de ambientes em nuvem com foco em segurança, disponibilidade e custo-benefício.",
	},
];

function Solutions() {
	return (
		<section id="solucoes" className="py-24 md:py-32 bg-background">
			<div className="container">
				{/* Section header */}
				<div className="max-w-2xl mx-auto text-center mb-16">
					<span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
						Soluções
					</span>
					<h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
						Tecnologia sob medida para cada desafio
					</h2>
					<p className="text-lg text-muted-foreground">
						Desenvolvemos soluções que se adaptam à sua realidade, não o
						contrário.
					</p>
				</div>

				{/* Solutions grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{solutions.map((solution, index) => (
						<article
							key={solution.title}
							className="group relative p-8 rounded-2xl gradient-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							{/* Icon */}
							<div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-300">
								<solution.icon size={28} className="text-primary-foreground" />
							</div>

							{/* Content */}
							<h3 className="font-heading text-xl font-semibold text-foreground mb-3">
								{solution.title}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{solution.description}
							</p>

							{/* Hover accent line */}
							<div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Solutions;
