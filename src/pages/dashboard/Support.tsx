import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  HelpCircle,
  MessageSquare,
  Book,
  Video,
  Mail,
  ExternalLink,
  Search,
  ChevronRight,
  Sparkles,
  Zap,
  Settings,
  CreditCard,
} from "lucide-react";
import { useState } from "react";

const faqCategories = [
  {
    id: "getting-started",
    icon: Zap,
    title: "Getting Started",
    questions: [
      { q: "How do I create my first video?", a: "Navigate to 'Generate Story Videos' and enter your script." },
      { q: "What formats are supported?", a: "We support 9:16, 16:9, 1:1, and 4:5 aspect ratios." },
      { q: "How long can my videos be?", a: "Videos can be up to 3 minutes depending on your plan." },
    ],
  },
  {
    id: "ai-features",
    icon: Sparkles,
    title: "AI Features",
    questions: [
      { q: "How does Prompt to Video work?", a: "Our AI analyzes your text prompt and generates matching visuals." },
      { q: "Can I customize AI voices?", a: "Yes, choose from multiple voice profiles in the settings." },
      { q: "What styles are available?", a: "Cinematic, anime, realistic, cartoon, abstract, and more." },
    ],
  },
  {
    id: "billing",
    icon: CreditCard,
    title: "Billing & Credits",
    questions: [
      { q: "How do credits work?", a: "Credits are used for video/image generation. Different actions use different amounts." },
      { q: "Can I get a refund?", a: "Yes, we offer refunds within 14 days if unused." },
      { q: "Do unused credits roll over?", a: "Credits reset each billing cycle but purchased packs don't expire." },
    ],
  },
  {
    id: "technical",
    icon: Settings,
    title: "Technical Support",
    questions: [
      { q: "My video failed to generate", a: "Check your internet connection and try regenerating." },
      { q: "Export quality issues", a: "Ensure you've selected the correct quality settings." },
      { q: "Browser compatibility", a: "We recommend Chrome, Firefox, or Safari for best experience." },
    ],
  },
];

const quickLinks = [
  { title: "Video Tutorials", icon: Video, description: "Step-by-step guides", href: "#" },
  { title: "Documentation", icon: Book, description: "Detailed guides & API docs", href: "#" },
  { title: "Community Forum", icon: MessageSquare, description: "Connect with other creators", href: "#" },
];

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  return (
    <DashboardLayout>
      <div className="p-8 animate-fade-in">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 mb-4">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">How can we help?</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Search our knowledge base or get in touch with our support team
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg bg-secondary/50 border-border rounded-xl"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {quickLinks.map((link, index) => (
            <Card
              key={link.title}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Frequently Asked Questions</h2>
            {faqCategories.map((category, categoryIndex) => (
              <Card
                key={category.id}
                className="bg-card border-border overflow-hidden"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <CardHeader className="bg-secondary/30">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <category.icon className="h-5 w-5 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  {category.questions.map((faq, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setExpandedFaq(
                          expandedFaq === `${category.id}-${index}` ? null : `${category.id}-${index}`
                        )
                      }
                      className="w-full text-left p-4 border-b border-border last:border-0 hover:bg-secondary/30 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{faq.q}</span>
                        <ChevronRight
                          className={`h-4 w-4 text-muted-foreground transition-transform ${
                            expandedFaq === `${category.id}-${index}` ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                      {expandedFaq === `${category.id}-${index}` && (
                        <p className="mt-3 text-sm text-muted-foreground animate-fade-in">{faq.a}</p>
                      )}
                    </button>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20 sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <Input placeholder="Your email" className="bg-background/50 border-border" />
                <Input placeholder="Subject" className="bg-background/50 border-border" />
                <Textarea
                  placeholder="Describe your issue..."
                  className="min-h-[120px] bg-background/50 border-border resize-none"
                />
                <Button variant="hero" className="w-full gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Send Message
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Average response time: 2-4 hours
                </p>
              </CardContent>
            </Card>

            {/* Live Chat Card */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Live Chat Available</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Chat with our team in real-time
                </p>
                <Button variant="outline" className="w-full border-green-500/30 text-green-400 hover:bg-green-500/10">
                  Start Live Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Support;