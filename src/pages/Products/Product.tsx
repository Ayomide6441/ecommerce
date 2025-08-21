import { useParams } from "react-router-dom";
import { useState } from "react";
import HeaderBreadCrumb from "@/components/ui/HeaderBreadCrumb";
import { useProductDetail } from "@/Hooks/useProducts";
import { Text } from "@/components/ui/text";
import ColorPicker from "../../components/ui/ColorPicker";
import SizePicker from "@/components/ui/sizePicker";
import ItemCounter from "@/components/ui/ItemCounter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const colorOptions = ["#AFCBFF", "#FFD88D", "#92B69E", "#3B82F6"];

function Product() {
  const { productId } = useParams();
  const { data: product, isLoading } = useProductDetail(productId);
  const [colors, setColors] = useState<string[]>([""]);
  const [size, setSize] = useState<string[]>([""]);
  // page data
  const [price, setPrice] = useState<number>(product.price);
  const [quantity, setQuantity] = useState<number>(1);
  // const [isModalOpen, setModalOpen] = useState(false);
  // console.log(colors, size);
  if (isLoading) return <div>Loading...</div>;
  console.log(product);
  return (
    <>
      <HeaderBreadCrumb
        previous={{ Home: "/" }}
        current="Search"
        className="bg-transparent py-4 border-t-[1px] container px-0"
      />
      <div className="container flex gap-28 mt-10 items-start ">
        {/* image carousel */}
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
              {product.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="border-0">
                      <CardContent className="flex h-[400px]  bg-[#F5F5F5] items-center justify-center ">
                        <img
                          src={image}
                          alt={product.images.name}
                          className="object-fill"
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

        {/* product detials */}
        {/* This is just a test and product {JSON.stringify(product, null, 2)} */}
        <div className="w-1/2 flex gap-10">
          <div className="grid gap-6 w-full">
            <div>
              <Text variant="heading-3">{product.name}</Text>
              <div className="flex gap-4 pt-2">
                <div className="bg-[#F6F6F6] rounded-full py-1 px-3 w-fit">
                  <Text variant="label-1" className="text-[#5C5F6A]">
                    {product.rating} - 54 Reviews
                  </Text>
                </div>
                <div className="border-2 border-[#F6F6F6] border- rounded-full py-1 px-4 w-fit">
                  <Text variant="label-1" className="text-[#0E1422]">
                    {product ? "In Stock" : "Out of Stock"}
                  </Text>
                </div>
              </div>
            </div>
            <Text variant="heading-4">${price * quantity}</Text>
            <div>
              <Text
                variant="label-2"
                className="leading-[24px] tracking-[1px] text-[#5C5F6A]"
              >
                Available Color
              </Text>
              <ColorPicker colors={colorOptions} onChange={setColors} />
            </div>
            <div>
              <Text
                variant="label-2"
                className="leading-[24px] tracking-[1px] text-[#5C5F6A]"
              >
                Select Size
              </Text>
              <SizePicker onChange={setSize} sizes={product.sizes} />
            </div>
            <div>
              <Text
                variant="label-2"
                className="leading-[24px] tracking-[1px] text-[#5C5F6A]"
              >
                Quantity
              </Text>
              <div className="w-40">
                <ItemCounter onClick={setQuantity} quantity={quantity} />
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="w-[284px]">Add to cart</Button>
              <Button variant="outline" className="max-w-fit ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-heart-icon lucide-heart "
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
              </Button>
            </div>
          </div>
          <div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="max-w-fit ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-share2-icon lucide-share-2"
                  >
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                  </svg>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share with friends</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>

      <Tabs defaultValue="details" className="flex gap-20 container mt-24">
        <TabsList variant="vertical" className="gap-2 mt-12">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <div className="flex-1">
          <TabsContent value="details">
            <Text variant="heading-5" className="mb-5">
              Detail
            </Text>
            <Text variant="body-1">
              Elevate your everyday style with our Men's Black T-Shirts, the
              ultimate wardrobe essential for modern men. Crafted with
              meticulous attention to detail and designed for comfort, these
              versatile black tees are a must-have addition to your collection.
              The classic black color never goes out of style. Whether you're
              dressing up for a special occasion or keeping it casual, these
              black t-shirts are the perfect choice, effortlessly complementing
              any outfit.<br></br>
              Elevate your everyday style with our Men's Black T-Shirts, the
              ultimate wardrobe essential for modern men. Crafted with
              meticulous attention to detail and designed for comfort, these
              versatile black tees are a must-have addition to your collection.
              The classic black color never goes out of style. Whether you're
              dressing up for a special occasion or keeping it casual, these
              black t-shirts are the perfect choice, effortlessly complementing
              any outfit.
            </Text>
            <ul className="list-disc list-inside pt-5">
              <li>
                <Text variant="body-1" className="inline">
                  Premium Quality
                </Text>
              </li>
              <li>
                <Text variant="body-1" className="inline">
                  Versatile Wardrobe Staple
                </Text>
              </li>
              <li>
                <Text variant="body-1" className="inline">
                  Available in Various Sizes
                </Text>
              </li>
              <li>
                <Text variant="body-1" className="inline">
                  Tailored Fit
                </Text>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="reviews">Reviews content</TabsContent>
        </div>
      </Tabs>
    </>
  );
}

export default Product;
