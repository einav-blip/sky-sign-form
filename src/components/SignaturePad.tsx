import { useRef, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Button } from "@/components/ui/button";
import { Eraser } from "lucide-react";

interface SignaturePadProps {
  value: string;
  onChange: (signature: string) => void;
  placeholder: string;
}

const SignaturePad = ({ value, onChange, placeholder }: SignaturePadProps) => {
  const sigCanvas = useRef<SignatureCanvas>(null);

  useEffect(() => {
    if (value && sigCanvas.current) {
      sigCanvas.current.fromDataURL(value);
    }
  }, []);

  const handleEnd = () => {
    if (sigCanvas.current) {
      const dataUrl = sigCanvas.current.toDataURL();
      onChange(dataUrl);
    }
  };

  const handleClear = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
      onChange("");
    }
  };

  return (
    <div className="space-y-2">
      <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg bg-background overflow-hidden">
        <SignatureCanvas
          ref={sigCanvas}
          canvasProps={{
            className: "w-full h-[200px] touch-none",
            style: { touchAction: 'none' }
          }}
          onEnd={handleEnd}
          backgroundColor="transparent"
          penColor="hsl(var(--foreground))"
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{placeholder}</p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleClear}
        >
          <Eraser className="h-4 w-4 mr-2" />
          נקה
        </Button>
      </div>
    </div>
  );
};

export default SignaturePad;
