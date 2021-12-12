import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const fetchProducts = () => {
  return axios.get(
    "https://dynamic-route-server-products.herokuapp.com/products"
  );
};

const Products = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleProductsFetch = async () => {
    try {
      setIsLoading(true);

      const { data } = await fetchProducts();
      console.log(data);
      data.map((item) => {
        console.log(item.name);
      });
      setData(data);
    } catch (err) {
      console.log("Error is : ", err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleProductsFetch();
  }, []);

  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <div>
      <h3>Products</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "2" }}>
        {data?.map((item) => {
          return (
            <>
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  margin: 2,
                  padding: 5
                }}
              >
                <div>
                  <img src={item.url} alt="img" height="100px" />
                </div>
                <div>
                  <p>{item.name}</p>
                  <p>Price : ₹{item.price}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
