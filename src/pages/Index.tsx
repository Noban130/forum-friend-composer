import { useState } from "react";
import { ComposeButton } from "@/components/ComposeButton";
import { ComposeDialog } from "@/components/ComposeDialog";

const Index = () => {
  const [isComposeOpen, setIsComposeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Forum</h1>
          <div className="hidden md:block">
            <ComposeButton onClick={() => setIsComposeOpen(true)} />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        <div className="text-center text-muted-foreground">
          Your feed will appear here
        </div>
      </main>

      <div className="md:hidden">
        <ComposeButton onClick={() => setIsComposeOpen(true)} />
      </div>

      <ComposeDialog
        open={isComposeOpen}
        onOpenChange={setIsComposeOpen}
      />
    </div>
  );
};

export default Index;