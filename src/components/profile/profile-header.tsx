import { Avatar } from "@/components/ui/avatar";
import { GlassCard } from "@/components/ui/glass-card";
import { Settings, Share2 } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function ProfileHeader() {
  return (
    <div className="w-full flex flex-col items-center space-y-6 animate-fade-in">
      <Avatar className="w-24 h-24 border-2 border-white/20">
        <div className="w-full h-full bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center text-2xl font-semibold text-white">
          MQ
        </div>
      </Avatar>
      
      <GlassCard className="px-8 py-4">
        <h2 className="text-2xl font-medium text-foreground">Total Saved</h2>
        <p className="text-4xl font-bold text-foreground mt-2">R$ 0.00</p>
      </GlassCard>

      <div className="flex space-x-4">
        <button className="p-4 rounded-full bg-background hover:bg-muted transition-colors border border-border">
          <Settings className="w-6 h-6 text-foreground" />
        </button>
        <ThemeToggle />
        <button className="p-4 rounded-full bg-background hover:bg-muted transition-colors border border-border">
          <Share2 className="w-6 h-6 text-foreground" />
        </button>
      </div>
    </div>
  );
}