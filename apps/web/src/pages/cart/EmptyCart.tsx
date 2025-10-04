import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

function EmptyCart() {
  return (
    <div className="container text-center flex justify-center items-center flex-col gap-4 h-auto pt-20">
      <img src="../Cart.svg" alt="" className="h-10" />
      <Text>
        Your cart is empty. Continue shopping and add items to the cart
      </Text>
      <Button className="w-fit">Start Shopping</Button>
    </div>
  );
}

export default EmptyCart;
