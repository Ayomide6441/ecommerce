import OrderList from "@/features/order/OrderList";
import { Text } from "@ecommerce/ui/components/text";

function Orders() {
  return (
    <div className="flex flex-col gap-10">
      <Text variant="heading-5">Orders</Text>
      <OrderList />
    </div>
  );
}

export default Orders;
