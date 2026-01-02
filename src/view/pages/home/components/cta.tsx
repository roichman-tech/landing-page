import { Mail } from "lucide-react";

import { Button } from "@/view/components/ui/button";

export function CTA() {
	return (
		<section id="contato" className="py-24 md:py-32 bg-background relative overflow-hidden">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
			</div>

			<div className="container relative z-10">
				<div className="max-w-3xl mx-auto text-center">
					<span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
						Pronto para Começar?
					</span>
					<h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
						Transforme sua ideia em software de qualidade
					</h2>
					<p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
						Entre em contato para uma conversa inicial sem compromisso. Queremos entender seu desafio e mostrar como podemos ajudar.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
						<Button variant="hero" asChild>
							<a href="mailto:contact@roichman.tech">
								<Mail size={18} />
								contact@roichman.tech
							</a>
						</Button>
					</div>

					<p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
						<span className="w-2 h-2 rounded-full bg-accent" />
						Respondemos em até 24 horas
					</p>
				</div>
			</div>
		</section>
	);
}
