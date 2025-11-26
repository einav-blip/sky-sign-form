import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Printer, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { waiverTexts } from "@/data/waiverTexts";
import { format, parseISO } from "date-fns";
import { Language } from "@/contexts/LanguageContext";

interface MedicalQuestion {
  id: string;
  question: string;
  answer: "yes" | "no" | "";
  details: string;
  date: string;
}

interface WaiverSubmission {
  id: string;
  waiver_signature: string;
  medical_signature: string;
  medical_questions: MedicalQuestion[];
  weight_confirmed: number;
  created_at: string;
  requires_medical_review: boolean;
  skydiver: {
    full_name: string;
    id_number: string | null;
    date_of_birth: string | null;
    phone_number: string;
    email: string | null;
    emergency_contact_name: string | null;
    emergency_contact_phone: string | null;
  };
  medical_notes?: {
    staff_notes: string;
    customer_signature: string | null;
    customer_signed_at: string | null;
  } | null;
}

interface WaiverPDFViewerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  submissionId: string;
  language: Language;
}

const WaiverPDFViewer = ({ open, onOpenChange, submissionId, language }: WaiverPDFViewerProps) => {
  const [submission, setSubmission] = useState<WaiverSubmission | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (open && submissionId) {
      fetchSubmission();
    }
  }, [open, submissionId]);

  const fetchSubmission = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("waiver_submissions")
        .select(`
          *,
          skydiver:skydivers(full_name, id_number, date_of_birth, phone_number, email, emergency_contact_name, emergency_contact_phone)
        `)
        .eq("id", submissionId)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        // Fetch medical notes if exists
        const { data: medicalNotes } = await supabase
          .from("medical_notes")
          .select("staff_notes, customer_signature, customer_signed_at")
          .eq("waiver_submission_id", submissionId)
          .maybeSingle();

        setSubmission({
          ...data,
          skydiver: data.skydiver as WaiverSubmission['skydiver'],
          medical_questions: (data.medical_questions as unknown) as MedicalQuestion[],
          medical_notes: medicalNotes
        });
      }
    } catch (error) {
      console.error("Error fetching submission:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!submission) return null;

  const texts = waiverTexts[language];
  const formattedDate = submission.created_at ? format(parseISO(submission.created_at), "dd/MM/yyyy HH:mm") : "";
  const formattedDOB = submission.skydiver.date_of_birth ? format(parseISO(submission.skydiver.date_of_birth), "dd/MM/yyyy") : "";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto print:max-w-none print:max-h-none print:overflow-visible">
        <DialogHeader className="print:hidden">
          <DialogTitle className="flex items-center justify-between">
            <span>{texts.title}</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Printer className="h-4 w-4 mr-2" />
                הדפס
              </Button>
              <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8 p-4 print:p-0" dir={language === 'ar' || language === 'he' ? 'rtl' : 'ltr'}>
          {/* Personal Details Section */}
          <section className="border-b pb-6">
            <h2 className="text-xl font-bold mb-4">פרטים אישיים</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><strong>שם מלא:</strong> {submission.skydiver.full_name}</div>
              <div><strong>ת.ז:</strong> {submission.skydiver.id_number || '-'}</div>
              <div><strong>תאריך לידה:</strong> {formattedDOB || '-'}</div>
              <div><strong>טלפון:</strong> {submission.skydiver.phone_number}</div>
              <div><strong>אימייל:</strong> {submission.skydiver.email || '-'}</div>
              <div><strong>משקל:</strong> {submission.weight_confirmed} ק"ג</div>
              <div><strong>איש קשר חירום:</strong> {submission.skydiver.emergency_contact_name || '-'}</div>
              <div><strong>טלפון חירום:</strong> {submission.skydiver.emergency_contact_phone || '-'}</div>
              <div><strong>תאריך מילוי:</strong> {formattedDate}</div>
            </div>
          </section>

          {/* Waiver Section */}
          <section className="border-b pb-6">
            <h2 className="text-xl font-bold mb-4">{texts.title}</h2>
            <div className="text-sm whitespace-pre-line mb-4">
              {texts.riskStatistics.content}
            </div>
            <div className="text-sm whitespace-pre-line mb-4">
              {texts.waiverDeclaration.content
                .replace("אני הח\"מ _______", `אני הח"מ ${submission.skydiver.full_name}${submission.skydiver.id_number ? `, ת.ז ${submission.skydiver.id_number}` : ""}`)
                .replace("תאריך לידה: __________________", `תאריך לידה: ${formattedDOB}`)}
            </div>
            <div className="mt-4">
              <p className="text-sm font-semibold mb-2">חתימה על הוויבר:</p>
              <img src={submission.waiver_signature} alt="Waiver Signature" className="border rounded max-h-24" />
            </div>
          </section>

          {/* Health Declaration Section */}
          <section className="border-b pb-6">
            <h2 className="text-xl font-bold mb-4">{texts.healthDeclaration.title}</h2>
            <p className="text-sm mb-4">{texts.healthDeclaration.intro}</p>
            
            <div className="space-y-4">
              {(submission.medical_questions || []).map((q, idx) => (
                <div key={idx} className="border rounded p-3">
                  <p className="font-medium">{q.question}</p>
                  <p className="text-sm mt-1">
                    <strong>תשובה:</strong> {q.answer === 'yes' ? 'כן' : 'לא'}
                  </p>
                  {q.answer === 'yes' && q.details && (
                    <p className="text-sm mt-1"><strong>פרטים:</strong> {q.details}</p>
                  )}
                  {q.answer === 'yes' && q.date && (
                    <p className="text-sm mt-1"><strong>תאריך:</strong> {q.date}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold mb-2">חתימה על הצהרת בריאות:</p>
              <img src={submission.medical_signature} alt="Medical Signature" className="border rounded max-h-24" />
            </div>
          </section>

          {/* Medical Notes Section (if exists) */}
          {submission.medical_notes && (
            <section className="border-b pb-6 page-break-before">
              <h2 className="text-xl font-bold mb-4">הערות רפואיות נוספות</h2>
              <div className="bg-muted p-4 rounded mb-4">
                <p className="whitespace-pre-line">{submission.medical_notes.staff_notes}</p>
              </div>
              {submission.medical_notes.customer_signature && (
                <div className="mt-4">
                  <p className="text-sm font-semibold mb-2">חתימת לקוח על ההערות הרפואיות:</p>
                  <img src={submission.medical_notes.customer_signature} alt="Customer Signature" className="border rounded max-h-24" />
                  {submission.medical_notes.customer_signed_at && (
                    <p className="text-xs text-muted-foreground mt-1">
                      נחתם בתאריך: {format(parseISO(submission.medical_notes.customer_signed_at), "dd/MM/yyyy HH:mm")}
                    </p>
                  )}
                </div>
              )}
            </section>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaiverPDFViewer;
