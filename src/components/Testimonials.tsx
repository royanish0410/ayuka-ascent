import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO",
    company: "TechVentures Inc.",
    content: "Ayuka Developers transformed our entire digital infrastructure. Their team delivered a complex e-commerce platform ahead of schedule, and the results have been phenomenal — 200% increase in online sales within three months.",
    rating: 5,
    image: "SM"
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "StartupXYZ",
    content: "Working with Ayuka was a game-changer for our startup. They understood our vision immediately and built an MVP that attracted our first round of funding. Truly exceptional partners.",
    rating: 5,
    image: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "CTO",
    company: "HealthPlus",
    content: "The security-first approach and attention to healthcare compliance made Ayuka the perfect choice for our patient portal. Their expertise in HIPAA-compliant solutions is unmatched.",
    rating: 5,
    image: "ER"
  },
  {
    name: "James Thompson",
    role: "Director of Operations",
    company: "LogiFlow",
    content: "Our logistics management system built by Ayuka has reduced operational costs by 40%. The real-time tracking and automated workflows have revolutionized how we do business.",
    rating: 5,
    image: "JT"
  },
  {
    name: "Priya Sharma",
    role: "Marketing Head",
    company: "EduLearn",
    content: "The learning management system Ayuka developed exceeded all our expectations. The intuitive design has helped us onboard 50,000+ students effortlessly.",
    rating: 5,
    image: "PS"
  },
  {
    name: "David Park",
    role: "CEO",
    company: "FinanceFirst",
    content: "Ayuka's fintech expertise is remarkable. They built a trading platform that handles millions of transactions daily with zero downtime. Our clients trust us more because of their work.",
    rating: 5,
    image: "DP"
  },
  {
    name: "Lisa Anderson",
    role: "Founder",
    company: "GreenRetail",
    content: "From concept to launch, Ayuka was with us every step of the way. Their transparent communication made the entire experience stress-free and rewarding.",
    rating: 5,
    image: "LA"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-display-md font-bold mb-6 text-balance">
            What Our{" "}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Don't just take our word for it — hear from the businesses we've helped transform.
          </p>
        </div>
        
        {/* Testimonials Grid - Masonry-like layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group break-inside-avoid relative p-6 md:p-8 rounded-3xl glass border border-border/50 hover:border-primary/40 transition-all duration-500 hover-glow"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              {/* Content */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Divider */}
              <div className="h-px bg-border/50 mb-6" />
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-teal-400/30 flex items-center justify-center ring-2 ring-primary/20">
                  <span className="text-sm font-bold text-foreground">
                    {testimonial.image}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
