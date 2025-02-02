import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Plus } from "lucide-react";

export function CampaignCreator() {
  return (
    <GlassCard className="w-full p-8 flex flex-col items-center justify-center space-y-4 animate-scale-in">
      <div className="p-4 rounded-full bg-white/5 border border-white/10">
        <Plus className="w-8 h-8 text-white/80" />
      </div>
      <h3 className="text-xl font-medium text-white/90">Create New Goal</h3>
      <p className="text-sm text-white/60 text-center max-w-sm">
        Start your journey by creating a new financial goal campaign
      </p>
      <Button variant="secondary" className="mt-4">
        Get Started
      </Button>
    </GlassCard>
  );
}