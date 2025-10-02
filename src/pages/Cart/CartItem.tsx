import ItemCounter from "@/components/common/item-counter";
import { Text } from "@/components/ui/text";
import { useState } from "react";

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
  const [currQuantity, setQuantity] = useState<number>(quantity);
  const [currPrice, setPrice] = useState<number>(price);
  console.log(currQuantity);
  return (
    <div className="flex items-center gap-3 md:gap-6 ">
      <div className="bg-W100 w-16 h-16 sm:w-24 sm:h-24 flex justify-center items-center">
        <img src={image} alt={name} className="" />
      </div>
      <div className="flex flex-col sm:gap-2 flex-1">
        <Text
          variant="body-2"
          className="truncate w-full max-w-24 sm:max-w-full leading-3 sm:leading-none"
        >
          {name}
        </Text>
        <div className="flex gap-2 items-center">
          <div className="flex gap-2 items-center">
            <Text variant="body-1" className="hidden sm:block">
              Color
            </Text>
            <div
              className={`rounded bg-[${color}] h-[8px] w-[8px] leading-3 sm:leading-none`}
              style={{ backgroundColor: color }}
            ></div>
          </div>
          <Text variant="body-1" className="leading-3 sm:leading-none">
            —
          </Text>
          <Text variant="body-1" className="flex items-center gap-1">
            <span className="hidden sm:block leading-3 ">Size:</span> {size}
          </Text>
        </div>
        <Text
          variant="body-2"
          className="sm:hidden block leading-3 sm:leading-none"
        >
          ${currPrice * currQuantity}.00
        </Text>
      </div>

      <Text variant="body-2" className="hidden sm:block">
        ${currPrice * currQuantity}.00
      </Text>
      <div className="w-32">
        <ItemCounter quantity={currQuantity} onClick={setQuantity} />
      </div>
      <div className="bg-W100 p-1 hidden sm:block">
        <img src="../X.svg" alt="" />
      </div>
    </div>
  );
}

export default CartItem;
