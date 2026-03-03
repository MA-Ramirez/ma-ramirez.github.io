import { useState } from "react";
import { Download, GraduationCap, Briefcase, Award, Users, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    degree: "Ph.D. in Applied Mathematics",
    institution: "Massachusetts Institute of Technology",
    year: "2012",
    details: "Thesis: Multi-scale methods for complex biological systems",
  },
  {
    degree: "M.S. in Mathematics",
    institution: "Stanford University",
    year: "2008",
  },
  {
    degree: "B.S. in Mathematics & Physics",
    institution: "University of California, Berkeley",
    year: "2006",
    details: "Summa Cum Laude",
  },
  {
    degree: "Summer Research Fellow",
    institution: "CERN",
    year: "2005",
    details: "Particle physics simulation research",
  },
  {
    degree: "Exchange Program",
    institution: "ETH Zürich",
    year: "2004",
  },
];

const positions = [
  {
    title: "Associate Professor",
    institution: "Institute for Advanced Computational Sciences",
    period: "2019 – Present",
  },
  {
    title: "Assistant Professor",
    institution: "Institute for Advanced Computational Sciences",
    period: "2014 – 2019",
  },
  {
    title: "Postdoctoral Fellow",
    institution: "Princeton University",
    period: "2012 – 2014",
  },
  {
    title: "Research Associate",
    institution: "Los Alamos National Laboratory",
    period: "2011 – 2012",
  },
  {
    title: "Graduate Research Assistant",
    institution: "MIT",
    period: "2008 – 2011",
  },
];

const awards = [
  { name: "NSF CAREER Award", year: "2017" },
  { name: "Sloan Research Fellowship", year: "2016" },
  { name: "SIAM Outstanding Paper Prize", year: "2015" },
  { name: "AWM Dissertation Prize", year: "2013" },
  { name: "MIT Presidential Fellowship", year: "2008" },
  { name: "NSF Graduate Research Fellowship", year: "2007" },
  { name: "Barry Goldwater Scholarship", year: "2005" },
  { name: "Berkeley Chancellor's Prize", year: "2004" },
];

const INITIAL_ITEMS = 4;

const CV = () => {
  const [showAllEducation, setShowAllEducation] = useState(false);
  const [showAllPositions, setShowAllPositions] = useState(false);
  const [showAllAwards, setShowAllAwards] = useState(false);

  const displayedEducation = showAllEducation ? education : education.slice(0, INITIAL_ITEMS);
  const displayedPositions = showAllPositions ? positions : positions.slice(0, INITIAL_ITEMS);
  const displayedAwards = showAllAwards ? awards : awards.slice(0, INITIAL_ITEMS);

  return (
    <section id="cv" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <h2 className="section-title mb-4">Curriculum Vitae</h2>
            <p className="section-subtitle">
              Academic background, positions, and honors.
            </p>
          </div>
          <Button variant="hero" size="lg">
            <Download className="h-4 w-4 mr-2" />
            Download Full CV
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="bg-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-6">
                {displayedEducation.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-border">
                    <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-accent" />
                    <div className="text-sm text-accent font-medium mb-1">{edu.year}</div>
                    <h4 className="font-heading font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    {edu.details && (
                      <p className="text-muted-foreground text-sm italic mt-1">{edu.details}</p>
                    )}
                  </div>
                ))}
              </div>
              {education.length > INITIAL_ITEMS && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-4 w-full text-muted-foreground hover:text-foreground"
                  onClick={() => setShowAllEducation(!showAllEducation)}
                >
                  {showAllEducation ? (
                    <>
                      <ChevronUp className="h-4 w-4 mr-2" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4 mr-2" />
                      Show All ({education.length - INITIAL_ITEMS} more)
                    </>
                  )}
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Positions */}
          <Card className="bg-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">Academic Positions</h3>
              </div>
              <div className="space-y-6">
                {displayedPositions.map((pos, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-border">
                    <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                    <div className="text-sm text-primary font-medium mb-1">{pos.period}</div>
                    <h4 className="font-heading font-semibold text-foreground">{pos.title}</h4>
                    <p className="text-muted-foreground text-sm">{pos.institution}</p>
                  </div>
                ))}
              </div>
              {positions.length > INITIAL_ITEMS && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-4 w-full text-muted-foreground hover:text-foreground"
                  onClick={() => setShowAllPositions(!showAllPositions)}
                >
                  {showAllPositions ? (
                    <>
                      <ChevronUp className="h-4 w-4 mr-2" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4 mr-2" />
                      Show All ({positions.length - INITIAL_ITEMS} more)
                    </>
                  )}
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Awards */}
          <Card className="bg-card border-border/50 lg:col-span-2">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold">Selected Awards & Honors</h3>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {displayedAwards.map((award, index) => (
                  <div 
                    key={index} 
                    className="p-4 bg-muted/50 rounded-lg border border-border/50 hover:border-accent/30 transition-colors"
                  >
                    <div className="text-sm text-accent font-medium mb-1">{award.year}</div>
                    <h4 className="font-heading font-medium text-foreground text-sm">
                      {award.name}
                    </h4>
                  </div>
                ))}
              </div>
              {awards.length > INITIAL_ITEMS && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-4 w-full text-muted-foreground hover:text-foreground"
                  onClick={() => setShowAllAwards(!showAllAwards)}
                >
                  {showAllAwards ? (
                    <>
                      <ChevronUp className="h-4 w-4 mr-2" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4 mr-2" />
                      Show All ({awards.length - INITIAL_ITEMS} more)
                    </>
                  )}
                </Button>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Research Interests */}
        <Card className="bg-card border-border/50 mt-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold">Research Interests</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "Multi-scale Modeling",
                "Uncertainty Quantification",
                "Computational Biology",
                "Climate Modeling",
                "Network Analysis",
                "Stochastic PDEs",
                "Scientific Machine Learning",
                "Numerical Analysis",
              ].map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-colors cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CV;
