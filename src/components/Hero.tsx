import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import videoCard1 from "@/assets/video-card-1.jpg";
import videoCard2 from "@/assets/video-card-2.jpg";
import videoCard3 from "@/assets/video-card-3.jpg";

const Hero = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-background opacity-30" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Powered by GPT-5</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Create{" "}
              <span className="text-gradient-brand">viral faceless videos</span>{" "}
              on Auto-Pilot.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Create AI Videos in minutes. Our AI creation tool creates viral AI videos for you.
            </p>

            {/* CTA */}
            <Button variant="hero" size="lg" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right content - Floating cards */}
          <div className="relative h-[500px] hidden lg:block">
            {/* Card 1 - Main */}
            <div className="absolute left-0 top-0 w-56 floating-animation">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <img src={videoCard1} alt="The Cleopatra Effect" className="w-full h-80 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-foreground text-sm font-medium">The Cleopatre Effect</p>
                </div>
                <div className="absolute top-3 right-3 w-6 h-6 bg-primary/80 rounded-full flex items-center justify-center">
                  <span className="text-xs">▶</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="absolute left-40 top-20 w-52 floating-animation-delayed">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 transform rotate-3">
                <img src={videoCard2} alt="Everest Story" className="w-full h-72 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-foreground text-xs font-medium">The sadest story on Everest</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="absolute right-0 top-10 w-48 floating-animation-delayed-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 transform -rotate-6">
                <img src={videoCard3} alt="Apollo 11" className="w-full h-64 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-foreground text-xs font-medium">The day Apollo 11 landed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="flex flex-col items-center mt-20 space-y-4">
          <div className="flex items-center">
            {/* Avatar stack */}
            <div className="flex -space-x-3">
              {avatars.map((avatar, i) => (
                <img
                  key={i}
                  src={avatar}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            {/* Stars */}
            <div className="flex items-center gap-1 ml-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-primary fill-primary"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            Trusted by <span className="text-foreground font-semibold">27,000+</span> creators
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
