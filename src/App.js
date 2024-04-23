import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../src/index.css";
import Landingpage from "./pages/landingpage/Landingpage";
import Cartpage from "./pages/cartpage/Cartpage";
import Checkout from "./pages/Checkout/checkout";
import Signup from "./pages/signup/signup";
import Signin from "./pages/signin/signin";
import Productdetail from "./pages/Product/Productdetail";
import Shop from "./pages/shoppingpage/Shop";
import Jewelry from "./pages/Jewelry/Jewelry";
import Electronics from "./pages/electronics/Electronics";
import Women from "./pages/womenswear/women";
import Men from "./pages/mens wear/Men";

const router = createBrowserRouter([
  { path: "/", element: <Landingpage /> },
  { path: "/cartpage", element: <Cartpage /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  { path: "/productdetail", element: <Productdetail /> },
  { path: "/shop", element: <Shop /> },
  {path: "/shop/jewelry", element: <Jewelry/>},
  {path: "/shop/electronics",element: <Electronics/>},
  {path: "/shop/womenswear", element: <Women/>},
  {path: "/shop/menswear", element: <Men/>}
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
