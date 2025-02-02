import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Progress } from "@/components/ui/progress";
import { Share, Save } from "lucide-react";
import { Link } from "react-router-dom";

export function CampaignView() {
  // This would come from your state management
  const boxes = Array.from({ length: 12 }, (_, i) => ({
    id: i.toString(),
    amount: ((i + 1) * 1000),
    isPaid: false,
    payerName: ""
  }));

  return (
    <div className="relative min-h-screen pb-24">
      <div className="w-full max-w-2xl mx-auto space-y-6 p-4">
        <Link 
          to="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to home
        </Link>

        <GlassCard className="w-full p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-foreground">Current Campaign</h3>
              <p className="text-sm text-muted-foreground">R$ 12,000 goal</p>
            </div>
            
            <div>
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Progress</span>
                <span>R$ 2,000 / R$ 12,000</span>
              </div>
              <Progress value={16.67} className="h-2" />
            </div>
          </div>
        </GlassCard>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {boxes.map((box) => (
            <div
              key={box.id}
              className={`p-4 rounded-lg border ${
                box.isPaid 
                  ? "bg-primary/10 border-primary/20" 
                  : "bg-muted border-border"
              }`}
            >
              <p className="text-lg font-medium text-foreground">
                R$ {box.amount}
              </p>
              <p className="text-sm text-muted-foreground">
                {box.isPaid ? box.payerName || "Paid" : "Available"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        <Button 
          size="icon"
          variant="secondary"
          className="rounded-full shadow-lg"
        >
          <Share className="h-5 w-5" />
        </Button>
        <Button 
          size="icon"
          className="rounded-full shadow-lg"
        >
          <Save className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}