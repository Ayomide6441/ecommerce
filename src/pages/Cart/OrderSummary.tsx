import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

function OrderSummary() {
  return (
    <div className="border p-6 flex flex-col gap-6 w-full lg:basis-1/4">
      <Text variant="heading-5">Order Summary</Text>
      <div>
        <ul className="flex flex-col gap-2">
          <li className="flex justify-between items-center">
            <Text variant="body-1" className="text-B500">
              Subtotal
            </Text>
            <Text variant="body-2">$ 90000.00</Text>
          </li>
          <li className="flex justify-between items-center">
            <Text variant="body-1" className="text-B500">
              Shipping
            </Text>
            <Text variant="body-2">Free</Text>
          </li>
          <li className="flex justify-between items-center">
            <Text variant="body-1" className="text-B500">
              Tax
            </Text>
            <Text variant="body-2">$ 3.00</Text>
          </li>
        </ul>
        <ul className="mt-4 py-4 border-t ">
          <li className="flex justify-between items-center">
            <Text variant="body-1" className="text-B500">
              Subtotal
            </Text>
            <Text variant="body-2">$ 100.00</Text>
          </li>
        </ul>
      </div>
      <Button>Checkout</Button>
      <Button variant="link">Continue Shopping</Button>
    </div>
  );
}

export default OrderSummary;
