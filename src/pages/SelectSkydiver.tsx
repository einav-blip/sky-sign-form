import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

interface Skydiver {
  id: string;
  full_name: string;
  phone_number: string;
}

const SelectSkydiver = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const phoneNumber = searchParams.get("phone");
  const { language } = useLanguage();
  const t = translations[language];
  
  const [skydivers, setSkydivers] = useState<Skydiver[]>([]);
  const [selectedSkydiverId, setSelectedSkydiverId] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!phoneNumber) {
      navigate("/");
      return;
    }

    fetchSkydivers();
  }, [phoneNumber, navigate]);

  const fetchSkydivers = async () => {
    try {
      const { data, error } = await supabase
        .from("skydivers")
        .select("*")
        .eq("phone_number", phoneNumber);

      if (error) throw error;

      if (!data || data.length === 0) {
        toast.error(t.noSkydivers);
        navigate("/");
        return;
      }

      setSkydivers(data);
      
      // If only one skydiver, check for pending medical notes first
      if (data.length === 1) {
        const skydiverId = data[0].id;
        const hasPendingNotes = await checkPendingMedicalNotes(skydiverId);
        
        if (hasPendingNotes) {
          navigate(`/medical-notes-signature/${skydiverId}`);
        } else {
          navigate(`/review-details/${skydiverId}`);
        }
      }
    } catch (error) {
      console.error("Error fetching skydivers:", error);
      toast.error(t.errorLoading);
    } finally {
      setIsLoading(false);
    }
  };

  const checkPendingMedicalNotes = async (skydiverId: string): Promise<boolean> => {
    try {
      // Get the latest waiver submission that requires medical review
      const { data: submission } = await supabase
        .from("waiver_submissions")
        .select("id")
        .eq("skydiver_id", skydiverId)
        .eq("requires_medical_review", true)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (!submission) return false;

      // Check if there are medical notes waiting for customer signature
      const { data: notes } = await supabase
        .from("medical_notes")
        .select("customer_signature")
        .eq("waiver_submission_id", submission.id)
        .maybeSingle();

      // Return true if notes exist but not yet signed by customer
      return notes !== null && notes.customer_signature === null;
    } catch (error) {
      console.error("Error checking pending medical notes:", error);
      return false;
    }
  };

  const handleContinue = async () => {
    if (!selectedSkydiverId) {
      toast.error(t.pleaseSelectSkydiver);
      return;
    }

    // Check for pending medical notes before continuing
    const hasPendingNotes = await checkPendingMedicalNotes(selectedSkydiverId);
    
    if (hasPendingNotes) {
      navigate(`/medical-notes-signature/${selectedSkydiverId}`);
    } else {
      navigate(`/review-details/${selectedSkydiverId}`);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">{t.loading}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-4">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="absolute right-4"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <CardTitle className="text-2xl font-bold">{t.selectSkydiver}</CardTitle>
          </div>
          <CardDescription>
            {t.foundSkydivers.replace('{count}', skydivers.length.toString())}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Select value={selectedSkydiverId} onValueChange={setSelectedSkydiverId}>
              <SelectTrigger className="h-12 text-lg">
                <SelectValue placeholder={t.selectName} />
              </SelectTrigger>
              <SelectContent>
                {skydivers.map((skydiver) => (
                  <SelectItem key={skydiver.id} value={skydiver.id} className="text-lg">
                    {skydiver.full_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button 
            onClick={handleContinue} 
            className="w-full h-12 text-lg"
            disabled={!selectedSkydiverId}
          >
            {t.continue} <ArrowRight className="mr-2 h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SelectSkydiver;