import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent Successfully!",
      description: "Our team will get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-background to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-[180px]" />
      
      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-display-md font-bold mb-6 text-balance">
            Ready to Build{" "}
            <span className="gradient-text">Something Great?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            If you're ready, let's arrange a call with our sales team. We'd love to hear about your project and show you how we can help.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left - Form */}
          <div className="order-2 lg:order-1">
            <div className="glass rounded-3xl border border-border/50 p-6 md:p-10">
              <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
              <p className="text-muted-foreground mb-8">Fill out the form and we'll get back to you within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-foreground/80">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project, goals, and timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[140px] resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full h-14 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Right - Info */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* CTA Card */}
            <div className="gradient-border rounded-3xl p-[2px]">
              <div className="bg-card rounded-[22px] p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-teal-400/10 flex items-center justify-center border border-primary/20">
                    <Calendar className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Schedule a Call</h3>
                    <p className="text-muted-foreground text-sm">Free 30-minute consultation</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Book a call with our team to discuss your project requirements and get a personalized roadmap for success.
                </p>
                <Button variant="outline" className="w-full h-12 group">
                  Book Your Free Call
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="glass rounded-3xl border border-border/50 p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email Us", value: "hello@ayuka.dev", href: "mailto:hello@ayuka.dev" },
                  { icon: Phone, label: "Call Us", value: "+1 (234) 567-890", href: "tel:+1234567890" },
                  { icon: MapPin, label: "Visit Us", value: "123 Innovation Drive, Tech City", href: "#" },
                ].map((item, i) => (
                  <a key={i} href={item.href} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-0.5">{item.label}</div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="p-6 rounded-3xl bg-secondary/30 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-3">
                  {["S", "M", "E", "J"].map((letter, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-teal-400/30 border-2 border-background flex items-center justify-center"
                    >
                      <span className="text-xs font-bold text-foreground">{letter}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <span className="font-semibold text-foreground">50+ Happy Clients</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Fast Response", "NDA Protected", "Flexible Terms"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
