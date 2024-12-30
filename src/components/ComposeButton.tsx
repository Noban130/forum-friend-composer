import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export const ComposeButton = ({ onClick }: { onClick: () => void }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Button
        onClick={onClick}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
      >
        <Plus className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Button onClick={onClick} className="gap-2 bg-primary hover:bg-primary/90">
      <Plus className="h-5 w-5" />
      Compose
    </Button>
  );
};