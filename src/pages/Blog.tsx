import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "How to Create Viral Faceless Videos in 2024",
    excerpt: "Learn the secrets behind creating engaging faceless content that captures millions of views on social media platforms.",
    category: "Tutorial",
    readTime: "5 min read",
    date: "Dec 28, 2024",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    title: "The Rise of AI-Generated Content",
    excerpt: "Explore how artificial intelligence is revolutionizing content creation and what it means for creators.",
    category: "Industry",
    readTime: "7 min read",
    date: "Dec 25, 2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    title: "10 Tips for Better Video Engagement",
    excerpt: "Discover proven strategies to boost your video performance and grow your audience faster.",
    category: "Tips",
    readTime: "4 min read",
    date: "Dec 22, 2024",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    title: "Monetizing Your Short-Form Content",
    excerpt: "A complete guide to turning your viral videos into a sustainable income stream.",
    category: "Business",
    readTime: "8 min read",
    date: "Dec 20, 2024",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    title: "Understanding the YouTube Algorithm",
    excerpt: "Deep dive into how YouTube recommends content and how to optimize for maximum reach.",
    category: "Strategy",
    readTime: "6 min read",
    date: "Dec 18, 2024",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    title: "Best Practices for AI Voice Generation",
    excerpt: "Master the art of creating natural-sounding AI voiceovers for your video content.",
    category: "Tutorial",
    readTime: "5 min read",
    date: "Dec 15, 2024",
    image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=600&h=400&fit=crop",
    featured: false,
  },
];

const Blog = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

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
              <span className="text-sm text-muted-foreground">Insights & Tutorials</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The StoryShort{" "}
              <span className="text-gradient-brand">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay up to date with the latest tips, tutorials, and industry insights.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div 
              className="mb-16 opacity-0 animate-fade-in"
              style={{ animationDelay: "150ms" }}
            >
              <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm card-hover">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge variant="secondary" className="w-fit mb-4">
                      Featured
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                      <span>{featuredPost.date}</span>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </CardContent>
                </div>
              </Card>
            </div>
          )}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card
                key={post.title}
                className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm opacity-0 animate-fade-in card-hover"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <Badge
                    variant="secondary"
                    className="absolute top-4 left-4 bg-card/80 backdrop-blur-sm"
                  >
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div 
            className="mt-24 text-center max-w-xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "800ms" }}
          >
            <div className="bg-card/50 border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3">
                Subscribe to our newsletter
              </h3>
              <p className="text-muted-foreground mb-6">
                Get the latest articles and insights delivered to your inbox.
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
