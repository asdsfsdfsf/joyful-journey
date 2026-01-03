import { useState } from "react";
import { Play, Heart, Share2, Users, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const filters = [
  { id: "all", label: "All" },
  { id: "ai-video", label: "AI Video Generator" },
  { id: "ai-ad", label: "AI Ad Generator" },
  { id: "faceless", label: "Faceless Videos" },
  { id: "tutorials", label: "Tutorials" },
];

const communityVideos = [
  {
    id: 1,
    title: "How I Made $10K with AI Videos",
    creator: "Sarah Chen",
    avatar: "SC",
    views: "245K",
    likes: "12.4K",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop",
    category: "ai-video",
  },
  {
    id: 2,
    title: "Viral TikTok Strategy 2024",
    creator: "Marcus Johnson",
    avatar: "MJ",
    views: "189K",
    likes: "9.8K",
    thumbnail: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop",
    category: "ai-ad",
  },
  {
    id: 3,
    title: "AI Storytelling Masterclass",
    creator: "Emma Wilson",
    avatar: "EW",
    views: "156K",
    likes: "8.2K",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=600&fit=crop",
    category: "tutorials",
  },
  {
    id: 4,
    title: "From 0 to 100K Followers",
    creator: "David Kim",
    avatar: "DK",
    views: "312K",
    likes: "15.7K",
    thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=600&fit=crop",
    category: "faceless",
  },
  {
    id: 5,
    title: "Faceless YouTube Success",
    creator: "Lisa Park",
    avatar: "LP",
    views: "98K",
    likes: "5.4K",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=600&fit=crop",
    category: "faceless",
  },
  {
    id: 6,
    title: "AI Voice Acting Tips",
    creator: "James Wright",
    avatar: "JW",
    views: "134K",
    likes: "7.1K",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=600&fit=crop",
    category: "ai-video",
  },
  {
    id: 7,
    title: "Creating Viral Ads with AI",
    creator: "Anna Lee",
    avatar: "AL",
    views: "178K",
    likes: "10.2K",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop",
    category: "ai-ad",
  },
  {
    id: 8,
    title: "Beginner's Guide to AI Videos",
    creator: "Tom Baker",
    avatar: "TB",
    views: "89K",
    likes: "4.8K",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop",
    category: "tutorials",
  },
];

const topCreators = [
  { name: "Sarah Chen", videos: 127, followers: "1.2M", avatar: "SC" },
  { name: "Marcus Johnson", videos: 89, followers: "890K", avatar: "MJ" },
  { name: "Emma Wilson", videos: 156, followers: "756K", avatar: "EW" },
];

const stats = [
  { icon: Users, value: "50K+", label: "Active Creators" },
  { icon: TrendingUp, value: "10M+", label: "Videos Created" },
  { icon: Award, value: "500M+", label: "Total Views" },
];

const Community = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredVideos = activeFilter === "all" 
    ? communityVideos 
    : communityVideos.filter(video => video.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Users className="w-4 h-4" />
            Join Our Community
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Learn from the
            <span className="text-primary"> Best Creators</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover tutorials, success stories, and inspiration from our community of AI video creators
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Creators */}
      <section className="py-16 px-6 border-y border-border bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Top Creators This Month</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {topCreators.map((creator, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-xl font-bold text-primary-foreground">
                  {creator.avatar}
                </div>
                <h3 className="font-semibold mb-1">{creator.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {creator.videos} videos • {creator.followers} followers
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Profile
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Community Showcase</h2>
              <p className="text-muted-foreground">Real examples from our creators</p>
            </div>
            <Button variant="outline">View All</Button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.id)}
                className="rounded-full"
              >
                {filter.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredVideos.map((video, index) => (
              <div
                key={video.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <div className="relative aspect-[9/12] overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white text-xs bg-black/60 px-2 py-1 rounded">{video.views} views</span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-sm mb-2 line-clamp-2">{video.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-medium">
                        {video.avatar}
                      </div>
                      <span className="text-xs text-muted-foreground">{video.creator}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-primary transition-colors">
                        <Heart className="w-3 h-3" />
                        <span className="text-[10px]">{video.likes}</span>
                      </button>
                      <button className="hover:text-primary transition-colors">
                        <Share2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Start creating viral videos today and share your success with thousands of other creators
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/signup">Get Started Free</Link>
            </Button>
            <Button variant="outline" size="lg">
              Join Discord
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;