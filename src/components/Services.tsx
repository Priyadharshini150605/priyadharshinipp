import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Code, Zap, Layers, ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Crafting intuitive interfaces, wireframing, and prototyping that prioritize user experience and accessibility.",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing"],
      color: "text-primary",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, cross-device optimized websites with modern technologies and best practices.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "SEO Ready"],
      color: "text-accent",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Interaction Design",
      description: "Enhancing usability with smooth animations, micro-interactions, and engaging user experiences.",
      features: ["Micro-interactions", "Animation Design", "User Flow", "Accessibility"],
      color: "text-primary",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Layers,
      title: "Design Systems",
      description: "Creating scalable component libraries and design systems for consistency across all platforms.",
      features: ["Component Libraries", "Style Guides", "Documentation", "Scalability"],
      color: "text-accent",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              My <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to bring your vision to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="group glass-card p-8 transition-smooth hover:scale-105 hover:shadow-xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white mr-4`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant="ghost" 
                      className="group/btn p-0 text-primary hover:text-primary/80 transition-smooth"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <Card className="glass-card p-8 max-w-2xl mx-auto">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let's collaborate to create something amazing together. 
                  Get in touch to discuss your project requirements.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 transition-smooth hover:scale-105"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}