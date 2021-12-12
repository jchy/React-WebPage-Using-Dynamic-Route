import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Components/navbar.module.css";

const fetchProducts = () => {
  return axios.get(
    "https://dynamic-route-server-products.herokuapp.com/products"
  );
};

const Products = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleFetchProduct = async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchProducts();
      setData(data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleFetchProduct();
  }, []);

  if (isLoading) {
    return <div>...loading</div>;
  }
  return (
    <div>
      <p className={styles.welcomeMsg}>
        Purchase our Genuine & Brand new Products
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          flexWrap: "wrap",
          margin: "auto",
          marginLeft: "15%",
          marginRight: "10%"
        }}
      >
        {data?.map((item) => {
          return (
            <>
              <div
                style={{
                  border: "1px solid aqua",
                  borderRadius: "10px",
                  padding: "20px"
                }}
              >
                <img
                  src={item.url}
                  alt=""
                  width="200px"
                  height="200px"
                  style={{ marginTop: "20px" }}
                />
                <div>
                  <p style={{ color: "white" }}>{item.name}</p>
                  <Link
                    to={`/products/${item.id}`}
                    className={styles.link}
                    style={{
                      padding: "10px",
                      fontSize: "16px",
                      border: "1px solid gray"
                    }}
                  >
                    Show Product Info
                  </Link>
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
