import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import {
  Video,
  Sparkles,
  Play,
  Clock,
  Settings2,
  Ratio,
  Volume2,
  Palette,
  ChevronRight,
  Zap,
} from "lucide-react";
import { useState } from "react";

const aspectRatios = [
  { id: "9:16", name: "9:16", description: "TikTok, Reels" },
  { id: "16:9", name: "16:9", description: "YouTube" },
  { id: "1:1", name: "1:1", description: "Square" },
  { id: "4:5", name: "4:5", description: "Instagram" },
];

const stylePresets = [
  { id: "cinematic", name: "Cinematic", icon: "🎬" },
  { id: "anime", name: "Anime", icon: "🎌" },
  { id: "realistic", name: "Realistic", icon: "📸" },
  { id: "cartoon", name: "Cartoon", icon: "🎨" },
  { id: "abstract", name: "Abstract", icon: "✨" },
  { id: "vintage", name: "Vintage", icon: "📼" },
];

const PromptToVideo = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedRatio, setSelectedRatio] = useState("9:16");
  const [selectedStyle, setSelectedStyle] = useState("cinematic");
  const [duration, setDuration] = useState([15]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 3000);
  };

  return (
    <DashboardLayout>
      <div className="p-8 animate-fade-in">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
              <Video className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-gradient-brand">
              Prompt to Video
            </h1>
          </div>
          <p className="text-muted-foreground">
            Transform your imagination into stunning AI-generated videos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Input */}
          <div className="space-y-6">
            {/* Prompt Input */}
            <Card className="bg-card border-border overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Describe Your Video
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Textarea
                  placeholder="A majestic eagle soaring through golden clouds at sunset, cinematic lighting, slow motion, 4K quality..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[180px] bg-secondary/30 border-border resize-none text-lg"
                />
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-muted-foreground">{prompt.length} characters</span>
                  <Button variant="ghost" size="sm" className="gap-2 text-primary">
                    <Zap className="h-4 w-4" />
                    Enhance Prompt
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Style Selection */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  Visual Style
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {stylePresets.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                        selectedStyle === style.id
                          ? "border-primary bg-primary/10"
                          : "border-border bg-secondary/20 hover:border-primary/50"
                      }`}
                    >
                      <span className="text-2xl block mb-1">{style.icon}</span>
                      <span className="text-xs font-medium text-foreground">{style.name}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Settings */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Aspect Ratio */}
                <div>
                  <p className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                    <Ratio className="h-4 w-4 text-muted-foreground" />
                    Aspect Ratio
                  </p>
                  <div className="grid grid-cols-4 gap-3">
                    {aspectRatios.map((ratio) => (
                      <button
                        key={ratio.id}
                        onClick={() => setSelectedRatio(ratio.id)}
                        className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                          selectedRatio === ratio.id
                            ? "border-primary bg-primary/10"
                            : "border-border bg-secondary/20 hover:border-primary/50"
                        }`}
                      >
                        <span className="block font-medium text-foreground">{ratio.name}</span>
                        <span className="text-xs text-muted-foreground">{ratio.description}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      Duration
                    </p>
                    <span className="text-sm text-primary font-medium">{duration[0]}s</span>
                  </div>
                  <Slider
                    value={duration}
                    onValueChange={setDuration}
                    min={5}
                    max={60}
                    step={5}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>5s</span>
                    <span>60s</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Preview */}
          <div className="space-y-6">
            <Card className="bg-card border-border overflow-hidden sticky top-8">
              <div
                className={`${
                  selectedRatio === "9:16"
                    ? "aspect-[9/16]"
                    : selectedRatio === "16:9"
                    ? "aspect-video"
                    : selectedRatio === "4:5"
                    ? "aspect-[4/5]"
                    : "aspect-square"
                } bg-gradient-to-br from-secondary via-muted to-secondary relative group max-h-[500px] mx-auto`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {isGenerating ? (
                    <div className="text-center">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
                        <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
                        <div className="absolute inset-2 rounded-full border-4 border-accent/20" />
                        <div className="absolute inset-2 rounded-full border-4 border-accent border-b-transparent animate-spin" style={{ animationDirection: "reverse", animationDuration: "1.5s" }} />
                      </div>
                      <p className="text-foreground font-medium">Creating your video...</p>
                      <p className="text-sm text-muted-foreground mt-1">This may take a moment</p>
                    </div>
                  ) : (
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Play className="h-8 w-8 text-primary ml-1" />
                      </div>
                      <p className="text-muted-foreground">Your AI video will appear here</p>
                    </div>
                  )}
                </div>
              </div>
              <CardContent className="p-6">
                <Button
                  variant="hero"
                  className="w-full gap-2 h-12 text-lg"
                  onClick={handleGenerate}
                  disabled={!prompt || isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <div className="h-5 w-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5" />
                      Generate Video
                    </>
                  )}
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Estimated time: ~2 minutes • Costs 50 credits
                </p>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-gradient-to-br from-accent/10 to-primary/5 border-accent/20">
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-3">💡 Prompting Tips</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    Be specific about lighting, camera angles, and movements
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    Include quality modifiers like "4K", "cinematic", "high detail"
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    Describe motion: "slow zoom", "tracking shot", "time-lapse"
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PromptToVideo;