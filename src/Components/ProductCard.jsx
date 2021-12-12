import styles from "./navbar.module.css";

const ProductCards = ({ id, name, price, url }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        border: "1px solid aqua",
        width: "400px",
        margin: "auto",
        borderRadius: "10px"
      }}
    >
      <img
        src={url}
        alt=""
        width="200"
        height="200"
        style={{ marginTop: "20px" }}
      />
      <div style={{ textAlign: "left" }} className={styles.productCard}>
        <p>
          {name} Id : {id}
        </p>
        <p>Product Name : {name}</p>
        <p>
          This {name} will cost you : ₹{price} Only
        </p>
      </div>
    </div>
  );
};

export default ProductCards;
