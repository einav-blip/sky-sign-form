import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const PhoneEntry = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber) {
      toast.error("נא להזין מספר טלפון");
      return;
    }

    setIsLoading(true);

    try {
      // Check if there are skydivers with this phone number
      const { data: skydivers, error } = await supabase
        .from("skydivers")
        .select("*")
        .eq("phone_number", phoneNumber);

      if (error) throw error;

      if (!skydivers || skydivers.length === 0) {
        toast.error("לא נמצאו צונחים עם מספר טלפון זה");
        setIsLoading(false);
        return;
      }

      // Navigate to skydiver selection with phone number
      navigate(`/select-skydiver?phone=${encodeURIComponent(phoneNumber)}`);
    } catch (error) {
      console.error("Error fetching skydivers:", error);
      toast.error("שגיאה בטעינת הנתונים");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">מערכת וויברים</CardTitle>
          <CardDescription className="text-lg">
            ברוכים הבאים למועדון הצניחה
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-lg">מספר טלפון</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="הזן מספר טלפון"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="text-lg h-12"
                dir="ltr"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 text-lg" 
              disabled={isLoading}
            >
              {isLoading ? "טוען..." : "המשך"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhoneEntry;