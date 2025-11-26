import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import SignaturePad from "@/components/SignaturePad";
import WaiverPDFViewer from "@/components/WaiverPDFViewer";

interface MedicalNotesData {
  id: string;
  staff_notes: string;
  waiver_submission_id: string;
}

const MedicalNotesSignature = () => {
  const { skydiverId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  const [medicalNotes, setMedicalNotes] = useState<MedicalNotesData | null>(null);
  const [signature, setSignature] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [showPDFViewer, setShowPDFViewer] = useState(false);

  useEffect(() => {
    if (skydiverId) {
      fetchMedicalNotes();
    }
  }, [skydiverId]);

  const fetchMedicalNotes = async () => {
    try {
      // Get the latest waiver submission for this skydiver that requires medical review
      const { data: submission, error: submissionError } = await supabase
        .from("waiver_submissions")
        .select("id")
        .eq("skydiver_id", skydiverId)
        .eq("requires_medical_review", true)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (submissionError) throw submissionError;

      if (!submission) {
        // No submission requiring medical review
        navigate("/");
        return;
      }

      // Get medical notes for this submission
      const { data: notes, error: notesError } = await supabase
        .from("medical_notes")
        .select("*")
        .eq("waiver_submission_id", submission.id)
        .maybeSingle();

      if (notesError) throw notesError;

      if (!notes) {
        // No medical notes yet - staff hasn't entered them
        toast.info("ממתין להערות רפואיות מהצוות");
        navigate("/");
        return;
      }

      if (notes.customer_signature) {
        // Already signed - redirect to completion
        navigate(`/completion/${skydiverId}`);
        return;
      }

      setMedicalNotes(notes);
    } catch (error) {
      console.error("Error fetching medical notes:", error);
      toast.error(t.errorLoading);
      navigate("/");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!signature) {
      toast.error("נא לחתום על ההערות הרפואיות");
      return;
    }

    if (!medicalNotes) return;

    setIsSaving(true);
    try {
      const { error } = await supabase
        .from("medical_notes")
        .update({
          customer_signature: signature,
          customer_signed_at: new Date().toISOString()
        })
        .eq("id", medicalNotes.id);

      if (error) throw error;

      // Update waiver submission status
      await supabase
        .from("waiver_submissions")
        .update({ status: "completed" })
        .eq("id", medicalNotes.waiver_submission_id);

      toast.success("החתימה נשמרה בהצלחה");
      navigate(`/completion/${skydiverId}`);
    } catch (error) {
      console.error("Error saving signature:", error);
      toast.error("שגיאה בשמירת החתימה");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">{t.loading}</p>
      </div>
    );
  }

  if (!medicalNotes) return null;

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
            <div className="flex-1">
              <CardTitle className="text-2xl">הערות רפואיות לאישור</CardTitle>
            </div>
            {medicalNotes.waiver_submission_id && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowPDFViewer(true)}
              >
                <FileText className="h-4 w-4 mr-2" />
                {t.viewForms}
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">הערות הצוות הרפואי:</h3>
            <div className="bg-muted p-4 rounded-lg">
              <p className="whitespace-pre-line text-lg">{medicalNotes.staff_notes}</p>
            </div>
          </div>

          <div className="space-y-4 border-t pt-6">
            <h3 className="text-lg font-semibold">
              קראתי את ההערות הרפואיות ואני מאשר/ת אותן בחתימתי:
            </h3>
            <SignaturePad
              value={signature}
              onChange={setSignature}
              placeholder={t.signature}
            />
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full h-12 text-lg"
            disabled={!signature || isSaving}
          >
            {isSaving ? "שומר..." : "אישור וחתימה"}
          </Button>
        </CardContent>
      </Card>

      {/* PDF Viewer */}
      {medicalNotes.waiver_submission_id && (
        <WaiverPDFViewer
          open={showPDFViewer}
          onOpenChange={setShowPDFViewer}
          submissionId={medicalNotes.waiver_submission_id}
          language={language}
        />
      )}
    </div>
  );
};

export default MedicalNotesSignature;
