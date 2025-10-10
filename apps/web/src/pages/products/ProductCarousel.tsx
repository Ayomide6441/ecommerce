import { Card, CardContent } from "@ecommerce/ui/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ecommerce/ui/components/carousel";
import Autoplay from "embla-carousel-autoplay";

function ProductCarousel({ images = [] }: { images?: string[] }) {
  return (
    <div className="w-1/2 container">
      <Carousel
        className="w-full"
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
              <div>
                <Card className="border-0 p-0">
                  <CardContent className="flex h-[400px]  bg-[#F5F5F5] items-center justify-center rounded-lg">
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
