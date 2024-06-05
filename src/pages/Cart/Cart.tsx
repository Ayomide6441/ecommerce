import CartList from "./CartList";
import OrderSummary from "./OrderSummary";
import { Text } from "@/components/ui/text";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function Cart() {
  return (
    <div>
      <div className="bg-W100 py-10">
        <div className="container flex flex-col gap-4">
          <Text variant="heading-3">Cart</Text>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Text variant="body-1" asChild>
                    <Link to="/">Home</Link>
                  </Text>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Cart</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="flex container gap-40 pt-16 pb-44 justify-between items-center">
        <CartList />
        <OrderSummary />
      </div>
    </div>
  );
}

export default Cart;
