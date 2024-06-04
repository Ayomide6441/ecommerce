import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
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

{
  /* <Text variant="heading-1">This is just a test</Text>
      <Text variant="heading-2">This is just a test</Text>
      <Text variant="heading-3">This is just a test</Text>
      <Text variant="heading-4">This is just a test</Text>
      <Text variant="heading-5">This is just a test</Text>
      <Text variant="heading-6" asChild>
        <a href="">Ay is a good boy</a>
      </Text>
      <Text variant="body-1">I love Jesus</Text>
      <Text variant="body-2">I love Jesus</Text>
      <Text variant="label-1">I love Jesus</Text>
      <Text variant="label-2">I love Jesus</Text> */
}
