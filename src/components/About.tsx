import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, GraduationCap, Briefcase, User } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate developer and designer dedicated to creating meaningful digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div className="animate-fade-in-up">
              <Card className="glass-card p-8 transition-smooth hover:scale-105">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <User className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-2xl font-semibold text-foreground">My Story</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    B.Sc graduate, UI/UX Designer & Web Developer focused on creating clean, 
                    functional, and user-friendly digital experiences. I blend design thinking 
                    with code to build intuitive interfaces that people love.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Passionate about solving problems through aesthetics and technology, 
                    I believe in the power of good design to transform how people interact 
                    with digital products.
                  </p>
                  <Button className="mt-6 bg-primary hover:bg-primary/90 transition-smooth hover:scale-105">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Education & Experience */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Education */}
              <Card className="glass-card p-6 transition-smooth hover:scale-105">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-8 w-8 text-accent mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">Education</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-foreground">B.Sc Software Systems</h4>
                      <p className="text-muted-foreground">Kongu Engineering College, Perundurai</p>
                      <p className="text-sm text-muted-foreground">2023 - 2026</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="glass-card p-6 transition-smooth hover:scale-105">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Briefcase className="h-8 w-8 text-accent mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">Experience</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-foreground">UI/UX Designer Intern</h4>
                      <p className="text-muted-foreground">Grow AI Tech Company</p>
                      <p className="text-sm text-muted-foreground">Current</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold text-foreground">Academic Projects</h4>
                      <p className="text-muted-foreground">
                        Frontend & Backend Development, Design Systems
                      </p>
                      <p className="text-sm text-muted-foreground">2023 - Present</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}