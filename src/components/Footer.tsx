import { Heart, Github, Linkedin, Mail } from "lucide-react";
export function Footer() {
  return <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gradient">Priyadharshini P P</h3>
              <p className="text-muted-foreground">UI/UX Designer & Web Developer,  passionate about creating beautiful and functional digital experiences.</p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <div className="space-y-2">
                {["Home", "About", "Skills", "Services", "Portfolio", "Contact"].map(link => <a key={link} href={`#${link.toLowerCase()}`} className="block text-muted-foreground hover:text-primary transition-smooth">
                    {link}
                  </a>)}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground">priyadharshini.23bsr@kongu.edu</p>
                <p className="text-muted-foreground">+91 6369584626</p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="mailto:priyadharshini.23bsr@kongu.edu" className="text-muted-foreground hover:text-primary transition-smooth">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© 2025 Priyadharshini P P. All rights reserved.</p>
            <div className="flex items-center text-muted-foreground text-sm mt-4 md:mt-0">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using React & TypeScript
            </div>
          </div>
        </div>
      </div>
    </footer>;
}