import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Share2, Check } from "lucide-react";

export function ShareUrlButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const link = window.location.href;
      await navigator.clipboard.writeText(link);

      toast.success("Link copied to clipboard!");
      setCopied(true);

      // revert back after 2s
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy link. Please try again.");
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant="ghost"
      className="max-w-fit relative transition-colors bg-transparent hover:bg-transparent"
    >
      {copied ? (
        <Check
          className="text-green-600 transition-opacity duration-200"
          strokeWidth={2}
        />
      ) : (
        <Share2 className="transition-opacity duration-200" strokeWidth={1} />
      )}
    </Button>
  );
}
