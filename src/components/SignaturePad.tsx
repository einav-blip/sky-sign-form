import { useRef, useEffect, useState } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 400, height: 200 });

  useEffect(() => {
    const updateCanvasSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setCanvasSize({ width, height: 200 });
      }
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, []);

  useEffect(() => {
    if (value && sigCanvas.current) {
      sigCanvas.current.fromDataURL(value);
    }
  }, [canvasSize]);

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
      <div 
        ref={containerRef}
        className="border-2 border-dashed border-muted-foreground/30 rounded-lg bg-background overflow-hidden"
      >
        <SignatureCanvas
          ref={sigCanvas}
          canvasProps={{
            width: canvasSize.width,
            height: canvasSize.height,
            className: "touch-none cursor-crosshair",
            style: { touchAction: 'none', display: 'block' }
          }}
          onEnd={handleEnd}
          backgroundColor="rgba(255, 255, 255, 0)"
          penColor="#000000"
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
