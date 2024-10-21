import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Newsletter() {
  return (
    <div className=" bg-[#F5F5F5] py-20">
      <div className="container flex flex-col md:flex-row justify-between gap-4">
        <div>
          <Text variant="heading-2">Join Our Newsletter</Text>
          <Text variant="body-1">
            We love to surprise our subscribers with occasional gifts.
          </Text>
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="email"
            placeholder="Your email address"
            className="bg-[#F5F5F5]"
          />
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
