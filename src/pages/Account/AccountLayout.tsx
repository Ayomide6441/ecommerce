import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeaderBreadCrumb from "@/components/ui/HeaderBreadCrumb";

function AccountLayout() {
  return (
    <div>
      <HeaderBreadCrumb
        previous={{
          Home: "/",
        }}
        current="Order"
        route="Account"
      />

      <div className="container divide-x gap-10 py-24 relative flex">
        <Tabs defaultValue="order">
          <TabsList
            variant="vertical"
            className="bg-transparent h-fit gap-5 sticky top-20"
          >
            <TabsTrigger
              value="order"
              asChild
              className="data-[state=active]:bg-W100 w-full justify-start"
            >
              <Link to="/account/orders" className="flex gap-4 items-center ">
                <img src="../Cart.svg" alt="" />
                Orders
              </Link>
            </TabsTrigger>
            <TabsTrigger
              value="wishlist"
              asChild
              className="justify-start data-[state=active]:bg-W100 w-full "
            >
              <Link to="/account/wishlists" className="flex gap-4 items-center">
                <img src="../Heart.svg" alt="" />
                Wishlist
              </Link>
            </TabsTrigger>
            <TabsTrigger
              value="address"
              asChild
              className="justify-start data-[state=active]:bg-W100 w-full "
            >
              <Link to="/account/address" className="flex gap-4 items-center">
                <img src="../Delivery.svg" alt="" />
                Address
              </Link>
            </TabsTrigger>
            <TabsTrigger
              value="password"
              asChild
              className="justify-start data-[state=active]:bg-W100 w-full "
            >
              <Link to="/account/password" className="flex gap-4 items-center">
                <img src="../Key.svg" alt="" />
                Password
              </Link>
            </TabsTrigger>
            <TabsTrigger
              value="detail"
              asChild
              className="justify-start data-[state=active]:bg-W100 w-full "
            >
              <Link to="/account/details" className="flex gap-4 items-center">
                <img src="../User.svg" alt="" />
                Account Detail
              </Link>
            </TabsTrigger>
            <TabsTrigger
              value="logout"
              className="flex gap-4 items-center justify-start data-[state=active]:bg-W100 w-full "
            >
              <img src="../Logout.svg" alt="" />
              Logout
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="pl-10 basis-4/5 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AccountLayout;
