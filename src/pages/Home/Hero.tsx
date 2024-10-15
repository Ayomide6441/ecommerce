import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Text } from "@/components/ui/text";

function Hero() {
  return (
    <div className="bg-[#F5F5F5] py-20 md:pt-10 md:pb-0 mb-24">
      <div className="container flex justify-between items-center">
        <div className="flex flex-col gap-10">
          <div>
            <Text variant="heading-2">Fresh Arrivals Online</Text>
            <Text variant="body-1">Discover Our Newest Collection Today.</Text>
          </div>
          <Button asChild className="max-w-fit">
            <Link to="/">
              View Collections
              <span className="pl-4">
                <img src="../Arrowright.svg" alt="" />
              </span>
            </Link>
          </Button>
        </div>
        <img src="../Hero.png" alt="" className="hidden md:block" />
      </div>
    </div>
  );
}

export default Hero;
