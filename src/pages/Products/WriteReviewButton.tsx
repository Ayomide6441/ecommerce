import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function WriteReviewButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="">
          <Text variant="body-1">Write a review</Text>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Write a Review</DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-2 mt-4">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="review" className="sr-only">
              Text
            </Label>
            <Textarea
              id="review"
              placeholder="Write your review here..."
              className="min-h-[150px] px-4 text-base"
            />
          </div>
        </div>
        <DialogFooter className="justify-stretch items-stretch ">
          <Button>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default WriteReviewButton;
