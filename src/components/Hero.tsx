import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export function Hero() {
  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10 float animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-white/5 float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-white/15 float animation-delay-3000"></div>
      </div>

      <div className="container mx-auto px-6 py-24 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Priyadharshini
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                  P P
                </span>
              </h1>
              
              <div className="text-xl lg:text-2xl text-white/90 mb-4 font-medium">
                UI/UX Designer & Web Developer
              </div>
              
              <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
                Blending design thinking with code to create intuitive digital experiences.
                Passionate about crafting clean, functional, and user-friendly interfaces.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-700 hover:bg-white/90 transition-smooth hover:scale-105 pulse-glow"
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Portfolio
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="glass-card text-white border-white/30 hover:bg-white/10 transition-smooth hover:scale-105"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative animate-scale-in">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-card p-2 pulse-glow">
                <img
                  src={profilePhoto}
                  alt="Priyadharshini P P"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass-card p-3 rounded-xl float">
                <span className="text-white font-semibold">UI/UX</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl float animation-delay-1000">
                <span className="text-white font-semibold">Web Dev</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}