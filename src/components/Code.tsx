import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const repositories = [
  {
    name: "Agent based modelling and dynamical systems in Julia",
    description: "Material for a full course on agent based modelling and nonlinear dynamics in Julia.",
    language: "Julia",
    tags: ["Course", "ABM", "Nonlinear Dynamics", "Complex Systems"],
    url: "https://github.com/JuliaDynamics/NonlinearDynamicsComplexSystemsCourse",
  },
  {
    name: "Simulating branching processes in Python",
    description: "Tutorial on how to simulate branching processes and how to calculate extinction probabilities.",
    language: "Python",
    tags: ["Tutorial", "Stochastic Processes"],
    url: "https://github.com/MA-Ramirez/SimulatingBranchingProcesses",
  },
  {
    name: "Reproducible workflows for scientific computing",
    description: "Software carpentries workshop on reproducible data processing and analysis pipelines with R and Git.",
    language: "R",
    tags: ["Workshop", "Reproducible Research", "Data Processing and Analysis"],
    url: "https://babeheim.com/2025-11-24-leipzig/",
  },
  {
    name: "Blog Posts: Coding practical guide",
    description: ["Pratical guide: how to contribute to open source Julia projects.","Guide: LaTeX in VSCode."],
    language: "Blog Posts (English - Spanish)",
    tags: ["Blog Posts", "Open Source Contribution", "LaTeX"],
    url: "https://github.com/MA-Ramirez/BlogPosts",
  },
];

const languageColors: Record<string, string> = {
  Julia: "bg-purple-500",
  Python: "bg-green-600",
  R: "bg-yellow-500",
  "Blog Posts (English - Spanish)": "bg-gray-500",
};

const Code = () => {
  return (
    <section id="code" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="section-title mb-4">Open Source Code</h2>
          <p className="section-subtitle">
            Open source software tutorials and tools, freely available on GitHub.
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
                {Array.isArray(repo.description) ? (
                  <ul className="text-sm text-muted-foreground mb-4 leading-relaxed list-disc pl-5 space-y-1">
                    {repo.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {repo.description}
                 </p>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {/* <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {repo.stars !== undefined && <span>{repo.stars}</span>}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    {repo.forks !== undefined && <span>{repo.forks}</span>}
                  </div>
                </div>
                */}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="accent" size="lg">
            <a
              href="https://github.com/MA-Ramirez"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
            <Github className="h-5 w-5 mr-2" />
            View All Repositories
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Code;
