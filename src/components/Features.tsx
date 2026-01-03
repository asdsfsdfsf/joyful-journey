import { Play, Image, Video, Mic, Type, Wand2, ImageIcon } from "lucide-react";

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 grid-background opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Unique split layout header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Powerful Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Telling Stories has never been{" "}
              <span className="text-gradient-brand">this easy</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From Image generation to video generation, StoryShort can generate any style of video in seconds. No editing skills required.
            </p>
          </div>
          {/* Video placeholder */}
          <div className="relative aspect-video bg-card rounded-2xl border border-border overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-violet/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary fill-primary" />
                </div>
                <p className="text-muted-foreground text-sm">Demo Video Placeholder</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-xs text-muted-foreground">Watch how it works</span>
              </div>
            </div>
          </div>
        </div>

        {/* Alternating feature rows - unique layout */}
        <div className="space-y-16">
          {/* Row 1 - Text to Video */}
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Wand2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">The most powerful Text to Video tool</h3>
              <p className="text-muted-foreground">
                Generate a script with AI, choose a style, a voice and a background and get a video in seconds. No technical skills needed.
              </p>
            </div>
            <div className="lg:col-span-3 order-1 lg:order-2">
              {/* UI mockup placeholder */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="space-y-4">
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border/50">
                    <p className="text-xs text-muted-foreground mb-2">Enter your prompt</p>
                    <p className="text-sm">Create a horror story about a haunted lighthouse...</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="aspect-video bg-secondary/30 rounded-lg border border-border/50 flex items-center justify-center">
                        <ImageIcon className="w-6 h-6 text-muted-foreground/50" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 - AI Photos */}
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              {/* Image grid with placeholders */}
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square rounded-xl bg-card border border-border overflow-hidden group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-violet/5 flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-muted-foreground/30 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="bg-background/80 backdrop-blur-sm rounded px-2 py-1">
                        <p className="text-[10px] text-muted-foreground text-center">Image {i}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="w-14 h-14 bg-violet/10 rounded-2xl flex items-center justify-center mb-6">
                <Image className="w-7 h-7 text-violet" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Photo Generation</h3>
              <p className="text-muted-foreground">
                Generate stunning, realistic images with the most advanced AI models. Perfect for creating unique visuals for your content.
              </p>
            </div>
          </div>

          {/* Row 3 - Image to Video + Voiceover side by side */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image to Video */}
            <div className="bg-card rounded-2xl p-8 border border-border card-hover">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Video className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Turn images into videos</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Make your videos even more engaging by turning AI images into dynamic videos.
              </p>
              {/* Video placeholder */}
              <div className="relative aspect-video bg-secondary/30 rounded-xl overflow-hidden border border-border/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-7 h-7 text-primary fill-primary" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 h-1 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-primary rounded-full" />
                </div>
              </div>
            </div>

            {/* Voiceover */}
            <div className="bg-card rounded-2xl p-8 border border-border card-hover">
              <div className="w-14 h-14 bg-violet/10 rounded-2xl flex items-center justify-center mb-6">
                <Mic className="w-7 h-7 text-violet" />
              </div>
              <h3 className="text-xl font-bold mb-4">Automatic Voiceover</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Use ElevenLabs & OpenAI voices to generate videos with realistic human voices.
              </p>
              {/* Voice options */}
              <div className="space-y-3">
                {[
                  { name: "Adam", desc: "Male, middle-aged", active: true },
                  { name: "Charlotte", desc: "Female, young", active: false },
                  { name: "Will", desc: "Male, young", active: false },
                ].map((voice) => (
                  <div
                    key={voice.name}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                      voice.active 
                        ? "bg-primary/10 border-primary/30" 
                        : "bg-secondary/30 border-border/50 hover:border-primary/20"
                    }`}
                  >
                    <div className="w-10 h-10 bg-card rounded-full flex items-center justify-center border border-border">
                      <Mic className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{voice.name}</p>
                      <p className="text-xs text-muted-foreground">{voice.desc}</p>
                    </div>
                    {voice.active && (
                      <div className="flex gap-1">
                        {[1,2,3,4].map((i) => (
                          <div key={i} className="w-1 bg-primary rounded-full animate-pulse" style={{ height: `${8 + i * 4}px`, animationDelay: `${i * 0.1}s` }} />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 4 - Captions - Full width unique design */}
          <div className="bg-gradient-to-r from-primary/5 via-card to-violet/5 rounded-3xl p-8 md:p-12 border border-border">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Type className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Beautiful customizable captions</h3>
                <p className="text-muted-foreground mb-6">
                  Your videos come with beautiful, customizable captions that match your brand and style.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Bold", "Minimal", "Neon", "Classic"].map((style) => (
                    <span key={style} className="px-4 py-2 bg-secondary/50 rounded-full text-sm border border-border hover:border-primary/50 cursor-pointer transition-colors">
                      {style}
                    </span>
                  ))}
                </div>
              </div>
              {/* Caption preview mockup */}
              <div className="relative">
                <div className="aspect-[9/16] max-w-[280px] mx-auto bg-card rounded-3xl border border-border overflow-hidden shadow-2xl">
                  {/* Phone mockup */}
                  <div className="h-full bg-gradient-to-b from-secondary/50 to-secondary/20 flex flex-col">
                    <div className="flex-1 flex items-center justify-center p-4">
                      <ImageIcon className="w-16 h-16 text-muted-foreground/30" />
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-lg font-bold leading-tight">
                        <span className="text-primary">Have you ever</span> heard of the mysterious man...
                      </p>
                    </div>
                    <div className="h-1 bg-secondary mx-4 mb-4 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-primary rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
