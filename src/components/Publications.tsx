import { useState } from "react";
import { FileText, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const publications = [
  {
    year: 2025,
    title: "Non-coercive extortion in game theory",
    authors: "Ramirez, M.A., Nagel, R., Wolpert, D., & Jost, J.",
    journal: "Preprint",
    volume: "12, 2025",
    tags: ["Game Theory", "Mechanism Design"],
    link: "https://arxiv.org/pdf/2507.21795",
  },
  {
    year: 2025,
    title: "Chaos and noise in evolutionary game dynamics",
    authors: "Ramirez, M.A., Datseris,G. & Traulsen, A.",
    journal: "Preprint",
    volume: "24, 2025",
    tags: ["Evolutionary Game Theory", "Population Dynamics", "Nonlinear Dynamics"],
    link: "https://arxiv.org/pdf/2504.00028",
  },
  {
    year: 2023,
    title: "Game manipulators - the strategic implications of binding contracts",
    authors: "Ramirez, M.A., Kolumbus, Y., Nagel, R., Wolpert, D. & Jost, J.",
    journal: "Preprint",
    volume: "28, 2023",
    tags: ["Game Theory", "Evolutionary Game Theory", "Mechanism Design", "Algorithmic Game Theory"],
    link: "https://arxiv.org/pdf/2311.10586",
  },
  {
    year: 2023,
    title: "Diversity enables the jump towards cooperation for the Traveler’s Dilemma",
    authors: "Ramirez, M.A., Smerlak, M., Traulsen, A. & Jost, J.",
    journal: "Scientific Reports",
    volume: "13, 114",
    tags: ["Game Theory", "Evolutionary Game Theory", "Population Dynamics", "Social Dilemmas"],
    link: "https://www.nature.com/articles/s41598-023-28600-5",
  },
  {
    year: 2020,
    title: "Cost calculation of an altruistic act for the plasmids-in-bacteria system through probabilistic simulations",
    authors: "Ramirez, M.A.",
    journal: "Seneca institutional repository",
    volume: "95, 2020",
    tags: ["Theoretical Modelling", "Mathematical Biology"],
    link: "https://repositorio.uniandes.edu.co/server/api/core/bitstreams/32a1d1fb-5317-40c0-9696-42d55212d87e/content",
  },
];

const allTags = Array.from(new Set(publications.flatMap((p) => p.tags)));

const Publications = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPublications = selectedTag
    ? publications.filter((p) => p.tags.includes(selectedTag))
    : publications;

  return (
    <section id="publications" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="section-title mb-4">Publications</h2>
          <p className="section-subtitle">
            Selected peer-reviewed publications in game theory, mathematical modelling, and interdisciplinary research.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={selectedTag === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTag(null)}
          >
            All
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((pub, index) => (
            <article
              key={index}
              className="group p-6 bg-card rounded-lg border border-border/50 hover:border-accent/30 hover:shadow-card transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/5 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-accent">{pub.year}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{pub.journal}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {pub.authors} — <span className="italic">{pub.volume}</span>
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {pub.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto flex items-center gap-1 text-sm text-accent hover:underline"
                      >
                        <FileText className="h-4 w-4" />
                        Paper
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/*<div className="mt-8 text-center">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://www.researchgate.net/profile/Maria-Ramirez-262"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
            View All Publications
            <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
        */}
      </div>
    </section>
  );
};

export default Publications;
