import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Progress } from "@/components/ui/progress";
import { Share, Save, Edit2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

interface ContributionBox {
  id: string;
  amount: number;
  isPaid: boolean;
  payerName: string;
}

export function CampaignView() {
  const { toast } = useToast();
  const [boxes, setBoxes] = useState<ContributionBox[]>(() => {
    const amounts = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000];
    return amounts.map((amount, index) => ({
      id: index.toString(),
      amount,
      isPaid: false,
      payerName: ""
    }));
  });

  const [editingBoxId, setEditingBoxId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");

  const totalAmount = boxes.reduce((sum, box) => sum + box.amount, 0);
  const paidAmount = boxes.reduce((sum, box) => box.isPaid ? sum + box.amount : sum, 0);
  const progressPercentage = (paidAmount / totalAmount) * 100;

  const handleBoxClick = (boxId: string) => {
    if (editingBoxId) return;

    setBoxes(prevBoxes => {
      const updatedBoxes = [...prevBoxes];
      const boxIndex = updatedBoxes.findIndex(box => box.id === boxId);
      
      if (boxIndex === -1) return prevBoxes;

      const box = updatedBoxes[boxIndex];
      if (!box.isPaid) {
        const name = prompt("Enter the contributor's name:");
        if (!name) return prevBoxes;
        
        box.isPaid = true;
        box.payerName = name;
        toast({
          title: "Payment marked",
          description: `Box of R$ ${box.amount} marked as paid by ${name}`,
        });
      }
      
      return updatedBoxes;
    });
  };

  const handleEditName = (boxId: string) => {
    const box = boxes.find(b => b.id === boxId);
    if (!box) return;
    
    setEditingBoxId(boxId);
    setEditingName(box.payerName);
  };

  const handleSaveEdit = () => {
    if (!editingBoxId) return;

    setBoxes(prevBoxes => 
      prevBoxes.map(box => 
        box.id === editingBoxId 
          ? { ...box, payerName: editingName }
          : box
      )
    );

    setEditingBoxId(null);
    setEditingName("");
    
    toast({
      title: "Name updated",
      description: "Contributor's name has been updated successfully",
    });
  };

  const handleUnmarkPayment = (boxId: string) => {
    setBoxes(prevBoxes =>
      prevBoxes.map(box =>
        box.id === boxId
          ? { ...box, isPaid: false, payerName: "" }
          : box
      )
    );

    toast({
      title: "Payment unmarked",
      description: "Box has been unmarked as paid",
    });
  };

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
              <p className="text-sm text-muted-foreground">R$ {totalAmount.toLocaleString()} goal</p>
            </div>
            
            <div>
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Progress</span>
                <span>R$ {paidAmount.toLocaleString()} / R$ {totalAmount.toLocaleString()}</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
          </div>
        </GlassCard>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {boxes.map((box) => (
            <div
              key={box.id}
              onClick={() => !editingBoxId && handleBoxClick(box.id)}
              className={`p-4 rounded-lg border relative ${
                box.isPaid 
                  ? "bg-primary/10 border-primary/20" 
                  : "bg-muted border-border hover:border-primary/50 cursor-pointer"
              }`}
            >
              <p className="text-lg font-medium text-foreground">
                R$ {box.amount.toLocaleString()}
              </p>
              
              {editingBoxId === box.id ? (
                <div className="flex gap-2 mt-2">
                  <Input
                    value={editingName}
                    onChange={(e) => setEditingName(e.target.value)}
                    className="h-8 text-sm"
                    autoFocus
                  />
                  <Button
                    size="sm"
                    className="h-8"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSaveEdit();
                    }}
                  >
                    Save
                  </Button>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground flex items-center justify-between">
                  <span>{box.isPaid ? box.payerName : "Available"}</span>
                  {box.isPaid && (
                    <span className="flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditName(box.id);
                        }}
                      >
                        <Edit2 className="h-3 w-3" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6 hover:text-destructive"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUnmarkPayment(box.id);
                        }}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </span>
                  )}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

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