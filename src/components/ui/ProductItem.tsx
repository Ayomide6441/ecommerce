import { Text } from "./text";

type ProductItemProps = {
  image: string;
  productName: string;
  inStock: boolean;
  price: number;
};

function ProductItem({ image, productName, inStock, price }: ProductItemProps) {
  return (
    <div className="flex gap-4 flex-col">
      <div className="bg-[#F5F5F5] flex justify-center items-center">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <Text variant="body-2" clas sName="truncate line-clamp-2">
        {productName}
      </Text>

      <div className="flex gap-4 items-center">
        <Text variant="label-2" className="border rounded-full px-4 py-1">
          {inStock ? "In Stock" : "Out of Stock"}
        </Text>
        <Text>${price}</Text>
      </div>
    </div>
  );
}

export default ProductItem;
