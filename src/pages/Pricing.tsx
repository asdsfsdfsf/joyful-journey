import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "/month",
    description: "Perfect for getting started with AI video creation",
    icon: Zap,
    features: [
      "10 AI videos per month",
      "720p video quality",
      "Basic templates",
      "Email support",
      "Standard rendering speed",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For creators who want to scale their content",
    icon: Sparkles,
    features: [
      "50 AI videos per month",
      "1080p video quality",
      "Premium templates",
      "Priority support",
      "Fast rendering speed",
      "Custom branding",
      "Analytics dashboard",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$149",
    period: "/month",
    description: "For teams and agencies with high volume needs",
    icon: Crown,
    features: [
      "Unlimited AI videos",
      "4K video quality",
      "All templates + custom",
      "24/7 dedicated support",
      "Instant rendering",
      "White-label solution",
      "API access",
      "Team collaboration",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 grid-background opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div 
            className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in"
            style={{ animationDelay: "0ms" }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Simple, transparent pricing</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Choose your{" "}
              <span className="text-gradient-brand">perfect plan</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Start creating viral videos today. Upgrade or cancel anytime.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`relative border-border/50 bg-card/50 backdrop-blur-sm opacity-0 animate-fade-in card-hover ${
                  plan.popular ? "border-primary/50 glow-brand" : ""
                }`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ section */}
          <div 
            className="mt-24 max-w-3xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can I cancel my subscription anytime?",
                  a: "Yes, you can cancel your subscription at any time. No questions asked, no hidden fees.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, PayPal, and Apple Pay.",
                },
                {
                  q: "Do unused credits roll over?",
                  a: "Yes! Unused video credits roll over to the next month on Pro and Enterprise plans.",
                },
              ].map((faq, i) => (
                <div 
                  key={i} 
                  className="bg-card/50 border border-border/50 rounded-xl p-6"
                >
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
