import { Text } from "@/components/ui/text";
import CartItem from "./CartItem";

interface CartItem {
  image: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
  color: string;
}

function CartList() {
  const Cart: CartItem[] = [
    {
      image: "../cover2.png",
      name: "Raw Black T-Shirt Lineup",
      size: "M",
      price: 16,
      quantity: 2,
      color: "rgb(22 163 74)",
    },
    {
      image: "../cover1.png",
      name: "Essential Neutrals",
      size: "S",
      price: 30,
      quantity: 1,
      color: "rgb(34 211 238)",
    },
    {
      image: "../cover.png",
      name: "Essential Neutrals",
      size: "SM",
      price: 22,
      quantity: 7,
      color: "rgb(239 68 68)",
    },
  ];

  return (
    <div className="basis-3/4">
      <div>
        <Text variant="heading-5" className="border-b pb-4 mb-6">
          Your Cart
        </Text>
        <ul className="flex flex-col gap-6">
          {Cart.map((item) => (
            <li key={item.name}>
              <CartItem
                image={item.image}
                name={item.name}
                size={item.size}
                price={item.price}
                quantity={item.quantity}
                color={item.color}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CartList;
