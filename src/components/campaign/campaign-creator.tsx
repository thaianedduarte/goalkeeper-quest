import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Plus } from "lucide-react";

export function CampaignCreator() {
  return (
    <GlassCard className="w-full p-8 flex flex-col items-center justify-center space-y-4 animate-scale-in">
      <div className="p-4 rounded-full bg-muted border border-border">
        <Plus className="w-8 h-8 text-foreground" />
      </div>
      <h3 className="text-xl font-medium text-foreground">Create New Goal</h3>
      <p className="text-sm text-muted-foreground text-center max-w-sm">
        Start your journey by creating a new financial goal campaign
      </p>
      <Button variant="secondary" className="mt-4">
        Get Started
      </Button>
    </GlassCard>
  );
}