import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import { useState } from "react";

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Event Management System",
      description: "A comprehensive web application for managing events with user registration, payment processing, and admin dashboard.",
      longDescription: "Built with HTML, CSS, JavaScript, Node.js, and MongoDB. Features include user authentication, event creation and management, ticket booking system, payment integration, and responsive design across all devices.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Library Management App",
      description: "Android application for library book registration, tracking, and management with barcode scanning.",
      longDescription: "Developed using Java and Android Studio. Includes features like book registration, member management, issue/return tracking, fine calculation, search functionality, and barcode integration for easy book identification.",
      technologies: ["Java", "Android Studio", "SQLite", "XML"],
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Sales Analysis Dashboard",
      description: "Business intelligence dashboard for comprehensive sales data analysis and visualization.",
      longDescription: "Created using Power BI with interactive charts, KPI indicators, sales trends analysis, regional performance metrics, and automated reporting. Helps businesses make data-driven decisions with real-time insights.",
      technologies: ["Power BI", "DAX", "SQL", "Excel"],
      category: "Data Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Travel App UI/UX",
      description: "Mobile app prototype for travel planning with intuitive user interface and seamless user experience.",
      longDescription: "Designed in Figma with comprehensive user research, wireframing, prototyping, and user testing. Features include trip planning, destination discovery, booking integration, social sharing, and offline access capabilities.",
      technologies: ["Figma", "Prototyping", "User Research", "Wireframing"],
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  const categories = ["All", "Web Development", "Mobile Development", "Data Analytics", "UI/UX Design"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              My <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of projects that demonstrate my skills in design and development
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="transition-smooth hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="group glass-card overflow-hidden transition-smooth hover:scale-105 hover:shadow-xl animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary" className="glass-card">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {selectedProject === index ? project.longDescription : project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="transition-smooth hover:scale-105"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demoUrl, '_blank');
                      }}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="transition-smooth hover:scale-105"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12 animate-fade-in">
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-card transition-smooth hover:scale-105"
            >
              View More Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}