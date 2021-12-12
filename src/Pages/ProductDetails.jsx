import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../Components/navbar.module.css";

import ProductCard from "../Components/ProductCard";

const getProductById = (id) => {
  return axios.get(
    `https://dynamic-route-server-products.herokuapp.com/products/${id}`
  );
};
const ProductDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const handleProduct = async () => {
    try {
      setIsLoading(true);
      const { data } = await getProductById(id);
      console.log(data);
      setData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleProduct();
  }, [id]);

  if (isLoading) {
    return <div>...loading</div>;
  }
  return (
    <>
      <div
        style={{
          textAlign: "left",
          margin: "auto",
          width: "400px",
          fontWeight: "500"
        }}
      >
        <p style={{ fontSize: "24px" }} className={styles.productCard}>
          {data.name} Details :{" "}
        </p>
        <ProductCard
          id={id}
          name={`${data.name}`}
          price={`${data.price}`}
          url={`${data.url}`}
        />
      </div>
    </>
  );
};

export default ProductDetails;
