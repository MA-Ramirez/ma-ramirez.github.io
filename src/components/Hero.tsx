import { ArrowDown, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-2">
              <p className="text-accent font-medium tracking-wide uppercase text-sm">
                Applied Mathematics & Interdisciplinary Research
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight text-balance">
                Dr. Alexandra Chen
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Associate Professor at the Institute for Advanced Computational Sciences. 
              My research focuses on developing mathematical frameworks that bridge 
              theoretical foundations with real-world applications in computational biology, 
              climate modeling, and complex systems.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Cambridge, MA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:achen@institute.edu" className="hover:text-foreground transition-colors">
                  achen@institute.edu
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {[
                "Multi-scale Modeling",
                "Uncertainty Quantification",
                "Computational Biology",
                "Climate Modeling",
                "Network Analysis",
                "Scientific Machine Learning",
              ].map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-foreground hover:bg-accent/20 hover:border-accent/30 transition-colors cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-xl bg-card overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
                    alt="Dr. Alexandra Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-lg -z-10" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
