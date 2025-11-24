import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Completion = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20 p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-20 w-20 text-green-500" />
          </div>
          <CardTitle className="text-3xl font-bold">תהליך הושלם בהצלחה!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-muted-foreground">
            כל המסמכים נשמרו במערכת. 
            <br />
            נתראה בשמיים! ☁️
          </p>
          
          <Button 
            onClick={() => navigate("/")} 
            className="w-full h-12 text-lg"
          >
            חזרה למסך הבית
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Completion;