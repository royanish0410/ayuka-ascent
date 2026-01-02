import { Target, Rocket, Gem, Users, Globe, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px]" />
      
      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-display-md font-bold mb-6 text-balance">
            Building the Future,{" "}
            <span className="gradient-text">One Line at a Time</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between innovative ideas and exceptional digital products, <strong className="text-foreground">Ayuka Developers</strong> has grown into a trusted partner for businesses worldwide.
              </p>
              <p>
                We're not just developers — we're problem solvers, creative thinkers, and technology enthusiasts who are passionate about turning complex challenges into elegant solutions.
              </p>
              <p>
                Our journey began with a simple belief: that great software should be accessible, reliable, and transformative. Today, we continue to uphold these values while pushing the boundaries of what's possible in web and mobile development, AI integration, and enterprise solutions.
              </p>
            </div>
            
            {/* Key points */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { icon: Globe, label: "Global Reach", value: "12+ Countries" },
                { icon: Users, label: "Expert Team", value: "25+ Developers" },
                { icon: Award, label: "Industry Awards", value: "15+ Won" },
                { icon: Rocket, label: "Projects Shipped", value: "150+" },
              ].map((item, index) => (
                <div key={index} className="p-5 rounded-2xl bg-secondary/40 border border-border/50 hover-lift group">
                  <item.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-xl font-bold text-foreground mb-1">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Visual */}
          <div className="relative">
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden gradient-border p-[2px]">
              <div className="bg-card rounded-[22px] p-8 md:p-10">
                <div className="space-y-8">
                  {/* Mission */}
                  <div className="group">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-teal-400/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Our Mission</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
                    </p>
                  </div>
                  
                  {/* Vision */}
                  <div className="group">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-teal-400/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Rocket className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Our Vision</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      To be the global leader in delivering transformative digital experiences that shape the future of industries.
                    </p>
                  </div>
                  
                  {/* Values */}
                  <div className="group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-teal-400/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Gem className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Our Values</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Excellence", "Innovation", "Integrity", "Collaboration", "Growth"].map((value, i) => (
                        <span key={i} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors">
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl glass border border-primary/30 flex items-center justify-center animate-float shadow-lg">
              <span className="text-3xl">⚡</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl glass border border-primary/30 flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '2s' }}>
              <span className="text-2xl">💡</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
