import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-16 md:py-20 border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-teal-400 flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">A</span>
              </div>
              <span className="text-xl font-bold font-display">
                <span className="gradient-text">Ayuka</span>
                <span className="text-foreground/80"> Developers</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
              Building exceptional digital products that drive growth and innovation. 
              Your trusted partner in web and mobile development since 2019.
            </p>
            
            {/* Newsletter signup hint */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-secondary/30 border border-border/50 max-w-sm">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">Stay Updated</p>
                <p className="text-xs text-muted-foreground">Get insights on tech & innovation</p>
              </div>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-bold mb-6 text-foreground">Company</h4>
            <ul className="space-y-4">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Work", href: "#what-we-do" },
                { label: "Careers", href: "#" },
                { label: "Blog", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group">
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-foreground">Services</h4>
            <ul className="space-y-4">
              {[
                { label: "Web Development", href: "#" },
                { label: "Mobile Apps", href: "#" },
                { label: "UI/UX Design", href: "#" },
                { label: "Cloud Solutions", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group">
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ayuka Developers. All rights reserved.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-2">
            {[
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Github, href: "#", label: "GitHub" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
