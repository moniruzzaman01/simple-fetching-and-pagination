import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import AllOrders from "../pages/AllOrders";
import RegularDelivery from "../pages/RegularDelivery";
import ExpressDelivery from "../pages/ExpressDelivery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/all-orders",
        element: <AllOrders />,
      },
      {
        path: "/regular-delivery",
        element: <RegularDelivery />,
      },
      {
        path: "/express-delivery",
        element: <ExpressDelivery />,
      },
    ],
  },
]);
export default router;
