import { Code, Lightbulb, MessageSquare, Rocket } from "lucide-react";

const steps = [
	{
		icon: MessageSquare,
		number: "01",
		title: "Entendimento",
		description:
			"Ouvimos suas necessidades, mapeamos desafios e definimos objetivos claros para o projeto.",
	},
	{
		icon: Lightbulb,
		number: "02",
		title: "Planejamento",
		description:
			"Criamos um roadmap detalhado com entregas incrementais, prazos realistas e comunicação transparente.",
	},
	{
		icon: Code,
		number: "03",
		title: "Desenvolvimento",
		description:
			"Construímos o software com código limpo, testes automatizados e revisões constantes de qualidade.",
	},
	{
		icon: Rocket,
		number: "04",
		title: "Lançamento & Suporte",
		description:
			"Entregamos o produto final e permanecemos ao seu lado para evoluções e manutenção contínua.",
	},
];

export function Process() {
	return (
		<section id="processo" className="py-24 md:py-32 bg-secondary/30">
			<div className="container">
				<div className="max-w-2xl mx-auto text-center mb-16">
					<span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
						Nosso Processo
					</span>
					<h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
						Previsibilidade em cada etapa
					</h2>
					<p className="text-lg text-muted-foreground">
						Um processo estruturado que garante resultados consistentes e
						elimina surpresas.
					</p>
				</div>

				<div className="relative max-w-4xl mx-auto">
					<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

					<div className="space-y-12 md:space-y-0">
						{steps.map((step, index) => (
							<div
								key={step.number}
								className={`relative md:grid md:grid-cols-2 md:gap-12 items-center opacity-0 animate-fade-in ${
									index % 2 === 0 ? "" : "md:direction-rtl"
								}`}
								style={{ animationDelay: `${index * 0.15}s` }}
							>
								<div
									className={`${index % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12 md:text-left"}`}
								>
									<div
										className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
									>
										<span className="text-4xl font-heading font-bold text-primary/70">
											{step.number}
										</span>
									</div>
									<h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
										{step.title}
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										{step.description}
									</p>
								</div>

								<div
									className={`hidden md:flex ${index % 2 === 0 ? "md:order-2 justify-start pl-12" : "justify-end pr-12"}`}
								>
									<div className="relative">
										<div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center shadow-soft">
											<step.icon
												size={28}
												className="text-primary-foreground"
											/>
										</div>
										<div
											className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm hidden md:block"
											style={{
												left: index % 2 === 0 ? "-2.5rem" : "auto",
												right: index % 2 === 1 ? "-2.5rem" : "auto",
											}}
										/>
									</div>
								</div>

								<div className="md:hidden flex justify-center my-6">
									<div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center shadow-soft">
										<step.icon size={28} className="text-primary-foreground" />
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
