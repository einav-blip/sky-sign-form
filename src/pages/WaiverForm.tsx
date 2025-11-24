import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { adultWaiverText } from "@/data/waiverTexts";

const WaiverForm = () => {
  const { skydiverId } = useParams();
  const navigate = useNavigate();
  const [signature, setSignature] = useState("");

  const handleContinue = () => {
    if (!signature) {
      toast.error("נא לחתום על הטופס");
      return;
    }
    navigate(`/weight-confirmation/${skydiverId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">{adultWaiverText.personalDetails.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Risk Statistics Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-destructive">
              {adultWaiverText.riskStatistics.title}
            </h2>
            <div className="prose prose-sm max-w-none bg-muted/50 p-6 rounded-lg max-h-96 overflow-y-auto whitespace-pre-wrap">
              {adultWaiverText.riskStatistics.content}
            </div>
          </div>

          {/* Waiver Declaration Section */}
          <div className="space-y-4 border-t pt-8">
            <h2 className="text-xl font-bold">{adultWaiverText.waiverDeclaration.title}</h2>
            <div className="prose prose-sm max-w-none bg-muted/50 p-6 rounded-lg max-h-96 overflow-y-auto whitespace-pre-wrap">
              {adultWaiverText.waiverDeclaration.content}
            </div>
          </div>

          {/* Signature Section */}
          <div className="space-y-4 border-t pt-8">
            <h3 className="text-lg font-semibold">חתימה</h3>
            <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-4 min-h-[120px] bg-background">
              <input
                type="text"
                placeholder="החתימה שלך כאן (זמני - יוחלף בקומפוננט חתימה)"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                className="w-full text-2xl font-signature text-center bg-transparent outline-none"
              />
            </div>
          </div>

          <Button 
            onClick={handleContinue} 
            className="w-full h-12 text-lg mt-6"
            disabled={!signature}
          >
            המשך <ArrowRight className="mr-2 h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WaiverForm;