import { GlassCard } from "@/components/ui/glass-card";
import { Progress } from "@/components/ui/progress";

export function CampaignCard() {
  return (
    <GlassCard className="w-full p-6 animate-scale-in">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-medium text-white/90">Current Campaign</h3>
          <p className="text-sm text-white/60">Started 2 days ago</p>
        </div>
        <span className="text-sm font-medium text-white/80 bg-white/10 px-3 py-1 rounded-full">
          Active
        </span>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm text-white/80 mb-2">
            <span>Progress</span>
            <span>R$ 2,000 / R$ 10,000</span>
          </div>
          <Progress value={20} className="h-2" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <p className="text-sm text-white/60">Contributions</p>
            <p className="text-lg font-medium text-white/90">12/50</p>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <p className="text-sm text-white/60">Days Left</p>
            <p className="text-lg font-medium text-white/90">28</p>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}