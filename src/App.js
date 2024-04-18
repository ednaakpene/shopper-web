import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../src/index.css";
import Landingpage from "./pages/landingpage/Landingpage";
import Cartpage from "./pages/cartpage/Cartpage";
import Checkout from "./pages/Checkout/checkout";
import Signup from "./pages/signup/signup";
import Signin from "./pages/signin/signin";
import Productdetail from "./pages/Product/Productdetail";

const router = createBrowserRouter([
  { path: "/", element: <Landingpage /> },
  { path: "/cartpage", element: <Cartpage /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  { path: "/productdetail", element: <Productdetail /> },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
