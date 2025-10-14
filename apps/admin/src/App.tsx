import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Toaster } from "./components/common/sonner";
import AppLayout from "./components/layout/app-layout";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Orders from "./pages/orders/Orders";
import Customers from "./pages/customers/Customers";
import Reviews from "./pages/reviews/Reviews";
import Settings from "./pages/settings/Settings";
import EditProducts from "./pages/products/EditProducts";

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
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:productId",
        element: <EditProducts />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      // {
      //   path: "/signup",
      //   element: <SignUp />,
      // },
      // {
      //   path: "/password-reset",
      //   element: <ResetPassword />,
      // },
      // {
      //   path: "/forgot-password",
      //   element: <ForgotPassword />,
      // },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <Toaster position="top-center" richColors /> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
