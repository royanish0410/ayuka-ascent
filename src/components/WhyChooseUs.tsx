import { CheckCircle2, Layers, DollarSign, Trophy, Cpu, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: Layers,
    title: "End-to-End Development",
    description: "From initial concept and UI/UX design to development, testing, and deployment — we handle every phase of your project with expertise and precision.",
    features: ["Full-stack development", "UI/UX design", "QA testing", "Deployment & maintenance"]
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Solutions",
    description: "Get premium-quality development at competitive rates. Our efficient processes mean you receive exceptional value without compromising on quality.",
    features: ["Transparent pricing", "No hidden costs", "Flexible engagement", "ROI-focused"]
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description: "With 150+ successful projects across diverse industries, we bring tested methodologies and battle-hardened experience to every engagement.",
    features: ["150+ projects", "99% satisfaction", "Industry recognized", "Long-term partnerships"]
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    description: "We leverage the latest frameworks and practices to build future-proof solutions that scale with your business and adapt to changing needs.",
    features: ["Modern tech stack", "AI & ML ready", "Cloud-native", "Regular updates"]
  },
  {
    icon: Headphones,
    title: "24/7 Support & Maintenance",
    description: "Your success doesn't stop at launch. Our dedicated support team ensures your application runs smoothly around the clock.",
    features: ["Round-the-clock support", "Proactive monitoring", "Regular backups", "Performance optimization"]
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-display-md font-bold mb-6 text-balance">
            Your Success Is{" "}
            <span className="gradient-text">Our Priority</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Here's why businesses around the world trust Ayuka Developers with their most important projects.
          </p>
        </div>
        
        {/* Reasons */}
        <div className="space-y-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-6 md:p-8 glass border border-border/50 rounded-3xl group-hover:border-primary/40 transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
                  {/* Icon & Number */}
                  <div className="flex items-center gap-4 lg:gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-teal-400/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                      <reason.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-5xl font-bold text-foreground/[0.06] lg:hidden">0{index + 1}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                      {reason.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {reason.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm bg-secondary/50 px-3 py-1.5 rounded-full">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span className="text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Number - Desktop */}
                  <div className="hidden lg:block flex-shrink-0">
                    <span className="text-7xl font-bold text-foreground/[0.05]">0{index + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl" asChild className="text-base">
            <a href="#contact">Start Your Project Today</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
