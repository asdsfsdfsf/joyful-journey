import { Youtube, Sparkles, Upload, Bot, Mic2, Music, ArrowRight, ImageIcon } from "lucide-react";

const benefits = [
  {
    icon: Youtube,
    title: "Create Youtube Shorts",
    description: "Create Youtube Shorts with AI generated content. No need to record anything.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Sparkles,
    title: "Create viral Tiktok videos",
    description: "Create Tiktok videos that go viral. No need to dance or lip sync.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Upload,
    title: "Publish on Tiktok & Youtube",
    description: "Publish your videos directly from the app.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Bot,
    title: "100% Powered by AI",
    description: "We use the latest & most powerful models to generate engaging content.",
    color: "text-violet",
    bgColor: "bg-violet/10",
  },
  {
    icon: Mic2,
    title: "AI Generated Voiceovers",
    description: "We use the latest AI models to generate voiceovers for your videos.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Music,
    title: "Background music",
    description: "Add background music to your videos. We have a library of 1000s of songs.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 grid-background opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Unique header with side graphic */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Creating viral faceless videos has{" "}
              <span className="text-gradient-brand">never been so easy</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Everything you need to create, edit, and publish professional videos without showing your face.
            </p>
          </div>
          {/* Stats or graphic placeholder */}
          <div className="bg-card rounded-2xl border border-border p-6 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">10M+</p>
                <p className="text-sm text-muted-foreground">Videos Created</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-violet">50K+</p>
                <p className="text-sm text-muted-foreground">Happy Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-500">99%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-500">24/7</p>
                <p className="text-sm text-muted-foreground">AI Powered</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits in a unique bento-style layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isLarge = index === 0 || index === 3;
            return (
              <div
                key={index}
                className={`bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border card-hover group ${
                  isLarge ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 ${benefit.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-7 h-7 ${benefit.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature showcase with placeholders */}
        <div className="mt-16 bg-gradient-to-r from-card via-primary/5 to-card rounded-3xl border border-border p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                See it in action
              </h3>
              <p className="text-muted-foreground mb-6">
                Watch how easy it is to create professional videos with StoryShort. From prompt to published in minutes.
              </p>
              <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold group hover:bg-primary/90 transition-colors">
                Watch Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            {/* Video placeholder */}
            <div className="relative aspect-video bg-card rounded-2xl border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-violet/5">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ImageIcon className="w-10 h-10 text-primary/50" />
                  </div>
                  <p className="text-muted-foreground text-sm">Video Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* And much more tag */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 via-card to-violet/10 rounded-full px-8 py-4 border border-border">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm">
              <span className="font-semibold">And much more...</span>{" "}
              <span className="text-muted-foreground">We're constantly adding new features every week.</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
