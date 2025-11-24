import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArrowRight, AlertTriangle } from "lucide-react";

const WeightConfirmation = () => {
  const { skydiverId } = useParams();
  const navigate = useNavigate();
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
      toast.error("שגיאה בטעינת המשקל");
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirm = async () => {
    if (!weight || weight <= 0) {
      toast.error("נא להזין משקל תקין");
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
      toast.error("שגיאה בשמירת המשקל");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">טוען...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">אישור משקל</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert variant="destructive">
            <AlertTriangle className="h-5 w-5" />
            <AlertDescription className="text-base font-semibold">
              חשוב מאוד! המשקל חייב להיות מדויק לצורך בטיחות הצניחה
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <Label htmlFor="weight" className="text-lg">המשקל שלך (ק"ג)</Label>
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
            אישור והמשך <ArrowRight className="mr-2 h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeightConfirmation;