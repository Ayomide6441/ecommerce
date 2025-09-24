import { Text } from "@/components/ui/text";
import ColorPicker from "../../components/ui/ColorPicker";
import CartSheetItems from "./CartSheetItems";
import SizePicker from "@/components/ui/sizePicker";
import ItemCounter from "@/components/ui/ItemCounter";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Heart, Share2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link, useSearchParams } from "react-router-dom";
const colorOptions = ["#AFCBFF", "#FFD88D", "#92B69E", "#3B82F6"];

type Product = {
  id: string;
  name: string;
  details: string;
  price: number;
  rating: number;
  stock: number;
  status: boolean;
  images: string[];
  sizes: string[];
  colors: string[];
  categoryIds: number[];
};

interface User {
  addresses: any[];
  email: string;
  fullName: string;
  id: number;
  password: string;
}

interface Review {
  id: number;
  productId: number;
  userId: number;
  comment: string;
  rating: number;
  date: string;
  user: User;
}

type ReviewArray = Review[];

type ProductSideProps = {
  product: Product;
  rating: number;
  reviews: ReviewArray | undefined;
};

function ProductSide({ product, rating, reviews }: ProductSideProps) {
  const price = product.price;
  const [searchParams, setSearchParams] = useSearchParams();
  const quantityUrl = parseInt(searchParams.get("quantity") || "1", 10);

  const [color, setColor] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(quantityUrl);
  useEffect(() => {
    const params = new URLSearchParams(searchParams); // keep existing params

    // update only the ones you care about
    color ? params.set("color", color) : params.delete("color");
    size ? params.set("size", size) : params.delete("size");
    quantity
      ? params.set("quantity", quantity.toString())
      : params.delete("quantity");

    // ✅ keep other params untouched
    setSearchParams(params, { replace: true });
  }, [color, size, quantity, searchParams, setSearchParams]);

  return (
    <div className="w-1/2 flex gap-10">
      <div className="grid gap-6 w-full">
        <div>
          <Text variant="heading-3">{product.name}</Text>
          <div className="flex gap-4 pt-2">
            <div className="bg-[#F6F6F6] rounded-full py-1 px-3 w-fit">
              <Text variant="label-1" className="text-[#5C5F6A]">
                {rating} - {reviews?.length} Reviews
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
          <ColorPicker colors={colorOptions} onChange={setColor} />
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
          <Sheet>
            <SheetTrigger asChild>
              <Button className="w-[284px]">Add to cart</Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col w-full ">
              <SheetHeader>
                <SheetTitle>Shopping Cart</SheetTitle>
              </SheetHeader>
              <div className="flex flex-1 auto-rows-min gap-6">
                <CartSheetItems />
              </div>

              <SheetFooter className="grid gap-4 w-full sm:justify-stretch">
                <Separator />
                <div className="flex justify-between">
                  <Text variant="body-2">Total</Text>
                  <Text variant="body-2">$97.00</Text>
                </div>
                <Button asChild type="submit" className="w-full">
                  <Link to="/cart">View Cart</Link>
                </Button>
                <Button variant="link" className="w-fit sm:justify-self-center">
                  Checkout
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <Button variant="outline" className="max-w-fit ">
            <Heart width={20} height={20} strokeWidth={1} />
          </Button>
        </div>
      </div>
      <div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" className="max-w-fit ">
              <Share2 strokeWidth={1} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Share with friends</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}

export default ProductSide;
