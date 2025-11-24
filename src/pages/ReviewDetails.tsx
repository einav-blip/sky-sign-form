import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface SkydiverDetails {
  id: string;
  full_name: string;
  phone_number: string;
  email: string;
  weight: number;
  date_of_birth: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  id_number: string;
}

const ReviewDetails = () => {
  const { skydiverId } = useParams();
  const navigate = useNavigate();
  
  const [details, setDetails] = useState<SkydiverDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!skydiverId) {
      navigate("/");
      return;
    }
    fetchDetails();
  }, [skydiverId, navigate]);

  const fetchDetails = async () => {
    try {
      const { data, error } = await supabase
        .from("skydivers")
        .select("*")
        .eq("id", skydiverId)
        .single();

      if (error) throw error;
      setDetails(data);
    } catch (error) {
      console.error("Error fetching details:", error);
      toast.error("שגיאה בטעינת הפרטים");
      navigate("/");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!details) return;

    setIsSaving(true);
    try {
      const { error } = await supabase
        .from("skydivers")
        .update({
          full_name: details.full_name,
          email: details.email,
          weight: details.weight,
          date_of_birth: details.date_of_birth,
          emergency_contact_name: details.emergency_contact_name,
          emergency_contact_phone: details.emergency_contact_phone,
          id_number: details.id_number,
        })
        .eq("id", skydiverId);

      if (error) throw error;

      toast.success("הפרטים עודכנו בהצלחה");
      navigate(`/waiver/${skydiverId}`);
    } catch (error) {
      console.error("Error updating details:", error);
      toast.error("שגיאה בשמירת הפרטים");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">טוען...</p>
      </div>
    );
  }

  if (!details) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 py-8">
      <Card className="max-w-2xl mx-auto">
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
            <CardTitle className="text-2xl">בדיקת פרטים אישיים</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="full_name">שם מלא</Label>
                <Input
                  id="full_name"
                  value={details.full_name}
                  onChange={(e) => setDetails({ ...details, full_name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="id_number">תעודת זהות</Label>
                <Input
                  id="id_number"
                  value={details.id_number || ""}
                  onChange={(e) => setDetails({ ...details, id_number: e.target.value })}
                  dir="ltr"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone_number">טלפון</Label>
                <Input
                  id="phone_number"
                  value={details.phone_number}
                  disabled
                  dir="ltr"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">אימייל</Label>
                <Input
                  id="email"
                  type="email"
                  value={details.email || ""}
                  onChange={(e) => setDetails({ ...details, email: e.target.value })}
                  dir="ltr"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="weight">משקל (ק"ג)</Label>
                <Input
                  id="weight"
                  type="number"
                  step="0.1"
                  value={details.weight || ""}
                  onChange={(e) => setDetails({ ...details, weight: parseFloat(e.target.value) })}
                  dir="ltr"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date_of_birth">תאריך לידה</Label>
                <Input
                  id="date_of_birth"
                  type="date"
                  value={details.date_of_birth || ""}
                  onChange={(e) => setDetails({ ...details, date_of_birth: e.target.value })}
                  dir="ltr"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emergency_contact_name">איש קשר חירום</Label>
                <Input
                  id="emergency_contact_name"
                  value={details.emergency_contact_name || ""}
                  onChange={(e) => setDetails({ ...details, emergency_contact_name: e.target.value })}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="emergency_contact_phone">טלפון איש קשר חירום</Label>
                <Input
                  id="emergency_contact_phone"
                  type="tel"
                  value={details.emergency_contact_phone || ""}
                  onChange={(e) => setDetails({ ...details, emergency_contact_phone: e.target.value })}
                  dir="ltr"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-lg mt-6"
              disabled={isSaving}
            >
              {isSaving ? "שומר..." : "המשך"} <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewDetails;