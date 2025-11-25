import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { waiverTexts } from "@/data/waiverTexts";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import SignaturePad from "@/components/SignaturePad";

interface MedicalQuestion {
  id: string;
  question: string;
  answer: "yes" | "no" | "";
  details: string;
  date: string;
}

const MedicalQuestionnaire = () => {
  const { skydiverId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];
  const healthDeclaration = waiverTexts[language].healthDeclaration;
  
  // Load saved data from localStorage
  const loadSavedData = () => {
    const saved = localStorage.getItem(`medical_questionnaire_${skydiverId}`);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing saved data:", e);
      }
    }
    return null;
  };

  const savedData = loadSavedData();
  
  const [signature, setSignature] = useState(savedData?.signature || "");
  
  const [questions, setQuestions] = useState<MedicalQuestion[]>(
    savedData?.questions || healthDeclaration.questions.map((q, idx) => ({
      id: String(idx + 1),
      question: q,
      answer: "",
      details: "",
      date: ""
    }))
  );

  // Update question texts when language changes
  useEffect(() => {
    setQuestions(prev => 
      healthDeclaration.questions.map((q, idx) => ({
        id: String(idx + 1),
        question: q,
        answer: prev[idx]?.answer || "",
        details: prev[idx]?.details || "",
        date: prev[idx]?.date || ""
      }))
    );
  }, [language]);

  const updateQuestion = (id: string, field: keyof MedicalQuestion, value: string) => {
    setQuestions(prev => {
      const updated = prev.map(q => 
        q.id === id ? { ...q, [field]: value } : q
      );
      // Save to localStorage whenever questions are updated
      localStorage.setItem(`medical_questionnaire_${skydiverId}`, JSON.stringify({
        questions: updated,
        signature
      }));
      return updated;
    });
  };

  // Save to localStorage whenever signature changes
  useEffect(() => {
    localStorage.setItem(`medical_questionnaire_${skydiverId}`, JSON.stringify({
      questions,
      signature
    }));
  }, [signature, skydiverId, questions]);

  const handleSubmit = async () => {
    // Check if all questions are answered
    const allAnswered = questions.every(q => q.answer);
    if (!allAnswered) {
      toast.error(t.error);
      return;
    }

    if (!signature) {
      toast.error(t.signature);
      return;
    }

    const hasYesAnswers = questions.some(q => q.answer === "yes");

    try {
      // Get the weight from the skydiver
      const { data: skydiverData } = await supabase
        .from("skydivers")
        .select("weight")
        .eq("id", skydiverId)
        .single();

      // Create waiver submission
      const { error } = await supabase
        .from("waiver_submissions")
        .insert([{
          skydiver_id: skydiverId!,
          waiver_signature: localStorage.getItem(`waiver_signature_${skydiverId}`) || signature,
          weight_confirmed: skydiverData?.weight || 0,
          medical_questions: questions as any,
          medical_signature: signature,
          requires_medical_review: hasYesAnswers,
          status: hasYesAnswers ? "pending_review" : "completed",
        }]);

      if (error) throw error;

      // Clear saved data from localStorage after successful submission
      localStorage.removeItem(`waiver_signature_${skydiverId}`);
      localStorage.removeItem(`medical_questionnaire_${skydiverId}`);

      if (hasYesAnswers) {
        toast.success(t.success);
        navigate("/");
      } else {
        toast.success(t.success);
        navigate(`/completion/${skydiverId}`);
      }
    } catch (error) {
      console.error("Error submitting questionnaire:", error);
      toast.error(t.error);
    }
  };

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
            <div className="flex-1">
              <CardTitle className="text-2xl">{healthDeclaration.title}</CardTitle>
              <p className="text-muted-foreground mt-2">{healthDeclaration.intro}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          {questions.map((question) => (
            <div key={question.id} className="space-y-4 border-b pb-6">
              <h3 className="text-lg font-semibold">{question.question}</h3>
              
              <RadioGroup
                value={question.answer}
                onValueChange={(value) => updateQuestion(question.id, "answer", value)}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="no" id={`${question.id}-no`} />
                  <Label htmlFor={`${question.id}-no`} className="cursor-pointer">{t.no}</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="yes" id={`${question.id}-yes`} />
                  <Label htmlFor={`${question.id}-yes`} className="cursor-pointer">{t.yes}</Label>
                </div>
              </RadioGroup>

              {question.answer === "yes" && (
                <div className="space-y-4 pr-8">
                  <div className="space-y-2">
                    <Label htmlFor={`${question.id}-details`}>{t.details}</Label>
                    <Textarea
                      id={`${question.id}-details`}
                      value={question.details}
                      onChange={(e) => updateQuestion(question.id, "details", e.target.value)}
                      placeholder={t.details}
                      className="min-h-20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`${question.id}-date`}>{t.date}</Label>
                    <Input
                      id={`${question.id}-date`}
                      type="date"
                      value={question.date}
                      onChange={(e) => updateQuestion(question.id, "date", e.target.value)}
                      dir="ltr"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="space-y-4 border-t pt-6">
            <h3 className="text-lg font-semibold">{t.signature}</h3>
            <SignaturePad
              value={signature}
              onChange={setSignature}
              placeholder={t.signature}
            />
          </div>

          <Button 
            onClick={handleSubmit} 
            className="w-full h-12 text-lg"
            disabled={!questions.every(q => q.answer) || !signature}
          >
            {t.submit} <ArrowRight className="mr-2 h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicalQuestionnaire;