import { Text } from "./text";

type ProductItemProps = {
  image: string;
  productName: string;
  inStock: boolean;
  price: number;
};

function ProductItem({ image, productName, inStock, price }: ProductItemProps) {
  return (
    <div className="flex gap-3 flex-col w-full max-w-[13rem] sm:max-w-[15rem] lg:max-w-[17rem]">
      <div className="bg-[#F5F5F5] flex justify-center items-center w-full aspect-square rounded-sm">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <Text variant="body-2" className="truncate w-full">
        {productName}
      </Text>

      <div className="flex flex-wrap gap-2 md:gap-4 items-center">
        <Text
          variant="label-2"
          className="inline-block border rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm"
        >
          {inStock ? "In Stock" : "Out of Stock"}
        </Text>
        <Text className="text-sm">${price}</Text>
      </div>
    </div>
  );
}

export default ProductItem;
