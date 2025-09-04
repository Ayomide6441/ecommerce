import { Button } from "./button";
import { Text } from "./text";
import { Heart, ShoppingCart } from "lucide-react";

type ProductItemProps = {
  image: string;
  productName: string;
  inStock: boolean;
  price: number;
};

function ProductItem({ image, productName, inStock, price }: ProductItemProps) {
  return (
    <div className="flex flex-col gap-3 w-full max-w-[17rem] mx-auto relative group">
      {/* Heart (Like button) */}
      <Button
        variant="ghost"
        className="absolute top-4 right-4 z-20 transform scale-90 opacity-0 
        group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out"
      >
        <Heart className="cursor-pointer" />
      </Button>

      {/* Product Image + Overlay + Add to cart */}
      <div className="bg-[#F5F5F5] flex justify-center items-center rounded relative overflow-hidden">
        {/* Product Image */}
        <img
          src={image}
          alt={productName}
          width={234}
          height={312}
          className="object-contain p-4 relative z-10"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-[#F5F5F5]/60 opacity-0 group-hover:opacity-100 
          transition-opacity duration-500 ease-out z-10"
        ></div>

        {/* Add to Cart button */}
        <span
          className="absolute bottom-[-100%] w-full z-20 
          group-hover:bottom-0 transition-all duration-300 ease-out"
        >
          <Button className="w-full gap-2 rounded-t-none">
            Add to cart
            <span>
              <ShoppingCart className="w-4 h-4" />
            </span>
          </Button>
        </span>
      </div>

      {/* Product Info */}
      <Text variant="body-2" className="truncate">
        {productName}
      </Text>

      <div className="flex flex-wrap gap-3 items-center">
        <Text className="inline-block border rounded-full px-4 py-1 text-xs sm:text-sm">
          {inStock ? "In Stock" : "Out of Stock"}
        </Text>
        <Text className="text-sm">${price.toFixed(2)}</Text>
      </div>
    </div>
  );
}

export default ProductItem;
