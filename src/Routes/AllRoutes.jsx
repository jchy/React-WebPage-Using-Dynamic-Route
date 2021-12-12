import { Route } from "react-router-dom";
import Products from "../Pages/Products";

const AllRoutes = () => {
  return (
    <div>
      <Route exact path="/">
        <Products />
      </Route>
    </div>
  );
};

export default AllRoutes;
