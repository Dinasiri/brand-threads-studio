import { CheckCircle } from "lucide-react";

interface TrustIndicatorProps {
  text: string;
}

const TrustIndicator = ({ text }: TrustIndicatorProps) => {
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <CheckCircle className="h-4 w-4 text-primary" />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

export default TrustIndicator;
