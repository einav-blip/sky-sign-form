import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const LanguageSelection = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; name: string; nativeName: string }[] = [
    { code: 'he', name: 'Hebrew', nativeName: 'עברית' },
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
  ];

  const handleLanguageSelect = (langCode: Language) => {
    setLanguage(langCode);
    navigate('/phone-entry');
  };

  const t = translations[language];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-sky-100 to-blue-200">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">{t.selectLanguage}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              variant={language === lang.code ? "default" : "outline"}
              className="w-full h-16 text-lg font-medium"
            >
              <div className="flex flex-col items-center">
                <span>{lang.nativeName}</span>
                <span className="text-sm opacity-75">{lang.name}</span>
              </div>
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default LanguageSelection;
