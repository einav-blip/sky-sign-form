import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, FileText, ClipboardPlus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import WaiverPDFViewer from "@/components/WaiverPDFViewer";

const Completion = () => {
  const { skydiverId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [requiresMedicalReview, setRequiresMedicalReview] = useState(false);
  const [showPDFViewer, setShowPDFViewer] = useState(false);
  const [showMedicalNotesDialog, setShowMedicalNotesDialog] = useState(false);
  const [medicalNotes, setMedicalNotes] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [existingMedicalNotes, setExistingMedicalNotes] = useState<string | null>(null);

  useEffect(() => {
    if (skydiverId) {
      fetchLatestSubmission();
    }
  }, [skydiverId]);

  const fetchLatestSubmission = async () => {
    try {
      const { data, error } = await supabase
        .from("waiver_submissions")
        .select("id, requires_medical_review")
        .eq("skydiver_id", skydiverId)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setSubmissionId(data.id);
        setRequiresMedicalReview(data.requires_medical_review || false);

        // Check if medical notes already exist
        const { data: notes } = await supabase
          .from("medical_notes")
          .select("staff_notes")
          .eq("waiver_submission_id", data.id)
          .maybeSingle();

        if (notes) {
          setExistingMedicalNotes(notes.staff_notes);
          setMedicalNotes(notes.staff_notes);
        }
      }
    } catch (error) {
      console.error("Error fetching submission:", error);
    }
  };

  const handleSaveMedicalNotes = async () => {
    if (!submissionId || !medicalNotes.trim()) {
      toast.error("נא להזין הערות רפואיות");
      return;
    }

    setIsSaving(true);
    try {
      if (existingMedicalNotes) {
        // Update existing notes
        const { error } = await supabase
          .from("medical_notes")
          .update({ staff_notes: medicalNotes })
          .eq("waiver_submission_id", submissionId);

        if (error) throw error;
      } else {
        // Insert new notes
        const { error } = await supabase
          .from("medical_notes")
          .insert({
            waiver_submission_id: submissionId,
            staff_notes: medicalNotes
          });

        if (error) throw error;
      }

      setExistingMedicalNotes(medicalNotes);
      setShowMedicalNotesDialog(false);
      toast.success("ההערות הרפואיות נשמרו בהצלחה");
    } catch (error) {
      console.error("Error saving medical notes:", error);
      toast.error("שגיאה בשמירת ההערות");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20 p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-20 w-20 text-green-500" />
          </div>
          <CardTitle className="text-3xl font-bold">{t.completionTitle}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-muted-foreground">
            {t.completionMessage}
            <br />
            {t.seeYou}
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-3 justify-center flex-wrap">
            {submissionId && (
              <Button 
                variant="outline"
                onClick={() => setShowPDFViewer(true)}
                className="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                {t.viewForms}
              </Button>
            )}

            {requiresMedicalReview && (
              <Button 
                variant="outline"
                onClick={() => setShowMedicalNotesDialog(true)}
                className="flex items-center gap-2"
              >
                <ClipboardPlus className="h-4 w-4" />
                {existingMedicalNotes ? "עריכת הערות רפואיות" : t.enterMedicalNotes}
              </Button>
            )}
          </div>
          
          <Button 
            onClick={() => navigate("/")} 
            className="w-full h-12 text-lg"
          >
            {t.backToHome}
          </Button>
        </CardContent>
      </Card>

      {/* PDF Viewer Dialog */}
      {submissionId && (
        <WaiverPDFViewer
          open={showPDFViewer}
          onOpenChange={setShowPDFViewer}
          submissionId={submissionId}
          language={language}
        />
      )}

      {/* Medical Notes Dialog */}
      <Dialog open={showMedicalNotesDialog} onOpenChange={setShowMedicalNotesDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>הזנת הערות רפואיות נוספות</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <p className="text-sm text-muted-foreground">
              הזן את ההערות הרפואיות שיוצגו ללקוח לחתימה
            </p>
            <Textarea
              value={medicalNotes}
              onChange={(e) => setMedicalNotes(e.target.value)}
              placeholder="הזן הערות רפואיות..."
              className="min-h-[150px]"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowMedicalNotesDialog(false)}>
              ביטול
            </Button>
            <Button onClick={handleSaveMedicalNotes} disabled={isSaving || !medicalNotes.trim()}>
              {isSaving ? "שומר..." : "שמור"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Completion;
