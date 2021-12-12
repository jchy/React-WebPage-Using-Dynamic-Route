import { Route } from "react-router-dom";
import Products from "../Pages/Products";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import About from "../Pages/About";

const AllRoutes = () => {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/products">
        <Products />
      </Route>

      <Route exact path="/products/:id">
        <ProductDetails />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>
    </div>
  );
};

export default AllRoutes;
