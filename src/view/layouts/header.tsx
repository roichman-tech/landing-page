import { useState } from 'react';

import { Menu, X } from 'lucide-react';

import type { HeaderContent } from '@/app/i18n/home';

import { Button } from '@/view/components/ui/button';

import { BrFlag } from '@/assets/icons/br-flag';
import { UsFlag } from '@/assets/icons/us-flag';

interface HeaderProps {
  content: HeaderContent;
}

const flags = {
  us: UsFlag,
  br: BrFlag,
};

export function Header({ content }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Flag = flags[content.languageSwitch.flag] ?? BrFlag;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center">
          <img
            src="/images/logo.webp"
            fetchPriority="high"
            width={235}
            height={56}
            alt="Roichman Tech"
            className="h-8 md:h-10 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {content.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}

          <a href={content.ctaHref}>
            <Button variant="default" size="sm">
              {content.ctaLabel}
            </Button>
          </a>

          <a
            href={content.languageSwitch.href}
            className="text-base font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
            aria-label={content.languageSwitch.ariaLabel}
            title={content.languageSwitch.label}
          >
            <span aria-hidden className="inline-flex">
              <Flag className="size-5" />
            </span>
            <span className="sr-only">{content.languageSwitch.label}</span>
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={content.menuLabel}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            {content.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={content.languageSwitch.href}
              className="text-base font-semibold text-primary hover:text-primary/80 transition-colors py-2 flex items-center gap-2"
              aria-label={content.languageSwitch.ariaLabel}
              onClick={() => setIsMenuOpen(false)}
              title={content.languageSwitch.label}
            >
              <span aria-hidden className="inline-flex">
                <Flag className="size-6" />
              </span>
              <span className="sr-only">{content.languageSwitch.label}</span>
            </a>
            <a href={content.ctaHref} className="w-full">
              <Button
                variant="default"
                className="w-full mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {content.ctaLabel}
              </Button>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
