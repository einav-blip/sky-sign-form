import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArrowRight, ArrowLeft, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const WeightConfirmation = () => {
  const { skydiverId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];
  const [weight, setWeight] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchWeight();
  }, [skydiverId]);

  const fetchWeight = async () => {
    try {
      const { data, error } = await supabase
        .from("skydivers")
        .select("weight")
        .eq("id", skydiverId)
        .single();

      if (error) throw error;
      setWeight(data.weight || 0);
    } catch (error) {
      console.error("Error fetching weight:", error);
      toast.error(t.errorLoadingWeight);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirm = async () => {
    if (!weight || weight <= 0) {
      toast.error(t.invalidWeight);
      return;
    }

    try {
      const { error } = await supabase
        .from("skydivers")
        .update({ weight })
        .eq("id", skydiverId);

      if (error) throw error;

      navigate(`/medical-questionnaire/${skydiverId}`);
    } catch (error) {
      console.error("Error updating weight:", error);
      toast.error(t.errorSavingWeight);
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
            <CardTitle className="text-2xl text-center flex-1">{t.confirmWeight}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert variant="destructive">
            <AlertTriangle className="h-5 w-5" />
            <AlertDescription className="text-base font-semibold">
              {t.weightWarning}
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <Label htmlFor="weight" className="text-lg">{t.yourWeight}</Label>
            <Input
              id="weight"
              type="number"
              step="0.1"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
              className="text-2xl h-16 text-center font-bold"
              dir="ltr"
            />
          </div>

          <Button 
            onClick={handleConfirm} 
            className="w-full h-12 text-lg"
          >
            {t.confirmAndContinue} <ArrowRight className="mr-2 h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeightConfirmation;