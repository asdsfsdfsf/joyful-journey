import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import StoryShortLogo from "./StoryShortLogo";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <StoryShortLogo size={32} />
          <span className="text-xl font-bold text-foreground">StoryShort</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Pricing
          </Link>
          <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Blog
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/affiliate" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Affiliate Program
            </Link>
            <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
              New
            </span>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
            <Link to="/signin">Sign In</Link>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
