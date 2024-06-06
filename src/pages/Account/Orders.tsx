import OrderList from "@/Features/Order/OrderList";
import { Text } from "@/components/ui/text";

function Orders() {
  return (
    <div className="flex flex-col gap-10">
      <Text variant="heading-5">Orders</Text>
      <OrderList />
    </div>
  );
}

export default Orders;
