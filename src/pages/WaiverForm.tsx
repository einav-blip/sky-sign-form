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
  const [riskSignature, setRiskSignature] = useState("");
  const [waiverSignature, setWaiverSignature] = useState("");

  const handleContinue = () => {
    if (!riskSignature || !waiverSignature) {
      toast.error("נא לחתום על שני חלקי הטופס");
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
            <div className="space-y-2 border-t pt-4">
              <h3 className="text-lg font-semibold">חתימה על הסטטיסטיקה</h3>
              <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-4 min-h-[120px] bg-background">
                <input
                  type="text"
                  placeholder="החתימה שלך כאן (זמני - יוחלף בקומפוננט חתימה)"
                  value={riskSignature}
                  onChange={(e) => setRiskSignature(e.target.value)}
                  className="w-full text-2xl font-signature text-center bg-transparent outline-none"
                />
              </div>
            </div>
          </div>

          {/* Waiver Declaration Section */}
          <div className="space-y-4 border-t pt-8">
            <h2 className="text-xl font-bold">{adultWaiverText.waiverDeclaration.title}</h2>
            <div className="prose prose-sm max-w-none bg-muted/50 p-6 rounded-lg max-h-96 overflow-y-auto whitespace-pre-wrap">
              {adultWaiverText.waiverDeclaration.content}
            </div>
            
            <div className="space-y-2 border-t pt-4">
              <h3 className="text-lg font-semibold">יש להעתיק את המסומן בקו תחתון</h3>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <p className="text-sm font-mono border-b-2 border-foreground pb-2">
                  אני מאשר/ת כי קראתי, הבנתי ואני מסכים/מה לאמור בסעיפי הצהרת הויתור והשחרור לעיל
                </p>
              </div>
              <h3 className="text-lg font-semibold">חתימה על הצהרת הויתור</h3>
              <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-4 min-h-[120px] bg-background">
                <input
                  type="text"
                  placeholder="החתימה שלך כאן (זמני - יוחלף בקומפוננט חתימה)"
                  value={waiverSignature}
                  onChange={(e) => setWaiverSignature(e.target.value)}
                  className="w-full text-2xl font-signature text-center bg-transparent outline-none"
                />
              </div>
            </div>
          </div>

          <Button 
            onClick={handleContinue} 
            className="w-full h-12 text-lg mt-6"
            disabled={!riskSignature || !waiverSignature}
          >
            המשך <ArrowRight className="mr-2 h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WaiverForm;