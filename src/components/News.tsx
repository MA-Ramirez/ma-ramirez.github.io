import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const newsItems = [
  {
    date: "December 2024",
    title: "Keynote at International Conference on Computational Mathematics",
    description: "Presenting our latest work on multi-scale modeling approaches for complex biological systems at ICCM 2024 in Tokyo.",
    tag: "Conference",
  },
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
  },
  {
    date: "September 2024",
    title: "New PhD Students Join the Lab",
    description: "Welcome to Maria Santos and James Liu who will be working on interdisciplinary modeling projects.",
    tag: "Lab",
  },
];

const tagColors: Record<string, string> = {
  Conference: "bg-primary/10 text-primary",
  Grant: "bg-accent/10 text-accent",
  Publication: "bg-accent/10 text-accent",
  Lab: "bg-secondary text-secondary-foreground",
};

const News = () => {
  return (
    <section id="news" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="section-title mb-4">Latest News</h2>
          <p className="section-subtitle">
            Recent updates, publications, and announcements from our research group.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {newsItems.map((item, index) => (
            <Card 
              key={index} 
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
                  Read more <ArrowRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
