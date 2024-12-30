import { Dialog, DialogContent } from "./ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "./ui/use-toast";

interface Forum {
  id: string;
  name: string;
  description: string;
}

const SAMPLE_FORUMS: Forum[] = [
  {
    id: "general",
    name: "General Discussion",
    description: "Talk about anything and everything",
  },
  {
    id: "tech",
    name: "Technology",
    description: "Discuss the latest in tech",
  },
  {
    id: "gaming",
    name: "Gaming",
    description: "Gaming discussions and news",
  },
];

export const ComposeDialog = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const isMobile = useIsMobile();
  const [selectedForum, setSelectedForum] = useState<Forum | null>(null);
  const [content, setContent] = useState("");
  const { toast } = useToast();

  const handlePost = () => {
    if (!selectedForum) {
      toast({
        title: "Please select a forum",
        variant: "destructive",
      });
      return;
    }
    if (!content.trim()) {
      toast({
        title: "Please enter some content",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically send the post to your backend
    console.log("Posting to forum:", selectedForum.id, "Content:", content);
    
    toast({
      title: "Post created!",
      description: "Your post has been published successfully.",
    });
    
    setContent("");
    setSelectedForum(null);
    onOpenChange(false);
  };

  const DialogComponent = isMobile ? Drawer : Dialog;
  const DialogContentComponent = isMobile ? DrawerContent : DialogContent;

  return (
    <DialogComponent open={open} onOpenChange={onOpenChange}>
      <DialogContentComponent className="max-w-lg mx-auto p-6">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Create a Post</h2>
          
          {!selectedForum ? (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Select a Forum</h3>
              <div className="grid gap-3">
                {SAMPLE_FORUMS.map((forum) => (
                  <Button
                    key={forum.id}
                    variant="outline"
                    className="h-auto p-4 justify-start"
                    onClick={() => setSelectedForum(forum)}
                  >
                    <div className="text-left">
                      <div className="font-medium">{forum.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {forum.description}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">
                  Posting in: {selectedForum.name}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedForum(null)}
                >
                  Change
                </Button>
              </div>
              <Textarea
                placeholder="What's on your mind?"
                className="min-h-[150px]"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => onOpenChange(false)}>
                  Cancel
                </Button>
                <Button onClick={handlePost}>Post</Button>
              </div>
            </div>
          )}
        </div>
      </DialogContentComponent>
    </DialogComponent>
  );
};