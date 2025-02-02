import { CampaignCard } from "@/components/campaign/campaign-card";
import { CampaignCreator } from "@/components/campaign/campaign-creator";
import { PageContainer } from "@/components/layout/page-container";
import { ProfileHeader } from "@/components/profile/profile-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shared/animated-tabs";

const Index = () => {
  const hasActiveCampaign = true; // This will be controlled by your state management

  return (
    <PageContainer>
      <div className="w-full max-w-2xl mx-auto space-y-12">
        <ProfileHeader />
        
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="active" className="flex-1">Active</TabsTrigger>
            <TabsTrigger value="history" className="flex-1">History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="animate-fade-in">
            {hasActiveCampaign ? <CampaignCard /> : <CampaignCreator />}
          </TabsContent>
          
          <TabsContent value="history" className="animate-fade-in">
            <div className="text-center text-white/60 py-12">
              No completed campaigns yet
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
};

export default Index;