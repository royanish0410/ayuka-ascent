import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/8 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-primary/20 mb-8 animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-foreground/80">Crafting Digital Excellence Since 2019</span>
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.1] mb-8 animate-fade-up opacity-0 text-balance" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            We Build Software That{" "}
            <span className="gradient-text glow-text">Drives Growth</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-up opacity-0 text-balance leading-relaxed" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Ayuka Developers crafts cutting-edge web and mobile solutions that empower businesses to scale, innovate, and lead in their industries.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <Button variant="hero" size="xl" className="group text-base">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg" className="group text-base">
              <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className="mt-16 pt-8 border-t border-border/30 animate-fade-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <p className="text-sm text-muted-foreground mb-6">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
              {["TechVentures", "StartupXYZ", "FinanceFirst", "HealthPlus", "LogiFlow"].map((company, i) => (
                <span key={i} className="text-lg md:text-xl font-semibold text-foreground/40 hover:text-foreground/60 transition-colors">
                  {company}
                </span>
              ))}
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 animate-fade-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "5+", label: "Years Experience" },
              { value: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="relative p-6 rounded-2xl glass-subtle hover-lift group">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
      
    </section>
  );
};

export default Hero;
