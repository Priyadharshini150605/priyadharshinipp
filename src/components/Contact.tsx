import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_4swtqqj',
        'template_p51wr5d',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'nSMNcMx0nXudmARWJ'
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dhachuparameswaran@gmail.com",
      href: "mailto:dhachuparameswaran@gmail.com",
      color: "text-primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6369584626",
      href: "tel:+916369584626",
      color: "text-accent",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Perundurai, Tamil Nadu",
      href: "#",
      color: "text-primary",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/priyadharshini-parameswaran-46753135a/",
      color: "text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Priyadharshini150605",
      color: "text-gray-600",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your next project? Let's collaborate and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <Card className="glass-card p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="transition-smooth focus:scale-105"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="transition-smooth focus:scale-105"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        required
                        rows={5}
                        className="transition-smooth focus:scale-105 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 transition-smooth hover:scale-105 disabled:opacity-50"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Contact Details */}
              <Card className="glass-card p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info) => {
                      const IconComponent = info.icon;
                      return (
                        <div key={info.label} className="flex items-center group">
                          <div className={`p-3 rounded-xl bg-muted mr-4 group-hover:scale-110 transition-smooth`}>
                            <IconComponent className={`h-6 w-6 ${info.color}`} />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{info.label}</p>
                            <a 
                              href={info.href}
                              className="text-foreground font-medium hover:text-primary transition-smooth"
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="glass-card p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h3>
                  
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 rounded-xl bg-muted hover:bg-muted/80 transition-smooth hover:scale-110 group"
                        >
                          <IconComponent className={`h-6 w-6 ${social.color} group-hover:scale-110 transition-transform`} />
                        </a>
                      );
                    })}
                  </div>
                  
                  <div className="mt-8 p-6 bg-muted/50 rounded-xl">
                    <p className="text-muted-foreground text-center">
                      "Let's build something extraordinary together. Every great project starts with a conversation."
                    </p>
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