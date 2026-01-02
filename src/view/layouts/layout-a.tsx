import type { ReactNode } from "react";

import { Footer } from "./footer-a";
import { Header } from "./header-a";

interface LayoutProps {
	children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
