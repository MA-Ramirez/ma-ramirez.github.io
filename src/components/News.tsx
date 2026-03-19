import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const newsItems = [
  {
    date: "2026",
    title: "Summa cum laude - Successful Dissertation Defense",
    description: "Successfully defended dissertation in Mathematics. Doctoral research conducted at the Max Planck Institute for Mathematics in the Sciences and Max Planck Institute for Evolutionary Biology.",
    tag: "Highlight",
    link: "https://www.mis.mpg.de/news/summa-cum-laude-congratulations-on-successful-dissertation-defense"
  },
  {
    date: "2026",
    title: "Co-organizer of the Nonlinear dynamics & complex systems analysis Minisymposium",
    description: "Call for speakers to present at the minisymposium at JuliaCon 2026 in Germany",
    tag: "Conference",
    link: "https://pretalx.com/juliacon-2026/talk/JZKVBN/"
  },
  {
    date: "June 2026",
    title: "Participant at the International Conference on Social Dilemmas",
    description: "Presenting my current research on the preservation of multilingualism at ICSD 2026 in Japan.",
    tag: "Conference",
    link: "https://sites.google.com/view/icsd2026"
  },
  {
    date: "May 2026",
    title: "Participant at the Cultural Evolution Society (CES) Conference",
    description: "Presenting my current research on the preservation of multilingualism at CES 2026 in Morocco.",
    tag: "Conference",
    link: "https://airess.fgses-um6p.ma/ces2026"
  },
  /*
  {
    date: "November 2024",
    title: "New NSF Grant Awarded",
    description: "Received $1.2M NSF grant for research on mathematical foundations of climate prediction models.",
    tag: "Grant",
  },
  {
    date: "October 2024",
    title: "Paper Accepted in Nature Computational Science",
    description: "Our paper on 'Bridging scales in biological systems through adaptive mathematical frameworks' has been accepted.",
    tag: "Publication",
  },*/
];

const tagColors: Record<string, string> = {
  Conference: "bg-primary/10 text-primary",
  Highlight: "bg-accent/10 text-accent",
  Publication: "bg-accent/10 text-accent",
  Grant: "bg-secondary text-secondary-foreground",
};

const News = () => {
  return (
    <section id="news" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="section-title mb-4">Latest News</h2>
          <p className="section-subtitle">
            Recent updates, publications, and announcements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {newsItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
            <Card 
              className="bg-card border-border/50 card-hover cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${tagColors[item.tag]}`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  More info <ArrowRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
