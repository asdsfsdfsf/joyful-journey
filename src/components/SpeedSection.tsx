import { Zap, Clock, Rocket, ImageIcon } from "lucide-react";

const SpeedSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main content with unique asymmetric layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Lightning Fast
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Turn prompts into videos at{" "}
              <span className="text-gradient-brand">ultra speed</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              What if you could create engaging videos for Tiktok and Youtube on autopilot and then publish them daily without lifting a finger?
            </p>
            
            {/* Speed metrics */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">30s</p>
                  <p className="text-sm text-muted-foreground">Avg. render time</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-violet/10 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-violet" />
                </div>
                <div>
                  <p className="text-2xl font-bold">10x</p>
                  <p className="text-sm text-muted-foreground">Faster than manual</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual placeholder - workflow diagram area */}
          <div className="relative">
            <div className="bg-card rounded-3xl border border-border p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-violet/20 to-transparent rounded-tr-full" />
              
              {/* Workflow steps placeholder */}
              <div className="space-y-6 relative z-10">
                {[
                  { step: "1", label: "Enter your prompt", desc: "Describe your video idea" },
                  { step: "2", label: "AI generates script", desc: "Powered by GPT-5" },
                  { step: "3", label: "Video rendered", desc: "Ready to publish" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <div className="w-20 h-12 bg-secondary/50 rounded-lg flex items-center justify-center border border-border/50">
                      <ImageIcon className="w-5 h-5 text-muted-foreground/50" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards - redesigned */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-card rounded-2xl p-8 border border-primary/20">
            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Tell Stories with AI</h3>
            <p className="text-muted-foreground">
              From writing script to creating video with voiceover and adding captions, StoryShort does it all automatically.
            </p>
          </div>
          <div className="bg-gradient-to-br from-violet/10 to-card rounded-2xl p-8 border border-violet/20">
            <div className="w-14 h-14 bg-violet/20 rounded-2xl flex items-center justify-center mb-6">
              <Rocket className="w-7 h-7 text-violet" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Edit Videos in Seconds</h3>
            <p className="text-muted-foreground">
              StoryShort generates beautiful viral videos that get views and subscribers without any editing skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeedSection;
