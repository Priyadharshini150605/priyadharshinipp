import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Database, BarChart3 } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "text-primary",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 80 },
      ],
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      color: "text-accent",
      skills: [
        { name: "Figma", level: 92 },
        { name: "Prototyping", level: 88 },
        { name: "Wireframing", level: 90 },
        { name: "Design Systems", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "text-primary",
      skills: [
        { name: "Node.js", level: 78 },
        { name: "MongoDB", level: 82 },
        { name: "APIs", level: 80 },
        { name: "Express.js", level: 75 },
      ],
    },
    {
      title: "Analytics & Tools",
      icon: BarChart3,
      color: "text-accent",
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Git/GitHub", level: 88 },
        { name: "Android Studio", level: 75 },
        { name: "Java", level: 80 },
      ],
    },
  ];

  const technologies = [
    "React", "Node.js", "MongoDB", "Figma", "JavaScript", "TypeScript",
    "HTML/CSS", "Power BI", "Git", "Android Studio", "Express.js", "Java"
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for creating exceptional digital experiences
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.title} 
                  className="glass-card p-6 transition-smooth hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="flex items-center mb-6">
                      <IconComponent className={`h-8 w-8 ${category.color} mr-3`} />
                      <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-foreground font-medium">{skill.name}</span>
                            <span className="text-muted-foreground text-sm">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Technology Tags */}
          <div className="text-center animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm glass-card transition-smooth hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}