import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
        element: <Orders />,
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
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
