import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { waiverTexts } from "@/data/waiverTexts";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import SignaturePad from "@/components/SignaturePad";

const WaiverForm = () => {
  const { skydiverId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];
  const waiverText = waiverTexts[language];
  
  const [signature, setSignature] = useState(() => {
    // Load saved signature from localStorage
    const saved = localStorage.getItem(`waiver_signature_${skydiverId}`);
    return saved || "";
  });
  const [skydiverName, setSkydiverName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSkydiverInfo = async () => {
      if (!skydiverId) return;
      
      try {
        const { data, error } = await supabase
          .from("skydivers")
          .select("full_name, id_number")
          .eq("id", skydiverId)
          .single();

        if (error) throw error;
        if (data) {
          setSkydiverName(data.full_name);
          setIdNumber(data.id_number || "");
        }
      } catch (error) {
        console.error("Error fetching skydiver:", error);
        toast.error(t.errorLoadingDetails);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkydiverInfo();
  }, [skydiverId]);

  const handleContinue = () => {
    if (!signature) {
      toast.error(t.signature);
      return;
    }
    // Save signature to localStorage
    localStorage.setItem(`waiver_signature_${skydiverId}`, signature);
    navigate(`/weight-confirmation/${skydiverId}`);
  };

  // Save signature to localStorage whenever it changes
  useEffect(() => {
    if (signature) {
      localStorage.setItem(`waiver_signature_${skydiverId}`, signature);
    }
  }, [signature, skydiverId]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">{t.loading}</p>
      </div>
    );
  }

  // Replace signature line based on language
  let waiverContent = waiverText.waiverDeclaration.content;
  
  // For Hebrew, replace the specific signature line
  if (language === 'he') {
    waiverContent = waiverContent.replace(
      "אני הח\"מ _______",
      `אני הח"מ ${skydiverName}${idNumber ? `, ת.ז ${idNumber}` : ""}`
    );
  } else {
    // For other languages, add signature info at the beginning
    waiverContent = `I, the undersigned: ${skydiverName}${idNumber ? `, ID: ${idNumber}` : ""}\n\n${waiverContent}`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <CardTitle className="text-2xl">{waiverText.personalDetails.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Risk Statistics Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-destructive">
              {waiverText.riskStatistics.title}
            </h2>
            <div className="prose prose-sm max-w-none bg-muted/50 p-6 rounded-lg max-h-96 overflow-y-auto whitespace-pre-wrap">
              {waiverText.riskStatistics.content}
            </div>
          </div>

          {/* Waiver Declaration Section */}
          <div className="space-y-4 border-t pt-8">
            <h2 className="text-xl font-bold">{waiverText.waiverDeclaration.title}</h2>
            <div className="prose prose-sm max-w-none bg-muted/50 p-6 rounded-lg max-h-96 overflow-y-auto whitespace-pre-wrap">
              {waiverContent}
            </div>
          </div>

          {/* Signature Section */}
          <div className="space-y-4 border-t pt-8">
            <h3 className="text-lg font-semibold">{t.signature}</h3>
            <SignaturePad
              value={signature}
              onChange={setSignature}
              placeholder={t.signature}
            />
          </div>

          <Button 
            onClick={handleContinue} 
            className="w-full h-12 text-lg mt-6"
            disabled={!signature}
          >
            {t.continue} <ArrowRight className="mr-2 h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WaiverForm;