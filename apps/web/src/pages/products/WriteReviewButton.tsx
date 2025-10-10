import { Button } from "@ecommerce/ui/components/button";
import { Text } from "@ecommerce/ui/components/text";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ecommerce/ui/components/dialog";
import { Label } from "@ecommerce/ui/components/label";
import { Textarea } from "@ecommerce/ui/components/textarea";

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
