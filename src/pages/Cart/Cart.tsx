import CartList from "./CartList";
import OrderSummary from "./OrderSummary";
import EmptyCart from "./EmptyCart";
import HeaderBreadCrumb from "@/components/layout/header-breadcrumb";

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
        <div className="flex container flex-col lg:flex-row gap-10 lg:gap-40 pt-16 pb-10 justify-between items-center">
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
