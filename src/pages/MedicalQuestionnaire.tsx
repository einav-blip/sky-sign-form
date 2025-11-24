import { useState } from "react";
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
import { adultWaiverText } from "@/data/waiverTexts";

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
  const [signature, setSignature] = useState("");
  
  const [questions, setQuestions] = useState<MedicalQuestion[]>(
    adultWaiverText.healthDeclaration.questions.map((q, idx) => ({
      id: String(idx + 1),
      question: q,
      answer: "",
      details: "",
      date: ""
    }))
  );

  const updateQuestion = (id: string, field: keyof MedicalQuestion, value: string) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, [field]: value } : q
    ));
  };

  const handleSubmit = async () => {
    // Check if all questions are answered
    const allAnswered = questions.every(q => q.answer);
    if (!allAnswered) {
      toast.error("נא לענות על כל השאלות");
      return;
    }

    if (!signature) {
      toast.error("נא לחתום על ההצהרה");
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
          waiver_signature: signature,
          weight_confirmed: skydiverData?.weight || 0,
          medical_questions: questions as any,
          medical_signature: signature,
          requires_medical_review: hasYesAnswers,
          status: hasYesAnswers ? "pending_review" : "completed",
        }]);

      if (error) throw error;

      if (hasYesAnswers) {
        toast.success("תשובותיך נשמרו. צוות המועדון יצור איתך קשר בקרוב");
        navigate("/");
      } else {
        toast.success("הטפסים הושלמו בהצלחה!");
        navigate(`/completion/${skydiverId}`);
      }
    } catch (error) {
      console.error("Error submitting questionnaire:", error);
      toast.error("שגיאה בשמירת השאלון");
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
              <CardTitle className="text-2xl">{adultWaiverText.healthDeclaration.title}</CardTitle>
              <p className="text-muted-foreground mt-2">{adultWaiverText.healthDeclaration.intro}</p>
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
                  <Label htmlFor={`${question.id}-no`} className="cursor-pointer">לא</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="yes" id={`${question.id}-yes`} />
                  <Label htmlFor={`${question.id}-yes`} className="cursor-pointer">כן</Label>
                </div>
              </RadioGroup>

              {question.answer === "yes" && (
                <div className="space-y-4 pr-8">
                  <div className="space-y-2">
                    <Label htmlFor={`${question.id}-details`}>פרט (אופציונלי)</Label>
                    <Textarea
                      id={`${question.id}-details`}
                      value={question.details}
                      onChange={(e) => updateQuestion(question.id, "details", e.target.value)}
                      placeholder="ניתן להוסיף פרטים נוספים"
                      className="min-h-20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`${question.id}-date`}>תאריך (אופציונלי)</Label>
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
            <h3 className="text-lg font-semibold">חתימה על הצהרת הבריאות</h3>
            <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-4 min-h-[150px] bg-background">
              <input
                type="text"
                placeholder="החתימה שלך כאן (זמני - יוחלף בקומפוננט חתימה)"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                className="w-full text-2xl font-signature text-center bg-transparent outline-none"
              />
            </div>
          </div>

          <Button 
            onClick={handleSubmit} 
            className="w-full h-12 text-lg"
            disabled={!questions.every(q => q.answer) || !signature}
          >
            סיום והגשה <ArrowRight className="mr-2 h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicalQuestionnaire;