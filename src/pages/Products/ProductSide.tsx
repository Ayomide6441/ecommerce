import { Text } from "@/components/ui/text";
import ColorPicker from "../../components/ui/ColorPicker";
import SizePicker from "@/components/ui/sizePicker";
import ItemCounter from "@/components/ui/ItemCounter";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSearchParams } from "react-router-dom";
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
              className="lucide lucide-heart-icon lucide-heart "
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
  );
}

export default ProductSide;
