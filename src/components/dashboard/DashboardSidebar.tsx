import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Video,
  Image,
  FileText,
  Clock,
  Settings,
  CreditCard,
  HelpCircle,
  LogOut,
  ChevronLeft,
  Wand2,
  Repeat,
  Clapperboard,
  Coins,
} from "lucide-react";
import { cn } from "@/lib/utils";
import StoryShortLogo from "@/components/StoryShortLogo";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const mainNavItems = [
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Generate Story Videos", icon: Clapperboard, href: "/dashboard/story-videos" },
  { title: "Series Automation", icon: Repeat, href: "/dashboard/series" },
  { title: "Templates", icon: Wand2, href: "/dashboard/templates" },
  { title: "Scripts", icon: FileText, href: "/dashboard/scripts" },
  { title: "History", icon: Clock, href: "/dashboard/history" },
];

const aiGenerationItems = [
  { title: "Prompt to Video", icon: Video, href: "/dashboard/prompt-to-video" },
  { title: "Prompt to Image", icon: Image, href: "/dashboard/prompt-to-image" },
];

const bottomNavItems = [
  { title: "Settings", icon: Settings, href: "/dashboard/settings" },
  { title: "Billing", icon: CreditCard, href: "/dashboard/billing" },
  { title: "Help & Support", icon: HelpCircle, href: "/dashboard/support" },
];

const DashboardSidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const availableCredits = 2450;

  const isActive = (href: string) => location.pathname === href;

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-card border-r border-border flex flex-col transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-border">
        <Link to="/dashboard" className="flex items-center gap-2">
          <StoryShortLogo size={28} />
          {!collapsed && (
            <span className="text-lg font-bold text-foreground">StoryShort</span>
          )}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronLeft
            className={cn(
              "h-4 w-4 transition-transform",
              collapsed && "rotate-180"
            )}
          />
        </Button>
      </div>

      {/* Main Navigation */}
      <nav className="py-4 px-2 space-y-1 border-b border-border">
        {!collapsed && (
          <span className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Main
          </span>
        )}
        <div className="mt-2 space-y-1">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:translate-x-1",
                isActive(item.href)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </div>
      </nav>

      {/* AI Generation Section */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {!collapsed && (
          <span className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            AI Generation
          </span>
        )}
        <div className="mt-2 space-y-1">
          {aiGenerationItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:translate-x-1",
                isActive(item.href)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="py-4 px-2 border-t border-border space-y-1">
        {bottomNavItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:translate-x-1",
              isActive(item.href)
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>{item.title}</span>}
          </Link>
        ))}

        {/* Logout */}
        <button
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all w-full"
          onClick={() => console.log("Logout")}
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!collapsed && <span>Log Out</span>}
        </button>
      </div>

      {/* User Profile with Credits */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-sm font-semibold text-primary">JD</span>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">John Doe</p>
              <div className="flex items-center gap-1.5 text-xs text-primary">
                <Coins className="h-3 w-3" />
                <span className="font-medium">{availableCredits.toLocaleString()} credits</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
