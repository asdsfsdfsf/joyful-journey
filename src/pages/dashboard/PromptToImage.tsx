import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Image as ImageIcon,
  Sparkles,
  Download,
  RefreshCw,
  Palette,
  ChevronRight,
  Zap,
  Grid3X3,
  Square,
  RectangleHorizontal,
  RectangleVertical,
  Wand2,
} from "lucide-react";
import { useState } from "react";

const stylePresets = [
  { id: "photorealistic", name: "Photorealistic", icon: "📸" },
  { id: "digital-art", name: "Digital Art", icon: "🎨" },
  { id: "anime", name: "Anime", icon: "🎌" },
  { id: "oil-painting", name: "Oil Painting", icon: "🖼️" },
  { id: "3d-render", name: "3D Render", icon: "🧊" },
  { id: "watercolor", name: "Watercolor", icon: "💧" },
  { id: "sketch", name: "Sketch", icon: "✏️" },
  { id: "comic", name: "Comic", icon: "💥" },
];

const sizeOptions = [
  { id: "1:1", name: "Square", icon: Square, description: "1024×1024" },
  { id: "16:9", name: "Landscape", icon: RectangleHorizontal, description: "1920×1080" },
  { id: "9:16", name: "Portrait", icon: RectangleVertical, description: "1080×1920" },
  { id: "4:3", name: "Standard", icon: Grid3X3, description: "1280×960" },
];

const generatedImages = [
  { id: 1, prompt: "Ethereal forest with glowing mushrooms", style: "digital-art" },
  { id: 2, prompt: "Cyberpunk cityscape at night", style: "photorealistic" },
  { id: 3, prompt: "Cute robot playing guitar", style: "anime" },
  { id: 4, prompt: "Ancient temple in the clouds", style: "oil-painting" },
];

const PromptToImage = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("photorealistic");
  const [selectedSize, setSelectedSize] = useState("1:1");
  const [isGenerating, setIsGenerating] = useState(false);
  const [imageCount, setImageCount] = useState(4);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2500);
  };

  return (
    <DashboardLayout>
      <div className="p-8 animate-fade-in">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20">
              <ImageIcon className="h-6 w-6 text-accent" />
            </div>
            <h1 className="text-3xl font-bold text-gradient-violet">
              Prompt to Image
            </h1>
          </div>
          <p className="text-muted-foreground">
            Generate stunning AI artwork from your text descriptions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column - Input */}
          <div className="lg:col-span-2 space-y-6">
            {/* Prompt Input */}
            <Card className="bg-card border-border overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-accent/5 to-primary/5">
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="h-5 w-5 text-accent" />
                  Your Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Textarea
                  placeholder="A magical library with floating books, golden sunlight streaming through stained glass windows, fantasy art style..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[150px] bg-secondary/30 border-border resize-none"
                />
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-muted-foreground">{prompt.length} characters</span>
                  <Button variant="ghost" size="sm" className="gap-2 text-accent">
                    <Zap className="h-4 w-4" />
                    Enhance
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Style Selection */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-accent" />
                  Art Style
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-2">
                  {stylePresets.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                        selectedStyle === style.id
                          ? "border-accent bg-accent/10"
                          : "border-border bg-secondary/20 hover:border-accent/50"
                      }`}
                    >
                      <span className="text-xl block mb-1">{style.icon}</span>
                      <span className="text-[10px] font-medium text-foreground leading-tight block">
                        {style.name}
                      </span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Size Options */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Image Size</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {sizeOptions.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${
                        selectedSize === size.id
                          ? "border-accent bg-accent/10"
                          : "border-border bg-secondary/20 hover:border-accent/50"
                      }`}
                    >
                      <size.icon className="h-5 w-5 text-muted-foreground" />
                      <div className="text-left">
                        <span className="block font-medium text-foreground text-sm">{size.name}</span>
                        <span className="text-xs text-muted-foreground">{size.description}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Generate Button */}
            <Button
              variant="hero"
              className="w-full gap-2 h-14 text-lg bg-gradient-to-r from-accent to-primary hover:opacity-90"
              onClick={handleGenerate}
              disabled={!prompt || isGenerating}
            >
              {isGenerating ? (
                <>
                  <div className="h-5 w-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Creating magic...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5" />
                  Generate {imageCount} Images
                </>
              )}
            </Button>

            {/* Image Count */}
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-muted-foreground">Generate</span>
              {[1, 2, 4].map((count) => (
                <button
                  key={count}
                  onClick={() => setImageCount(count)}
                  className={`w-10 h-10 rounded-lg font-medium transition-all ${
                    imageCount === count
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {count}
                </button>
              ))}
              <span className="text-sm text-muted-foreground">images</span>
            </div>
          </div>

          {/* Right Column - Generated Images */}
          <div className="lg:col-span-3">
            <Card className="bg-card border-border">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Generated Images</CardTitle>
                <Button variant="ghost" size="sm" className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Regenerate All
                </Button>
              </CardHeader>
              <CardContent>
                {isGenerating ? (
                  <div className="grid grid-cols-2 gap-4">
                    {Array.from({ length: imageCount }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-xl bg-gradient-to-br from-secondary via-muted to-secondary overflow-hidden relative"
                      >
                        <div className="absolute inset-0 shimmer" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-12 h-12 mx-auto border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    {generatedImages.map((img, index) => (
                      <div
                        key={img.id}
                        className="aspect-square rounded-xl bg-gradient-to-br from-secondary via-muted to-secondary overflow-hidden relative group cursor-pointer"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-6xl opacity-50 group-hover:scale-110 transition-transform duration-300">
                            🎨
                          </span>
                        </div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4">
                          <p className="text-sm text-muted-foreground text-center mb-4 line-clamp-2">
                            {img.prompt}
                          </p>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="secondary" className="gap-1">
                              <Download className="h-3 w-3" />
                              Save
                            </Button>
                            <Button size="sm" variant="secondary" className="gap-1">
                              <RefreshCw className="h-3 w-3" />
                              Remix
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-gradient-to-br from-accent/10 to-primary/5 border-accent/20 mt-6">
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-3">🎨 Art Tips</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    Describe lighting: "golden hour", "dramatic shadows", "soft ambient"
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    Add art references: "in the style of Studio Ghibli"
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    Include mood: "serene", "epic", "mysterious", "whimsical"
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

export default PromptToImage;