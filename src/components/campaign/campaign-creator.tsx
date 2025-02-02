import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { calculateContributionBoxes } from "@/lib/campaign-utils";
import { useNavigate } from "react-router-dom";

export function CampaignCreator() {
  const [targetAmount, setTargetAmount] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const amount = Number(targetAmount);
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid positive number",
        variant: "destructive",
      });
      return;
    }

    const boxes = calculateContributionBoxes(amount);
    console.log("Generated boxes:", boxes);
    
    toast({
      title: "Campaign created",
      description: `Campaign with ${boxes.length} contribution boxes created successfully`,
    });

    navigate("/campaign");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="targetAmount">Target Amount (R$)</Label>
        <Input
          id="targetAmount"
          type="number"
          min="1"
          step="1"
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
          placeholder="Enter target amount"
          className="text-lg"
        />
      </div>
      <Button type="submit" className="w-full">
        Create Campaign
      </Button>
    </form>
  );
}