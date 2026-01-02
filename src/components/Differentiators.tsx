import { Code2, Zap, Shield, Users, Lightbulb, HeartHandshake } from "lucide-react";

const differentiators = [
  {
    icon: Code2,
    title: "Clean, Scalable Code",
    description: "We write maintainable, well-documented code that grows with your business, ensuring long-term sustainability and easy updates."
  },
  {
    icon: Zap,
    title: "Lightning-Fast Delivery",
    description: "Our agile methodology and experienced team deliver projects on time without compromising on quality or functionality."
  },
  {
    icon: Shield,
    title: "Security-First Approach",
    description: "Every line of code is built with security in mind, protecting your data and your customers from modern threats."
  },
  {
    icon: Users,
    title: "Dedicated Team Model",
    description: "Get a committed team that becomes an extension of your business, fully invested in your project's success."
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "We stay ahead of technology trends, bringing cutting-edge solutions that give you a competitive advantage."
  },
  {
    icon: HeartHandshake,
    title: "Transparent Communication",
    description: "Regular updates, clear timelines, and honest feedback ensure you're always in the loop throughout development."
  }
];

const Differentiators = () => {
  return (
    <section id="what-we-do" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-30" />
      
      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            What Sets Us Apart
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-display-md font-bold mb-6 text-balance">
            We Do Things{" "}
            <span className="gradient-text">Differently</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our unique approach combines technical excellence with genuine partnership, delivering results that exceed expectations.
          </p>
        </div>
        
        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl glass border border-border/50 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover-glow"
            >
              {/* Number indicator */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-foreground/[0.03] select-none">
                0{index + 1}
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-teal-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
