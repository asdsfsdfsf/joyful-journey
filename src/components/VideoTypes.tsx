import { ArrowRight, Play, ImageIcon } from "lucide-react";

const videoTypes = [
  {
    title: "Faceless Stories",
    description: "Create viral faceless videos with AI-generated visuals and voiceovers. Perfect for YouTube Shorts and TikTok.",
    gradient: "from-cyan-500/20 to-teal-500/20",
    borderColor: "border-cyan-500/30",
    hoverBorder: "hover:border-cyan-400/50",
  },
  {
    title: "Long Form Videos",
    description: "Generate 10-30 minute documentaries and educational content automatically.",
    gradient: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/30",
    hoverBorder: "hover:border-violet-400/50",
  },
  {
    title: "AI ASMR",
    description: "Relaxing ASMR content with soothing AI voices.",
    gradient: "from-indigo-500/20 to-blue-500/20",
    borderColor: "border-indigo-500/30",
    hoverBorder: "hover:border-indigo-400/50",
  },
  {
    title: "Italian Brainrot",
    description: "Viral Italian-style meme videos that dominate social media.",
    gradient: "from-teal-500/20 to-emerald-500/20",
    borderColor: "border-teal-500/30",
    hoverBorder: "hover:border-teal-400/50",
  },
  {
    title: "Sora UGC",
    description: "AI-generated UGC-style content powered by the latest video models.",
    gradient: "from-fuchsia-500/20 to-pink-500/20",
    borderColor: "border-fuchsia-500/30",
    hoverBorder: "hover:border-fuchsia-400/50",
  },
];

const VideoTypes = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-violet text-sm font-semibold tracking-wider uppercase mb-4 block">
            Video Styles
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Create Any Type of Video
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From short-form viral content to long documentaries, StoryShort adapts to your creative vision.
          </p>
        </div>

        {/* Featured large card */}
        <div className="mb-8">
          <div className="bg-gradient-to-br from-primary/10 via-card to-violet/10 rounded-3xl p-8 border border-primary/20 card-hover">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-4">
                  Most Popular
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Faceless Stories</h3>
                <p className="text-muted-foreground mb-6">
                  Create viral faceless videos with AI-generated visuals and voiceovers. Perfect for YouTube Shorts and TikTok. No face, no problem.
                </p>
                <button className="inline-flex items-center gap-2 text-primary font-semibold group">
                  Try it now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              {/* Video placeholder */}
              <div className="relative aspect-video bg-card rounded-2xl border border-border overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-violet/5">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary fill-primary" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs">
                  Video Placeholder
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of other types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {videoTypes.slice(1).map((type, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${type.gradient} rounded-2xl overflow-hidden border ${type.borderColor} ${type.hoverBorder} card-hover cursor-pointer transition-all`}
            >
              {/* Image placeholder */}
              <div className="aspect-video relative bg-card/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon className="w-10 h-10 text-muted-foreground/30" />
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-[10px] text-muted-foreground">
                  Preview
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">{type.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{type.description}</p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  Try it now
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTypes;
