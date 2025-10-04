import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

type OrderItemProps = {
  image: string;
  name: string;
  date: string;
  status: string;
  price: number;
};

function OrderItem({ image, name, date, status, price }: OrderItemProps) {
  return (
    <div className="flex items-center gap-6 py-6 ">
      <div className="bg-W100 w-24 h-24 flex justify-center items-center">
        <img src={image} alt={name} className="" />
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <Text variant="body-2">{name}</Text>
        <Text variant="label-1">Ordered On: {date}</Text>
        <Text variant="body-2">${price}.00</Text>
      </div>
      <Button variant="link">{status}</Button>
      <Button variant="outline">View Item</Button>
    </div>
  );
}

export default OrderItem;
