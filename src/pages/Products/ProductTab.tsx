import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/ui/text";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProductReview } from "@/Hooks/useProducts";
import { formatRelativeDate } from "@/utils/helpers";
import StarRating from "@/components/ui/StarRating";

function getAverageRating(reviews: { rating: number }[]): number {
  if (reviews.length === 0) return 0;

  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  const avg = total / reviews.length;

  return parseFloat(avg.toFixed(1));
}
function ProductTab() {
  const { productId } = useParams<{ productId: string }>();

  const [position, setPosition] = useState("bottom");
  const { data: reviews } = useProductReview(productId);
  const rating = reviews ? getAverageRating(reviews) : "";
  return (
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
            ultimate wardrobe essential for modern men. Crafted with meticulous
            attention to detail and designed for comfort, these versatile black
            tees are a must-have addition to your collection. The classic black
            color never goes out of style. Whether you're dressing up for a
            special occasion or keeping it casual, these black t-shirts are the
            perfect choice, effortlessly complementing any outfit.<br></br>
            Elevate your everyday style with our Men's Black T-Shirts, the
            ultimate wardrobe essential for modern men. Crafted with meticulous
            attention to detail and designed for comfort, these versatile black
            tees are a must-have addition to your collection. The classic black
            color never goes out of style. Whether you're dressing up for a
            special occasion or keeping it casual, these black t-shirts are the
            perfect choice, effortlessly complementing any outfit.
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
        <TabsContent value="reviews">
          <Text variant="heading-5" className="mb-5">
            Reviews
          </Text>
          <div className="flex items-baseline gap-3">
            <Text variant="heading-2" className="">
              {rating}
            </Text>
            <Text variant="body-1" className="text-[#71747E]">
              - {reviews?.length} Reviews
            </Text>
          </div>
          <div className="flex justify-between items-baseline py-6">
            <Button variant="outline" className="">
              <Text variant="body-1">Write a review</Text>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Text variant="label-2">Sort By</Text>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-24">
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">
                    Bottom
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    Right
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Separator />

          <div className="mt-6 flex flex-col gap-14">
            {reviews?.map((review) => (
              <Card key={review.id} className="border-0 shadow-none">
                <CardContent className="flex items-start gap-4 p-0">
                  {/* Avatar */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 font-medium text-sm text-gray-700">
                    {review.user.fullName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <Text
                        variant="body-2"
                        className="text-[14px] text-[#0E1422] font-medium leading-7"
                      >
                        {review.user.fullName}
                      </Text>
                      <StarRating rating={review?.rating} />
                    </div>
                    <Text
                      variant="label-2"
                      className="text-[12px] font-normal text-[#5C5F6A]"
                    >
                      {formatRelativeDate(review.date)}
                    </Text>
                    <Text
                      variant="body-1"
                      className="mt-4 text-[14px] font-normal text-[#5C5F6A]"
                    >
                      {review?.comment}
                    </Text>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
}

export default ProductTab;
