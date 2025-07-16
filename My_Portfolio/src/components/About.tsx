import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and scalable code"
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful and intuitive user experiences"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm Ashutosh,Bachelor of Technolgy in Computer science engineering.I am passionate about coding,Development and self learner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
        
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in creating full-stack applications using modern frameworks 
              and tools. My goal is to build products that not only look great but also 
              provide exceptional user experiences and robust functionality.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              <Badge variant="secondary">Problem Solver</Badge>
              <Badge variant="secondary">Team Player</Badge>
              <Badge variant="secondary">Quick Learner</Badge>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="p-6 card-gradient border-border/50 hover:border-primary/50 transition-smooth card-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;