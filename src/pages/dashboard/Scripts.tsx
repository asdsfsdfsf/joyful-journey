import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FileText,
  Plus,
  Search,
  Wand2,
  Edit3,
  Trash2,
  Copy,
  MoreVertical,
  Clock,
  Tag,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const savedScripts = [
  {
    id: 1,
    title: "The Power of Small Habits",
    content: "Every day, small actions compound into massive results. Here's what successful people do differently...",
    wordCount: 245,
    createdAt: "2 hours ago",
    tags: ["motivation", "productivity"],
  },
  {
    id: 2,
    title: "5 Tech Trends in 2024",
    content: "The technology landscape is evolving faster than ever. Let's explore the top trends shaping our future...",
    wordCount: 312,
    createdAt: "Yesterday",
    tags: ["tech", "trends"],
  },
  {
    id: 3,
    title: "Morning Routine Secrets",
    content: "What you do in the first hour of waking up sets the tone for your entire day. Here are the secrets...",
    wordCount: 189,
    createdAt: "3 days ago",
    tags: ["lifestyle", "health"],
  },
  {
    id: 4,
    title: "Ancient History Facts",
    content: "Did you know that the ancient Egyptians invented the first form of toothpaste over 5000 years ago...",
    wordCount: 278,
    createdAt: "1 week ago",
    tags: ["history", "education"],
  },
];

const scriptPrompts = [
  "Write a motivational script about overcoming challenges",
  "Create a script about interesting space facts",
  "Generate a story about a mysterious adventure",
  "Write about the benefits of meditation",
];

const Scripts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <DashboardLayout>
      <div className="p-8 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Scripts</h1>
            </div>
            <p className="text-muted-foreground">
              Write, generate, and manage your video scripts
            </p>
          </div>
          <Button variant="hero" className="gap-2">
            <Plus className="h-4 w-4" />
            New Script
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - AI Generation */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="h-5 w-5 text-primary" />
                  AI Script Generator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Describe what kind of script you want to generate..."
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  className="min-h-[120px] bg-background/50 border-border resize-none"
                />
                <Button
                  variant="hero"
                  className="w-full gap-2"
                  onClick={handleGenerate}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Generate Script
                    </>
                  )}
                </Button>

                {/* Quick Prompts */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-medium text-muted-foreground mb-3">Quick Prompts</p>
                  <div className="space-y-2">
                    {scriptPrompts.map((prompt, index) => (
                      <button
                        key={index}
                        onClick={() => setAiPrompt(prompt)}
                        className="w-full text-left p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-1"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Saved Scripts */}
          <div className="lg:col-span-2">
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search scripts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary/50 border-border"
              />
            </div>

            {/* Scripts List */}
            <div className="space-y-4">
              {savedScripts.map((script, index) => (
                <Card
                  key={script.id}
                  className="bg-card border-border hover:border-primary/30 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                          {script.title}
                        </h3>
                        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {script.createdAt}
                          </span>
                          <span>{script.wordCount} words</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit3 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {script.content}
                    </p>
                    <div className="flex items-center gap-2">
                      {script.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground flex items-center gap-1"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Scripts;