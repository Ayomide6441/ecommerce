import { Text } from "./text";

type ProductItemProps = {
  image: string;
  productName: string;
  inStock: boolean;
  price: number;
};

function ProductItem({ image, productName, inStock, price }: ProductItemProps) {
  return (
    <div className="flex flex-col gap-3 w-full max-w-[17rem] mx-auto">
      <div className="bg-[#F5F5F5] flex justify-center items-center aspect-square rounded">
        <img
          src={image}
          alt={productName}
          className="w-full h-full object-contain p-4"
        />
      </div>

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
