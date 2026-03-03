import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const repositories = [
  {
    name: "MultiScale.jl",
    description: "A Julia package for multi-scale mathematical modeling with automatic differentiation and GPU acceleration.",
    language: "Julia",
    stars: 342,
    forks: 48,
    tags: ["Scientific Computing", "GPU"],
    url: "https://github.com/achen/multiscale-jl",
  },
  {
    name: "ClimateUQ",
    description: "Uncertainty quantification tools for climate models. Implements ensemble methods and Bayesian inference.",
    language: "Python",
    stars: 186,
    forks: 31,
    tags: ["Climate", "UQ", "Bayesian"],
    url: "https://github.com/achen/climateuq",
  },
  {
    name: "GraphNetworks",
    description: "Efficient algorithms for analyzing complex networks with applications to biological systems.",
    language: "Python",
    stars: 127,
    forks: 22,
    tags: ["Networks", "Algorithms"],
    url: "https://github.com/achen/graphnetworks",
  },
  {
    name: "StochPDE",
    description: "Numerical solvers for stochastic partial differential equations with adaptive mesh refinement.",
    language: "C++",
    stars: 89,
    forks: 15,
    tags: ["SPDE", "Numerical Methods"],
    url: "https://github.com/achen/stochpde",
  },
];

const languageColors: Record<string, string> = {
  Julia: "bg-purple-500",
  Python: "bg-blue-500",
  "C++": "bg-pink-500",
};

const Code = () => {
  return (
    <section id="code" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="section-title mb-4">Open Source Code</h2>
          <p className="section-subtitle">
            Research software and tools developed by our group, freely available on GitHub.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {repositories.map((repo, index) => (
            <Card 
              key={index} 
              className="bg-card border-border/50 card-hover group"
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                        {repo.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`w-3 h-3 rounded-full ${languageColors[repo.language]}`} />
                        <span className="text-xs text-muted-foreground">{repo.language}</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {repo.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    <span>{repo.forks}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="accent" size="lg">
            <Github className="h-5 w-5 mr-2" />
            View All Repositories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Code;
