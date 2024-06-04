import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Link } from "react-router-dom";

function Cta() {
  return (
    <div className="mb-24 bg-gradient-to-r from-[#F5F5F5] to-white pb-4 border border-[#F5F5F5]">
      <div className="container flex items-center justify-between">
        <div className="flex flex-col gap-6 w-fit">
          <Text variant="heading-2">Browse Our Fashion Paradise!</Text>
          <Text variant="body-1">
            Step into a world of style and explore our diverse collection of
            clothing categories.
          </Text>
          <Button asChild className="max-w-fit">
            <Link to="/">
              Start Browsing
              <span className="pl-4">
                <img src="../Arrowright.svg" alt="" />
              </span>
            </Link>
          </Button>
        </div>
        <img src="../CtaImage.png" alt="" className="h-[300px]" />
      </div>
    </div>
  );
}

export default Cta;
