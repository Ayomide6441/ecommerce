import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function ProductCarousel({ images = [] }: { images?: string[] }) {
  return (
    <div className="w-1/2 container">
      <Carousel
        className="w-full rounded-md"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="border-0">
                  <CardContent className="flex h-[400px]  bg-[#F5F5F5] items-center justify-center ">
                    <img
                      src={image}
                      //   alt={images.name}
                      className="object-contain max-h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default ProductCarousel;
