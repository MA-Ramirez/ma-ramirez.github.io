import { useState } from "react";
import { FileText, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const publications = [
  {
    year: 2024,
    title: "Bridging scales in biological systems through adaptive mathematical frameworks",
    authors: "Chen, A., Williams, R., & Patel, S.",
    journal: "Nature Computational Science",
    volume: "4(3), 234-248",
    tags: ["Multi-scale Modeling", "Biology"],
    doi: "10.1038/s43588-024-00234-x",
  },
  {
    year: 2024,
    title: "Uncertainty quantification in climate models: A mathematical perspective",
    authors: "Chen, A., & Thompson, J.",
    journal: "Journal of Computational Physics",
    volume: "498, 112456",
    tags: ["Climate", "UQ"],
    doi: "10.1016/j.jcp.2024.112456",
  },
  {
    year: 2023,
    title: "Graph-based methods for complex network analysis in interdisciplinary research",
    authors: "Chen, A., Liu, M., & Garcia, E.",
    journal: "SIAM Review",
    volume: "65(4), 891-923",
    tags: ["Networks", "Graph Theory"],
    doi: "10.1137/22M1234567",
  },
  {
    year: 2023,
    title: "Mathematical foundations of machine learning for scientific computing",
    authors: "Chen, A., & Kumar, V.",
    journal: "Acta Numerica",
    volume: "32, 1-87",
    tags: ["ML", "Scientific Computing"],
    doi: "10.1017/S0962492923000012",
  },
  {
    year: 2022,
    title: "Stochastic PDEs in population dynamics: Theory and applications",
    authors: "Chen, A., Roberts, B., & Park, H.",
    journal: "Bulletin of Mathematical Biology",
    volume: "84(5), 112",
    tags: ["Stochastic", "Population Dynamics"],
    doi: "10.1007/s11538-022-01012-3",
  },
  {
    year: 2022,
    title: "Numerical methods for high-dimensional integration in computational finance",
    authors: "Chen, A., & Mueller, K.",
    journal: "Mathematics of Computation",
    volume: "91(334), 789-812",
    tags: ["Numerical Methods", "Finance"],
    doi: "10.1090/mcom/3712",
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
            Selected peer-reviewed publications in applied mathematics, computational science, and interdisciplinary research.
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
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto flex items-center gap-1 text-sm text-accent hover:underline"
                    >
                      <FileText className="h-4 w-4" />
                      DOI
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">
            View All Publications on Google Scholar
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Publications;
