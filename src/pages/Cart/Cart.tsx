import CartList from "./CartList";
import OrderSummary from "./OrderSummary";
import EmptyCart from "./EmptyCart";
import HeaderBreadCrumb from "@/components/ui/HeaderBreadCrumb";

function Cart() {
  const cart = ["yoo"];
  return (
    <div>
      <HeaderBreadCrumb
        previous={{
          Home: "/",
        }}
        current="Cart"
        route="Cart"
      />
      {cart.length > 0 ? (
        <div className="flex container gap-40 pt-16 pb-44 justify-between items-center">
          <CartList />
          <OrderSummary />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default Cart;
