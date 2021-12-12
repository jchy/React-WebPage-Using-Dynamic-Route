import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Components/navbar.module.css";

const handlePostFetchProduct = (data) => {
  const config = {
    method: "post",
    url: "https://dynamic-route-server-products.herokuapp.com/products",
    data: data
  };
  return axios(config);
};

const Admin = () => {
  const [loading, setLoading] = useState(false);
  var [data, setData] = useState({});
  const [payload, setPayload] = useState({ name: "", price: 0, url: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    data = payload;
    handlePostFetchProduct(data);
  };

  const handleChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value
    });
  };

  if (loading) {
    return <div>...loading</div>;
  }
  return (
    <div>
      <form
        style={{
          border: "1px solid aqua",
          width: "70%",
          margin: "auto",
          marginTop: "50px",
          padding: "20px",
          borderRadius: "20px"
        }}
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "20px"
          }}
        >
          <div>
            <input
              placeholder="Enter product name"
              type="text"
              style={{
                border: "none",
                background: "black",
                borderBottom: "3px solid white",
                fontSize: "16px",
                width: "80%",
                padding: "20px",
                color: "white"
              }}
              name="name"
              value={payload.name}
              onChange={handleChange}
              // onChange={()=>setPayload}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter the product price"
              style={{
                border: "none",
                background: "black",
                borderBottom: "3px solid white",
                fontSize: "16px",
                width: "80%",
                padding: "20px",
                color: "white"
              }}
              name="price"
              value={payload.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter product img url"
              style={{
                border: "none",
                background: "black",
                borderBottom: "3px solid white",
                fontSize: "16px",
                width: "80%",
                padding: "20px",
                color: "white"
              }}
              name="url"
              value={payload.url}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="submit"
              value="SUBMIT"
              style={{
                width: "150px",
                padding: "10px",
                borderRadius: "20px",
                fontSize: "20px",
                cursor: "pointer"
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Admin;
