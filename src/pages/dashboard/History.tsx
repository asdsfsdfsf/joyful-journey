import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Clock,
  Search,
  Play,
  Download,
  Trash2,
  MoreVertical,
  Filter,
  Calendar,
  Video,
  Image as ImageIcon,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";
import { useState } from "react";

const historyItems = [
  {
    id: 1,
    title: "Morning Motivation #42",
    type: "video",
    status: "completed",
    duration: "0:45",
    createdAt: "10 minutes ago",
    thumbnail: "🌅",
  },
  {
    id: 2,
    title: "Product Showcase - Headphones",
    type: "video",
    status: "processing",
    duration: "0:30",
    createdAt: "25 minutes ago",
    thumbnail: "🎧",
  },
  {
    id: 3,
    title: "Tech News Update",
    type: "video",
    status: "completed",
    duration: "1:15",
    createdAt: "2 hours ago",
    thumbnail: "💻",
  },
  {
    id: 4,
    title: "AI Generated Landscape",
    type: "image",
    status: "completed",
    duration: null,
    createdAt: "3 hours ago",
    thumbnail: "🏔️",
  },
  {
    id: 5,
    title: "Fitness Tips Series",
    type: "video",
    status: "failed",
    duration: "0:55",
    createdAt: "Yesterday",
    thumbnail: "💪",
  },
  {
    id: 6,
    title: "Recipe Quick - Pasta",
    type: "video",
    status: "completed",
    duration: "0:40",
    createdAt: "Yesterday",
    thumbnail: "🍝",
  },
  {
    id: 7,
    title: "Travel Vlog Intro",
    type: "video",
    status: "completed",
    duration: "0:20",
    createdAt: "2 days ago",
    thumbnail: "✈️",
  },
  {
    id: 8,
    title: "Abstract Art Background",
    type: "image",
    status: "completed",
    duration: null,
    createdAt: "3 days ago",
    thumbnail: "🎨",
  },
];

const filterOptions = ["All", "Videos", "Images", "Completed", "Processing", "Failed"];

const History = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "processing":
        return <Loader2 className="h-4 w-4 text-yellow-500 animate-spin" />;
      case "failed":
        return <XCircle className="h-4 w-4 text-destructive" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400";
      case "processing":
        return "bg-yellow-500/20 text-yellow-400";
      case "failed":
        return "bg-destructive/20 text-destructive";
      default:
        return "";
    }
  };

  return (
    <DashboardLayout>
      <div className="p-8 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">History</h1>
            </div>
            <p className="text-muted-foreground">
              View and manage all your generated content
            </p>
          </div>
          <Button variant="outline" className="gap-2 border-border">
            <Calendar className="h-4 w-4" />
            Date Range
          </Button>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search history..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-secondary/50 border-border"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* History Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {historyItems.map((item, index) => (
            <Card
              key={item.id}
              className="bg-card border-border overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-square bg-gradient-to-br from-secondary via-muted to-secondary relative flex items-center justify-center">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {item.thumbnail}
                </span>
                
                {/* Type Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium flex items-center gap-1">
                    {item.type === "video" ? (
                      <Video className="h-3 w-3" />
                    ) : (
                      <ImageIcon className="h-3 w-3" />
                    )}
                    {item.type}
                  </span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(item.status)}`}>
                    {getStatusIcon(item.status)}
                    {item.status}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  {item.status === "completed" && (
                    <>
                      <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full">
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full">
                        <Download className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                  <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full hover:bg-destructive/20 hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-foreground truncate group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {item.createdAt}
                  </span>
                  {item.duration && <span>{item.duration}</span>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default History;