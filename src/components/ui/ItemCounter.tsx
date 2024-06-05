import { Text } from "./text";

type CounterProps = {
  quantity: number;
};

function ItemCounter({ quantity }: CounterProps) {
  return (
    <div className="border flex gap-3 items-center p-2">
      <img src="../Minus.svg" alt="" />
      <Text variant="body-1">{quantity}</Text>
      <img src="../Add.svg" alt="" />
    </div>
  );
}

export default ItemCounter;
