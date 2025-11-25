import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { waiverTexts } from "@/data/waiverTexts";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import SignaturePad from "@/components/SignaturePad";
import { format, parseISO } from "date-fns";

const WaiverForm = () => {
  const { skydiverId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];
  const waiverText = waiverTexts[language];
  
  const [signature, setSignature] = useState(() => {
    // Load saved signature from localStorage
    const saved = localStorage.getItem(`waiver_signature_${skydiverId}`);
    return saved || "";
  });
  const [skydiverName, setSkydiverName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSkydiverInfo = async () => {
      if (!skydiverId) return;
      
      try {
        const { data, error } = await supabase
          .from("skydivers")
          .select("full_name, id_number, date_of_birth")
          .eq("id", skydiverId)
          .single();

        if (error) throw error;
        if (data) {
          setSkydiverName(data.full_name);
          setIdNumber(data.id_number || "");
          setDateOfBirth(data.date_of_birth || "");
        }
      } catch (error) {
        console.error("Error fetching skydiver:", error);
        toast.error(t.errorLoadingDetails);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkydiverInfo();
  }, [skydiverId]);

  const handleContinue = () => {
    if (!signature) {
      toast.error(t.signature);
      return;
    }
    // Save signature to localStorage
    localStorage.setItem(`waiver_signature_${skydiverId}`, signature);
    navigate(`/weight-confirmation/${skydiverId}`);
  };

  // Save signature to localStorage whenever it changes
  useEffect(() => {
    if (signature) {
      localStorage.setItem(`waiver_signature_${skydiverId}`, signature);
    }
  }, [signature, skydiverId]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">{t.loading}</p>
      </div>
    );
  }

  // Replace signature line based on language
  let waiverContent = waiverText.waiverDeclaration.content;
  
  // Format date of birth to dd/MM/yyyy
  const formattedDateOfBirth = dateOfBirth ? format(parseISO(dateOfBirth), "dd/MM/yyyy") : "";
  
  // Language-specific replacements for the signature line
  const signatureReplacements: Record<string, { namePattern: string; dobPattern: string; nameFormat: string; dobFormat: string }> = {
    he: {
      namePattern: "אני הח\"מ _______",
      dobPattern: "תאריך לידה: __________________",
      nameFormat: `אני הח"מ ${skydiverName}${idNumber ? `, ת.ז ${idNumber}` : ""}`,
      dobFormat: `תאריך לידה: ${formattedDateOfBirth}`
    },
    en: {
      namePattern: "I, the undersigned _______",
      dobPattern: "Date of Birth: __________________",
      nameFormat: `I, the undersigned ${skydiverName}${idNumber ? `, ID: ${idNumber}` : ""}`,
      dobFormat: `Date of Birth: ${formattedDateOfBirth}`
    },
    ru: {
      namePattern: "Я, нижеподписавшийся _______",
      dobPattern: "Дата рождения: __________________",
      nameFormat: `Я, нижеподписавшийся ${skydiverName}${idNumber ? `, удостоверение личности: ${idNumber}` : ""}`,
      dobFormat: `Дата рождения: ${formattedDateOfBirth}`
    },
    fr: {
      namePattern: "Je soussigné(e) _______",
      dobPattern: "Date de naissance : __________________",
      nameFormat: `Je soussigné(e) ${skydiverName}${idNumber ? `, N° d'identité: ${idNumber}` : ""}`,
      dobFormat: `Date de naissance : ${formattedDateOfBirth}`
    },
    ar: {
      namePattern: "أنا الموقع أدناه _______",
      dobPattern: "تاريخ الميلاد: __________________",
      nameFormat: `أنا الموقع أدناه ${skydiverName}${idNumber ? `، رقم الهوية: ${idNumber}` : ""}`,
      dobFormat: `تاريخ الميلاد: ${formattedDateOfBirth}`
    },
    it: {
      namePattern: "Io sottoscritto/a _______",
      dobPattern: "Data di nascita: __________________",
      nameFormat: `Io sottoscritto/a ${skydiverName}${idNumber ? `, Documento d'identità: ${idNumber}` : ""}`,
      dobFormat: `Data di nascita: ${formattedDateOfBirth}`
    },
    es: {
      namePattern: "Yo, el/la abajo firmante _______",
      dobPattern: "Fecha de nacimiento: __________________",
      nameFormat: `Yo, el/la abajo firmante ${skydiverName}${idNumber ? `, N° de identidad: ${idNumber}` : ""}`,
      dobFormat: `Fecha de nacimiento: ${formattedDateOfBirth}`
    }
  };

  const replacement = signatureReplacements[language];
  if (replacement) {
    waiverContent = waiverContent.replace(replacement.namePattern, replacement.nameFormat);
    waiverContent = waiverContent.replace(replacement.dobPattern, replacement.dobFormat);
  }

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
            <CardTitle className="text-2xl">{waiverText.personalDetails.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Risk Statistics Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-destructive">
              {waiverText.riskStatistics.title}
            </h2>
            <div className="prose prose-sm max-w-none bg-muted/50 p-6 rounded-lg max-h-96 overflow-y-auto whitespace-pre-wrap">
              {waiverText.riskStatistics.content}
            </div>
          </div>

          {/* Waiver Declaration Section */}
          <div className="space-y-4 border-t pt-8">
            <h2 className="text-xl font-bold">{waiverText.waiverDeclaration.title}</h2>
            <div className="prose prose-sm max-w-none bg-muted/50 p-6 rounded-lg max-h-96 overflow-y-auto whitespace-pre-wrap">
              {waiverContent}
            </div>
          </div>

          {/* Signature Section */}
          <div className="space-y-4 border-t pt-8">
            <h3 className="text-lg font-semibold">{t.signature}</h3>
            <SignaturePad
              value={signature}
              onChange={setSignature}
              placeholder={t.signature}
            />
          </div>

          <Button 
            onClick={handleContinue} 
            className="w-full h-12 text-lg mt-6"
            disabled={!signature}
          >
            {t.continue} <ArrowRight className="mr-2 h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WaiverForm;