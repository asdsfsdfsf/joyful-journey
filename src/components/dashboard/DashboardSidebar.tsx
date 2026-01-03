import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Video,
  Sparkles,
  Image,
  FileText,
  Clock,
  Settings,
  CreditCard,
  HelpCircle,
  LogOut,
  ChevronLeft,
  FolderOpen,
  Wand2,
  Megaphone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import StoryShortLogo from "@/components/StoryShortLogo";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const mainNavItems = [
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Create Video", icon: Video, href: "/dashboard/create" },
  { title: "AI Generator", icon: Sparkles, href: "/dashboard/ai-generator" },
  { title: "Ad Creator", icon: Megaphone, href: "/dashboard/ads" },
  { title: "Templates", icon: Wand2, href: "/dashboard/templates" },
  { title: "My Projects", icon: FolderOpen, href: "/dashboard/projects" },
  { title: "Media Library", icon: Image, href: "/dashboard/media" },
  { title: "Scripts", icon: FileText, href: "/dashboard/scripts" },
  { title: "History", icon: Clock, href: "/dashboard/history" },
];

const bottomNavItems = [
  { title: "Settings", icon: Settings, href: "/dashboard/settings" },
  { title: "Billing", icon: CreditCard, href: "/dashboard/billing" },
  { title: "Help & Support", icon: HelpCircle, href: "/dashboard/support" },
];

const DashboardSidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

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
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {mainNavItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
              isActive(item.href)
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>{item.title}</span>}
          </Link>
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="py-4 px-2 border-t border-border space-y-1">
        {bottomNavItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
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

      {/* User Profile */}
      {!collapsed && (
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">Pro Plan</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default DashboardSidebar;
