import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/HomePage";
import { SelectedProduct } from "./components/Products/SelectedProduct";
import { Products } from "./components/Products/Products";
import { Page1, Page2, Page3 } from "./components/Products/Pages";
import { Cart } from "./components/Products/Cart";
import { About } from "./components/About/About";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { Checkout } from "./components/Products/Checkout";
import { Loader } from "./components/Loader";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar></Navbar>} loader={<Loader></Loader>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="products/*" element={<Products></Products>}>
          <Route path={"page-1"} element={<Page1></Page1>}></Route>
          <Route path={"page-2"} element={<Page2></Page2>}></Route>
          <Route path={"page-3"} element={<Page3></Page3>}></Route>
        </Route>
        <Route
          path="products/:productId"
          element={<SelectedProduct></SelectedProduct>}
        ></Route>
        <Route path="cart" element={<Cart></Cart>}></Route>
        <Route path="cart/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="contact" element={<ContactUs></ContactUs>}></Route>
      </Route>
    </Routes>
  );
}
