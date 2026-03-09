import { useState } from "react";
import { Download, Mail, GraduationCap, Briefcase, Presentation, Award, Users, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    degree: "Postdoctoral Researcher",
    institution: "Max Planck Institute for Evolutionary Anthropology",
    year: "",
  },
  {
    degree: "Ph.D. in Mathematics",
    institution: "Max Planck Institute for Mathematics in the Sciences and Max Planck Institute for Evolutionary Biology",
    year: "",
    details: "Summa Cum Laude",
  },
  {
    degree: "Research Internship*",
    institution: "Ecole Polytechnique, Paris - EconophysiX",
    year: "",
    details: "",
  },
  {
    degree: "B.S. Major in Physics and Minor in Economics",
    institution: "Universidad de los Andes",
    year: "",
    details: "Thesis with Distinction",
  },
  {
    degree: "International Student",
    institution: "Australian National University",
    year: "",
  },
];

const positions = [
  {
    title: "Santa Fe Institute",
    institution: "Santa Fe, USA",
    period: "2026",
  },
  {
    title: "Center for Computational and Theoretical Biology",
    institution: "Würzburg, Germany",
    period: "2025",
  },
  {
    title: "Max Planck Institute for Human Development",
    institution: "Berlin, Germany",
    period: "2024",
  },
  {
    title: "Informatics Institute of the University of Amsterdam",
    institution: "Amsterdam, Netherlands",
    period: "2024",
  },
  {
    title: "University of Leipzig",
    institution: "Leipzig, Germany",
    period: "2024",
  },
  {
    title: "Universidad de los Andes",
    institution: "Bogota, Colombia",
    period: "2024",
  },
  {
    title: "Centre for Complexity Science of the Imperial College London",
    institution: "London, UK",
    period: "2022",
  },
];

const awards = [
  { name: "Summa Cum Laude Doctoral Thesis Distinction", year: "2026" },
  { name: "Complex Systems Summer School at the Santa Fe Institute", year: "2025" },
  { name: "Best Talk Award at annual symposium MPI EvolBio", year: "2022" },
  { name: "MPI MiS & MPI EvolBio Fellowship", year: "2021" },
  { name: "Bachelor's Thesis Distinction", year: "2020" },
  { name: "69th Nobel Laurate Meeting in Physics", year: "2019" },
  { name: "Science at the Shine Dome invited by ANU", year: "2019" },
  { name: "Scholarship 7th Congress of Scientific Python", year: "2019" },
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
          <a href="mailto:alejandra_ramirez@eva.mpg.de">
            <Button variant="hero" size="lg">
              <Mail className="h-4 w-4 mr-2" />
              Request Full CV
            </Button>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="bg-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold">Education and Academic Positions</h3>
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
                  <Presentation className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">Invited Talks</h3>
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
                "Theoretical Modelling",
                "Game Theory",
                "Evolutionary Dynamics",
                "Mechanism Design",
                "Cultural Evolution",
                "Nonlinear Dynamics",
                "Agent-based Modelling",
                "Complex Systems",
                "Open Source Software",
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
