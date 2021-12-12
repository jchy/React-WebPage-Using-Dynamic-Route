import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/product">Products</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navbar;
