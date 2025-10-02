import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout/app-layout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import AccountLayout from "./pages/account/AccountLayout";
import Detail from "./pages/account/Detail";
import Orders from "./pages/account/Orders";
import Password from "./pages/account/Password";
import Wishlist from "./pages/account/Wishlist";
import Address from "./pages/account/Address";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ResetPassword from "./pages/auth/ResetPassword";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ProductsLayout from "./pages/products/ProductsLayout";
import Product from "./pages/products/Product";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Toaster } from "./components/common/sonner";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products",
        element: <ProductsLayout />,
      },
      {
        path: "/products/:productId",
        element: <Product />,
        loader: async ({ params: { productId } }) => {
          await queryClient.prefetchQuery({
            queryKey: ["product", productId],
            queryFn: async () => {
              const res = await fetch(
                `http://localhost:8000/products/${productId}`
              );
              if (!res.ok) throw new Error("Network error");
              return res.json();
            },
          });
          return null;
        },
      },
      {
        path: "/account",
        element: <AccountLayout />,
        children: [
          {
            index: true,
            element: <Orders />,
          },

          {
            index: true,
            path: "details",
            element: <Detail />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "address",
            element: <Address />,
          },
          {
            path: "password",
            element: <Password />,
          },
          {
            path: "wishlists",
            element: <Wishlist />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/password-reset",
        element: <ResetPassword />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <RouterProvider router={router} />
        <Toaster position="top-center" richColors />
      </TooltipProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
