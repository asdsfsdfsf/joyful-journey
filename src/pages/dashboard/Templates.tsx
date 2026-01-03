import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Wand2,
  Search,
  Play,
  Heart,
  Clock,
  Star,
  Filter,
  Grid3X3,
  List,
} from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "all", name: "All Templates", count: 48 },
  { id: "trending", name: "Trending", count: 12 },
  { id: "shorts", name: "YouTube Shorts", count: 15 },
  { id: "tiktok", name: "TikTok", count: 18 },
  { id: "reels", name: "Instagram Reels", count: 14 },
  { id: "stories", name: "Stories", count: 10 },
];

const templates = [
  { id: 1, name: "Motivation Daily", category: "shorts", duration: "0:30", likes: 2340, uses: 12500, preview: "🌟", gradient: "from-yellow-500/20 to-orange-500/20" },
  { id: 2, name: "Tech News Flash", category: "tiktok", duration: "0:45", likes: 1890, uses: 8900, preview: "⚡", gradient: "from-blue-500/20 to-cyan-500/20" },
  { id: 3, name: "Story Time", category: "reels", duration: "1:00", likes: 3210, uses: 15600, preview: "📖", gradient: "from-purple-500/20 to-pink-500/20" },
  { id: 4, name: "Product Showcase", category: "shorts", duration: "0:20", likes: 980, uses: 4200, preview: "🎁", gradient: "from-green-500/20 to-emerald-500/20" },
  { id: 5, name: "Fun Facts", category: "tiktok", duration: "0:35", likes: 2100, uses: 9800, preview: "🧠", gradient: "from-indigo-500/20 to-violet-500/20" },
  { id: 6, name: "Recipe Quick", category: "reels", duration: "0:50", likes: 1560, uses: 7200, preview: "🍳", gradient: "from-red-500/20 to-rose-500/20" },
  { id: 7, name: "Travel Vibes", category: "stories", duration: "0:15", likes: 890, uses: 3400, preview: "✈️", gradient: "from-sky-500/20 to-blue-500/20" },
  { id: 8, name: "Fitness Tips", category: "shorts", duration: "0:40", likes: 1780, uses: 6500, preview: "💪", gradient: "from-orange-500/20 to-red-500/20" },
];

const Templates = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredTemplates = templates.filter(
    (t) =>
      (selectedCategory === "all" || t.category === selectedCategory) &&
      t.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="p-8 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Wand2 className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Templates</h1>
            </div>
            <p className="text-muted-foreground">
              Start with professionally designed templates for any platform
            </p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-secondary/50 border-border"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="border-border">
              <Filter className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {cat.name}
              <span className="ml-2 opacity-70">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
          }
        >
          {filteredTemplates.map((template, index) => (
            <Card
              key={template.id}
              className={`bg-card border-border overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 ${
                viewMode === "list" ? "flex items-center" : ""
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div
                className={`${
                  viewMode === "grid" ? "aspect-[9/16]" : "w-32 h-20"
                } bg-gradient-to-br ${template.gradient} relative flex items-center justify-center`}
              >
                <span className={viewMode === "grid" ? "text-6xl" : "text-3xl"}>
                  {template.preview}
                </span>
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                    <Play className="h-5 w-5 text-primary-foreground ml-0.5" />
                  </div>
                </div>
              </div>
              <CardContent className={`${viewMode === "grid" ? "p-4" : "flex-1 p-4"}`}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{template.name}</h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <Clock className="h-3 w-3" />
                      {template.duration}
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-500" />
                    {template.likes.toLocaleString()}
                  </span>
                  <span>{template.uses.toLocaleString()} uses</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Templates;