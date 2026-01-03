import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Video,
  Sparkles,
  TrendingUp,
  Clock,
  Play,
  Plus,
  Zap,
} from "lucide-react";

const statsCards = [
  {
    title: "Videos Created",
    value: "24",
    change: "+12%",
    icon: Video,
    color: "text-primary",
  },
  {
    title: "AI Generations",
    value: "156",
    change: "+28%",
    icon: Sparkles,
    color: "text-accent",
  },
  {
    title: "Total Views",
    value: "12.4K",
    change: "+45%",
    icon: TrendingUp,
    color: "text-green-500",
  },
  {
    title: "Hours Saved",
    value: "48h",
    change: "+8%",
    icon: Clock,
    color: "text-yellow-500",
  },
];

const recentProjects = [
  {
    id: 1,
    title: "Product Launch Promo",
    type: "AI Video",
    duration: "0:45",
    date: "2 hours ago",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Instagram Story Ad",
    type: "Ad Creator",
    duration: "0:15",
    date: "Yesterday",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Tutorial Series Ep.1",
    type: "Faceless Video",
    duration: "2:30",
    date: "3 days ago",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Brand Intro Animation",
    type: "AI Video",
    duration: "0:30",
    date: "1 week ago",
    thumbnail: "/placeholder.svg",
  },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Welcome back, John! 👋
            </h1>
            <p className="text-muted-foreground mt-1">
              Here's what's happening with your videos
            </p>
          </div>
          <Button variant="hero" className="gap-2">
            <Plus className="h-4 w-4" />
            Create New Video
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((stat) => (
            <Card key={stat.title} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground mt-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-green-500 mt-1">{stat.change} this month</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20 cursor-pointer hover:border-primary/40 transition-colors">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">AI Video Generator</h3>
                <p className="text-sm text-muted-foreground">Create videos from text</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-accent/20 to-accent/5 border-accent/20 cursor-pointer hover:border-accent/40 transition-colors">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/20">
                <Video className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Faceless Videos</h3>
                <p className="text-sm text-muted-foreground">Auto-generated content</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border-yellow-500/20 cursor-pointer hover:border-yellow-500/40 transition-colors">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-yellow-500/20">
                <Zap className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Quick Edit</h3>
                <p className="text-sm text-muted-foreground">Edit existing videos</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Projects */}
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Projects</CardTitle>
            <Button variant="ghost" size="sm" className="text-primary">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {recentProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative rounded-lg overflow-hidden bg-muted cursor-pointer"
                >
                  <div className="aspect-video bg-secondary flex items-center justify-center">
                    <Play className="h-10 w-10 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="p-3">
                    <h4 className="font-medium text-foreground text-sm truncate">
                      {project.title}
                    </h4>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-muted-foreground">
                        {project.type}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {project.duration}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {project.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
