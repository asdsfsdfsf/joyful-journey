import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Repeat,
  Plus,
  Play,
  Pause,
  Calendar,
  Clock,
  TrendingUp,
  ChevronRight,
  Settings,
  Trash2,
  MoreVertical,
} from "lucide-react";

const automatedSeries = [
  {
    id: 1,
    name: "Daily Motivation Quotes",
    status: "active",
    schedule: "Every day at 9:00 AM",
    videosGenerated: 42,
    nextVideo: "In 6 hours",
    thumbnail: "🌅",
  },
  {
    id: 2,
    name: "Tech News Updates",
    status: "active",
    schedule: "Mon, Wed, Fri at 2:00 PM",
    videosGenerated: 28,
    nextVideo: "Tomorrow",
    thumbnail: "💻",
  },
  {
    id: 3,
    name: "History Facts",
    status: "paused",
    schedule: "Every Saturday at 10:00 AM",
    videosGenerated: 12,
    nextVideo: "Paused",
    thumbnail: "📜",
  },
];

const templates = [
  { id: 1, name: "Daily Quotes", icon: "💬", description: "Inspirational quotes with ambient visuals" },
  { id: 2, name: "News Digest", icon: "📰", description: "Summarized news with dynamic graphics" },
  { id: 3, name: "Educational", icon: "🎓", description: "Fun facts and learning content" },
  { id: 4, name: "Product Showcase", icon: "🛍️", description: "Automated product highlights" },
];

const SeriesAutomation = () => {
  return (
    <DashboardLayout>
      <div className="p-8 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Repeat className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">
                Series Automation
              </h1>
            </div>
            <p className="text-muted-foreground">
              Create automated video series that publish on schedule
            </p>
          </div>
          <Button variant="hero" className="gap-2">
            <Plus className="h-4 w-4" />
            New Series
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/20">
                  <Repeat className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">3</p>
                  <p className="text-sm text-muted-foreground">Active Series</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent/20">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">82</p>
                  <p className="text-sm text-muted-foreground">Videos Generated</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-green-500/20">
                  <Clock className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">168h</p>
                  <p className="text-sm text-muted-foreground">Time Saved</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Automated Series */}
        <Card className="bg-card border-border mb-8">
          <CardHeader>
            <CardTitle>Your Automated Series</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {automatedSeries.map((series, index) => (
                <div
                  key={series.id}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl">{series.thumbnail}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{series.name}</h3>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          series.status === "active"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {series.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <Calendar className="h-3 w-3" />
                      {series.schedule}
                    </p>
                  </div>
                  <div className="text-right hidden md:block">
                    <p className="text-sm font-medium text-foreground">{series.videosGenerated} videos</p>
                    <p className="text-xs text-muted-foreground">Next: {series.nextVideo}</p>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      {series.status === "active" ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Start Templates */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Quick Start Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {templates.map((template, index) => (
                <button
                  key={template.id}
                  className="p-6 rounded-xl border-2 border-border bg-secondary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105 text-left group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">
                    {template.icon}
                  </span>
                  <h3 className="font-semibold text-foreground mb-1">{template.name}</h3>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                  <ChevronRight className="h-4 w-4 text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SeriesAutomation;