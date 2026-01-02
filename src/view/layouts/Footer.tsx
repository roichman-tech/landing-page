function Footer() {
	const currentYear = new Date().getFullYear();

	return (	
		<footer className="py-12 bg-secondary/30 border-t border-border/50">
			<div className="container">
				<div className="flex flex-col md:flex-row items-center justify-between gap-8">
					{/* Logo & Info */}
					<div className="flex flex-col items-center md:items-start gap-4">
						<img
							src="/images/logo.webp"
							width={235}
							height={56}
							alt="Roichman Tech"
							className="h-8 w-auto"
						/>
						<p className="text-sm text-muted-foreground text-center md:text-left">
							Engenharia de software com excelência.
							<br />
							Nova Russas, Ceará · Clientes no mundo todo.
						</p>
					</div>

					{/* Contact links */}
					<div className="flex flex-col items-center md:items-end gap-3">
						<h3 className="text-sm font-semibold text-foreground">Contato</h3>
						<div className="flex flex-col items-center md:items-end gap-1 text-sm text-muted-foreground">
							<a
								href="mailto:contact@roichman.tech"
								className="hover:text-primary transition-colors"
							>
								contact@roichman.tech
							</a>
							<a
								href="mailto:matheus@roichman.tech"
								className="hover:text-primary transition-colors"
							>
								matheus@roichman.tech
							</a>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="my-8 h-px bg-border" />

				{/* Copyright */}
				<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
					<p>© {currentYear} Roichman Tech. Todos os direitos reservados.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
