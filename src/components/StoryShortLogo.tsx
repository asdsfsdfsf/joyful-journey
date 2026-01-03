interface StoryShortLogoProps {
  className?: string;
  size?: number;
}

const StoryShortLogo = ({ className = "", size = 32 }: StoryShortLogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background gradient circle */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(175, 85%, 50%)" />
          <stop offset="100%" stopColor="hsl(270, 60%, 65%)" />
        </linearGradient>
        <linearGradient id="playGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(240, 15%, 6%)" />
          <stop offset="100%" stopColor="hsl(240, 15%, 10%)" />
        </linearGradient>
      </defs>
      
      {/* Main rounded square */}
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="12"
        fill="url(#logoGradient)"
      />
      
      {/* Film strip lines */}
      <rect x="8" y="10" width="4" height="4" rx="1" fill="hsl(240, 15%, 6%)" fillOpacity="0.3" />
      <rect x="8" y="18" width="4" height="4" rx="1" fill="hsl(240, 15%, 6%)" fillOpacity="0.3" />
      <rect x="8" y="26" width="4" height="4" rx="1" fill="hsl(240, 15%, 6%)" fillOpacity="0.3" />
      <rect x="8" y="34" width="4" height="4" rx="1" fill="hsl(240, 15%, 6%)" fillOpacity="0.3" />
      
      <rect x="36" y="10" width="4" height="4" rx="1" fill="hsl(240, 15%, 6%)" fillOpacity="0.3" />
      <rect x="36" y="18" width="4" height="4" rx="1" fill="hsl(240, 15%, 6%)" fillOpacity="0.3" />
      <rect x="36" y="26" width="4" height="4" rx="1" fill="hsl(240, 15%, 6%)" fillOpacity="0.3" />
      <rect x="36" y="34" width="4" height="4" rx="1" fill="hsl(240, 15%, 6%)" fillOpacity="0.3" />
      
      {/* Play button triangle */}
      <path
        d="M20 16L32 24L20 32V16Z"
        fill="hsl(240, 15%, 6%)"
        fillOpacity="0.9"
      />
      
      {/* Sparkle accent */}
      <circle cx="38" cy="10" r="3" fill="white" fillOpacity="0.4" />
    </svg>
  );
};

export default StoryShortLogo;
