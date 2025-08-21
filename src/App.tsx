import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import AccountLayout from "./pages/Account/AccountLayout";
import Detail from "./pages/Account/Detail";
import Orders from "./pages/Account/Orders";
import Password from "./pages/Account/Password";
import Wishlist from "./pages/Account/Wishlist";
import Address from "./pages/Account/Address";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import ResetPassword from "./pages/Auth/ResetPassword";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ProductsLayout from "./pages/Products/ProductsLayout";
import Product from "./pages/Products/Product";
import { TooltipProvider } from "@radix-ui/react-tooltip";

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
      </TooltipProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
