import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

type WishItemProps = {
  image: string;
  name: string;
  date: string;
  price: number;
};

function WishItem({ image, name, date, price }: WishItemProps) {
  return (
    <div className="flex items-center gap-6 py-6 ">
      <div className="bg-W100 w-24 h-24 flex justify-center items-center">
        <img src={image} alt={name} className="" />
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <Text variant="body-2">{name}</Text>
        <Text variant="label-1">Added On: {date}</Text>
        <Button
          variant="link"
          className="w-fit p-0 h-auto no-underline hover:underline"
        >
          Remove Item
        </Button>
      </div>
      <Text variant="body-2">${price}.00</Text>
      <Button variant="outline">Add to cart</Button>
    </div>
  );
}

export default WishItem;
