import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FileText, AlertCircle } from "lucide-react";

interface WaiverSubmission {
  id: string;
  skydiver_id: string;
  requires_medical_review: boolean;
  status: string;
  created_at: string;
  skydivers: {
    full_name: string;
    phone_number: string;
  };
  medical_questions: any;
}

const CRMDashboard = () => {
  const [submissions, setSubmissions] = useState<WaiverSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<string | null>(null);
  const [medicalNotes, setMedicalNotes] = useState("");

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from("waiver_submissions")
        .select(`
          *,
          skydivers (
            full_name,
            phone_number
          )
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      toast.error("שגיאה בטעינת הנתונים");
    } finally {
      setIsLoading(false);
    }
  };

  const saveMedicalNotes = async () => {
    if (!selectedSubmission || !medicalNotes) {
      toast.error("נא להזין הערות רפואיות");
      return;
    }

    try {
      const { error } = await supabase
        .from("medical_notes")
        .insert([{
          waiver_submission_id: selectedSubmission,
          staff_notes: medicalNotes,
        }]);

      if (error) throw error;

      toast.success("ההערות הרפואיות נשמרו בהצלחה");
      setMedicalNotes("");
      setSelectedSubmission(null);
      fetchSubmissions();
    } catch (error) {
      console.error("Error saving medical notes:", error);
      toast.error("שגיאה בשמירת ההערות");
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
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 py-8">
      <div className="max-w-6xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-3xl">לוח בקרה CRM - מערכת וויברים</CardTitle>
          </CardHeader>
        </Card>

        <div className="grid gap-4">
          {submissions.map((submission) => (
            <Card key={submission.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">
                      {submission.skydivers?.full_name}
                    </h3>
                    <p className="text-muted-foreground" dir="ltr">
                      {submission.skydivers?.phone_number}
                    </p>
                    <div className="flex gap-2">
                      <Badge variant={submission.requires_medical_review ? "destructive" : "default"}>
                        {submission.status === "completed" ? "הושלם" : "ממתין לביקורת"}
                      </Badge>
                      {submission.requires_medical_review && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          דורש ביקורת רפואית
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline">
                      <FileText className="h-4 w-4 ml-2" />
                      צפה בטפסים
                    </Button>
                    
                    {submission.requires_medical_review && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            onClick={() => setSelectedSubmission(submission.id)}
                          >
                            הזן הערות רפואיות
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>הערות רפואיות - {submission.skydivers?.full_name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="medical_notes">הערות הצוות הרפואי</Label>
                              <Textarea
                                id="medical_notes"
                                value={medicalNotes}
                                onChange={(e) => setMedicalNotes(e.target.value)}
                                placeholder="הזן הערות רפואיות כאן..."
                                className="min-h-[200px]"
                              />
                            </div>
                            <Button onClick={saveMedicalNotes} className="w-full">
                              שמור הערות
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {submissions.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <p className="text-lg text-muted-foreground">אין הגשות חדשות</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CRMDashboard;