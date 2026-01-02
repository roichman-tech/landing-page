import type { SolutionsContent } from '@/app/i18n/home';

interface SolutionsProps {
  content: SolutionsContent;
}

export function Solutions({ content }: SolutionsProps) {
  return (
    <section id={content.id} className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            {content.badge}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {content.heading}
          </h2>
          <p className="text-lg text-muted-foreground">{content.subheading}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.items.map((solution, index) => (
            <article
              key={solution.title}
              className="group relative p-8 rounded-2xl gradient-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-300">
                <solution.icon size={28} className="text-primary-foreground" />
              </div>

              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>

              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
