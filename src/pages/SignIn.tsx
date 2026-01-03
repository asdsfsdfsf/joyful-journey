import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import StoryShortLogo from "@/components/StoryShortLogo";
import { ArrowRight, Eye, EyeOff, Mail, Lock, User, Sparkles } from "lucide-react";

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication logic will be added when backend is connected
    console.log(isSignUp ? "Sign Up" : "Sign In", { email, password, name });
  };

  const showcaseImages = [
    "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=600&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 relative">
        {/* Grid background */}
        <div className="absolute inset-0 grid-background opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

        <div className="relative z-10 max-w-md w-full mx-auto">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 mb-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "0ms" }}
          >
            <StoryShortLogo size={40} />
            <span className="text-2xl font-bold">StoryShort</span>
          </Link>

          {/* Header */}
          <div 
            className="mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              {isSignUp ? (
                <>Welcome to <span className="text-gradient-brand">StoryShort</span></>
              ) : (
                <>Welcome <span className="text-gradient-brand">back</span></>
              )}
            </h1>
            <p className="text-muted-foreground">
              {isSignUp
                ? "Create your account and start making viral videos today."
                : "Sign in to continue creating amazing content."}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignUp && (
              <div 
                className="space-y-2 opacity-0 animate-fade-in"
                style={{ animationDelay: "150ms" }}
              >
                <Label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-11 h-12 bg-card/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
            )}

            <div 
              className="space-y-2 opacity-0 animate-fade-in"
              style={{ animationDelay: isSignUp ? "200ms" : "150ms" }}
            >
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11 h-12 bg-card/50 border-border/50 focus:border-primary"
                />
              </div>
            </div>

            <div 
              className="space-y-2 opacity-0 animate-fade-in"
              style={{ animationDelay: isSignUp ? "250ms" : "200ms" }}
            >
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-11 pr-11 h-12 bg-card/50 border-border/50 focus:border-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {!isSignUp && (
              <div 
                className="flex justify-end opacity-0 animate-fade-in"
                style={{ animationDelay: "250ms" }}
              >
                <a
                  href="#"
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Forgot password?
                </a>
              </div>
            )}

            <div 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: isSignUp ? "300ms" : "300ms" }}
            >
              <Button type="submit" variant="hero" size="lg" className="w-full group">
                {isSignUp ? "Create Account" : "Sign In"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div 
              className="relative my-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "350ms" }}
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/50"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-background px-4 text-muted-foreground">or continue with</span>
              </div>
            </div>

            <div 
              className="grid grid-cols-2 gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <Button type="button" variant="outline" size="lg" className="h-12">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button type="button" variant="outline" size="lg" className="h-12">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                </svg>
                Apple
              </Button>
            </div>
          </form>

          {/* Toggle */}
          <p 
            className="mt-8 text-center text-muted-foreground opacity-0 animate-fade-in"
            style={{ animationDelay: "450ms" }}
          >
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </button>
          </p>
        </div>
      </div>

      {/* Right side - Visual showcase */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
        {/* Grid background */}
        <div className="absolute inset-0 grid-background opacity-40" />
        
        {/* Glowing orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12">
          {/* Floating video cards */}
          <div className="relative w-full max-w-lg h-[500px]">
            {showcaseImages.map((img, index) => (
              <div
                key={index}
                className={`absolute opacity-0 animate-fade-in ${
                  index === 0 
                    ? "left-0 top-0 floating-animation z-30" 
                    : index === 1 
                    ? "left-24 top-16 floating-animation-delayed z-20 rotate-6" 
                    : "right-0 top-8 floating-animation-delayed-2 z-10 -rotate-6"
                }`}
                style={{ 
                  animationDelay: `${500 + index * 200}ms`,
                  width: index === 0 ? "200px" : "180px"
                }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 glow-brand">
                  <img
                    src={img}
                    alt={`Video ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-primary/80 flex items-center justify-center">
                        <span className="text-xs">▶</span>
                      </div>
                      <span className="text-xs text-white/80">AI Generated</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom text */}
          <div 
            className="text-center mt-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "1100ms" }}
          >
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Join 27,000+ creators</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Create <span className="text-gradient-brand">viral videos</span>
            </h2>
            <p className="text-muted-foreground max-w-sm">
              Turn any idea into engaging video content with the power of AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;