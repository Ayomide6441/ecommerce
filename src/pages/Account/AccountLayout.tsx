import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Text } from "@/components/ui/text";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function AccountLayout() {
  return (
    <div>
      <div className="bg-W100 py-10">
        <div className="container flex flex-col gap-4">
          <Text variant="heading-3">Account</Text>
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
                <BreadcrumbPage>Orders</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container flex divide-x gap-10 py-24 sticky">
        <div className="">
          <Tabs defaultValue="order">
            <TabsList className="grid bg-transparent h-fit gap-5">
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
                <Link
                  to="/account/wishlists"
                  className="flex gap-4 items-center"
                >
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
                <Link
                  to="/account/password"
                  className="flex gap-4 items-center"
                >
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
        </div>
        <div className="pl-10 basis-3/4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AccountLayout;
