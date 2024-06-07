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

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement: <Error />,

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
        path: "/account",
        element: <AccountLayout />,
        // loader: () => {},

        children: [
          {
            path: "",
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
      // {
      //   path: "/menu",
      //   element: <Menu />,
      //   loader: menuLoader,
      //   errorElement: <Error />,
      // },
      // { path: "/cart", element: <Cart /> },
      // {
      //   path: "/order/new",
      //   element: <CreateOrder />,
      //   action: createOrderAction,
      // },
      // {
      //   path: "/order/:orderId",
      //   element: <Order />,
      //   loader: orderLoader,
      //   errorElement: <Error />,
      //   action: updateOrderAction,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
