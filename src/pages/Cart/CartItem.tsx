import ItemCounter from "@/components/ui/ItemCounter";
import { Text } from "@/components/ui/text";

type CartItemProps = {
  image: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
  color: string;
};

function CartItem({
  image,
  quantity,
  name,
  color,
  size,
  price,
}: CartItemProps) {
  return (
    <div className="flex items-center gap-3 md:gap-6 ">
      <div className="bg-W100 w-24 h-24 flex justify-center items-center">
        <img src={image} alt={name} className="" />
      </div>
      <div className="flex flex-col gap-2 flex-1 ">
        <Text
          variant="body-2"
          className="truncate w-full max-w-24 sm:max-w-full"
        >
          {name}
        </Text>
        <div className="flex gap-2">
          <div className="flex gap-2 items-center">
            <Text variant="body-1" className="hidden sm:block">
              Color
            </Text>
            <div
              className={`rounded bg-[${color}] h-[8px] w-[8px]`}
              style={{ backgroundColor: color }}
            ></div>
          </div>
          <Text variant="body-1">—</Text>
          <Text variant="body-1">
            <span className="hidden sm:block">Size:</span> {size}
          </Text>
        </div>
      </div>
      <Text variant="body-2">${price}.00</Text>
      <ItemCounter quantity={quantity} />
      <div className="bg-W100 p-1">
        <img src="../X.svg" alt="" />
      </div>
    </div>
  );
}

export default CartItem;
