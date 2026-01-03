import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, DollarSign, Users, TrendingUp, Gift, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "30% Commission",
    description: "Earn 30% recurring commission for every customer you refer. Payments every month.",
  },
  {
    icon: Users,
    title: "90-Day Cookie",
    description: "Extended tracking window means you earn from referrals who sign up within 90 days.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Analytics",
    description: "Track your clicks, conversions, and earnings with our comprehensive dashboard.",
  },
  {
    icon: Gift,
    title: "Exclusive Perks",
    description: "Top affiliates get exclusive access to early features and bonus rewards.",
  },
];

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your free affiliate account in under 2 minutes.",
  },
  {
    number: "02",
    title: "Share Your Link",
    description: "Get your unique referral link and promotional materials.",
  },
  {
    number: "03",
    title: "Earn Money",
    description: "Get paid for every customer who signs up through your link.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Content Creator",
    earnings: "$4,200/mo",
    quote: "The affiliate program has become my primary income source. The recurring commissions are amazing!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Marcus Johnson",
    role: "YouTuber",
    earnings: "$2,800/mo",
    quote: "Super easy to promote since the product basically sells itself. My audience loves it.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    role: "Digital Marketer",
    earnings: "$6,500/mo",
    quote: "Best affiliate program I've joined. Great commissions and the team is incredibly supportive.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

const Affiliate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 grid-background opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Hero */}
          <div 
            className="text-center max-w-3xl mx-auto mb-20 opacity-0 animate-fade-in"
            style={{ animationDelay: "0ms" }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">New Program</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Earn up to{" "}
              <span className="text-gradient-brand">$10,000/month</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Join our affiliate program and earn 30% recurring commission for every customer you refer. 
              No limits, no caps – the more you refer, the more you earn.
            </p>
            <Button variant="hero" size="lg" className="group">
              Become an Affiliate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="border-border/50 bg-card/50 backdrop-blur-sm opacity-0 animate-fade-in card-hover"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* How it works */}
          <div 
            className="mb-24 opacity-0 animate-fade-in"
            style={{ animationDelay: "500ms" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How it <span className="text-gradient-brand">works</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.number} className="relative text-center">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                  <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div 
            className="mb-24 opacity-0 animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Top affiliate <span className="text-gradient-brand">earners</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
              See what our successful affiliates are saying about the program.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.name}
                  className="border-border/50 bg-card/50 backdrop-blur-sm opacity-0 animate-fade-in"
                  style={{ animationDelay: `${(index + 7) * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <TrendingUp className="w-4 h-4" />
                      {testimonial.earnings}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div 
            className="text-center opacity-0 animate-fade-in"
            style={{ animationDelay: "1000ms" }}
          >
            <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 max-w-3xl mx-auto glow-brand">
              <CardContent className="p-12">
                <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">
                  Ready to start earning?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  Join hundreds of affiliates already earning passive income with StoryShort.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  {["Free to join", "Weekly payouts", "Dedicated support"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="hero" size="lg" className="group">
                  Join the Program
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Affiliate;
