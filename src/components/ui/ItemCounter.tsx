import { Text } from "./text";

type CounterProps = {
  quantity: number;
};

function ItemCounter({ quantity }: CounterProps) {
  return (
    <div className="border flex md:gap-3 gap-1 items-center md:p-2 px-1 py-[.5]">
      <img src="../Minus.svg" alt="" />
      <Text variant="body-1">{quantity}</Text>
      <img src="../Add.svg" alt="" />
    </div>
  );
}

export default ItemCounter;
