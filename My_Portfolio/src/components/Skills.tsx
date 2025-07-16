import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React","Tailwind CSS", "Vue.js", "SASS"],
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB"],
      color: "bg-green-500/10 text-green-400 border-green-500/20"
    },
    {
      title: "Tools & Others",
      skills: ["Git","AWS","Webpack"],
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    }
  ];

  const expertise = [
    { name: "JavaScript", level: 70 },
    { name: "React", level: 80},
    { name: "Node.js", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Database Design", level: 85 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive set of tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Categories */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Technologies</h3>
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="p-6 card-gradient border-border/50 hover:border-primary/50 transition-smooth card-shadow"
              >
                <h4 className="text-xl font-semibold mb-4">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className={category.color}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Expertise Levels */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Expertise Level</h3>
            <Card className="p-6 card-gradient border-border/50 card-shadow">
              <div className="space-y-6">
                {expertise.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;